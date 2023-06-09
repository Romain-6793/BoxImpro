
export type Exercice = {
    id: number;
    title: string;
    type: string;
    interest: string;
    description: string;
    advices: string;
    variants: string;
}


export const exercices: Exercice[] = [
    {
        id: 6083279184,
        title: "Compter jusqu'à 20 en groupe",
        type: "Écoute collective",
        interest: "Recentrer le groupe, développer l'écoute et la cohésion de groupe.",
        description: "Le groupe marche dans l'espace et doit compter de 0 à 20 sans que plusieurs personnes disent le même chiffre en même temps, ou que quelqu'un se trompe, sinon on repart à 0.",
        advices: "Parler fort et distinctement, marcher en occupant tout l'espace.Les participants ne doivent pas marcher en rond.Leur demander de ne pas se précipiter, de se regarder, s'écouter, de laisser de la place à tout le monde.",
        variants: "Rester statique en position «relaxation». Marcher plus vite.Compter dans un ordre décroissant à partir de 20 ou du nombre de participants(dans ce cas là on peut instaurer la règle «chacun ne parle qu'une fois»).Ou dire son prénom jusqu'à ce que chacun ait dit le sien."
    },
    {
        id: 1118635757686,
        title: "Traverser la salle en aveugle",
        type: "Confiance",
        interest: "Développer pour chacun la confiance en soi. Développer la sensation de l'espace.",
        description: "Chacun à son tour traverser la pièce en marchant les yeux fermés sur le même rythme. Il faut être relâché corporellement et ne pas montrer de peur ni de stress. L'intervenant arrête le participant juste avant le mur.",
        advices: "L'animateur doit veiller à ce que les participants soient relâchés et respirent correctement. Il est également conseillé de le faire sur plusieurs séances.",
        variants: "Faire l'exercice en trottinant, en marche arrière, en glissant sur le sol. Faire un bruit de distraction pour tester le relâchement. Donner pour l'objectif que le joueur s'arrête le plus près du groupe possible sans le toucher."
    },
    {
        id: 88346512070,
        title: "Je m'assieds, tu te lèves",
        type: "Écoute collective",
        interest: "Un exercice difficile mais puissant pour développer une écoute de groupe de qualité.",
        description: "Les joueurs sont assis sur des chaises en rond. Une personne se lève puis s'assied. Au moment où elle s'assied une seule autre personne doit se lever. Si deux personnes se lèvent en même temps on recommence.",
        advices: "Difficile à réaliser du premier coup, l'exercice pourra être proposé lors des séances suivantes jusqu'à sa réussite. Attention au rythme. Tout le monde doit se lever et pas toujours les mêmes. Ne pas se précipiter, se regarder.",
        variants: "On complique le jeu en faisant se lever 2 personnes à la fois et, au moment où elles se rasseyent 2 autres doivent se lever et ainsi de suite."
    },
    {
        id: 953349055791,
        title: "Associations d'idées",
        type: "Imaginaire verbal",
        interest: "Exercice de base pour stimuler la créativité verbale, prendre confiance dans son imaginaire. Prépare à l'exercice dissociations d'idées». Peut encourager à développer son vocabulaire. Exercice dynamisant.",
        description: "Le groupe est assis en cercle. Un participant lance un mot, son voisin doit en lancer un autre en rapport avec celui-ci, de quelque manière que ce soit...",
        advices: "Éviter de préparer son mot à l'avance et de rester dans un même champ lexical. Être détendu. l'enchaînement des mots doit rester rythmé. Pousser ceux qui se découragent ou résistent.",
        variants: "Le voisin associe phonétiquement un mot à celui qui a été lancé (exemple 'banal' - d'unaval')."
    },
    {
        id: 479145570659,
        title: "Mime de films",
        type: "Imaginaire corporel",
        interest: "Savoir raconter une histoire avec le corps.",
        description: "Par groupes de 3 ou 4 se concerter et imaginer un mine d'après un film / une série connue. Les participants ont un temps défini de préparation (5 minutes par exemple). Puis les groupes chacun à leur tour miment le film au public qui doit en trouver le titre.",
        advices: "Bien poser les gestes du mime et les attitudes corporelles. Ne pas chercher à trop en dire d'un coup, mais mimer les choses les plus significatives dans l'histoire.",
        variants: "Peut être utilisé avec tous types d'oeuvres comme les comptines, les mythes, les romans, les pièces de théâtre (selon le public visé)."
    },
    {
        id: 7098513482,
        title: "Seul face aux autres",
        type: "Travail du regard",
        interest: "Accepter le regard des autres et regarder vraiment et individuellement chaque personne du groupe. Aiguiser sa notion du temps.",
        description: "Un participant se met debout, relâché et détendu seul face au groupe. Il doit regarder l'assemblée en plongeant son regard dans celui de chacun des membres de cette assemblée pendant trois secondes. Il a un temps donné pour effectuer sa tâche, une minute par exemple. C'est à lui d'estimer le temps qui s'est écoulé. Il donne le top du début et celui de la fin.",
        advices: "Commencer l'exercice neutre puis se laisser aller à ses émotions, si on a envie de sourire par exemple, ou de rire, mais ne pas fuir et continuer à soutenir le regard du public. Attention à ce que le participant regarde bien tout le monde et dans le temps imparti.",
        variants: "Cet exercice peut se faire avec un perturbateur qui teste le relâchement du participant."
    },
    {
        id: 1287600537838,
        title: "Déambulation consciente",
        type: "Gestion de l'espace",
        interest: "Être à l'écoute de son corps et de celui des autres ainsi que de la dynamique rythmique.",
        description: "Tous les participants marchent dans l'espace en veillant à ce que l'ensemble de la scène soit utilisée et équilibrée. Lorsqu'une personne s'arrête tous doivent s'arrêter. Pareil pour reprendre la marche.",
        advices: "Être à l'écoute de tout ce qui se passe à l'intérieur et à l'extérieur de soi.",
        variants: "Durant la marche, l'intervenant donne des indications qui interrompent la marche précédente, afin de réagir dans l'urgence et de ne pas laisser les participants se complaire dans un rythme de marche. Cette indication doit être exécutée en quelque secondes et immédiatement. Exemple d'indication : classez-vous par ordre croissant en taille, classez-vous par ordre de votre mois de naissance, effectuez tous ensemble un carré, un triangle..."
    },
    {
        id: 539885626108,
        title: "La minute",
        type: "Conscience du temps",
        interest: "Jouer tout en ayant conscience du temps qui passe. Prendre en compte plusieurs paramètres sur le plateau.",
        description: "Demander à un comédien de venir improviser pendant une minute, pendant que l'animateur chronomètre à la seconde près le temps. Puis lui demander le temps précis pendant lequel il pense avoir été sur scène et comparer avec le temps réel.",
        advices: "Le comédien doit essayer de c'estructurer' son improvisation, c'est à dire de traiter son sujet pour un temps donné, et d'y apporter une conclusion plus ou moins rapidement. On ne jouera pas avec le même rythme une impro de 1 minute et une impro de 3 minutes.",
        variants: "Il est possible de donner un thème et une catégorie au comédien. Ou même de varier le temps."
    },
    {
        id: 70503580110,
        title: "Plus près de toi mon deux.",
        type: "Conscience du temps.",
        interest: "Jouer tout en ayant conscience du temps qui passe. Prendre en compte plusieurs paramètres sur le plateau. Jouer sur plusieurs tableaux.",
        description: "Deux joueurs vont 's'affronter' sur une improvisation de plus ou moins 2 minutes. Chacun devra placer un mot choisi de manière aléatoire et que l'autre ignore. Seulement, il devra le placer le plus près possible de la limite des 2 minutes. À partir de là, plusieurs scénari sont possibles pour l'exercice. 1) Le joueur A dit son mot avant les 2 minutes et le joueur B ne l'a pas dit, le joueur A l'emporte. 2) Aucun des joueurs n'a dit son mot durant les 2 minutes, l'improvisation continue et c'est alors celui qui le dit le plus tôt qui l'emporte et met fin à l'exercice. 3) Le joueur A a dit son mot bien avant les 2 minutes (à 1 min 30 par exemple) mais le joueur B a dit son mot à 1 min 55, c'est le joueur B qui l'emporte. Il n'aurait pas pu dépasser les 2 min dans ce cas de figure. 4) Option qui peut constituer une variante : le joueur A a dit volontairement ou non, le mot du joueur B, le joueur B a perdu car son mot a été prononcé par un autre que lui.",
        advices: "Ne pas tout de suite amener son adversaire sur la piste du mot que l'on a à dire, tenter de saisir le temps qui passe, et de surprendre son adversaire. Penser à tous les sens que peut revêtir un mot. Essayer de faire en sorte que la prononciation du mot ait un sens dans le contexte de l'improvisation.",
        variants: "On peut modifier le temps, jouer avec 'ption 4 ou non."
    },
    {
        id: 167538547479,
        title: "Le sculpteur",
        type: "Imaginaire corporel",
        interest: "Amener les participants à dissocier les parties de leurs corps, et à les diriger. Développer ainsi chez eux la conscience et la maîtrise des parties de leur corps.",
        description: "Dans un groupe (4 ou 5 personnes) est désigné un sculpteur ou une sculptrice qui va devoir représenter une scène, une émotion ou un tableau avec le corps de ses camarades qui deviennent la matière première de l'artiste. Le sculpteur s'attache à travailler les expressions du visage de ses camarades. Le sculpteur ne peut pas parler mais peut mimer pour guider les participants.",
        advices: "Ne pas anticiper les propositions du sculpteur, se laisser faire... Exercice court, compter 3 minutes maximum.",
        variants: "Selon le thème, il peut s'agir d'une scène de film, de théâtre, d'un tableau connu, d'une scène historique, d'un lieu bien décrit, d'une émotion."
    }
]