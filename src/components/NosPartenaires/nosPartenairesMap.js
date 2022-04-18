// Sub-Component with the google map of the partners location

// Local Imports
import {
  apiKey,
  centerPoitiers,
  mobileContainerStyle,
  tabletContainerStyle,
  desktopContainerStyle,
  mapDataOurPartners,
} from 'src/data/googleMapsData';

// Packages Imports
import {
  GoogleMap,
  LoadScript,
  Marker,
} from '@react-google-maps/api';
import { useMediaQuery } from 'react-responsive';

const NosPartenairesMap = () => {
  const isTablet = useMediaQuery({ query: '(min-width: 800px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

  let containerStyle = mobileContainerStyle;
  if (isTablet) {
    containerStyle = tabletContainerStyle;
  }
  if (isDesktop) {
    containerStyle = desktopContainerStyle;
  }

  return (
    <div className="our-partners-map">
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={centerPoitiers}
          zoom={11}
        >
          {mapDataOurPartners.map((partner) => (
            <Marker
              key={partner.id}
              position={{
                lat: partner.coordinates[0],
                lng: partner.coordinates[1],
              }}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default NosPartenairesMap;
