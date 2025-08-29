import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams(); // Get the dynamic part of the URL

  return (
    <div>
      <h1>Blog Post {id}</h1>
      <p>This is the content for blog post ID: {id}</p>
    </div>
  );
}