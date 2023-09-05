import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBreeds, setImages } from './features/catBreed/catBreedSlice';
import CatImages from './components/CatImages';
import { RootState } from './store';
import { fetchCatBreeds, fetchCatImagesByBreedId } from './api/catApi';

function App() {
  const [query, setQuery] = useState('');
  const [selectedBreed, setSelectedBreed] = useState<string | null>(null);
  const dispatch = useDispatch();
  const breeds = useSelector((state: RootState) => state.catBreed.breeds);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetchCatBreeds(query);
        dispatch(setBreeds(response));
      } catch (error) {
        console.error('Error fetching breeds:', error);
      }
    };

    if (query) {
      fetchBreeds();
    }
  }, [query, dispatch]);

  const handleShowImages = async (breedId: string) => {
    try {
      const response = await fetchCatImagesByBreedId(breedId);
      dispatch(setImages(response));
      setSelectedBreed(breedId);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  return (
    <div>
      <h1>Cat Breed Search</h1>
      <input
        type="text"
        placeholder="Search for cat breed..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {breeds.map((breed) => (
          <li key={breed.id}>
            {breed.name} -{' '}
            <button onClick={() => handleShowImages(breed.id)}>
              Show Images
            </button>
          </li>
        ))}
      </ul>
      {selectedBreed && <CatImages breedId={selectedBreed} />}
    </div>
  );
}

export default App;
