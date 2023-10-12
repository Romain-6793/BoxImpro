import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Exercice, Specialist, State, TagType } from '../data/types'
import { exercices } from '../data/exercices'
import { specialists } from '../data/specialists'
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
    setSelectedItem: (state, action: any) => {
      if (action.payload) {
        return {
          ...state,
          selectedItem: {
            id: Math.floor(
              Math.random() * Math.floor(Math.random() * Date.now())
            ).toString(),
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
      const tagsArray: string[] = state.exercicesTagsData.map((item) => item.value);

      const cloneExercicesData = state.exercicesData.filter((ex: Exercice) => {

        const exTags = ex.tags;

        if (exTags) {
          return tagsArray.every((tag: string) => exTags.includes(tag))
        } else {
          return
        }
      });
      return {
        ...state,
        filteredExercicesData: cloneExercicesData
      }
    },
    filterSpecialists(state) {
      const tagsArray: string[] = state.specialistsTagsData.map((item) => item.value);

      const cloneSpecialistsData = state.specialistsData.filter((spe: Specialist) => {

        const speTags = spe.tags;

        if (speTags) {
          return tagsArray.every((tag: string) => speTags.includes(tag))
        } else {
          return
        }
      });

      return {
        ...state,
        filteredSpecialistsData: cloneSpecialistsData
      }
    },
    filteredExercicesSearch(state, action) {

      const tagsArray: string[] = state.exercicesTagsData.map((item) => item.value);

      const initialArray = state.exercicesData.filter((ex: Exercice) => {

        const exTags = ex.tags;

        if (exTags) {
          return tagsArray.every((tag: string) => exTags.includes(tag))
        } else {
          return
        }
      });
      console.log(initialArray)

      const cloneExercicesArray = initialArray.filter((obj) => {
        return obj.title.toLowerCase().includes(action.payload.toLowerCase())
          || obj.type.includes(action.payload)
          || obj.interest.toLowerCase().includes(action.payload.toLowerCase())
          || obj.description.includes(action.payload)
          || obj.advices.toLowerCase().includes(action.payload.toLowerCase())
          || obj.variants.toLowerCase().includes(action.payload.toLowerCase())
      })

      if (action.payload) {
        return {
          ...state,
          filteredExercicesData: cloneExercicesArray,
        }
      } else {
        return {
          ...state,
          filteredExercicesData: initialArray,
        }
      }
    },
    filteredSpecialistsSearch(state, action) {

      const initialArray = [...state.filteredSpecialistsData]

      const cloneSpecialistsArray = initialArray.filter((obj) => {
        return obj.title.toLowerCase().includes(action.payload.toLowerCase())
          || obj.specialistType.includes(action.payload)
          || obj.improType.toLowerCase().includes(action.payload.toLowerCase())
          || obj.numberOfPlayers.includes(action.payload)
          || obj.duration.toLowerCase().includes(action.payload.toLowerCase())
          || obj.description.toLowerCase().includes(action.payload.toLowerCase())
      })

      if (action.payload) {
        return {
          ...state,
          filteredSpecialistsData: cloneSpecialistsArray,
        }
      } else {
        return {
          ...initialState
        }
      }
    },
  }
})

export const { setSelectedItem, resetSelectedItem, pushExerciceTag, pushSpecialistTag, removeExerciceTag,
  removeSpecialistTag, filterExercices, filterSpecialists, filteredExercicesSearch,
  filteredSpecialistsSearch } = dataSlice.actions;

export default dataSlice.reducer