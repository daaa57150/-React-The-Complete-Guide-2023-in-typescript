import { useCallback, useEffect, useRef, useState } from 'react';

import { Place } from '@models/place.model.js';
import http from '@shared/http';
import _ from 'lodash';
import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import Modal from './components/Modal.jsx';
import Places from './components/Places.jsx';

function App() {

  const selectedPlace = useRef<string>();
  const [userPlaces, setUserPlaces] = useState<Place[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    fetchPlaces();
  }, [])

  function handleStartRemovePlace(place: Place) {
    setModalIsOpen(true);
    selectedPlace.current = place.id;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  function handleSelectPlace(selectedPlace: Place) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });

    try {
      http.updateUserPlaces([selectedPlace, ...userPlaces]); // meh
    }
    catch(error) {
      setUserPlaces(userPlaces);
    }
  }

  const handleRemovePlace = useCallback(async () => {
    setUserPlaces(
      (prevPickedPlaces) => _.reject(prevPickedPlaces, { id: selectedPlace.current })
    );

    const places = _.reject(userPlaces, { id: selectedPlace.current });
    http.updateUserPlaces(places);

    setModalIsOpen(false);
  }, [userPlaces]);

  // should have some loading state
  async function fetchPlaces() {
    try {
      const places = await http.fetchUserPlaces();
      setUserPlaces(places);
    }
    catch (error) {
      // should handle the error
    }
  }

  return (
    <>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText="Select the places you would like to visit below."
          places={userPlaces}
          onSelectPlace={handleStartRemovePlace}

          isLoading={false}
          loadingText={'Loading your places'}
        />

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
