// Data for the content of the website

// ============= Images Imports =============

// => Page d'Accueil
import amapPicture from 'src/assets/images/amap-picture.jpeg';
import cardVenteDirect from 'src/assets/images/taxi-no-connection.gif';
import cardNosPartenaires from 'src/assets/images/taxi-cooking.png';

// => Vos Maraichers
import pictureFrancois from 'src/assets/images/photo-francois.jpeg';
import pictureThomas from 'src/assets/images/photo-thomas.jpeg';

// =========================================

// ================================
// ======== Page d'accueil ========
// ================================

export const homepageAmap = {
  title: 'Notre AMAP',
  img: amapPicture,
  description: 'Nous lançons notre AMAP (Association pour le Maintien d’une Agriculture Paysanne) en Juin 2022 ! Vous pouvez rejoindre notre association pour nous soutenir, participer à des évènements spéciaux et aussi pour pouvoir souscrire à une option panier. Toutes les semaines vous aurez le droit à une sélection de nos légumes de saison.',
  cta: 'Rejoignez nous !',
};

export const homepageCards = [
  {
    title: 'Vente Direct',
    img: cardVenteDirect,
    description: 'Vous voulez vous renseignez sur les horaires et le lieu de vente de nos produits ? Rendez vous sur la page Vente Direct.',
    cta: 'C\'est par ici',
  },
  {
    title: 'Nos Partenaires',
    img: cardNosPartenaires,
    description: 'Vous voulez vous renseigner sur nos partenaires et pourquoi pas déguster nos légumes dans des restaurants près de chez vous ? Rendez vous sur la page Nos Partenaires.',
    cta: 'C\'est par ici',
  },
];

// ================================
// ======== Vente Direct ==========
// ================================

export const contentVenteDirect = {
  title: 'Vente Direct',
  description: 'Nous proposons plusieurs fois par semaine des ventes de légumes directement à l’exploitation. Vous pourrez trouver nos récoltes du jour ainsi que des produit locaux proposés par nos partenaires.',
  location: {
    title: 'A la ferme',
    road: '27 route d\'Anxaumont',
    zipAndCity: '86800 Sèvres-Anxaumont',
  },
  hours: {
    first: 'Mercredi : 14h-17h30',
    second: 'Vendredi : 14h-17h30',
    third: 'Samedi : 09h-12H30',
  },
};

// ================================
// =========== AMAP ===============
// ================================

export const contentAmap = {
  title: 'Notre AMAP',
  description: 'Rejoignez notre AMAP maintenant en remplissant le formulaire d’adhésion ci-dessous. Vous trouverez également tous les documents liés à celle-ci, à lire attentivement avant de soumettre son adhésion.',
  cta: 'Adhérer à l\'AMAP',
  img: amapPicture,
};

// ================================
// ======== Vos Maraichers ========
// ================================

export const contentVosMaraichers = [
  {
    name: 'François Soulas',
    picture: pictureFrancois,
    description: ' 28 ans, en couple sans enfant. De formation technico commerciale, professionnel, puis professeur de golf pendant cinq ans, en 2019 il décide de se réorienté, afin de mettre son expérience et son goût pour la formation au service d’une activité plus en adéquation avec ses convictions. Il aspire à une meilleur résilience alimentaire. Après six mois passés chez Thomas, ce dernier lui propose un parrainage et une association. Il obtient un diplôme de Technicien Agricole en maraîchage et Arboriculture. Le GAEC est actée depuis avril 2021.',
    // position => used to determine postion with css classes
    position: 'first',
  },
  {
    name: 'Thomas Portron',
    picture: pictureThomas,
    description: '35 ans, en couple, avec un enfant. De formation commerciale, il créé l’exploitation en 2015 après un BPREA. Il s’installe sur le site de la Baie des Champs, de manière progressive, avec une serre de 300 m2 et 3500 m2 de plein champs. L’idée étant de vérifier sa capacité et son envie de faire ce métier. Son intérêt pour le jardin, la permaculture, leBIO , et son expérience professionnelle l’on conduit vers l’agro-foresterie et les techniques de Maraîchage sur Sol Vivant (MSV). Cette approche progressive lui a permis également d’adapter sa production aux demandes des restaurateurs et des magasins.',
    // position => used to determine postion with css classes
    position: 'second',
  },
];

// ================================
// ========== Footer ==============
// ================================

export const contentFooterContact = [
  'Tomates & Potirons',
  '27 route d\'Anxaumont',
  '86800 Sèvres-Anxaumont',
  'thomas.portron@gmail.com',
  '06 14 47 35 34',
];
