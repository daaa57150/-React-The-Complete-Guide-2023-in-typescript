import { useFetch } from '@hooks/useFetch';
import { Place } from '@models/place.model.js';
import http from '@shared/http';
import { sortPlacesByDistanceFromCurrentPosition } from '@shared/loc';
import ErrorCard from './ErrorCard';
import Places from './Places';

interface Props {
  onSelectPlace: (place: Place) => void;
}

// also works from inside but needs to be wrapped in useCallback
async function fetchPlaces(): Promise<Place[]> {
  const places = await http.fetchAvailablePlaces();
  const sorted = await sortPlacesByDistanceFromCurrentPosition(places);
  return sorted;
}


export default function AvailablePlaces({ onSelectPlace }: Props) {

  console.log('rendering available places');

  const {
    data: availablePlaces,
    error,
    isLoading
  } = useFetch(fetchPlaces, []);


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
