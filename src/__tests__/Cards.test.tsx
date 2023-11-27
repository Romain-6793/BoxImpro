import { fireEvent, render } from "@testing-library/react";
import { useDispatch } from "react-redux";
import Cards from "../components/datapage/Cards/Cards";

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
