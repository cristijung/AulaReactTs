import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { fetchCatImagesByBreedId } from '../api/catApi';

interface CatImagesProps {
  breedId: string;
}

const CatImages: React.FC<CatImagesProps> = ({ breedId }) => {
  const dispatch = useDispatch();
  const images = useSelector((state: RootState) => state.catBreed.images);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetchCatImagesByBreedId(breedId);
        dispatch({ type: 'SET_IMAGES', payload: response });
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [breedId, dispatch]);

  return (
    <div>
      <h2>Images of {breedId}</h2>
      <div className="image-container">
        {images.map((image) => (
          <img key={image.id} src={image.url} alt={breedId} />
        ))}
      </div>
    </div>
  );
};

export default CatImages;
