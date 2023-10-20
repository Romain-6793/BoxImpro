import { Exercice, Specialist } from "../../data/types";

// My filter algorithm for the searchbar.

export const filterBySearch = (input: string, data: Exercice[] | Specialist[]) => {
    const lowercaseInput = input.toLowerCase();

    const eachObject = data.map((obj) => obj)

    return eachObject.filter((item: Exercice | Specialist) => {
        const values: string[] = Object.values(item).map((value) => value.toString().toLowerCase());
        return values.some((value: string) => value.includes(lowercaseInput));
    });
}