"use client";

import { useEffect, use as reactUse } from "react";
import Image from "next/image";
import Link from "next/link";

/** Types utilitaires */
type Solution = Record<string, Record<string, string>>;

interface Config {
  participants: string[];
  categories: string[];
  recapClassByCategory: Record<string, string>;
  solution: Solution;
}

type LevelConfig = {
  level: string;
  title: string;
  subtitle: string;
  image: { src: string; alt: string };
  participants: string[];
  categories: [string, string, string];
  values: Record<string, string[]>;
  hints: string[];
  solution: Solution;
  recapClasses: Record<string, string>;
};

const LEVEL_CONFIGS: Record<string, LevelConfig> = {
  "1": {
    level: "1",
    title: "Qui a gagné quoi à la fête foraine ?",
    subtitle: "Niveau 1",
    image: {
      src: "https://www.bonpourlesoreilles.net/wp-content/uploads/2019/01/histoire-fete-foraine.jpg",
      alt: "Ballons de fête foraine",
    },
    participants: ["Alice", "Benoît", "Clara", "David"],
    categories: ["Ballon", "Boisson", "Lot"],
    values: {
      Ballon: ["Rouge", "Bleu", "Vert", "Jaune"],
      Boisson: ["Soda", "Jus", "Limonade", "Thé glacé"],
      Lot: ["Peluche", "Casquette", "Bonbon géant", "Porte-clés"],
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
      Alice: { Ballon: "Rouge", Boisson: "Jus", Lot: "Peluche" },
      "Benoît": { Ballon: "Bleu", Boisson: "Soda", Lot: "Casquette" },
      Clara: { Ballon: "Vert", Boisson: "Limonade", Lot: "Porte-clés" },
      David: { Ballon: "Jaune", Boisson: "Thé glacé", Lot: "Bonbon géant" },
    },
    recapClasses: { Ballon: "r-ball", Boisson: "r-bois", Lot: "r-lot" },
  },
  "2": {
    level: "2",
    title: "Club de lecture : qui lit quoi et avec quel accessoire ?",
    subtitle: "Niveau 2",
    image: {
      src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&amp;auto=format&amp;fit=crop&amp;w=1200&amp;h=600",
      alt: "Club de lecture avec livres et boissons chaudes",
    },
    participants: ["Emma", "Félix", "Jade", "Lucas"],
    categories: ["Genre", "Boisson", "Accessoire"],
    values: {
      Genre: ["Policier", "Fantastique", "Historique", "Science-fiction"],
      Boisson: ["Café", "Thé", "Chocolat chaud", "Cappuccino"],
      Accessoire: ["Marque-page", "Lunettes", "Écharpe", "Carnet"],
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
      Emma: { Genre: "Fantastique", Boisson: "Thé", Accessoire: "Marque-page" },
      "Félix": { Genre: "Policier", Boisson: "Café", Accessoire: "Lunettes" },
      Jade: { Genre: "Historique", Boisson: "Chocolat chaud", Accessoire: "Carnet" },
      Lucas: { Genre: "Science-fiction", Boisson: "Cappuccino", Accessoire: "Écharpe" },
    },
    recapClasses: { Genre: "r-genre", Boisson: "r-bois", Accessoire: "r-acc" },
  },
  "3": {
    level: "3",
    title: "Voyage en Europe : qui visite quoi, avec quel transport et quel plat ?",
    subtitle: "Niveau 3",
    image: {
      src: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&auto=format&fit=crop&w=1200&h=600",
      alt: "Voyage en Europe avec valise et repas typiques"
    },
    participants: ["Alice", "Bruno", "Clara", "David"],
    categories: ["Ville", "Transport", "Plat"],
    values: {
      Ville: ["Paris", "Rome", "Berlin", "Madrid"],
      Transport: ["Avion", "Train", "Bus", "Vélo"],
      Plat: ["Croissant", "Pizza", "Currywurst", "Paella"]
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
      Alice: { Ville: "Rome", Transport: "Train", Plat: "Pizza" },
      Bruno: { Ville: "Paris", Transport: "Avion", Plat: "Croissant" },
      Clara: { Ville: "Madrid", Transport: "Vélo", Plat: "Paella" },
      David: { Ville: "Berlin", Transport: "Bus", Plat: "Currywurst" }
    },
    recapClasses: { Ville: "r-ville", Transport: "r-trans", Plat: "r-plat" }
  },
  "4": {
    level: "4",
    title: "Festival de musique : qui écoute quel groupe, avec quelle boisson et dans quelle zone ?",
    subtitle: "Niveau 4",
    image: {
      src: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?q=80&auto=format&fit=crop&w=1200&h=600",
      alt: "Festival de musique avec foule et scène"
    },
    participants: ["Sophie", "Hugo", "Maya", "Nicolas"],
    categories: ["Groupe", "Boisson", "Zone"],
    values: {
      Groupe: ["Rockeurs", "DJ Electro", "Jazz Band", "Chanteur Pop"],
      Boisson: ["Soda", "Eau", "Bière", "Cocktail"],
      Zone: ["VIP", "Pelouse", "Tribune", "Devant la scène"]
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
      Sophie: { Groupe: "Rockeurs", Boisson: "Soda", Zone: "VIP" },
      Hugo: { Groupe: "DJ Electro", Boisson: "Cocktail", Zone: "Devant la scène" },
      Maya: { Groupe: "Jazz Band", Boisson: "Bière", Zone: "Pelouse" },
      Nicolas: { Groupe: "Chanteur Pop", Boisson: "Eau", Zone: "Tribune" }
    },
    recapClasses: { Groupe: "r-groupe", Boisson: "r-bois", Zone: "r-zone" }
  },
  "5": {
    level: "5",
    title: "Animaux de compagnie : qui a quel animal, quel jouet et dort où ?",
    subtitle: "Niveau 5",
    image: {
      src: "https://images.unsplash.com/photo-1558788353-f76d92427f16?q=80&auto=format&fit=crop&w=1200&h=600",
      alt: "Animaux de compagnie et accessoires"
    },
    participants: ["Camille", "Louis", "Inès", "Thomas"],
    categories: ["Animal", "Jouet", "Lieu"],
    values: {
      Animal: ["Chien", "Chat", "Lapin", "Perroquet"],
      Jouet: ["Balle", "Pelote", "Carotte", "Cloche"],
      Lieu: ["Panier", "Cage", "Arbre à chat", "Perchoir"]
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
      Camille: { Animal: "Chien", Jouet: "Balle", Lieu: "Panier" },
      Louis: { Animal: "Chat", Jouet: "Pelote", Lieu: "Arbre à chat" },
      Inès: { Animal: "Lapin", Jouet: "Carotte", Lieu: "Cage" },
      Thomas: { Animal: "Perroquet", Jouet: "Cloche", Lieu: "Perchoir" }
    },
    recapClasses: { Animal: "r-ani", Jouet: "r-jouet", Lieu: "r-lieu" }
  },
  "6": {
    level: "6",
    title: "Compétition sportive : qui pratique quel sport, porte quelle couleur et gagne quelle médaille ?",
    subtitle: "Niveau 6",
    image: {
      src: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?q=80&auto=format&fit=crop&w=1200&h=600",
      alt: "Compétition sportive avec athlètes"
    },
    participants: ["Élodie", "Marc", "Sarah", "Antoine"],
    categories: ["Sport", "Couleur", "Médaille"],
    values: {
      Sport: ["Natation", "Athlétisme", "Cyclisme", "Tennis"],
      Couleur: ["Rouge", "Bleu", "Vert", "Jaune"],
      Médaille: ["Or", "Argent", "Bronze", "Aucune"]
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
      Élodie: { Sport: "Natation", Couleur: "Bleu", Médaille: "Or" },
      Marc: { Sport: "Cyclisme", Couleur: "Jaune", Médaille: "Bronze" },
      Sarah: { Sport: "Athlétisme", Couleur: "Rouge", Médaille: "Argent" },
      Antoine: { Sport: "Tennis", Couleur: "Vert", Médaille: "Aucune" }
    },
    recapClasses: { Sport: "r-sport", Couleur: "r-coul", Médaille: "r-med" }
  },
  "7": {
    level: "7",
    title: "Musée : qui a visité quelle salle, pris quel audioguide et acheté quel souvenir ?",
    subtitle: "Niveau 7",
    image: {
      src: "https://images.unsplash.com/photo-1520697222861-e772ce2d8b4a?q=80&auto=format&fit=crop&w=1200&h=600",
      alt: "Galeries d'un musée"
    },
    participants: ["Anaïs", "Bastien", "Chloé", "Damien"],
    categories: ["Salle", "Audioguide", "Souvenir"],
    values: {
      Salle: ["Peinture", "Sculpture", "Histoire naturelle", "Photographie"],
      Audioguide: ["Français", "Anglais", "Espagnol", "Allemand"],
      Souvenir: ["Carte postale", "Magnet", "Catalogue", "T-shirt"]
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
      "Anaïs": { Salle: "Peinture", Audioguide: "Français", Souvenir: "Carte postale" },
      "Bastien": { Salle: "Sculpture", Audioguide: "Allemand", Souvenir: "T-shirt" },
      "Chloé": { Salle: "Photographie", Audioguide: "Anglais", Souvenir: "Catalogue" },
      "Damien": { Salle: "Histoire naturelle", Audioguide: "Espagnol", Souvenir: "Magnet" }
    },
    recapClasses: { Salle: "r-salle", Audioguide: "r-audio", Souvenir: "r-souv" }
  },
  "8": {
    level: "8",
    title: "Parc d’attractions : qui a fait quelle attraction, avec quel pass et quel snack ?",
    subtitle: "Niveau 8",
    image: {
      src: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&auto=format&fit=crop&w=1200&h=600",
      alt: "Parc d'attractions de nuit"
    },
    participants: ["Léa", "Noé", "Pauline", "Rayan"],
    categories: ["Attraction", "Pass", "Snack"],
    values: {
      Attraction: ["Montagnes russes", "Grande roue", "Maison hantée", "Auto-tamponneuses"],
      Pass: ["Express", "Classique", "VIP", "Soirée"],
      Snack: ["Churros", "Crêpe", "Popcorn", "Glace"]
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
      "Léa": { Attraction: "Montagnes russes", Pass: "Express", Snack: "Popcorn" },
      "Noé": { Attraction: "Grande roue", Pass: "VIP", Snack: "Glace" },
      "Pauline": { Attraction: "Maison hantée", Pass: "Soirée", Snack: "Crêpe" },
      "Rayan": { Attraction: "Auto-tamponneuses", Pass: "Classique", Snack: "Churros" }
    },
    recapClasses: { Attraction: "r-attr", Pass: "r-pass", Snack: "r-snack" }
  },
  "9": {
    level: "9",
    title: "Jardinage : qui s’occupe de quelle plante, avec quel outil et à quel endroit ?",
    subtitle: "Niveau 9",
    image: {
      src: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&auto=format&fit=crop&w=1200&h=600",
      alt: "Outils de jardinage"
    },
    participants: ["Nina", "Omar", "Priya", "Quentin"],
    categories: ["Plante", "Outil", "Endroit"],
    values: {
      Plante: ["Roses", "Tomates", "Lavande", "Basilic"],
      Outil: ["Arrosoir", "Bêche", "Sécateur", "Gants"],
      Endroit: ["Balcon", "Potager", "Massif", "Fenêtre"]
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
      "Nina": { Plante: "Lavande", Outil: "Sécateur", Endroit: "Massif" },
      "Omar": { Plante: "Tomates", Outil: "Bêche", Endroit: "Potager" },
      "Priya": { Plante: "Basilic", Outil: "Arrosoir", Endroit: "Fenêtre" },
      "Quentin": { Plante: "Roses", Outil: "Gants", Endroit: "Balcon" }
    },
    recapClasses: { Plante: "r-plante", Outil: "r-outil", Endroit: "r-lieu" }
  },
  "10": {
    level: "10",
    title: "Cinéma : qui a vu quel genre, bu quelle boisson et s’est assis où ?",
    subtitle: "Niveau 10",
    image: {
      src: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&auto=format&fit=crop&w=1200&h=600",
      alt: "Salle de cinéma"
    },
    participants: ["Eva", "Gaspard", "Imane", "Julien"],
    categories: ["Genre", "Boisson", "Place"],
    values: {
      Genre: ["Action", "Comédie", "Fantastique", "Documentaire"],
      Boisson: ["Cola", "Eau", "Thé glacé", "Limonade"],
      Place: ["Rang 1", "Rang 3", "Rang 5", "Rang 7"]
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
      "Eva": { Genre: "Comédie", Boisson: "Limonade", Place: "Rang 3" },
      "Gaspard": { Genre: "Documentaire", Boisson: "Eau", Place: "Rang 7" },
      "Imane": { Genre: "Fantastique", Boisson: "Thé glacé", Place: "Rang 5" },
      "Julien": { Genre: "Action", Boisson: "Cola", Place: "Rang 1" }
    },
    recapClasses: { Genre: "r-genre2", Boisson: "r-bois2", Place: "r-place" }
  },
  "11": {
    level: "11",
    title: "Boulangerie : qui a pris quelle viennoiserie, quelle boisson et à quel moment ?",
    subtitle: "Niveau 11",
    image: {
      src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&auto=format&fit=crop&w=1200&h=600",
      alt: "Vitrine de boulangerie"
    },
    participants: ["Karim", "Lola", "Maëlys", "Nathan"],
    categories: ["Viennoiserie", "Boisson", "Moment"],
    values: {
      Viennoiserie: ["Croissant", "Pain au chocolat", "Pain aux raisins", "Brioche"],
      Boisson: ["Café", "Thé", "Chocolat chaud", "Latte"],
      Moment: ["Matin tôt", "Milieu de matinée", "Après-midi", "Soir"]
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
      "Karim": { Viennoiserie: "Pain au chocolat", Boisson: "Café", Moment: "Matin tôt" },
      "Lola": { Viennoiserie: "Croissant", Boisson: "Thé", Moment: "Milieu de matinée" },
      "Maëlys": { Viennoiserie: "Brioche", Boisson: "Chocolat chaud", Moment: "Après-midi" },
      "Nathan": { Viennoiserie: "Pain aux raisins", Boisson: "Latte", Moment: "Soir" }
    },
    recapClasses: { Viennoiserie: "r-vien", Boisson: "r-bois3", Moment: "r-moment" }
  },
  "12": {
    level: "12",
    title: "Hackathon : qui a codé avec quel langage, sur quel système et avec quel outil ?",
    subtitle: "Niveau 12",
    image: {
      src: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&auto=format&fit=crop&w=1200&h=600",
      alt: "Écrans d’ordinateur pendant un hackathon"
    },
    participants: ["Océane", "Pierre", "Salomé", "Tariq"],
    categories: ["Langage", "Système", "Outil"],
    values: {
      Langage: ["Python", "JavaScript", "Go", "Ruby"],
      Système: ["Windows", "macOS", "Linux", "ChromeOS"],
      Outil: ["VS Code", "Vim", "PyCharm", "WebStorm"]
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
      "Océane": { Langage: "Python", Système: "macOS", Outil: "PyCharm" },
      "Pierre": { Langage: "JavaScript", Système: "Windows", Outil: "WebStorm" },
      "Salomé": { Langage: "Go", Système: "Linux", Outil: "Vim" },
      "Tariq": { Langage: "Ruby", Système: "ChromeOS", Outil: "VS Code" }
    },
    recapClasses: { Langage: "r-lang", Système: "r-sys", Outil: "r-outil2" }
  },
};

function PuzzleView({ cfg }: { cfg: LevelConfig }) {
  const [CAT_A, CAT_B, CAT_C] = cfg.categories;
  const valsA = cfg.values[CAT_A];
  const valsB = cfg.values[CAT_B];
  const valsC = cfg.values[CAT_C];

  return (
    <main style={{ maxWidth: 980, margin: "0 auto" }}>
      <h2>{cfg.title}</h2>
      <h3>{cfg.subtitle}</h3>

      <div className="controls" style={{ textAlign: "center", marginBottom: 16 }}>
        <Link href="/" className="btn">← Sélection de niveau</Link>
      </div>

      <img
        src={cfg.image.src}
        alt={cfg.image.alt}
        className="illus"
        width={1200}
        height={600}
      />

      {/* Indices */}
      <section id="hints" className="hints card">
        <div className="card-body">
          <div className="hints-header">
            <h4 className="hints-title">Indices</h4>
            <button id="toggleHints" className="btn" type="button">Masquer les indices</button>
          </div>
          <ol className="hints-list" id="hintsList">
            {cfg.hints.map((h, i) => (
              <li key={i}><span dangerouslySetInnerHTML={{ __html: h }} /></li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== Grille (structure identique, libellés dynamiques) ===== */}
      <div className="gridWrap">
        <table className="grid" id="grid">
          <tbody>
            <tr>
              <th className="sideLabel topBlank groupLeft"></th>
              <th className="sideLabel topBlank rowLeft"></th>
              <th className="colHead col-1" colSpan={4}>{CAT_A}</th>
              <th className="colHead col-2" colSpan={4}>{CAT_B}</th>
              <th className="colHead col-3" colSpan={4}>{CAT_C}</th>
            </tr>
            <tr>
              <th className="sideLabel groupLeft"></th>
              <th className="sideLabel rowLeft"></th>
              {valsA.map((v) => (<th key={`${CAT_A}-${v}`} className="v col-1">{v}</th>))}
              {valsB.map((v) => (<th key={`${CAT_B}-${v}`} className="v col-2">{v}</th>))}
              {valsC.map((v) => (<th key={`${CAT_C}-${v}`} className="v col-3">{v}</th>))}
            </tr>

            {/* ===== Bloc 1 : PERSONNE ===== */}
            {cfg.participants.map((p, idx) => (
              <tr key={`p-${p}`} className="block-1">
                {idx === 0 && <th rowSpan={cfg.participants.length} className="sideLabel groupLeft row-1">Personne</th>}
                <th className="rowLeft">{p}</th>
                {valsA.map((v) => (
                  <td key={`${p}-${CAT_A}-${v}`} className="cell col-1" data-person={p} data-category={CAT_A} data-value={v}></td>
                ))}
                {valsB.map((v) => (
                  <td key={`${p}-${CAT_B}-${v}`} className="cell col-2" data-person={p} data-category={CAT_B} data-value={v}></td>
                ))}
                {valsC.map((v) => (
                  <td key={`${p}-${CAT_C}-${v}`} className="cell col-3" data-person={p} data-category={CAT_C} data-value={v}></td>
                ))}
              </tr>
            ))}

            {/* ===== Bloc 2 : {CAT_C} (paires avec A &amp; B) ===== */}
            {valsC.map((left, idxRow) => (
              <tr key={`c-${left}`} className="block-2">
                {idxRow === 0 && <th rowSpan={valsC.length} className="sideLabel groupLeft row-2">{CAT_C}</th>}
                <th className="rowLeft">{left}</th>
                {valsA.map((top) => (
                  <td key={`${CAT_C}|${CAT_A}-${left}-${top}`}
                    className="cell col-1"
                    data-pair={`${CAT_C}|${CAT_A}`}
                    data-leftcat={CAT_C}
                    data-left={left}
                    data-topcat={CAT_A}
                    data-top={top}></td>
                ))}
                {valsB.map((top) => (
                  <td key={`${CAT_C}|${CAT_B}-${left}-${top}`}
                    className="cell col-2"
                    data-pair={`${CAT_C}|${CAT_B}`}
                    data-leftcat={CAT_C}
                    data-left={left}
                    data-topcat={CAT_B}
                    data-top={top}></td>
                ))}
                <td className="blank col-3"></td><td className="blank col-3"></td><td className="blank col-3"></td><td className="blank col-3"></td>
              </tr>
            ))}

            {/* ===== Bloc 3 : {CAT_B} (paires avec A) ===== */}
            {valsB.map((left, idxRow) => (
              <tr key={`b-${left}`} className="block-boisson">
                {idxRow === 0 && <th rowSpan={valsB.length} className="sideLabel groupLeft row-3">{CAT_B}</th>}
                <th className="rowLeft">{left}</th>
                {valsA.map((top) => (
                  <td key={`${CAT_B}|${CAT_A}-${left}-${top}`}
                    className="cell col-1"
                    data-pair={`${CAT_B}|${CAT_A}`}
                    data-leftcat={CAT_B}
                    data-left={left}
                    data-topcat={CAT_A}
                    data-top={top}></td>
                ))}
                <td className="blank col-2"></td><td className="blank col-2"></td><td className="blank col-2"></td><td className="blank col-2"></td>
                <td className="blank col-3"></td><td className="blank col-3"></td><td className="blank col-3"></td><td className="blank col-3"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="controls" style={{ flexWrap: "wrap" }}>
        <button id="undo" className="btn" type="button" disabled>Annuler (Ctrl+Z)</button>
        <button id="reset" className="btn" type="button">Effacer la grille</button>
        <button id="toggleCorrection" className="btn" type="button">Afficher la correction</button>
      </div>

      <table className="answers" id="recap">
        <thead>
          <tr>
            <th>Participant</th>
            {cfg.categories.map((c) => (<th key={`recap-head-${c}`}>{c}</th>))}
          </tr>
        </thead>
        <tbody>
          {cfg.participants.map((p) => (
            <tr key={`recap-${p}`} data-person={p}>
              <th>{p}</th>
              {cfg.categories.map((c) => (
                <td key={`recap-${p}-${c}`} className={cfg.recapClasses[c]}></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <table className="answers hidden" id="solution">
        <thead>
          <tr>
            <th>Correction</th>
            {cfg.categories.map((c) => (<th key={`sol-head-${c}`}>{c}</th>))}
          </tr>
        </thead>
        <tbody>
          {cfg.participants.map((p) => (
            <tr key={`sol-${p}`} data-person={p}>
              <th>{p}</th>
              {cfg.categories.map((c) => (<td key={`sol-${p}-${c}`} className={`s-${c.toLowerCase()}`}>—</td>))}
            </tr>
          ))}
        </tbody>
      </table>

      <script
        id="puzzle-solution"
        type="application/json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(cfg.solution),
        }}
      />
    </main>
  );
}

/** Helpers d'attributs data-* pour éviter dataset:any */
const getData = (el: Element, key: string): string | null =>
  el.getAttribute(`data-${key}`);

const setData = (el: Element, key: string, value: string | null) => {
  if (value === null || value === "") el.removeAttribute(`data-${key}`);
  else el.setAttribute(`data-${key}`, value);
};

export default function PuzzlePage({ params }: { params: Promise<{ level: string }> }) {
  const { level } = reactUse(params);

  useEffect(() => {
    const grid = document.getElementById("grid") as HTMLTableElement | null;
    const recapTable = document.getElementById("recap") as HTMLTableElement | null;
    const solutionTable = document.getElementById("solution") as HTMLTableElement | null;
    if (!grid || !recapTable || !solutionTable) return;

    // --- Historique pour annuler (Ctrl+Z / bouton) ---
    type CellState = "" | "no" | "ok";
    let history: Array<{ el: HTMLElement; prev: CellState; next: CellState }> = [];

    function updateUndoButton() {
      const btn = document.getElementById("undo") as HTMLButtonElement | null;
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
    document.addEventListener("keydown", (e) => {
      const isUndo = (e.key === "z" || e.key === "Z") && (e.ctrlKey || e.metaKey) && !e.shiftKey && !e.altKey;
      if (!isUndo) return;
      e.preventDefault();
      performUndo();
    });

    const CELL_STATES: Array<"" | "no" | "ok"> = ["", "no", "ok"];

    function inferParticipants(): string[] {
      const rows = recapTable ? Array.from(recapTable.querySelectorAll('tbody tr[data-person]')) : [];
      if (rows.length) {
        return rows
          .map((r) => r.getAttribute("data-person"))
          .filter((v): v is string => !!v);
      }
      const ths = grid ? Array.from(grid.querySelectorAll("tr.block-1 .rowLeft")) : [];
      if (ths.length) return ths.map((th) => (th as HTMLElement).textContent?.trim() || "").filter(Boolean);
      return [];
    }

    function inferCategories(): string[] {
      const heads = recapTable
        ? Array.from(recapTable.querySelectorAll("thead th"))
          .map((th) => (th as HTMLElement).textContent?.trim() || "")
          .filter(Boolean)
        : [];
      if (heads.length > 1) return heads.slice(1);
      const colHeads = grid
        ? Array.from(grid.querySelectorAll(".colHead"))
          .map((th) => (th as HTMLElement).textContent?.trim() || "")
          .filter(Boolean)
        : [];
      if (colHeads.length) return colHeads;
      return [];
    }

    function inferRecapClassByCategory(categories: string[]): Record<string, string> {
      const firstRow = recapTable ? recapTable.querySelector("tbody tr") : null;
      const headCats = recapTable
        ? Array.from(recapTable.querySelectorAll("thead th"))
          .map((th) => th.textContent?.trim() || "")
          .slice(1)
        : [];
      const cells = firstRow ? Array.from(firstRow.querySelectorAll("td")) : [];
      const map: Record<string, string> = {};
      headCats.forEach((cat, i) => {
        const td = cells[i];
        if (!td) return;
        const cls = Array.from(td.classList).find((c) => c.startsWith("r-"));
        if (cls) map[cat] = cls;
      });
      categories.forEach((cat) => {
        if (!map[cat]) map[cat] = `r-${cat.toLowerCase()}`;
      });
      return map;
    }

    function readJsonSolution(): Solution | null {
      const el = document.getElementById("puzzle-solution");
      if (el) {
        const raw = el.textContent?.trim();
        if (raw) {
          try {
            return JSON.parse(raw) as Solution;
          } catch {
            /* ignore */
          }
        }
      }
      return null;
    }

    const CONFIG: Config = {
      participants: inferParticipants(),
      categories: inferCategories(),
      recapClassByCategory: {},
      solution: readJsonSolution() ?? {},
    };
    CONFIG.recapClassByCategory = inferRecapClassByCategory(CONFIG.categories);

    // --- Persistence (localStorage) ---
    const STORAGE_KEY = `puzzle-progress-${level}`;
    const HINTS_STORAGE_KEY = `puzzle-hints-${level}`;

    function saveHintsState() {
      try {
        const list = document.querySelectorAll("#hintsList li");
        const checked: number[] = [];
        list.forEach((li, idx) => {
          const el = li as HTMLElement;
          if (el.style.textDecoration === "line-through") {
            checked.push(idx);
          }
        });
        localStorage.setItem(HINTS_STORAGE_KEY, JSON.stringify(checked));
      } catch { }
    }

    function applySavedHints() {
      try {
        const raw = localStorage.getItem(HINTS_STORAGE_KEY);
        if (!raw) return;
        const checked = JSON.parse(raw) as number[];
        const set = new Set(checked);
        document.querySelectorAll("#hintsList li").forEach((li, idx) => {
          const el = li as HTMLElement;
          el.style.cursor = "pointer";
          el.style.textDecoration = set.has(idx) ? "line-through" : "";
        });
      } catch { }
    }

    function makeCellKey(td: Element): string {
      return [
        getData(td, "person") || "",
        getData(td, "category") || "",
        getData(td, "value") || "",
        getData(td, "pair") || "",
        getData(td, "left") || "",
        getData(td, "top") || "",
      ].join("|");
    }

    function saveProgress() {
      if (!grid) return;
      const data: Record<string, string> = {};
      grid.querySelectorAll(".cell").forEach((td) => {
        const state = getData(td, "state") || "";
        if (state) {
          data[makeCellKey(td)] = state;
        }
      });
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      } catch { }
    }

    function loadProgress() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return;
        const data = JSON.parse(raw) as Record<string, string>;
        grid?.querySelectorAll(".cell").forEach((td) => {
          const key = makeCellKey(td);
          const st = data[key];
          if (st === "ok" || st === "no") {
            setState(td as HTMLElement, st);
          } else if (!st) {
            // leave empty
          }
        });
      } catch { }
    }

    function setState(td: HTMLElement, state: "" | "no" | "ok") {
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

    function setForbidden(td: HTMLElement, on: boolean) {
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
      grid?.querySelectorAll('.cell').forEach((cell) => {
        const td = cell as HTMLElement;
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
      CONFIG.participants.forEach((person) => {
        CONFIG.categories.forEach((category) => {
          const cells = Array.from(
            grid?.querySelectorAll(`.cell[data-person="${person}"][data-category="${category}"]`) || []
          );
          const ok = cells.find((c) => getData(c, "state") === "ok");
          if (ok) cells.forEach((c) => { if (c !== ok) setForbidden(c as HTMLElement, true); });
        });
      });

      // Règle B
      CONFIG.categories.forEach((category) => {
        const allValueCells = Array.from(
          grid?.querySelectorAll(`.cell[data-category="${category}"][data-person]`) || []
        );
        const values = [...new Set(allValueCells.map((td) => getData(td, "value") || ""))];
        values.forEach((value) => {
          const sameValueCells = allValueCells.filter((td) => getData(td, "value") === value);
          const ok = sameValueCells.find((td) => getData(td, "state") === "ok");
          if (ok) sameValueCells.forEach((td) => { if (td !== ok) setForbidden(td as HTMLElement, true); });
        });
      });

      // Règle C (paires)
      const pairs = [
        ...new Set(
          Array.from(grid?.querySelectorAll('.cell[data-pair]') || []).map((td) => getData(td, "pair") || "")
        ),
      ];
      pairs.forEach((pair) => {
        const cells = grid ? Array.from(grid.querySelectorAll(`.cell[data-pair="${pair}"]`)) : [];
        const lefts = [...new Set(cells.map((td) => getData(td, "left") || ""))];
        lefts.forEach((left) => {
          const rowCells = cells.filter((td) => getData(td, "left") === left);
          const ok = rowCells.find((td) => getData(td, "state") === "ok");
          if (ok) rowCells.forEach((td) => { if (td !== ok) setForbidden(td as HTMLElement, true); });
        });
        const tops = [...new Set(cells.map((td) => getData(td, "top") || ""))];
        tops.forEach((top) => {
          const colCells = cells.filter((td) => getData(td, "top") === top);
          const ok = colCells.find((td) => getData(td, "state") === "ok");
          if (ok) colCells.forEach((td) => { if (td !== ok) setForbidden(td as HTMLElement, true); });
        });
      });
    }

    function updateRecap() {
      CONFIG.participants.forEach((p) => {
        CONFIG.categories.forEach((cat) => {
          const ok = Array.from(
            grid?.querySelectorAll(`.cell[data-person="${p}"][data-category="${cat}"][data-state="ok"]`) || []
          );
          const val = ok.map((td) => getData(td, "value")).filter(Boolean) as string[];
          const cls = CONFIG.recapClassByCategory[cat];
          const cell = document.querySelector(
            `#recap tbody tr[data-person="${p}"] .${cls}`
          ) as HTMLElement | null;
          if (!cell) return;
          if (val.length === 1) cell.textContent = val[0];
          else if (val.length === 0) cell.textContent = "—";
          else cell.textContent = "⚠︎ multiple";
        });
      });
    }

    function fillSolution(map: Solution) {
      if (!map) return;
      CONFIG.participants.forEach((p) => {
        const row = document.querySelector(`#solution tbody tr[data-person="${p}"]`);
        if (!row || !map[p]) return;
        const headers = solutionTable
          ? Array.from(solutionTable.querySelectorAll("thead th"))
            .map((th) => th.textContent?.trim() || "")
            .slice(1)
          : [];
        const tds = Array.from(row.querySelectorAll("td"));
        headers.forEach((cat, i) => {
          const td = tds[i] as HTMLElement | undefined;
          if (td) td.textContent = map[p][cat] || "—";
        });
      });
    }

    grid.addEventListener("click", (e) => {
      const td = (e.target as HTMLElement).closest(".cell") as HTMLElement | null;
      if (!td) return;

      // 🚫 Bloquer tout clic sur une cellule grisée automatiquement
      if (td.getAttribute('data-autoforbid') === '1') {
        return; // ne pas autoriser la modification d'une cellule auto-forbid
      }

      const cur = (getData(td, "state") as CellState | null) || "";
      const next = CELL_STATES[(CELL_STATES.indexOf(cur) + 1) % CELL_STATES.length] as CellState;

      // Appliquer la modification
      setState(td, next);

      // Enregistrer uniquement les actions manuelles de l'utilisateur
      if (cur !== next) {
        history.push({ el: td, prev: cur, next });
        updateUndoButton();
      }

      recomputeForbidden();
      updateRecap();
      saveProgress();
    });

    document.getElementById("reset")?.addEventListener("click", () => {
      grid.querySelectorAll(".cell").forEach((td) => setState(td as HTMLElement, ""));
      updateRecap();
      recomputeForbidden();
      try { localStorage.removeItem(STORAGE_KEY); } catch { }
      history = [];
      updateUndoButton();
    });

    document.getElementById("undo")?.addEventListener("click", () => {
      performUndo();
    });

    document.getElementById("toggleCorrection")?.addEventListener("click", () => {
      const sol = solutionTable;
      const btn = document.getElementById("toggleCorrection") as HTMLButtonElement | null;
      if (!btn) return;
      sol.classList.toggle("hidden");
      btn.textContent = sol.classList.contains("hidden")
        ? "Afficher la correction"
        : "Masquer la correction";
    });

    document.getElementById("toggleHints")?.addEventListener("click", () => {
      const list = document.getElementById("hintsList");
      const btn = document.getElementById("toggleHints") as HTMLButtonElement | null;
      if (!list || !btn) return;
      list.classList.toggle("hidden");
      btn.textContent = list.classList.contains("hidden")
        ? "Afficher les indices"
        : "Masquer les indices";
    });

    // Toggle strikethrough on hint click + pointer cursor (with persistence)
    applySavedHints();
    document.querySelectorAll("#hintsList li").forEach((li) => {
      const el = li as HTMLElement;
      el.style.cursor = "pointer";
      li.addEventListener("click", () => {
        el.style.textDecoration = el.style.textDecoration === "line-through" ? "" : "line-through";
        saveHintsState();
      });
    });

    fillSolution(CONFIG.solution);
    loadProgress();
    updateRecap();
    recomputeForbidden();
  }, [level]);

  const cfg = LEVEL_CONFIGS[level];

  if (!cfg) {
    return (
      <main style={{ maxWidth: 980, margin: "0 auto" }}>
        <h2>Niveau {level}</h2>
        <p>Ce niveau n’est pas encore défini.</p>
      </main>
    );
  }

  return <PuzzleView cfg={cfg} />;
}