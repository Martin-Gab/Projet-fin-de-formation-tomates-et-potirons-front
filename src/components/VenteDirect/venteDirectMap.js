// Sub-Component with the google map of the farm location

// Local Imports
import { apiKey, mapDataVenteDirect } from 'src/data/googleMapsData';

// Actions Imports
import { toggleVenteInfoWindow } from 'src/actions/maps';

// Packages Imports
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import { useSelector, useDispatch } from 'react-redux';
import { Map } from 'react-feather';
import { useMediaQuery } from 'react-responsive';

// Google Map container style for size
const mobileContainerStyle = {
  width: '270px',
  height: '270px',
};

const tabletContainerStyle = {
  width: '320px',
  height: '320px',
};

const desktopContainerStyle = {
  width: '500px',
  height: '500px',
};

const VenteDirectMap = () => {
  const dispatch = useDispatch();

  const infoWindowOpen = useSelector((state) => state.maps.infoVenteIsOpen);

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
    <div className="vente-direct-map">
      <LoadScript
        googleMapsApiKey={apiKey}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
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
            onClick={() => {
              dispatch(toggleVenteInfoWindow());
            }}
          />
          {infoWindowOpen && (
            <InfoWindow
              position={{
                lat: mapDataVenteDirect.coordinates[0],
                lng: mapDataVenteDirect.coordinates[1],
              }}
              onCloseClick={() => {
                dispatch(toggleVenteInfoWindow());
              }}
            >
              <div className="info-window">
                <h2 className="info-window__title">{mapDataVenteDirect.name}</h2>
                <p className="info-window__address">{mapDataVenteDirect.address}</p>
                <a href={mapDataVenteDirect.itineraryLink} className="info-window__itinerary">Itinéraire <Map size={12} /></a>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default VenteDirectMap;
