import { useState, useEffect } from "react";
import { Box } from "@mui/material";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function ReactHook(): JSX.Element {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async (): Promise<void> => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1> Aqui estão os posts</h1>
      <Box>
        {posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </Box>
    </>
  );
}
