import store from "../utils/store";

export type RootState = ReturnType<typeof store.getState>;

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

export type Options = {
    label: string;
    value: string;
}

export type DropdownItem = {
    id: number;
    title: string;
    options: Options[];
}

export type State = {
  exercicesData : Exercice[],
  specialistsData : Specialist[],
  exercicesOptionsData : DropdownItem[],
  specialistsOptionsData : DropdownItem[],
  filteredExercicesData : Exercice[],
  filteredSpecialistsData : Specialist[],
  filteredExercicesOptionsData : DropdownItem[],
  filteredSpecialistsOptionsData : DropdownItem[],
  exercicesTagsData : [] | string[],
  specialistsTagsData : [] | string[],
}

// Props

export type PageProps = {
    subtitle: string;
  };

export type DropdownProps = {
    data: DropdownItem[];
  }

export type TagProps = {
    data: string[];
  }

export type CardsProps = {
    data: Exercice[] | Specialist[];
  }

export type ObjectItemProps = {
    [key: string]: Exercice | Specialist;
  };

export type MainProps = {
    data: Exercice[] | Specialist[];
  }