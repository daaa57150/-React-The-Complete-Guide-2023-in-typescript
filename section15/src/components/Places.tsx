import { Place } from "@models/place.model";
import { Case, Default, Switch } from "react-if";

interface Props {
  title: string;
  places: Place[];
  fallbackText: string;
  onSelectPlace: (place: Place) => void;
  isLoading: boolean;
  loadingText: string;
}

export default function Places({ title, places, fallbackText, onSelectPlace, isLoading, loadingText }: Props) {
  console.log(places);

  return (
    <section className="places-category">
      <h2>{title}</h2>
      <Switch>
        <Case condition={isLoading}>
          <p className="fallback-text">{loadingText}</p>
        </Case>
        <Case condition={places.length === 0}>
          <p className="fallback-text">{fallbackText}</p>
        </Case>
        <Default>
          <ul className="places">
            {places.map((place) => (
              <li key={place.id} className="place-item">
                <button onClick={() => onSelectPlace(place)}>
                  <img src={`http://localhost:3000/${place.image.src}`} alt={place.image.alt} />
                  <h3>{place.title}</h3>
                </button>
              </li>
            ))}
          </ul>
        </Default>
      </Switch>
    </section>
  );
}
