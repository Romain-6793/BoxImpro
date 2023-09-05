export type Exercice = {
    id: number;
    title: string;
    type: string;
    interest: string;
    description: string;
    advices: string;
    variants: string;
}

export type Specialist = {
    id: number;
    title: string;
    specialistType: string;
    improType: string;
    numberOfPlayers: string;
    duration: string;
    description: string;
}

type OptionsArray = {
    label: string;
    value: string;
}

export type DropdownItem = {
    id: number;
    title: string;
    options: OptionsArray[];
}