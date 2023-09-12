import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { State } from '../data/types'
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


console.log(initialState)


const dataSlice = createSlice({
    name: "userData",
    initialState,
    reducers: {
        pushExerciceTag(state, action: PayloadAction<string>) {
            if (action.payload) {
                return {
                    ...state,
                    exercicesTagsData: [...state.exercicesTagsData, action.payload],
                    }
                }
            else {
                return {
                    ...state
                }
            }
        },
        // removeExerciceTag(state, action: PayloadAction<string>) {
        //     const initialArray = [...state.exercicesTagsData];
        //     const tagToDelete = action.payload

        //     const cloneTagsArray = initialArray.filter(el => el.id !== tagToDelete.id)

        //     return {
        //         ...state,
        //         exercicesTagsData: cloneTagsArray,
        //     }
        // },
        
    }})

export const { pushExerciceTag } = dataSlice.actions;

export default dataSlice.reducer