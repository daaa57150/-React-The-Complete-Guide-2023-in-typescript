import { Place } from "@models/place.model";

namespace http {

  function cleanRoute(route: string): string {
    if(route.startsWith('/')) return route.substring(1);
    return route;
  }

  const apiUrl = (route: string) => "http://localhost:3000/" + cleanRoute(route);

  const fetchApi = async (route: string, init?: RequestInit): Promise<Response> => {
    const url = apiUrl(route);
    console.log(url, init);
    return fetch(url, init)
  }

  export async function fetchAvailablePlaces(): Promise<Place[]> {
    return fetchPlaces("places");
  }

  export async function fetchUserPlaces(): Promise<Place[]> {
    return fetchPlaces("user-places");
  }

  async function fetchPlaces(route: string): Promise<Place[]> {
    try {

      const response = await fetchApi(route);
      const data = await response.json();
      if(!response.ok) {
        throw new Error('Could not fetch');
      }
      return data.places;

    }
    catch (error) {
      if(error instanceof Error) {
        throw error;
      }
      throw new Error(error as string);
    }
  }

  export async function updateUserPlaces(places: Place[]): Promise<Response> {
    const response = await fetchApi("user-places", {
      method: 'PUT',
      body: JSON.stringify({ places }),
      headers: {
        'Content-Type': "application/json"
      }
    });

    if(!response.ok) {
      throw new Error('Cannot save places');
    }

    const data = await response.json();
    return data.message;
  }

}

export default http;
