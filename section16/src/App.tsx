import { useCallback, useRef, useState } from 'react';

import AvailablePlaces from '@components/AvailablePlaces';
import DeleteConfirmation from '@components/DeleteConfirmation';
import ErrorCard from '@components/ErrorCard';
import Modal from '@components/Modal';
import Places from '@components/Places';
import { useFetch } from '@hooks/useFetch';
import { Place } from '@models/place.model.js';
import http from '@shared/http';
import _ from 'lodash';
import { Case, Default, Switch } from 'react-if';
import logoImg from './assets/logo.png';

function App() {

  const selectedPlace = useRef<string>();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const {
    data: userPlaces,
    setData: setUserPlaces,
    error, isLoading
  } = useFetch(http.fetchUserPlaces, []);

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
      return _.uniqBy([selectedPlace, ...prevPickedPlaces], "id");
    });

    try {
      // meh
      http.updateUserPlaces(
        _.uniqBy([selectedPlace, ...userPlaces], "id")
      );
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
        <Switch>
          <Case condition={ !_.isNil(error) }>
            <ErrorCard title='An error' message={ error?.message ?? 'whatever' } />
          </Case>
          <Default>
            <Places
              title="I'd like to visit ..."
              fallbackText="Select the places you would like to visit below."
              places={userPlaces}
              onSelectPlace={handleStartRemovePlace}

              isLoading={isLoading}
              loadingText={'Loading your places'}
            />
          </Default>
        </Switch>
        <AvailablePlaces onSelectPlace={ handleSelectPlace } />
      </main>
    </>
  );
}

export default App;
