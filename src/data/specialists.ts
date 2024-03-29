
import { Specialist } from "./types"

export const specialists: Specialist[] = [
    {
        id: 767415032660,
        tags: ["Contrainte de style", "Improvisation mixte", "Improvisation comparée",
            "En solo", "Petit nombre", "Grand nombre",
            "Long"],
        title: "À la manière d'un auteur",
        specialistType: "Contrainte de style",
        improType: "mixte et comparée",
        numberOfPlayers: "1 à 10 joueurs",
        duration: "3 à 5 minutes",
        description: "Les joueurs vont interpréter leur improvisation en s'inspirant d'un auteur connu. Shakespeare, Molière, Tchekhov pour le théâtre par exemple. Tarantino, Michel Audiard, Charlie Chaplin pour le cinéma. Ou encore Alexandre Dumas, Tolkien ou Dickens pour la littérature. Ils devront ainsi reprendre les codes de l'auteur choisi.",
        likes: 123,
    },
    {
        id: 342062505048,
        tags: ["Contrainte de style", "Improvisation mixte", "Improvisation comparée",
            "En solo", "Petit nombre", "Grand nombre",
            "Long"],
        title: "À la manière d'un genre",
        specialistType: "Contrainte de style",
        improType: "mixte et comparée",
        numberOfPlayers: "1 à 10 joueurs",
        duration: "3 à 5 minutes",
        description: "Les joueurs vont interpréter leur improvisation en s'inspirant d'un genre théâtral, cinématographique, télévisuel ou littéraire. Par exemple « à la manière d'une tragédie grecque, le la comedia dell arte, du théâtre de boulevard  », « à la manière d'une comédie romantique, d'un western, d'un film de science fiction », « à la manière d'un jeu télévisé, d'un documentaire, d'une sitcom », « à la manière d'un roman policier, d'un roman biographique, d'une fresque historique ». L'idée est de reprendre les codes du genre imposé.",
        likes: 456,
    },
    // {
    //     id: 342062505049,
    //     tags: ["Contrainte de style", "Improvisation mixte", "Improvisation comparée",
    //         "Tous types d'improvisation", "En solo", "Petit nombre", "Grand nombre",
    //         "Tous nombres de joueurs", "Court"],
    //     title: "Catégorie test",
    //     specialistType: "Contrainte de style",
    //     improType: "mixte et comparée",
    //     numberOfPlayers: "1 joueur",
    //     duration: "1 minute",
    //     description: "Les joueurs vont interpréter leur improvisation en s'inspirant d'un genre théâtral, cinématographique, télévisuel ou littéraire. Par exemple « à la manière d'une tragédie grecque, le la comedia dell arte, du théâtre de boulevard  », « à la manière d'une comédie romantique, d'un western, d'un film de science fiction », « à la manière d'un jeu télévisé, d'un documentaire, d'une sitcom », « à la manière d'un roman policier, d'un roman biographique, d'une fresque historique ». L'idée est de reprendre les codes du genre imposé.",
    //     likes: 789,
    // },
    {
        id: 490642127051,
        tags: ["Contrainte de style", "Improvisation comparée", "Petit nombre", "Grand nombre", "Long"],
        title: "Comédie musicale",
        specialistType: "Contrainte de style",
        improType: "comparée",
        numberOfPlayers: "3 à 10 joueurs",
        duration: "4 à 8 minutes",
        description: "Les joueurs improvisent en chantant, si possible en rimant, et en faisant des mouvements de choeur, voire de la danse. Le chant et le choeur ne sont pas nécessairement présents sur toute la durée de l'improvisation (on a aussi le droit de parler) mais ils doivent apparaître régulièrement.",
        likes: 234,
    },
    {
        id: 261942527364,
        tags: ["Contrainte d'expression orale", "Improvisation mixte", "Improvisation comparée",
            "Petit nombre", "Court"],
        title: "Rimée",
        specialistType: "Contrainte d'expression orale",
        improType: "mixte et comparée",
        numberOfPlayers: "2 à 4 joueurs",
        duration: "2 à 4 minutes",
        description: "Comme son nom l'indique. Les joueurs devront interpréter leur improvisation exclusivement en rimant. Une bonne écoute est recommandée, on peut aussi faire la part belle à l'action afin de réduire les dialogues dans le but que ceux-ci soient pertinents pour l'improvisation.",
        likes: 567,
    },
    {
        id: 138987931562,
        tags: ["Contrainte d'expression orale", "Improvisation mixte", "Improvisation comparée",
            "Petit nombre", "Court"],
        title: "Chantée",
        specialistType: "Contrainte d'expression orale",
        improType: "mixte et comparée",
        numberOfPlayers: "2 à 4 joueurs",
        duration: "2 à 4 minutes",
        description: "Comme son nom l'indique. Les joueurs devront interpréter leur improvisation exclusivement en chantant, et si possible en rimant. Une bonne écoute est recommandée, on peut aussi faire la part belle à l'action afin de réduire les « dialogues » dans le but que ceux-ci soient pertinents pour l'improvisation.",
        likes: 890,
    },
    {
        id: 74461413961,
        tags: ["Contrainte d'expression orale", "Improvisation comparée", "Petit nombre", "Court"],
        title: "Mimée / Muette",
        specialistType: "Contrainte d'expression orale",
        improType: "comparée.",
        numberOfPlayers: "2 à 4 joueurs",
        duration: "1 à 3 minutes",
        description: "Comme son nom l'indique. Les joueurs devront interpréter leur improvisation exclusivement en mimant. Cela veut dire qu'aucun son ne doit être produit par les joueurs qui doivent être très explicites et expressifs dans leur langage corporel, afin de produire une histoire tangible pour le public.",
        likes: 123,
    },
    {
        id: 719651322987,
        tags: ["Contraintes diverses", "Improvisation mixte", "Petit nombre", "Court"],
        title: "Croisement",
        specialistType: "Contraintes diverses",
        improType: "mixte uniquement",
        numberOfPlayers: "1 joueur (par équipe)",
        duration: "2 à 4 minutes",
        description: "Cette improvisation est une improvisation mixte. Seuls 1 joueur de l'équipe A et 1 joueur de l'équipe B sont en scène. Au signal de l'arbitre, les joueurs devront intervertir leurs personnages respectifs, cela peut se produire autant de fois que l'arbitre le décide au cours de l'improvisation.",
        likes: 321,
    },
    {
        id: 375638982050,
        tags: ["Contrainte de structure", "Improvisation comparée", "Grand nombre", "Court"],
        title: "Poursuite",
        specialistType: "Contrainte de structure",
        improType: "comparée uniquement",
        numberOfPlayers: "2 à 4 joueurs (par équipe)",
        duration: "1 à 3 minutes (par bout d'improvisation)",
        description: "Les joueurs devront interpréter l'improvisation de la manière suivante : l'équipe A va faire le début de l'impro ; puis l'équipe B va faire la suite en reprenant exactement les personnages et la situation posés par l'équipe B.",
        likes: 654,
    },
    {
        id: 88466199552,
        tags: ["Contrainte de structure", "Improvisation comparée", "Grand nombre", "Court"],
        title: "Double Poursuite",
        specialistType: "Contrainte de structure",
        improType: "comparée uniquement",
        numberOfPlayers: "2 à 4 joueurs (par équipe)",
        duration: "1 à 3 minutes (par bout d'improvisation)",
        description: "Les joueurs devront interpréter l'improvisation de la manière suivante : l'équipe A va faire le début de l'impro ; puis l'équipe B va faire la suite en reprenant exactement les personnages et la situation posés par l'équipe B. L'équipe A va ensuite reprendre l'improvisation là où l'équipe B l'avait laissée. Enfin, l'équipe B va conclure l'improvisation avec la nouvelle situation créée par l'équipe A.",
        likes: 987,
    },
    {
        id: 321384998131,
        tags: ["Contraintes diverses", "Improvisation mixte", "Improvisation comparée", "Petit nombre", "Court"],
        title: "Musicale",
        specialistType: "Contraintes diverses",
        improType: "mixte et comparée",
        numberOfPlayers: "2 à 4 joueurs ",
        duration: "2 à 4 minutes",
        description: "À faire avec un musicien où un DJ. En plus de s'inspirer du thème, les joueurs devront réagir à l'ambiance sonore créée par le musicien.",
        likes: 432,
    },
    {
        id: 31708866390,
        tags: ["Contraintes diverses", "Improvisation mixte", "Improvisation comparée", "Petit nombre", "Court"],
        title: "Objet détourné / Accessoire",
        specialistType: "Contraintes diverses",
        improType: "mixte et comparée",
        numberOfPlayers: "2 à 4 joueurs ",
        duration: "2 à 4 minutes",
        description: "Les joueurs devront interpréter leur improvisation avec un objet imposé, par exemple un tabouret, mais qui pourra être tout sauf un tabouret. Il s'agit donc d'un objet détourné. Notons que l'objet doit être central dans l'histoire racontée par les joueurs.",
        likes: 765,
    }
]