
import { DropdownItem } from "../../data/types"

export const speDropdownData: DropdownItem[] = [
    {
        id: 255297222611,
        title: "Type de catégorie",
        options: [
            { value: "style", label: "Contrainte de style" },
            { value: "oral", label: "Contrainte d'expression orale" },
            { value: "various", label: "Contraintes diverses" },
            { value: "structure", label: "Contrainte de structure" },
            { value: "all", label: "Tous type de contraintes" },
        ]
    },
    {
        id: 134010765057,
        title: "Type d'improvisation",
        options: [
            { value: "mixed", label: "Improvisation mixte" },
            { value: "compared", label: "Improvisation comparée" },
            { value: "all", label: "Tous type d'improvisation" },
        ]
    },
    {
        id: 249548183606,
        title: "Nombre de joueurs",
        options: [
            { value: "solo", label: "En solo" },
            { value: "little", label: "Petit nombre" },
            { value: "big", label: "Grand nombre" },
            { value: "all", label: "Tous nombres de joueurs" },
        ]
    },
    {
        id: 930144049627,
        title: "Durée",
        options: [
            { value: "veryShort", label: "Très court" },
            { value: "short", label: "Court" },
            { value: "long", label: "Long" },
            { value: "all", label: "Toutes durées" },
        ]
    },
    {
        id: 28530636072,
        title: "Popularité",
        options: [
            { value: "popular", label: "Les plus populaires" },
            { value: "all", label: "Toutes les catégories" },
        ]
    },

]