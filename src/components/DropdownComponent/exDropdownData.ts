
import { DropdownItem } from "../../data/types"

export const exDropdownData: DropdownItem[] = [
    {
        id: 573095916737,
        title: "Type d'exercice",
        options: [
            { value: "listening", label: "Écoute collective" },
            { value: "trust", label: "Confiance" },
            { value: "verbalIma", label: "Imaginaire verbal" },
            { value: "bodyIma", label: "Imaginaire corporel" },
            { value: "eyeWork", label: "Travail du regard" },
            { value: "spaceMana", label: "Gestion de l'espace" },
            { value: "timeCon", label: "Conscience du temps" },
            { value: "all", label: "Tous type d'exercice" },
        ]
    },
    {
        id: 79076726875,
        title: "Popularité",
        options: [
            { value: "popular", label: "Les plus populaires" },
            { value: "all", label: "Tous les exercices" },
        ]
    },
]