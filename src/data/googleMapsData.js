// Data for the google maps displays in Vente Direct and Nos Partenaires pages

// API Key in order to use google maps API
export const apiKey = 'AIzaSyCZA3ria9VajlrWxUuSQthfMM36ejDUGQk';

// Google Map container style for size
export const mobileContainerStyle = {
  width: '270px',
  height: '270px',
};

export const tabletContainerStyle = {
  width: '320px',
  height: '320px',
};

export const desktopContainerStyle = {
  width: '500px',
  height: '500px',
};

// Data for the Vente Direct page
export const mapDataVenteDirect = {
  id: 1,
  name: 'Tomates & Potirons',
  address: '27 route d\'Anxaumont, 86800 Sèvres-Anxaumont',
  itineraryLink: "https://maps.google.com/maps/dir//Tomates+%26+Potirons+27+Rte+d'Anxaumont+86800+S%C3%A8vres-Anxaumont/@46.5851229,0.4509045,14z/data=!4m5!4m4!1m0!1m2!1m1!1s0x47fdb98e93d27155:0x1e50374f96762d22",
  coordinates: [46.58577948302329, 0.4510818634361799],
};

// coordinates for Poitiers
export const centerPoitiers = {
  lat: 46.580224,
  lng: 0.340375,
};

// Data for Nos Partenaires page
export const mapDataOurPartners = [
  {
    id: 1,
    name: 'La Cuisine de Comptoir',
    address: '92 Avenue du Plt des Glières, 86000 Poitiers',
    itineraryLink: 'https://maps.google.com/maps/dir//La+Cuisine+de+Comptoir+92+Av.+du+Plt+des+Gli%C3%A8res+86000+Poitiers/@46.6033128,0.3236026,12z/data=!4m5!4m4!1m0!1m2!1m1!1s0x47fdbdf090bac3a7:0xfc2ebe85b3fcf231',
    coordinates: [46.60580044750606, 0.323911208952898],
    website: 'https://la-cuisine-de-comptoir.eatbu.com/?lang=fr',
  },
  {
    id: 2,
    name: 'Le Pince Oreille',
    address: '11-13 Rue des 3 Rois, 86000 Poitiers',
    itineraryLink: 'https://maps.google.com/maps/dir//Le+Pince+Oreille+11-13+Rue+des+3+Rois+86000+Poitiers/@46.5880423,0.3413824,13z/data=!4m5!4m4!1m0!1m2!1m1!1s0x47fdbe73ff865315:0xe42cb68387e23707',
    coordinates: [46.59016656138373, 0.34141993865670434],
    website: 'http://www.lepinceoreille.fr/',
  },
  {
    id: 3,
    name: 'Le Moulin de la Norée',
    address: "5 Rue de l'Ermitage, 86580 Biard",
    itineraryLink: "https://maps.google.com/maps/dir//Le+Moulin+de+la+Nor%C3%A9e+5+Rue+de+l'Ermitage+86580+Biard/@46.5753549,0.301851,12z/data=!4m5!4m4!1m0!1m2!1m1!1s0x47fd95ec9c95c153:0x79fe4674ab8058be",
    coordinates: [46.57791443397525, 0.3020893918766685],
    website: 'http://moulindelanoree.fr/',
  },
  {
    id: 4,
    name: 'Le Trait d\'union',
    address: '122 Rue des 4 Roues, 86000 Poitiers',
    itineraryLink: "https://maps.google.com/maps/dir//Le+Trait+d'union+122+Rue+des+4+Roues+86000+Poitiers/@46.5872865,0.3526588,12z/data=!4m5!4m4!1m0!1m2!1m1!1s0x47fdbf8e9d7fbb91:0x6b1f28e0954cc3ac",
    coordinates: [46.589124517528, 0.35216320161880954],
    website: 'https://le-trait-dunion-poitiers.eatbu.com/?lang=fr',
  },
];
