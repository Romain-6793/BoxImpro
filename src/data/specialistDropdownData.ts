
import { DropdownItem } from "./types"

export const specialistDropdownData: DropdownItem[] = [
    {
        id: 255297222611,
        title: "Type de catégorie",
        options: [
            { value: "Contrainte de style", label: "Contrainte de style" },
            { value: "Contrainte d'expression orale", label: "Contrainte d'expression orale" },
            { value: "Contraintes diverses", label: "Contraintes diverses" },
            { value: "Contrainte de structure", label: "Contrainte de structure" },
            { value: "Toutes contraintes", label: "Tous type de contraintes" },
        ]
    },
    {
        id: 134010765057,
        title: "Type d'improvisation",
        options: [
            { value: "Improvisation mixte", label: "Improvisation mixte" },
            { value: "Improvisation comparée", label: "Improvisation comparée" },
            { value: "Tous types", label: "Tous type d'improvisation" },
        ]
    },
    {
        id: 249548183606,
        title: "Nombre de joueurs",
        options: [
            { value: "En solo", label: "En solo" },
            { value: "Petit nombre", label: "Petit nombre" },
            { value: "Grand nombre", label: "Grand nombre" },
            { value: "Tous nombres de joueurs", label: "Tous nombres de joueurs" },
        ]
    },
    {
        id: 930144049627,
        title: "Durée",
        options: [
            { value: "Très court", label: "Très court" },
            { value: "Court", label: "Court" },
            { value: "Long", label: "Long" },
            { value: "Toutes durées", label: "Toutes durées" },
        ]
    },
    // {
    //     id: 28530636072,
    //     title: "Popularité",
    //     options: [
    //         { value: "Populaires", label: "Les plus populaires" },
    //         { value: "Tous", label: "Toutes catégories" },
    //     ]
    // },

]