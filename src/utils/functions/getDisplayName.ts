export const getDisplayName = (key: string): string => {
    const obj: { [key: string]: string } = {
        title: "Titre",
        type: "Type",
        interest: "Intérêt",
        description: "Description",
        advices: "Conseils",
        variants: "Variantes",
        specialistType: "Type de catégorie",
        improType: "Type d'impro",
        numberOfPlayers: "Nombre de joueurs conseillé",
        duration: "Durée conseillée",
    };

    return obj[key];
};