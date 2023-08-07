import React, { useState } from 'react';
//import Button from '@mui/material/Button';
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';


interface LikeButtonProps {
  initialLikes: number;
}

const LikeButton: React.FC<LikeButtonProps> = ({ initialLikes }) => {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <div>
      <button onClick={handleLike}>
        {liked ? <AiFillHeart /> : <AiOutlineHeart />}
        {likes} {likes === 1 ? 'like' : 'likes'}
      </button>
      {liked && <AiFillCloseCircle onClick={() => setLiked(false)} />}
      

    </div>
  );
};

function AddFave() {
  return (
    <div className="App">
      <h1>Botão de Exemplo de Likes</h1>
      <LikeButton initialLikes={0} />    
      
    </div>
  );
}

export default AddFave;
