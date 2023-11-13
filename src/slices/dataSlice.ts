import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Exercice, Specialist, State, TagType } from '../data/types'
import { exercices } from '../data/exercices'
import { specialists } from '../data/specialists'
import { filterBySearch } from '../utils/functions/filterBySearch'
import { generateID } from '../utils/functions/generateID'
import { exerciceDropdownData } from '../data/exerciceDropdownData'
import { specialistDropdownData } from '../data/specialistDropdownData'

const initialState: State = {
  exercicesData: exercices,
  specialistsData: specialists,
  exercicesOptionsData: exerciceDropdownData,
  specialistsOptionsData: specialistDropdownData,
  filteredExercicesData: exercices.sort((a, b) => a.title.localeCompare(b.title)
  ),
  filteredSpecialistsData: specialists.sort((a, b) => (a.title > b.title) ?
    1
    :
    (a.title < b.title) ?
      -1
      :
      0
  ),
  exercicesTagsData: [],
  specialistsTagsData: [],
  selectedOption: {
    value: "",
    id: "",
  },
  selectedSortingOption: {
    value: "",
    id: "",
  },
}

const dataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    // storeUsersList(state, action) {

    //   const usersArray = [...state.usersArray];
    //   localStorage.setItem("usersArray", JSON.stringify(usersArray))
    // },
    // loadData(state, action) {
    //   const data = localStorage.getItem("usersArray")
    //   if (data) {
    //     return {
    //       ...state,
    //       usersArray: JSON.parse(data),
    //       filteredArray: JSON.parse(data).sort((a, b) => (a.firstName > b.firstName) ?
    //         1
    //         :
    //         (a.firstName < b.firstName) ?
    //           -1
    //           :
    //           0
    //       )
    //     };
    //   } else return { ...state };
    // },
    setSelectedOption: (state, action: PayloadAction<string>) => {
      if (action.payload) {
        return {
          ...state,
          selectedOption: {
            id: generateID(),
            value: action.payload
          },
        };
      }
      return state;
    },
    setSelectedSortingOption: (state, action: PayloadAction<string>) => {
      if (action.payload) {
        return {
          ...state,
          selectedSortingOption
            : {
            id: generateID(),
            value: action.payload
          },
        };
      }
      return state;
    },
    resetSelectedItem: (state) => {
      return {
        ...state,
        selectedOption: {
          ...initialState.selectedOption
        }
      };
    },
    pushExerciceTag: (state, action: PayloadAction<TagType>) => {
      if (action.payload) {
        if (!state.exercicesTagsData.some(tag => tag.value === action.payload.value)) {
          return {
            ...state,
            exercicesTagsData: [...state.exercicesTagsData, action.payload],
          };
        }
      }
      return state;
    },
    pushSpecialistTag: (state, action: PayloadAction<TagType>) => {
      if (action.payload) {
        if (!state.specialistsTagsData.some(tag => tag.value === action.payload.value)) {
          return {
            ...state,
            specialistsTagsData: [...state.specialistsTagsData, action.payload],
          };
        }
      }
      return state;
    },
    removeExerciceTag(state, action: PayloadAction<TagType>) {
      return {
        ...state,
        exercicesTagsData: state.exercicesTagsData.filter(el => el.id !== action.payload.id),
      }
    },
    removeSpecialistTag(state, action: PayloadAction<TagType>) {
      return {
        ...state,
        specialistsTagsData: state.specialistsTagsData.filter(el => el.id !== action.payload.id),
      }
    },
    filterExercices(state) {
      const tagValuesArray: string[] = state.exercicesTagsData.map((item) => item.value);

      const cloneExercicesData = state.exercicesData.filter((ex: Exercice) => {

        const exTags = ex.tags;

        if (exTags) {
          return tagValuesArray.every((tag: string) => exTags.includes(tag))
        }

        return
      });
      return {
        ...state,
        filteredExercicesData: cloneExercicesData
      }
    },
    filterSpecialists(state) {
      const tagValuesArray: string[] = state.specialistsTagsData.map((item) => item.value);

      const cloneSpecialistsData = state.specialistsData.filter((spe: Specialist) => {

        const speTags = spe.tags;

        if (speTags) {
          return tagValuesArray.every((tag: string) => speTags.includes(tag))
        }

        return

      });

      return {
        ...state,
        filteredSpecialistsData: cloneSpecialistsData
      }
    },
    filteredExercicesSearch(state, action: { payload: string }) {

      const tagValuesArray: string[] = state.exercicesTagsData.map((item) => item.value);

      const initialArray: Exercice[] = state.exercicesData.filter((ex: Exercice) => {

        const exTags = ex.tags;

        if (exTags) {
          return tagValuesArray.every((tag: string) => exTags.includes(tag))
        }

        return initialArray

      });

      const cloneExercicesArray: Exercice[] = (filterBySearch(action.payload, initialArray) as Exercice[])

      return action.payload ? {
        ...state,
        filteredExercicesData: cloneExercicesArray,
      } : {
        ...state,
        filteredExercicesData: initialArray,
      }

    },
    filteredSpecialistsSearch(state, action: { payload: string }) {

      const tagValuesArray: string[] = state.specialistsTagsData.map((item) => item.value);

      const initialArray: Specialist[] = state.specialistsData.filter((spe: Specialist) => {

        const speTags = spe.tags;

        if (speTags) {
          return tagValuesArray.every((tag: string) => speTags.includes(tag))
        }

        return initialArray

      });

      const cloneSpecialistsArray = (filterBySearch(action.payload, initialArray) as Specialist[])

      return action.payload ? {
        ...state,
        filteredSpecialistsData: cloneSpecialistsArray,
      } : {
        ...state,
        filteredSpecialistsData: initialArray,
      }
    },
    increaseExercicesLikes: (state, action) => {
      // We search for the id that matches the action.payload
      const index = state.filteredExercicesData.findIndex(item => item.id === action.payload);

      if (index !== -1) {
        // If the index is found, we use immer (at item) to update the state imuatbly---
        state.filteredExercicesData = state.filteredExercicesData.map(
          (item, i) => i === index ? { ...item, likes: item.likes + 1 } : item);
      }
    },
    increaseSpecialistsLikes: (state, action) => {
      // We search for the id that matches the action.payload
      const index = state.filteredSpecialistsData.findIndex(item => item.id === action.payload);

      if (index !== -1) {
        // If the index is found, we use immer (at item) to update the state imuatbly---
        state.filteredSpecialistsData = state.filteredSpecialistsData.map(
          (item, i) => i === index ? { ...item, likes: item.likes + 1 } : item);
      }
    },
    sortExercicesAZ: (state) => {
      return {
        ...state,
        filteredExercicesData: [...state.filteredExercicesData].sort((a, b) =>
          a.title.localeCompare(b.title)
        ),
      };
    },
    sortSpecialistsAZ: (state) => {
      return {
        ...state,
        filteredSpecialistsData: [...state.filteredSpecialistsData].sort((a, b) =>
          a.title.localeCompare(b.title)
        ),
      };
    },
    sortExercicesPopularity: (state) => {
      return {
        ...state,
        filteredExercicesData: [...state.filteredExercicesData].sort((a, b) => (a.likes < b.likes) ?
          1
          :
          (a.likes > b.likes) ?
            -1
            :
            0
        ),
      }
    },
    sortSpecialistsPopularity: (state) => {
      return {
        ...state,
        filteredSpecialistsData: [...state.filteredSpecialistsData].sort((a, b) => (a.likes < b.likes) ?
          1
          :
          (a.likes > b.likes) ?
            -1
            :
            0
        ),
      }
    },
  },
},
)

export const { setSelectedOption, setSelectedSortingOption, resetSelectedItem, pushExerciceTag, pushSpecialistTag,
  removeExerciceTag, removeSpecialistTag, filterExercices, filterSpecialists, filteredExercicesSearch,
  filteredSpecialistsSearch, increaseExercicesLikes, increaseSpecialistsLikes, sortExercicesAZ,
  sortSpecialistsAZ, sortExercicesPopularity, sortSpecialistsPopularity } = dataSlice.actions;

export default dataSlice.reducer