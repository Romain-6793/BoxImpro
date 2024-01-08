import { fireEvent, render } from "@testing-library/react";
import { useDispatch } from "react-redux";
import Cards from "../components/datapage/PageContent/MainContent/Cards/Cards";

//We simulate react-redux (we use the spread operator to import it all) and we replace useDispatch by
// jest.fn() to simulate a function
// requireActual is to import real implementations of the react-redux module.

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));

describe("handleLikesClick", () => {
  let mockDispatch: jest.Mock;

  beforeEach(() => {
    mockDispatch = jest.fn();
    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);
  });

  it('dispatches increaseExercicesLikes if currentURL includes "exercices"', () => {
    const data = [
      {
        id: 6083279184,
        tags: ["Écoute collective"],
        title: "Compter jusqu'à 20 en groupe",
        type: "Écoute collective",
        interest:
          "Recentrer le groupe, développer l'écoute et la cohésion de groupe.",
        description:
          "Le groupe marche dans l'espace et doit compter de 0 à 20 sans que plusieurs personnes ne disent le même chiffre en même temps, ou que quelqu'un se trompe, sinon on repart à 0.",
        advices:
          "Parler fort et distinctement, marcher en occupant tout l'espace. Les participants ne doivent pas marcher en rond. Leur demander de ne pas se précipiter, de se regarder, s'écouter, de laisser de la place à tout le monde.",
        variants:
          "Rester statique en position «relaxation». Marcher plus vite. Compter dans un ordre décroissant à partir de 20 ou du nombre de participants (dans ce cas là on peut instaurer la règle «chacun ne parle qu'une fois»). Ou dire son prénom jusqu'à ce que chacun ait dit le sien.",
        likes: 247,
      },
    ];

    Object.defineProperty(window, "location", {
      value: {
        href: "https://example.com/exercices",
      },
      writable: true,
    });

    const { getByTestId } = render(<Cards data={data} />);

    const buttonElement = getByTestId(
      "like-button-6083279184"
    ) as HTMLButtonElement | null;
    expect(buttonElement).toBeTruthy(); // Check if the button element is truthy (not null)

    if (buttonElement) {
      fireEvent.click(buttonElement);
      expect(mockDispatch.mock.calls[0][0]).toEqual({
        payload: 6083279184,
        type: "userData/increaseExercicesLikes",
      }); // Verify your action call here
    }
  });
  it('dispatches increaseSpecialistsLikes if currentURL does not includes "exercices"', () => {
    const data = [
      {
        id: 767415032660,
        tags: [
          "Contrainte de style",
          "Improvisation mixte",
          "Improvisation comparée",
          "En solo",
          "Petit nombre",
          "Grand nombre",
          "Long",
        ],
        title: "À la manière d'un auteur",
        specialistType: "Contrainte de style",
        improType: "mixte et comparée",
        numberOfPlayers: "1 à 10 joueurs",
        duration: "3 à 5 minutes",
        description:
          "Les joueurs vont interpréter leur improvisation en s'inspirant d'un auteur connu. Shakespeare, Molière, Tchekhov pour le théâtre par exemple. Tarantino, Michel Audiard, Charlie Chaplin pour le cinéma. Ou encore Alexandre Dumas, Tolkien ou Dickens pour la littérature. Ils devront ainsi reprendre les codes de l'auteur choisi.",
        likes: 123,
      },
    ];

    Object.defineProperty(window, "location", {
      value: {
        href: "https://example.com",
      },
      writable: true,
    });

    const { getByTestId } = render(<Cards data={data} />);

    const buttonElement = getByTestId(
      "like-button-767415032660"
    ) as HTMLButtonElement | null;
    expect(buttonElement).toBeTruthy(); // Check if the button element is truthy (not null)

    if (buttonElement) {
      fireEvent.click(buttonElement);
      expect(mockDispatch.mock.calls[0][0]).toEqual({
        payload: 767415032660,
        type: "userData/increaseSpecialistsLikes",
      }); // Verify your action call here
    }
  });
});
