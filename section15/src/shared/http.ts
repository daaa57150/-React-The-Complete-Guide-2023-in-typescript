export async function fetchPlaces() {
  try {

    const response = await fetch("http://localhost:3000/places");
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

