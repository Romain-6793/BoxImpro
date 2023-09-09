import { createSlice } from '@reduxjs/toolkit'
import { exercices } from '../data/exercices'
import { specialists } from '../data/specialists'
import { exerciceDropdownData } from '../data/exerciceDropdownData'
import { specialistDropdownData } from '../data/specialistDropdownData'

const initialState = {
    exercicesData : exercices,
    specialistsData : specialists,
    exercicesOptionsData : exerciceDropdownData,
    specialistsOptionsData : specialistDropdownData,
    filteredExerciceData : exercices,
    filteredSpecialistsData : specialists,
    filteredExercicesOptionsData : exerciceDropdownData,
    filteredSpecialistsOptionsData : specialistDropdownData,
    }


console.log(initialState)


const dataSlice = createSlice({
    name: "userData",
    initialState,
    reducers: {
        
    }})

// export const { ... } = dataSlice.actions;

export default dataSlice.reducer