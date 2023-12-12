import { Place } from '@models/place.model.js';
import { useEffect, useState } from 'react';
import Places from './Places.jsx';

interface Props {
  onSelectPlace: (place: Place) => void;
}

export default function AvailablePlaces({ onSelectPlace }: Props) {

  const [availablePlaces, setAvailablePlaces] = useState<Place[]>([]);

  async function fetchPlaces() {
    const response = await fetch("http://localhost:3000/places");
    const data = await response.json();
    setAvailablePlaces(data.places);
  }

  useEffect(() => {
    fetchPlaces()
  }, []);


  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
