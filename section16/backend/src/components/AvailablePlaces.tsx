import { Place } from '@models/place.model.js';
import http from '@shared/http';
import { sortPlacesByDistanceFromCurrentPosition } from '@shared/loc';
import { useEffect, useState } from 'react';
import ErrorCard from './ErrorCard';
import Places from './Places';

interface Props {
  onSelectPlace: (place: Place) => void;
}

export default function AvailablePlaces({ onSelectPlace }: Props) {

  const [availablePlaces, setAvailablePlaces] = useState<Place[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>();

  async function fetchPlaces() {
    setIsLoading(true);

    try {
      const places = await http.fetchAvailablePlaces();
      const sorted = await sortPlacesByDistanceFromCurrentPosition(places);
      setAvailablePlaces(sorted);
    }
    catch (error) {
      if(error instanceof Error) {
        setError(error);
      } else {
        setError(new Error(error as string))
      }
    }

    setIsLoading(false);
  }

  useEffect(() => {
    fetchPlaces()
  }, []);


  console.log('rendering available places');

  if(error) {
    return <ErrorCard title='An error' message={ error.message } />;
  }

  return (
    <Places
      title="Available Places"
      places={ availablePlaces }
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}

      isLoading={ isLoading }
      loadingText={ 'Loading places...' }
    />
  );
}
