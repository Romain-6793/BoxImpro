
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
        ]
    },
    {
        id: 134010765057,
        title: "Type d'improvisation",
        options: [
            { value: "Improvisation mixte", label: "Improvisation mixte" },
            { value: "Improvisation comparée", label: "Improvisation comparée" },
        ]
    },
    {
        id: 249548183606,
        title: "Nombre de joueurs",
        options: [
            { value: "En solo", label: "En solo" },
            { value: "Petit nombre", label: "Petit nombre" },
            { value: "Grand nombre", label: "Grand nombre" },
        ]
    },
    {
        id: 930144049627,
        title: "Durée",
        options: [
            { value: "Très court", label: "Très court" },
            { value: "Court", label: "Court" },
            { value: "Long", label: "Long" },
        ]
    },
    {
        id: 28530636072,
        title: "Ordre alphabétique",
        options: [
            { value: "Popularité", label: "Popularité" },
            { value: "Ordre alphabétique", label: "Ordre alphabétique" },
        ]
    },
]