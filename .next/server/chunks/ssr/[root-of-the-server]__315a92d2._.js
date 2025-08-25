module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/app/puzzle/[level]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PuzzlePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const LEVEL_CONFIGS = {
    "1": {
        level: "1",
        title: "Qui a gagné quoi à la fête foraine ?",
        subtitle: "Niveau 1",
        image: {
            src: "https://www.bonpourlesoreilles.net/wp-content/uploads/2019/01/histoire-fete-foraine.jpg",
            alt: "Ballons de fête foraine"
        },
        participants: [
            "Alice",
            "Benoît",
            "Clara",
            "David"
        ],
        categories: [
            "Ballon",
            "Boisson",
            "Lot"
        ],
        values: {
            Ballon: [
                "Rouge",
                "Bleu",
                "Vert",
                "Jaune"
            ],
            Boisson: [
                "Soda",
                "Jus",
                "Limonade",
                "Thé glacé"
            ],
            Lot: [
                "Peluche",
                "Casquette",
                "Bonbon géant",
                "Porte-clés"
            ]
        },
        "hints": [
            "Le ballon d’<strong>Alice</strong> rappelait une pomme d’amour.",
            "Celui qui a bu du <strong>Jus</strong> est reparti avec la <strong>Peluche</strong>.",
            "Le ballon <strong>Bleu</strong> accompagnait une boisson pétillante : le <strong>Soda</strong>.",
            "Le ballon <strong>Jaune</strong> allait avec le <strong>Thé glacé</strong>.",
            "Le <strong>Porte-clés</strong> a été gagné par celui qui avait la <strong>Limonade</strong>.",
            "<strong>Benoît</strong> a eu le ballon <strong>Bleu</strong>.",
            "<strong>Clara</strong> n’a pas eu la <strong>Casquette</strong>.",
            "Le <strong>Bonbon géant</strong> n’a été gagné ni par <strong>Alice</strong> ni par <strong>Benoît</strong>.",
            "<strong>Alice</strong> n’a pas gagné le <strong>Porte-clés</strong>."
        ],
        solution: {
            Alice: {
                Ballon: "Rouge",
                Boisson: "Jus",
                Lot: "Peluche"
            },
            "Benoît": {
                Ballon: "Bleu",
                Boisson: "Soda",
                Lot: "Casquette"
            },
            Clara: {
                Ballon: "Vert",
                Boisson: "Limonade",
                Lot: "Porte-clés"
            },
            David: {
                Ballon: "Jaune",
                Boisson: "Thé glacé",
                Lot: "Bonbon géant"
            }
        },
        recapClasses: {
            Ballon: "r-ball",
            Boisson: "r-bois",
            Lot: "r-lot"
        }
    },
    "2": {
        level: "2",
        title: "Club de lecture : qui lit quoi et avec quel accessoire ?",
        subtitle: "Niveau 2",
        image: {
            src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&amp;auto=format&amp;fit=crop&amp;w=1200&amp;h=600",
            alt: "Club de lecture avec livres et boissons chaudes"
        },
        participants: [
            "Emma",
            "Félix",
            "Jade",
            "Lucas"
        ],
        categories: [
            "Genre",
            "Boisson",
            "Accessoire"
        ],
        values: {
            Genre: [
                "Policier",
                "Fantastique",
                "Historique",
                "Science-fiction"
            ],
            Boisson: [
                "Café",
                "Thé",
                "Chocolat chaud",
                "Cappuccino"
            ],
            Accessoire: [
                "Marque-page",
                "Lunettes",
                "Écharpe",
                "Carnet"
            ]
        },
        "hints": [
            "Le lecteur de mondes <strong>Fantastiques</strong> a choisi une boisson infusée : le <strong>Thé</strong>.",
            "Celui qui menait l’enquête en <strong>Policier</strong> portait des <strong>Lunettes</strong>.",
            "Le <strong>Cappuccino</strong> tenait compagnie au lecteur de <strong>Science-fiction</strong>.",
            "L’amateur d’<strong>Historique</strong> s’est réchauffé avec un <strong>Chocolat chaud</strong> et prenait des notes dans un <strong>Carnet</strong>.",
            "<strong>Emma</strong> n’utilise pas d’<strong>Écharpe</strong>.",
            "<strong>Félix</strong> ne boit pas de <strong>Thé</strong> ; il préfère le <strong>Café</strong> et ne lit pas la <strong>Science-fiction</strong>.",
            "<strong>Lucas</strong> n’a pas choisi le <strong>Café</strong>.",
            "<strong>Jade</strong> n’a ni le <strong>Marque-page</strong> ni le genre <strong>Policier</strong>."
        ],
        solution: {
            Emma: {
                Genre: "Fantastique",
                Boisson: "Thé",
                Accessoire: "Marque-page"
            },
            "Félix": {
                Genre: "Policier",
                Boisson: "Café",
                Accessoire: "Lunettes"
            },
            Jade: {
                Genre: "Historique",
                Boisson: "Chocolat chaud",
                Accessoire: "Carnet"
            },
            Lucas: {
                Genre: "Science-fiction",
                Boisson: "Cappuccino",
                Accessoire: "Écharpe"
            }
        },
        recapClasses: {
            Genre: "r-genre",
            Boisson: "r-bois",
            Accessoire: "r-acc"
        }
    },
    "3": {
        level: "3",
        title: "Voyage en Europe : qui visite quoi, avec quel transport et quel plat ?",
        subtitle: "Niveau 3",
        image: {
            src: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&auto=format&fit=crop&w=1200&h=600",
            alt: "Voyage en Europe avec valise et repas typiques"
        },
        participants: [
            "Alice",
            "Bruno",
            "Clara",
            "David"
        ],
        categories: [
            "Ville",
            "Transport",
            "Plat"
        ],
        values: {
            Ville: [
                "Paris",
                "Rome",
                "Berlin",
                "Madrid"
            ],
            Transport: [
                "Avion",
                "Train",
                "Bus",
                "Vélo"
            ],
            Plat: [
                "Croissant",
                "Pizza",
                "Currywurst",
                "Paella"
            ]
        },
        "hints": [
            "La personne qui a goûté une <strong>Pizza</strong> a voyagé en <strong>Train</strong>.",
            "<strong>Bruno</strong> est allé dans une ville dont le plat typique est sucré, et il a pris l’<strong>Avion</strong>.",
            "Celui qui a visité <strong>Berlin</strong> n’a pas pris de <strong>Vélo</strong>.",
            "Le voyageur qui est allé à <strong>Madrid</strong> s’y est rendu à <strong>Vélo</strong>.",
            "<strong>Clara</strong> n’a pas mangé de <strong>Croissant</strong>, mais son plat était espagnol.",
            "Le <strong>Currywurst</strong> a été mangé dans la capitale allemande.",
            "<strong>David</strong> n’est pas parti en <strong>Avion</strong>."
        ],
        solution: {
            Alice: {
                Ville: "Rome",
                Transport: "Train",
                Plat: "Pizza"
            },
            Bruno: {
                Ville: "Paris",
                Transport: "Avion",
                Plat: "Croissant"
            },
            Clara: {
                Ville: "Madrid",
                Transport: "Vélo",
                Plat: "Paella"
            },
            David: {
                Ville: "Berlin",
                Transport: "Bus",
                Plat: "Currywurst"
            }
        },
        recapClasses: {
            Ville: "r-ville",
            Transport: "r-trans",
            Plat: "r-plat"
        }
    },
    "4": {
        level: "4",
        title: "Festival de musique : qui écoute quel groupe, avec quelle boisson et dans quelle zone ?",
        subtitle: "Niveau 4",
        image: {
            src: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?q=80&auto=format&fit=crop&w=1200&h=600",
            alt: "Festival de musique avec foule et scène"
        },
        participants: [
            "Sophie",
            "Hugo",
            "Maya",
            "Nicolas"
        ],
        categories: [
            "Groupe",
            "Boisson",
            "Zone"
        ],
        values: {
            Groupe: [
                "Rockeurs",
                "DJ Electro",
                "Jazz Band",
                "Chanteur Pop"
            ],
            Boisson: [
                "Soda",
                "Eau",
                "Bière",
                "Cocktail"
            ],
            Zone: [
                "VIP",
                "Pelouse",
                "Tribune",
                "Devant la scène"
            ]
        },
        "hints": [
            "Les <strong>Rockeurs</strong> se produisaient en <strong>VIP</strong>.",
            "Le <strong>Chanteur Pop</strong> était écouté depuis la <strong>Tribune</strong>.",
            "Le <strong>Jazz Band</strong> était accompagné d’une <strong>Bière</strong>.",
            "Le <strong>DJ Electro</strong> se voyait depuis <strong>Devant la scène</strong>.",
            "<strong>Sophie</strong> était en <strong>VIP</strong> et n’a pas bu de <strong>Cocktail</strong>.",
            "<strong>Nicolas</strong> buvait de l’<strong>Eau</strong>.",
            "La <strong>Pelouse</strong> n’accueillait ni les <strong>Rockeurs</strong> ni le <strong>Chanteur Pop</strong>."
        ],
        solution: {
            Sophie: {
                Groupe: "Rockeurs",
                Boisson: "Soda",
                Zone: "VIP"
            },
            Hugo: {
                Groupe: "DJ Electro",
                Boisson: "Cocktail",
                Zone: "Devant la scène"
            },
            Maya: {
                Groupe: "Jazz Band",
                Boisson: "Bière",
                Zone: "Pelouse"
            },
            Nicolas: {
                Groupe: "Chanteur Pop",
                Boisson: "Eau",
                Zone: "Tribune"
            }
        },
        recapClasses: {
            Groupe: "r-groupe",
            Boisson: "r-bois",
            Zone: "r-zone"
        }
    },
    "5": {
        level: "5",
        title: "Animaux de compagnie : qui a quel animal, quel jouet et dort où ?",
        subtitle: "Niveau 5",
        image: {
            src: "https://images.unsplash.com/photo-1558788353-f76d92427f16?q=80&auto=format&fit=crop&w=1200&h=600",
            alt: "Animaux de compagnie et accessoires"
        },
        participants: [
            "Camille",
            "Louis",
            "Inès",
            "Thomas"
        ],
        categories: [
            "Animal",
            "Jouet",
            "Lieu"
        ],
        values: {
            Animal: [
                "Chien",
                "Chat",
                "Lapin",
                "Perroquet"
            ],
            Jouet: [
                "Balle",
                "Pelote",
                "Carotte",
                "Cloche"
            ],
            Lieu: [
                "Panier",
                "Cage",
                "Arbre à chat",
                "Perchoir"
            ]
        },
        "hints": [
            "L’animal qui dort dans la <strong>Cage</strong> adore les légumes croquants.",
            "<strong>Camille</strong> n’a pas choisi un animal à plumes, et son compagnon dort dans un <strong>Panier</strong>.",
            "Le <strong>Chat</strong> préfère jouer avec une <strong>Pelote</strong>.",
            "L’animal de <strong>Thomas</strong> adore faire du bruit avec une <strong>Cloche</strong>.",
            "Celui qui possède le <strong>Perroquet</strong> ne vit pas au sol.",
            "<strong>Inès</strong> n’a ni chien ni jouet en forme de balle.",
            "Le <strong>Chien</strong> est installé confortablement dans le <strong>Panier</strong>."
        ],
        solution: {
            Camille: {
                Animal: "Chien",
                Jouet: "Balle",
                Lieu: "Panier"
            },
            Louis: {
                Animal: "Chat",
                Jouet: "Pelote",
                Lieu: "Arbre à chat"
            },
            Inès: {
                Animal: "Lapin",
                Jouet: "Carotte",
                Lieu: "Cage"
            },
            Thomas: {
                Animal: "Perroquet",
                Jouet: "Cloche",
                Lieu: "Perchoir"
            }
        },
        recapClasses: {
            Animal: "r-ani",
            Jouet: "r-jouet",
            Lieu: "r-lieu"
        }
    },
    "6": {
        level: "6",
        title: "Compétition sportive : qui pratique quel sport, porte quelle couleur et gagne quelle médaille ?",
        subtitle: "Niveau 6",
        image: {
            src: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?q=80&auto=format&fit=crop&w=1200&h=600",
            alt: "Compétition sportive avec athlètes"
        },
        participants: [
            "Élodie",
            "Marc",
            "Sarah",
            "Antoine"
        ],
        categories: [
            "Sport",
            "Couleur",
            "Médaille"
        ],
        values: {
            Sport: [
                "Natation",
                "Athlétisme",
                "Cyclisme",
                "Tennis"
            ],
            Couleur: [
                "Rouge",
                "Bleu",
                "Vert",
                "Jaune"
            ],
            Médaille: [
                "Or",
                "Argent",
                "Bronze",
                "Aucune"
            ]
        },
        "hints": [
            "Le sportif en <strong>Bleu</strong> a remporté la <strong>Médaille d’Or</strong>.",
            "Le sportif en <strong>Rouge</strong> a remporté la <strong>Médaille d’Argent</strong>.",
            "Celui en <strong>Jaune</strong> faisait du <strong>Cyclisme</strong>.",
            "Le joueur de <strong>Tennis</strong> n’a obtenu <strong>aucune</strong> médaille.",
            "<strong>Élodie</strong> a concouru en <strong>Natation</strong>.",
            "<strong>Antoine</strong> portait du <strong>Vert</strong>.",
            "<strong>Sarah</strong> n’a pas fait de <strong>Tennis</strong>."
        ],
        solution: {
            Élodie: {
                Sport: "Natation",
                Couleur: "Bleu",
                Médaille: "Or"
            },
            Marc: {
                Sport: "Cyclisme",
                Couleur: "Jaune",
                Médaille: "Bronze"
            },
            Sarah: {
                Sport: "Athlétisme",
                Couleur: "Rouge",
                Médaille: "Argent"
            },
            Antoine: {
                Sport: "Tennis",
                Couleur: "Vert",
                Médaille: "Aucune"
            }
        },
        recapClasses: {
            Sport: "r-sport",
            Couleur: "r-coul",
            Médaille: "r-med"
        }
    },
    "7": {
        level: "7",
        title: "Musée : qui a visité quelle salle, pris quel audioguide et acheté quel souvenir ?",
        subtitle: "Niveau 7",
        image: {
            src: "https://images.unsplash.com/photo-1520697222861-e772ce2d8b4a?q=80&auto=format&fit=crop&w=1200&h=600",
            alt: "Galeries d'un musée"
        },
        participants: [
            "Anaïs",
            "Bastien",
            "Chloé",
            "Damien"
        ],
        categories: [
            "Salle",
            "Audioguide",
            "Souvenir"
        ],
        values: {
            Salle: [
                "Peinture",
                "Sculpture",
                "Histoire naturelle",
                "Photographie"
            ],
            Audioguide: [
                "Français",
                "Anglais",
                "Espagnol",
                "Allemand"
            ],
            Souvenir: [
                "Carte postale",
                "Magnet",
                "Catalogue",
                "T-shirt"
            ]
        },
        hints: [
            "La salle de <strong>Photographie</strong> se visite avec l’audioguide en <strong>Anglais</strong>.",
            "La salle d’<strong>Histoire naturelle</strong> est liée au <strong>Magnet</strong>.",
            "La salle de <strong>Peinture</strong> est associée à la <strong>Carte postale</strong>.",
            "La salle de <strong>Sculpture</strong> est liée au <strong>T-shirt</strong>.",
            "<strong>Anaïs</strong> a pris l’audioguide en <strong>Français</strong>.",
            "<strong>Bastien</strong> est reparti avec un <strong>T-shirt</strong>.",
            "<strong>Chloé</strong> a acheté le <strong>Catalogue</strong>.",
            "<strong>Damien</strong> n’a pas pris l’audioguide en <strong>Allemand</strong>."
        ],
        solution: {
            "Anaïs": {
                Salle: "Peinture",
                Audioguide: "Français",
                Souvenir: "Carte postale"
            },
            "Bastien": {
                Salle: "Sculpture",
                Audioguide: "Allemand",
                Souvenir: "T-shirt"
            },
            "Chloé": {
                Salle: "Photographie",
                Audioguide: "Anglais",
                Souvenir: "Catalogue"
            },
            "Damien": {
                Salle: "Histoire naturelle",
                Audioguide: "Espagnol",
                Souvenir: "Magnet"
            }
        },
        recapClasses: {
            Salle: "r-salle",
            Audioguide: "r-audio",
            Souvenir: "r-souv"
        }
    },
    "8": {
        level: "8",
        title: "Parc d’attractions : qui a fait quelle attraction, avec quel pass et quel snack ?",
        subtitle: "Niveau 8",
        image: {
            src: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&auto=format&fit=crop&w=1200&h=600",
            alt: "Parc d'attractions de nuit"
        },
        participants: [
            "Léa",
            "Noé",
            "Pauline",
            "Rayan"
        ],
        categories: [
            "Attraction",
            "Pass",
            "Snack"
        ],
        values: {
            Attraction: [
                "Montagnes russes",
                "Grande roue",
                "Maison hantée",
                "Auto-tamponneuses"
            ],
            Pass: [
                "Express",
                "Classique",
                "VIP",
                "Soirée"
            ],
            Snack: [
                "Churros",
                "Crêpe",
                "Popcorn",
                "Glace"
            ]
        },
        hints: [
            "La <strong>Grande roue</strong> est associée à une <strong>Glace</strong>.",
            "Le <strong>pass Soirée</strong> servait pour la <strong>Maison hantée</strong>.",
            "Les <strong>Montagnes russes</strong> utilisaient le <strong>pass Express</strong> et allaient avec du <strong>Popcorn</strong>.",
            "Les <strong>Auto-tamponneuses</strong> allaient avec des <strong>Churros</strong>.",
            "<strong>Pauline</strong> avait le <strong>pass Soirée</strong>.",
            "<strong>Noé</strong> a mangé une <strong>Glace</strong>.",
            "<strong>Rayan</strong> a pris des <strong>Churros</strong>."
        ],
        solution: {
            "Léa": {
                Attraction: "Montagnes russes",
                Pass: "Express",
                Snack: "Popcorn"
            },
            "Noé": {
                Attraction: "Grande roue",
                Pass: "VIP",
                Snack: "Glace"
            },
            "Pauline": {
                Attraction: "Maison hantée",
                Pass: "Soirée",
                Snack: "Crêpe"
            },
            "Rayan": {
                Attraction: "Auto-tamponneuses",
                Pass: "Classique",
                Snack: "Churros"
            }
        },
        recapClasses: {
            Attraction: "r-attr",
            Pass: "r-pass",
            Snack: "r-snack"
        }
    },
    "9": {
        level: "9",
        title: "Jardinage : qui s’occupe de quelle plante, avec quel outil et à quel endroit ?",
        subtitle: "Niveau 9",
        image: {
            src: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&auto=format&fit=crop&w=1200&h=600",
            alt: "Outils de jardinage"
        },
        participants: [
            "Nina",
            "Omar",
            "Priya",
            "Quentin"
        ],
        categories: [
            "Plante",
            "Outil",
            "Endroit"
        ],
        values: {
            Plante: [
                "Roses",
                "Tomates",
                "Lavande",
                "Basilic"
            ],
            Outil: [
                "Arrosoir",
                "Bêche",
                "Sécateur",
                "Gants"
            ],
            Endroit: [
                "Balcon",
                "Potager",
                "Massif",
                "Fenêtre"
            ]
        },
        hints: [
            "La <strong>Lavande</strong> est taillée au <strong>Sécateur</strong> et plantée au <strong>Massif</strong>.",
            "Les <strong>Tomates</strong> se travaillent à la <strong>Bêche</strong> dans le <strong>Potager</strong>.",
            "Le <strong>Basilic</strong> pousse à la <strong>Fenêtre</strong> et on l’arrose avec un <strong>Arrosoir</strong>.",
            "Les <strong>Roses</strong> se plaisent au <strong>Balcon</strong> et on les manipule avec des <strong>Gants</strong>.",
            "<strong>Priya</strong> s’occupe de l’herbe aromatique.",
            "<strong>Omar</strong> n’est pas au <strong>Balcon</strong>."
        ],
        solution: {
            "Nina": {
                Plante: "Lavande",
                Outil: "Sécateur",
                Endroit: "Massif"
            },
            "Omar": {
                Plante: "Tomates",
                Outil: "Bêche",
                Endroit: "Potager"
            },
            "Priya": {
                Plante: "Basilic",
                Outil: "Arrosoir",
                Endroit: "Fenêtre"
            },
            "Quentin": {
                Plante: "Roses",
                Outil: "Gants",
                Endroit: "Balcon"
            }
        },
        recapClasses: {
            Plante: "r-plante",
            Outil: "r-outil",
            Endroit: "r-lieu"
        }
    },
    "10": {
        level: "10",
        title: "Cinéma : qui a vu quel genre, bu quelle boisson et s’est assis où ?",
        subtitle: "Niveau 10",
        image: {
            src: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&auto=format&fit=crop&w=1200&h=600",
            alt: "Salle de cinéma"
        },
        participants: [
            "Eva",
            "Gaspard",
            "Imane",
            "Julien"
        ],
        categories: [
            "Genre",
            "Boisson",
            "Place"
        ],
        values: {
            Genre: [
                "Action",
                "Comédie",
                "Fantastique",
                "Documentaire"
            ],
            Boisson: [
                "Cola",
                "Eau",
                "Thé glacé",
                "Limonade"
            ],
            Place: [
                "Rang 1",
                "Rang 3",
                "Rang 5",
                "Rang 7"
            ]
        },
        hints: [
            "Le film d’<strong>Action</strong> allait avec un <strong>Cola</strong> au <strong>Rang 1</strong>.",
            "Le <strong>Documentaire</strong> se regardait avec de l’<strong>Eau</strong> au <strong>Rang 7</strong>.",
            "Le <strong>Fantastique</strong> allait avec un <strong>Thé glacé</strong> au <strong>Rang 5</strong>.",
            "La <strong>Comédie</strong> allait avec une <strong>Limonade</strong> au <strong>Rang 3</strong>.",
            "<strong>Julien</strong> avait envie d’<strong>Action</strong>.",
            "<strong>Imane</strong> était assise au <strong>Rang 5</strong>.",
            "<strong>Gaspard</strong> n’a pris ni <strong>Cola</strong> ni <strong>Limonade</strong>."
        ],
        solution: {
            "Eva": {
                Genre: "Comédie",
                Boisson: "Limonade",
                Place: "Rang 3"
            },
            "Gaspard": {
                Genre: "Documentaire",
                Boisson: "Eau",
                Place: "Rang 7"
            },
            "Imane": {
                Genre: "Fantastique",
                Boisson: "Thé glacé",
                Place: "Rang 5"
            },
            "Julien": {
                Genre: "Action",
                Boisson: "Cola",
                Place: "Rang 1"
            }
        },
        recapClasses: {
            Genre: "r-genre2",
            Boisson: "r-bois2",
            Place: "r-place"
        }
    },
    "11": {
        level: "11",
        title: "Boulangerie : qui a pris quelle viennoiserie, quelle boisson et à quel moment ?",
        subtitle: "Niveau 11",
        image: {
            src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&auto=format&fit=crop&w=1200&h=600",
            alt: "Vitrine de boulangerie"
        },
        participants: [
            "Karim",
            "Lola",
            "Maëlys",
            "Nathan"
        ],
        categories: [
            "Viennoiserie",
            "Boisson",
            "Moment"
        ],
        values: {
            Viennoiserie: [
                "Croissant",
                "Pain au chocolat",
                "Pain aux raisins",
                "Brioche"
            ],
            Boisson: [
                "Café",
                "Thé",
                "Chocolat chaud",
                "Latte"
            ],
            Moment: [
                "Matin tôt",
                "Milieu de matinée",
                "Après-midi",
                "Soir"
            ]
        },
        hints: [
            "Le <strong>Matin tôt</strong> allait avec un <strong>Café</strong> et un <strong>Pain au chocolat</strong>.",
            "Le <strong>Milieu de matinée</strong> allait avec du <strong>Thé</strong> et un <strong>Croissant</strong>.",
            "L’<strong>Après-midi</strong> allait avec un <strong>Chocolat chaud</strong> et une <strong>Brioche</strong>.",
            "Le <strong>Soir</strong> allait avec un <strong>Latte</strong> et un <strong>Pain aux raisins</strong>.",
            "<strong>Lola</strong> a bu du <strong>Thé</strong>.",
            "<strong>Nathan</strong> est passé le <strong>Soir</strong>."
        ],
        solution: {
            "Karim": {
                Viennoiserie: "Pain au chocolat",
                Boisson: "Café",
                Moment: "Matin tôt"
            },
            "Lola": {
                Viennoiserie: "Croissant",
                Boisson: "Thé",
                Moment: "Milieu de matinée"
            },
            "Maëlys": {
                Viennoiserie: "Brioche",
                Boisson: "Chocolat chaud",
                Moment: "Après-midi"
            },
            "Nathan": {
                Viennoiserie: "Pain aux raisins",
                Boisson: "Latte",
                Moment: "Soir"
            }
        },
        recapClasses: {
            Viennoiserie: "r-vien",
            Boisson: "r-bois3",
            Moment: "r-moment"
        }
    },
    "12": {
        level: "12",
        title: "Hackathon : qui a codé avec quel langage, sur quel système et avec quel outil ?",
        subtitle: "Niveau 12",
        image: {
            src: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&auto=format&fit=crop&w=1200&h=600",
            alt: "Écrans d’ordinateur pendant un hackathon"
        },
        participants: [
            "Océane",
            "Pierre",
            "Salomé",
            "Tariq"
        ],
        categories: [
            "Langage",
            "Système",
            "Outil"
        ],
        values: {
            Langage: [
                "Python",
                "JavaScript",
                "Go",
                "Ruby"
            ],
            Système: [
                "Windows",
                "macOS",
                "Linux",
                "ChromeOS"
            ],
            Outil: [
                "VS Code",
                "Vim",
                "PyCharm",
                "WebStorm"
            ]
        },
        hints: [
            "Le <strong>Python</strong> se faisait sur <strong>macOS</strong> avec <strong>PyCharm</strong>.",
            "Le <strong>JavaScript</strong> se faisait sur <strong>Windows</strong> avec <strong>WebStorm</strong>.",
            "Le <strong>Go</strong> se faisait sur <strong>Linux</strong> avec <strong>Vim</strong>.",
            "Le <strong>Ruby</strong> se faisait sur <strong>ChromeOS</strong> avec <strong>VS Code</strong>.",
            "<strong>Océane</strong> travaillait sur <strong>macOS</strong>.",
            "<strong>Pierre</strong> était sur <strong>Windows</strong>.",
            "<strong>Salomé</strong> utilisait <strong>Vim</strong>."
        ],
        solution: {
            "Océane": {
                Langage: "Python",
                Système: "macOS",
                Outil: "PyCharm"
            },
            "Pierre": {
                Langage: "JavaScript",
                Système: "Windows",
                Outil: "WebStorm"
            },
            "Salomé": {
                Langage: "Go",
                Système: "Linux",
                Outil: "Vim"
            },
            "Tariq": {
                Langage: "Ruby",
                Système: "ChromeOS",
                Outil: "VS Code"
            }
        },
        recapClasses: {
            Langage: "r-lang",
            Système: "r-sys",
            Outil: "r-outil2"
        }
    }
};
function PuzzleView({ cfg }) {
    const [CAT_A, CAT_B, CAT_C] = cfg.categories;
    const valsA = cfg.values[CAT_A];
    const valsB = cfg.values[CAT_B];
    const valsC = cfg.values[CAT_C];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        style: {
            maxWidth: 980,
            margin: "0 auto"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: cfg.title
            }, void 0, false, {
                fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                lineNumber: 427,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: cfg.subtitle
            }, void 0, false, {
                fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                lineNumber: 428,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "controls",
                style: {
                    textAlign: "center",
                    marginBottom: 16
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "btn",
                    children: "← Sélection de niveau"
                }, void 0, false, {
                    fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                    lineNumber: 431,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                lineNumber: 430,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: cfg.image.src,
                alt: cfg.image.alt,
                className: "illus",
                width: 1200,
                height: 600
            }, void 0, false, {
                fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                lineNumber: 434,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "hints",
                className: "hints card",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-body",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hints-header",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "hints-title",
                                    children: "Indices"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                    lineNumber: 446,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    id: "toggleHints",
                                    className: "btn",
                                    type: "button",
                                    children: "Masquer les indices"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                    lineNumber: 447,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                            lineNumber: 445,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                            className: "hints-list",
                            id: "hintsList",
                            children: cfg.hints.map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        dangerouslySetInnerHTML: {
                                            __html: h
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                        lineNumber: 451,
                                        columnNumber: 27
                                    }, this)
                                }, i, false, {
                                    fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                    lineNumber: 451,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                            lineNumber: 449,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                    lineNumber: 444,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                lineNumber: 443,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "gridWrap",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "grid",
                    id: "grid",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "sideLabel topBlank groupLeft"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                        lineNumber: 462,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "sideLabel topBlank rowLeft"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                        lineNumber: 463,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "colHead col-1",
                                        colSpan: 4,
                                        children: CAT_A
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                        lineNumber: 464,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "colHead col-2",
                                        colSpan: 4,
                                        children: CAT_B
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                        lineNumber: 465,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "colHead col-3",
                                        colSpan: 4,
                                        children: CAT_C
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                        lineNumber: 466,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                lineNumber: 461,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "sideLabel groupLeft"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                        lineNumber: 469,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "sideLabel rowLeft"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                        lineNumber: 470,
                                        columnNumber: 15
                                    }, this),
                                    valsA.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "v col-1",
                                            children: v
                                        }, `${CAT_A}-${v}`, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 471,
                                            columnNumber: 34
                                        }, this)),
                                    valsB.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "v col-2",
                                            children: v
                                        }, `${CAT_B}-${v}`, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 472,
                                            columnNumber: 34
                                        }, this)),
                                    valsC.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "v col-3",
                                            children: v
                                        }, `${CAT_C}-${v}`, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 473,
                                            columnNumber: 34
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                lineNumber: 468,
                                columnNumber: 13
                            }, this),
                            cfg.participants.map((p, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "block-1",
                                    children: [
                                        idx === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            rowSpan: cfg.participants.length,
                                            className: "sideLabel groupLeft row-1",
                                            children: "Personne"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 479,
                                            columnNumber: 31
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "rowLeft",
                                            children: p
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 480,
                                            columnNumber: 17
                                        }, this),
                                        valsA.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "cell col-1",
                                                "data-person": p,
                                                "data-category": CAT_A,
                                                "data-value": v
                                            }, `${p}-${CAT_A}-${v}`, false, {
                                                fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                                lineNumber: 482,
                                                columnNumber: 19
                                            }, this)),
                                        valsB.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "cell col-2",
                                                "data-person": p,
                                                "data-category": CAT_B,
                                                "data-value": v
                                            }, `${p}-${CAT_B}-${v}`, false, {
                                                fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                                lineNumber: 485,
                                                columnNumber: 19
                                            }, this)),
                                        valsC.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "cell col-3",
                                                "data-person": p,
                                                "data-category": CAT_C,
                                                "data-value": v
                                            }, `${p}-${CAT_C}-${v}`, false, {
                                                fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                                lineNumber: 488,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, `p-${p}`, true, {
                                    fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                    lineNumber: 478,
                                    columnNumber: 15
                                }, this)),
                            valsC.map((left, idxRow)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "block-2",
                                    children: [
                                        idxRow === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            rowSpan: valsC.length,
                                            className: "sideLabel groupLeft row-2",
                                            children: CAT_C
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 496,
                                            columnNumber: 34
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "rowLeft",
                                            children: left
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 497,
                                            columnNumber: 17
                                        }, this),
                                        valsA.map((top)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "cell col-1",
                                                "data-pair": `${CAT_C}|${CAT_A}`,
                                                "data-leftcat": CAT_C,
                                                "data-left": left,
                                                "data-topcat": CAT_A,
                                                "data-top": top
                                            }, `${CAT_C}|${CAT_A}-${left}-${top}`, false, {
                                                fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                                lineNumber: 499,
                                                columnNumber: 19
                                            }, this)),
                                        valsB.map((top)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "cell col-2",
                                                "data-pair": `${CAT_C}|${CAT_B}`,
                                                "data-leftcat": CAT_C,
                                                "data-left": left,
                                                "data-topcat": CAT_B,
                                                "data-top": top
                                            }, `${CAT_C}|${CAT_B}-${left}-${top}`, false, {
                                                fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                                lineNumber: 508,
                                                columnNumber: 19
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "blank col-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 516,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "blank col-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 516,
                                            columnNumber: 50
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "blank col-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 516,
                                            columnNumber: 83
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "blank col-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 516,
                                            columnNumber: 116
                                        }, this)
                                    ]
                                }, `c-${left}`, true, {
                                    fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                    lineNumber: 495,
                                    columnNumber: 15
                                }, this)),
                            valsB.map((left, idxRow)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "block-boisson",
                                    children: [
                                        idxRow === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            rowSpan: valsB.length,
                                            className: "sideLabel groupLeft row-3",
                                            children: CAT_B
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 523,
                                            columnNumber: 34
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "rowLeft",
                                            children: left
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 524,
                                            columnNumber: 17
                                        }, this),
                                        valsA.map((top)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "cell col-1",
                                                "data-pair": `${CAT_B}|${CAT_A}`,
                                                "data-leftcat": CAT_B,
                                                "data-left": left,
                                                "data-topcat": CAT_A,
                                                "data-top": top
                                            }, `${CAT_B}|${CAT_A}-${left}-${top}`, false, {
                                                fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                                lineNumber: 526,
                                                columnNumber: 19
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "blank col-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 534,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "blank col-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 534,
                                            columnNumber: 50
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "blank col-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 534,
                                            columnNumber: 83
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "blank col-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 534,
                                            columnNumber: 116
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "blank col-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 535,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "blank col-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 535,
                                            columnNumber: 50
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "blank col-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 535,
                                            columnNumber: 83
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "blank col-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 535,
                                            columnNumber: 116
                                        }, this)
                                    ]
                                }, `b-${left}`, true, {
                                    fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                    lineNumber: 522,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                        lineNumber: 460,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                    lineNumber: 459,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                lineNumber: 458,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "controls",
                style: {
                    flexWrap: "wrap"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        id: "undo",
                        className: "btn",
                        type: "button",
                        disabled: true,
                        children: "Annuler (Ctrl+Z)"
                    }, void 0, false, {
                        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                        lineNumber: 543,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        id: "reset",
                        className: "btn",
                        type: "button",
                        children: "Effacer la grille"
                    }, void 0, false, {
                        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                        lineNumber: 544,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        id: "toggleCorrection",
                        className: "btn",
                        type: "button",
                        children: "Afficher la correction"
                    }, void 0, false, {
                        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                        lineNumber: 545,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                lineNumber: 542,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "answers",
                id: "recap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    children: "Participant"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                    lineNumber: 551,
                                    columnNumber: 13
                                }, this),
                                cfg.categories.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: c
                                    }, `recap-head-${c}`, false, {
                                        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                        lineNumber: 552,
                                        columnNumber: 41
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                            lineNumber: 550,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                        lineNumber: 549,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: cfg.participants.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                "data-person": p,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: p
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                        lineNumber: 558,
                                        columnNumber: 15
                                    }, this),
                                    cfg.categories.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: cfg.recapClasses[c]
                                        }, `recap-${p}-${c}`, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 560,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, `recap-${p}`, true, {
                                fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                lineNumber: 557,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                        lineNumber: 555,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                lineNumber: 548,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "answers hidden",
                id: "solution",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    children: "Correction"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                    lineNumber: 570,
                                    columnNumber: 13
                                }, this),
                                cfg.categories.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: c
                                    }, `sol-head-${c}`, false, {
                                        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                        lineNumber: 571,
                                        columnNumber: 41
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                            lineNumber: 569,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                        lineNumber: 568,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: cfg.participants.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                "data-person": p,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: p
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                        lineNumber: 577,
                                        columnNumber: 15
                                    }, this),
                                    cfg.categories.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: `s-${c.toLowerCase()}`,
                                            children: "—"
                                        }, `sol-${p}-${c}`, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 578,
                                            columnNumber: 43
                                        }, this))
                                ]
                            }, `sol-${p}`, true, {
                                fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                lineNumber: 576,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                        lineNumber: 574,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                lineNumber: 567,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                id: "puzzle-solution",
                type: "application/json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(cfg.solution)
                }
            }, void 0, false, {
                fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                lineNumber: 584,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
        lineNumber: 426,
        columnNumber: 5
    }, this);
}
/** Helpers d'attributs data-* pour éviter dataset:any */ const getData = (el, key)=>el.getAttribute(`data-${key}`);
const setData = (el, key, value)=>{
    if (value === null || value === "") el.removeAttribute(`data-${key}`);
    else el.setAttribute(`data-${key}`, value);
};
function PuzzlePage({ params }) {
    const { level } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"])(params);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const grid = document.getElementById("grid");
        const recapTable = document.getElementById("recap");
        const solutionTable = document.getElementById("solution");
        if (!grid || !recapTable || !solutionTable) return;
        let history = [];
        function updateUndoButton() {
            const btn = document.getElementById("undo");
            if (!btn) return;
            if (history.length === 0) btn.setAttribute("disabled", "true");
            else btn.removeAttribute("disabled");
        }
        function performUndo() {
            const last = history.pop();
            if (!last) return;
            // Restaurer l'état précédent
            setState(last.el, last.prev);
            recomputeForbidden();
            updateRecap();
            saveProgress();
            updateUndoButton();
        }
        // Raccourci clavier Ctrl+Z / Cmd+Z
        document.addEventListener("keydown", (e)=>{
            const isUndo = (e.key === "z" || e.key === "Z") && (e.ctrlKey || e.metaKey) && !e.shiftKey && !e.altKey;
            if (!isUndo) return;
            e.preventDefault();
            performUndo();
        });
        const CELL_STATES = [
            "",
            "no",
            "ok"
        ];
        function inferParticipants() {
            const rows = recapTable ? Array.from(recapTable.querySelectorAll('tbody tr[data-person]')) : [];
            if (rows.length) {
                return rows.map((r)=>r.getAttribute("data-person")).filter((v)=>!!v);
            }
            const ths = grid ? Array.from(grid.querySelectorAll("tr.block-1 .rowLeft")) : [];
            if (ths.length) return ths.map((th)=>th.textContent?.trim() || "").filter(Boolean);
            return [];
        }
        function inferCategories() {
            const heads = recapTable ? Array.from(recapTable.querySelectorAll("thead th")).map((th)=>th.textContent?.trim() || "").filter(Boolean) : [];
            if (heads.length > 1) return heads.slice(1);
            const colHeads = grid ? Array.from(grid.querySelectorAll(".colHead")).map((th)=>th.textContent?.trim() || "").filter(Boolean) : [];
            if (colHeads.length) return colHeads;
            return [];
        }
        function inferRecapClassByCategory(categories) {
            const firstRow = recapTable ? recapTable.querySelector("tbody tr") : null;
            const headCats = recapTable ? Array.from(recapTable.querySelectorAll("thead th")).map((th)=>th.textContent?.trim() || "").slice(1) : [];
            const cells = firstRow ? Array.from(firstRow.querySelectorAll("td")) : [];
            const map = {};
            headCats.forEach((cat, i)=>{
                const td = cells[i];
                if (!td) return;
                const cls = Array.from(td.classList).find((c)=>c.startsWith("r-"));
                if (cls) map[cat] = cls;
            });
            categories.forEach((cat)=>{
                if (!map[cat]) map[cat] = `r-${cat.toLowerCase()}`;
            });
            return map;
        }
        function readJsonSolution() {
            const el = document.getElementById("puzzle-solution");
            if (el) {
                const raw = el.textContent?.trim();
                if (raw) {
                    try {
                        return JSON.parse(raw);
                    } catch  {
                    /* ignore */ }
                }
            }
            return null;
        }
        const CONFIG = {
            participants: inferParticipants(),
            categories: inferCategories(),
            recapClassByCategory: {},
            solution: readJsonSolution() ?? {}
        };
        CONFIG.recapClassByCategory = inferRecapClassByCategory(CONFIG.categories);
        // --- Persistence (localStorage) ---
        const STORAGE_KEY = `puzzle-progress-${level}`;
        const HINTS_STORAGE_KEY = `puzzle-hints-${level}`;
        function saveHintsState() {
            try {
                const list = document.querySelectorAll("#hintsList li");
                const checked = [];
                list.forEach((li, idx)=>{
                    const el = li;
                    if (el.style.textDecoration === "line-through") {
                        checked.push(idx);
                    }
                });
                localStorage.setItem(HINTS_STORAGE_KEY, JSON.stringify(checked));
            } catch  {}
        }
        function applySavedHints() {
            try {
                const raw = localStorage.getItem(HINTS_STORAGE_KEY);
                if (!raw) return;
                const checked = JSON.parse(raw);
                const set = new Set(checked);
                document.querySelectorAll("#hintsList li").forEach((li, idx)=>{
                    const el = li;
                    el.style.cursor = "pointer";
                    el.style.textDecoration = set.has(idx) ? "line-through" : "";
                });
            } catch  {}
        }
        function makeCellKey(td) {
            return [
                getData(td, "person") || "",
                getData(td, "category") || "",
                getData(td, "value") || "",
                getData(td, "pair") || "",
                getData(td, "left") || "",
                getData(td, "top") || ""
            ].join("|");
        }
        function saveProgress() {
            if (!grid) return;
            const data = {};
            grid.querySelectorAll(".cell").forEach((td)=>{
                const state = getData(td, "state") || "";
                if (state) {
                    data[makeCellKey(td)] = state;
                }
            });
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
            } catch  {}
        }
        function loadProgress() {
            try {
                const raw = localStorage.getItem(STORAGE_KEY);
                if (!raw) return;
                const data = JSON.parse(raw);
                grid?.querySelectorAll(".cell").forEach((td)=>{
                    const key = makeCellKey(td);
                    const st = data[key];
                    if (st === "ok" || st === "no") {
                        setState(td, st);
                    } else if (!st) {
                    // leave empty
                    }
                });
            } catch  {}
        }
        function setState(td, state) {
            setData(td, "state", state);
            td.innerHTML = "";
            if (state === "ok") {
                const s = document.createElement("span");
                s.className = "mark ok";
                s.textContent = "◯";
                td.appendChild(s);
            } else if (state === "no") {
                const s = document.createElement("span");
                s.className = "mark no";
                s.textContent = "✗";
                td.appendChild(s);
            }
        }
        function setForbidden(td, on) {
            const current = getData(td, "state");
            // Never overwrite a manual user choice
            if (current === "ok" || current === "no") return;
            if (on) {
                // mark as auto-forbid without changing the user state
                td.setAttribute("data-autoforbid", "1");
                td.classList.add("forbid");
                // render a subtle dot if and only if the cell is otherwise empty
                if (!current) {
                    td.innerHTML = "";
                    const s = document.createElement("span");
                    s.className = "mark forbid";
                    s.textContent = "✗"; // distinct from the user's red cross
                    td.appendChild(s);
                }
            } else {
                // remove auto forbid only
                if (td.getAttribute("data-autoforbid") === "1") {
                    td.removeAttribute("data-autoforbid");
                    td.classList.remove("forbid");
                    // Clear the dot only if there's no manual state
                    if (!current) {
                        td.innerHTML = "";
                    }
                }
            }
        }
        function recomputeForbidden() {
            grid?.querySelectorAll('.cell').forEach((cell)=>{
                const td = cell;
                // Only clear previous auto-forbid markers
                if (td.getAttribute('data-autoforbid') === '1') {
                    td.removeAttribute('data-autoforbid');
                    td.classList.remove('forbid');
                    // remove visual dot if cell has no manual state
                    if (!getData(td, 'state')) {
                        td.innerHTML = '';
                    }
                }
            });
            // Règle A
            CONFIG.participants.forEach((person)=>{
                CONFIG.categories.forEach((category)=>{
                    const cells = Array.from(grid?.querySelectorAll(`.cell[data-person="${person}"][data-category="${category}"]`) || []);
                    const ok = cells.find((c)=>getData(c, "state") === "ok");
                    if (ok) cells.forEach((c)=>{
                        if (c !== ok) setForbidden(c, true);
                    });
                });
            });
            // Règle B
            CONFIG.categories.forEach((category)=>{
                const allValueCells = Array.from(grid?.querySelectorAll(`.cell[data-category="${category}"][data-person]`) || []);
                const values = [
                    ...new Set(allValueCells.map((td)=>getData(td, "value") || ""))
                ];
                values.forEach((value)=>{
                    const sameValueCells = allValueCells.filter((td)=>getData(td, "value") === value);
                    const ok = sameValueCells.find((td)=>getData(td, "state") === "ok");
                    if (ok) sameValueCells.forEach((td)=>{
                        if (td !== ok) setForbidden(td, true);
                    });
                });
            });
            // Règle C (paires)
            const pairs = [
                ...new Set(Array.from(grid?.querySelectorAll('.cell[data-pair]') || []).map((td)=>getData(td, "pair") || ""))
            ];
            pairs.forEach((pair)=>{
                const cells = grid ? Array.from(grid.querySelectorAll(`.cell[data-pair="${pair}"]`)) : [];
                const lefts = [
                    ...new Set(cells.map((td)=>getData(td, "left") || ""))
                ];
                lefts.forEach((left)=>{
                    const rowCells = cells.filter((td)=>getData(td, "left") === left);
                    const ok = rowCells.find((td)=>getData(td, "state") === "ok");
                    if (ok) rowCells.forEach((td)=>{
                        if (td !== ok) setForbidden(td, true);
                    });
                });
                const tops = [
                    ...new Set(cells.map((td)=>getData(td, "top") || ""))
                ];
                tops.forEach((top)=>{
                    const colCells = cells.filter((td)=>getData(td, "top") === top);
                    const ok = colCells.find((td)=>getData(td, "state") === "ok");
                    if (ok) colCells.forEach((td)=>{
                        if (td !== ok) setForbidden(td, true);
                    });
                });
            });
        }
        function updateRecap() {
            CONFIG.participants.forEach((p)=>{
                CONFIG.categories.forEach((cat)=>{
                    const ok = Array.from(grid?.querySelectorAll(`.cell[data-person="${p}"][data-category="${cat}"][data-state="ok"]`) || []);
                    const val = ok.map((td)=>getData(td, "value")).filter(Boolean);
                    const cls = CONFIG.recapClassByCategory[cat];
                    const cell = document.querySelector(`#recap tbody tr[data-person="${p}"] .${cls}`);
                    if (!cell) return;
                    if (val.length === 1) cell.textContent = val[0];
                    else if (val.length === 0) cell.textContent = "—";
                    else cell.textContent = "⚠︎ multiple";
                });
            });
        }
        function fillSolution(map) {
            if (!map) return;
            CONFIG.participants.forEach((p)=>{
                const row = document.querySelector(`#solution tbody tr[data-person="${p}"]`);
                if (!row || !map[p]) return;
                const headers = solutionTable ? Array.from(solutionTable.querySelectorAll("thead th")).map((th)=>th.textContent?.trim() || "").slice(1) : [];
                const tds = Array.from(row.querySelectorAll("td"));
                headers.forEach((cat, i)=>{
                    const td = tds[i];
                    if (td) td.textContent = map[p][cat] || "—";
                });
            });
        }
        grid.addEventListener("click", (e)=>{
            const td = e.target.closest(".cell");
            if (!td) return;
            // 🚫 Bloquer tout clic sur une cellule grisée automatiquement
            if (td.getAttribute('data-autoforbid') === '1') {
                return; // ne pas autoriser la modification d'une cellule auto-forbid
            }
            const cur = getData(td, "state") || "";
            const next = CELL_STATES[(CELL_STATES.indexOf(cur) + 1) % CELL_STATES.length];
            // Appliquer la modification
            setState(td, next);
            // Enregistrer uniquement les actions manuelles de l'utilisateur
            if (cur !== next) {
                history.push({
                    el: td,
                    prev: cur,
                    next
                });
                updateUndoButton();
            }
            recomputeForbidden();
            updateRecap();
            saveProgress();
        });
        document.getElementById("reset")?.addEventListener("click", ()=>{
            grid.querySelectorAll(".cell").forEach((td)=>setState(td, ""));
            updateRecap();
            recomputeForbidden();
            try {
                localStorage.removeItem(STORAGE_KEY);
            } catch  {}
            history = [];
            updateUndoButton();
        });
        document.getElementById("undo")?.addEventListener("click", ()=>{
            performUndo();
        });
        document.getElementById("toggleCorrection")?.addEventListener("click", ()=>{
            const sol = solutionTable;
            const btn = document.getElementById("toggleCorrection");
            if (!btn) return;
            sol.classList.toggle("hidden");
            btn.textContent = sol.classList.contains("hidden") ? "Afficher la correction" : "Masquer la correction";
        });
        document.getElementById("toggleHints")?.addEventListener("click", ()=>{
            const list = document.getElementById("hintsList");
            const btn = document.getElementById("toggleHints");
            if (!list || !btn) return;
            list.classList.toggle("hidden");
            btn.textContent = list.classList.contains("hidden") ? "Afficher les indices" : "Masquer les indices";
        });
        // Toggle strikethrough on hint click + pointer cursor (with persistence)
        applySavedHints();
        document.querySelectorAll("#hintsList li").forEach((li)=>{
            const el = li;
            el.style.cursor = "pointer";
            li.addEventListener("click", ()=>{
                el.style.textDecoration = el.style.textDecoration === "line-through" ? "" : "line-through";
                saveHintsState();
            });
        });
        fillSolution(CONFIG.solution);
        loadProgress();
        updateRecap();
        recomputeForbidden();
    }, [
        level
    ]);
    const cfg = LEVEL_CONFIGS[level];
    if (!cfg) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            style: {
                maxWidth: 980,
                margin: "0 auto"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: [
                        "Niveau ",
                        level
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                    lineNumber: 1017,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Ce niveau n’est pas encore défini."
                }, void 0, false, {
                    fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                    lineNumber: 1018,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
            lineNumber: 1016,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PuzzleView, {
        cfg: cfg
    }, void 0, false, {
        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
        lineNumber: 1023,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__315a92d2._.js.map