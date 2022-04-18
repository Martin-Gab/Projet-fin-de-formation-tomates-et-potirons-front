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

// Action Imports
import { hydrateSelectedPartner, clearSelectedPartner } from 'src/actions/maps';

// Packages Imports
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from '@react-google-maps/api';
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import { Map } from 'react-feather';

const NosPartenairesMap = () => {
  const dispatch = useDispatch();

  // Selected partner informations stored in the state (hydrated when a marker is clicked)
  const selectedPartner = useSelector((state) => state.maps.selectedPartner);

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
              onClick={() => {
                dispatch(hydrateSelectedPartner(partner));
              }}
            />
          ))}
          {selectedPartner && (
            <InfoWindow
              position={{
                lat: selectedPartner.coordinates[0],
                lng: selectedPartner.coordinates[1],
              }}
              onCloseClick={() => {
                dispatch(clearSelectedPartner());
              }}
            >
              <div className="info-window">
                <h2 className="info-window__title">{selectedPartner.name}</h2>
                <p className="info-window__address">{selectedPartner.address}</p>
                <a
                  href={selectedPartner.itineraryLink}
                  target="_blank"
                  rel="noreferrer"
                  className="info-window__itinerary"
                >
                  Itinéraire <Map size={12} />
                </a>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default NosPartenairesMap;
