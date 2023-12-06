import { useEffect, useRef, useState } from 'react';

import { Place } from '@models/place.model';
import { LocalStoragePlacesService } from '@store/local-storage-places.service';
import logoImg from './assets/logo.png';
import DeleteConfirmation from './components/DeleteConfirmation';
import Modal from './components/Modal';
import Places from './components/Places';
import { AVAILABLE_PLACES } from './data';
import { sortPlacesByDistance } from './loc';


function App() {
  const modal = useRef<any>(null);
  const selectedPlace = useRef<string>();
  const [pickedPlaces, setPickedPlaces] = useState<Place[]>(LocalStoragePlacesService.getPlaces());
  const [availablePlaces, setAvailablePlaces] = useState<Place[]>([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(AVAILABLE_PLACES, position.coords.latitude, position.coords.longitude);
      setAvailablePlaces(sortedPlaces);
    });
  }, []);

  function handleStartRemovePlace(id: string) {
    modal.current.open();
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    modal.current.close();
  }

  function handleSelectPlace(id: string) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }

      LocalStoragePlacesService.addPlaceId(id);
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place!, ...prevPickedPlaces];
    });
  }

  function handleRemovePlace() {
    if(!selectedPlace.current) return;

    LocalStoragePlacesService.deletePlaceId(selectedPlace.current);
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    modal.current.close();
  }

  return (
    <>
      <Modal ref={ modal }>
        <DeleteConfirmation
          onCancel={ handleStopRemovePlace }
          onConfirm={ handleRemovePlace }
        />
      </Modal>

      <header>
        <img src={ logoImg } alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>

      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={ pickedPlaces }
          onSelectPlace={ handleStartRemovePlace }
        />
        <Places
          title="Available Places"
          places={ availablePlaces }
          onSelectPlace={ handleSelectPlace }
          fallbackText="No available places"
        />
      </main>
    </>
  );
}

export default App;
