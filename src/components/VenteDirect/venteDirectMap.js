// Sub-Component with the google map of the farm location

// Local Imports
import { apiKey, mapDataVenteDirect } from 'src/data/googleMapsData';

// Packages Imports
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import { useSelector, useDispatch } from 'react-redux';

// Google Map container style for size
const mobileContainerStyle = {
  width: '270px',
  height: '270px',
};

const desktopContainerStyle = {
  width: '500px',
  height: '500px',
};

const VenteDirectMap = () => {
  const dispatch = useDispatch();

  const infoWindowOpen = useSelector((state) => state.maps.infoVenteIsOpen);

  return (
    <LoadScript
      googleMapsApiKey={apiKey}
    >
      <GoogleMap
        mapContainerStyle={mobileContainerStyle}
        center={{
          lat: mapDataVenteDirect.coordinates[0],
          lng: mapDataVenteDirect.coordinates[1],
        }}
        zoom={11}
      >
        <Marker
          position={{
            lat: mapDataVenteDirect.coordinates[0],
            lng: mapDataVenteDirect.coordinates[1],
          }}
          clickable
        />
        {infoWindowOpen && (
          <InfoWindow
            position={{
              lat: mapDataVenteDirect.coordinates[0],
              lng: mapDataVenteDirect.coordinates[1],
            }}
          >
            <div className="info-window">
              <h2 className="info-window__title">{mapDataVenteDirect.name}</h2>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default VenteDirectMap;
