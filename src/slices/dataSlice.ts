import { createSlice, current, PayloadAction } from '@reduxjs/toolkit'
import { State, TagType } from '../data/types'
import { exercices } from '../data/exercices'
import { specialists } from '../data/specialists'
import { exerciceDropdownData } from '../data/exerciceDropdownData'
import { specialistDropdownData } from '../data/specialistDropdownData'

const initialState : State = {
    exercicesData : exercices,
    specialistsData : specialists,
    exercicesOptionsData : exerciceDropdownData,
    specialistsOptionsData : specialistDropdownData,
    filteredExercicesData : exercices,
    filteredSpecialistsData : specialists,
    filteredExercicesOptionsData : exerciceDropdownData,
    filteredSpecialistsOptionsData : specialistDropdownData,
    exercicesTagsData : [],
    specialistsTagsData : [],
    }


const dataSlice = createSlice({
    name: "userData",
    initialState,
    reducers: {
        pushExerciceTag: (state, action: PayloadAction<TagType>) => {
            if (action.payload) {
              // I use some() to check if there is an element with the same id
              if (!state.exercicesTagsData.some(item => item.id === action.payload.id)) {
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
              // I use some() to check if there is an element with the same id
              if (!state.specialistsTagsData.some(item => item.id === action.payload.id)) {
                return {
                  ...state,
                  specialistsTagsData: [...state.specialistsTagsData, action.payload],
                };
              }
            }
            return state;
        },
        removeExerciceTag(state, action: PayloadAction<TagType>) {
            const initialArray = [...state.exercicesTagsData];
            const tagToDelete = action.payload
            console.log(tagToDelete)

            const cloneTagsArray = initialArray.filter(el => el.id !== tagToDelete.id)

            return {
                ...state,
                exercicesTagsData: cloneTagsArray,
            }
        },
        removeSpecialistTag(state, action: PayloadAction<TagType>) {
            const initialArray = [...state.specialistsTagsData];
            const tagToDelete = action.payload
            console.log(tagToDelete)

            const cloneTagsArray = initialArray.filter(el => el.id !== tagToDelete.id)

            return {
                ...state,
                specialistsTagsData: cloneTagsArray,
            }
        },
        filterExercices(state) {
          const initialArray = JSON.parse(JSON.stringify([...state.exercicesData]));
          // const initialArray = exercices
          console.log(initialArray)
          console.log(exercices)
          const tagsArray = JSON.parse(JSON.stringify([...state.exercicesTagsData]))
          console.log(tagsArray)

          const cloneExercicesData = initialArray.filter((ex) => {
            return tagsArray.some((tag) => ex.toString().toLowerCase().includes(tag.value.toLowerCase()));
          });

          console.log(cloneExercicesData)
          return {
              ...state,
              exercicesData: cloneExercicesData
          }
      },
    }})

export const { pushExerciceTag, pushSpecialistTag, removeExerciceTag, removeSpecialistTag, filterExercices } = dataSlice.actions;

export default dataSlice.reducer