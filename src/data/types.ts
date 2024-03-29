import store from "../utils/store";

// Here is the file where I define every type I use for Typescript.

export type RootState = ReturnType<typeof store.getState>;

export type Exercice = {
  tags?: string[];
  id: number;
  title: string;
  type: string;
  interest: string;
  description: string;
  advices: string;
  variants: string;
  likes: number;
}

export type Specialist = {
  tags?: string[];
  id: number;
  title: string;
  specialistType: string;
  improType: string;
  numberOfPlayers: string;
  duration: string;
  description: string;
  likes: number;
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

export type TagType = {
  value: string,
  id: string,
}

export type State = {
  exercicesData: Exercice[],
  specialistsData: Specialist[],
  exercicesOptionsData: DropdownItem[],
  specialistsOptionsData: DropdownItem[],
  filteredExercicesData: Exercice[],
  filteredSpecialistsData: Specialist[],
  exercicesTagsData: [] | TagType[],
  specialistsTagsData: [] | TagType[],
  selectedOption: TagType,
  selectedSortingOption: TagType,
}

export type Slide = {
  name: string,
  title: string,
  subtitle?: string,
  text: string,
  links: Link[],
}

export type Link = {
  label: string,
  direction: string
}

// Props

export type SliderProps = {
  slides: Slide[];
};

export type SliderComponentProps = {
  currentSlide: Slide;
};

export type PageProps = {
  pageTitle: string;
};

export type DropdownProps = {
  data: DropdownItem[];
}

export type TagProps = {
  data: TagType[];
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