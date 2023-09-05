const API_BASE_URL = 'https://api.thecatapi.com/v1';

export const fetchCatBreeds = async (query: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/breeds/search?q=${query}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error('Invalid response data');
    }

    return data;
  } catch (error: any) {
    throw new Error(`Fetch error: ${(error as Error).message}`);
  }
};

export const fetchCatImagesByBreedId = async (breedId: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/images/search?breed_ids=${breedId}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error('Invalid response data');
    }

    return data;
  } catch (error: any) {
    throw new Error(`Fetch error: ${(error as Error).message}`);
  }
};
