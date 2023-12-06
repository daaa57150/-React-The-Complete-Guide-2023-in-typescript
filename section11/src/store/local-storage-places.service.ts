import { Place } from "@models/place.model";
import _ from "lodash";
import { AVAILABLE_PLACES } from "../data";


const key = 'PLACES';
export namespace LocalStoragePlacesService {

  const save = (ids: string[]) => {
    localStorage.setItem(key, JSON.stringify(ids));
  }

  export const getPlaceIds = (): string[] => {
    const value = localStorage.getItem(key);
    if(_.isNil(value)) return [];
    if(_.isEmpty(value)) return [];
    return JSON.parse(value);
  };

  export const addPlaceId = (id: string): void => {
    const currentIds = getPlaceIds();
    if(currentIds.some(currentId => currentId === id)) return;
    const ids = [...getPlaceIds(), id];
    save(ids);
  }

  export const getPlaces = (): Place[] =>
    getPlaceIds()
      .map(id => AVAILABLE_PLACES.find(place => place.id === id))
      .filter(place => !_.isNil(place))
      .map(place => place!);

  export const deletePlaceId = (id: string): void => {
    const ids = getPlaceIds().filter(savedId => id !== savedId)
    save(ids);
  }
};
