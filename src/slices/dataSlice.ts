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
  filteredExercicesData: exercices,
  filteredSpecialistsData: specialists,
  exercicesTagsData: [],
  specialistsTagsData: [],
  selectedItem: {
    value: "",
    id: "",
  }
}


const dataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setSelectedItem: (state, action: PayloadAction<string>) => {
      if (action.payload) {
        return {
          ...state,
          selectedItem: {
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
        selectedItem: {
          ...initialState.selectedItem
        }
      };
    },
    pushExerciceTag: (state, action: PayloadAction<TagType>) => {
      if (action.payload) {
        return {
          ...state,
          exercicesTagsData: [...state.exercicesTagsData, action.payload],
        };
      }
      return state;
    },
    pushSpecialistTag: (state, action: PayloadAction<TagType>) => {
      if (action.payload) {
        return {
          ...state,
          specialistsTagsData: [...state.specialistsTagsData, action.payload],
        };
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

      const cloneExercicesArray: Exercice[] = filterBySearch(action.payload, initialArray)

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

      const cloneSpecialistsArray: Specialist[] = filterBySearch(action.payload, initialArray)

      return action.payload ? {
        ...state,
        filteredSpecialistsData: cloneSpecialistsArray,
      } : {
        ...state,
        filteredSpecialistsData: initialArray,
      }
    },
  }
})

export const { setSelectedItem, resetSelectedItem, pushExerciceTag, pushSpecialistTag, removeExerciceTag,
  removeSpecialistTag, filterExercices, filterSpecialists, filteredExercicesSearch,
  filteredSpecialistsSearch } = dataSlice.actions;

export default dataSlice.reducer