import { Button, Card, Input, Select, Typography } from "antd";
import React, { useState } from "react";

const { Title } = Typography;

const MovieDetails = () => {
  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState({
    title: "",
    releaseDate: "",
    rating: "",
    description: "",
    language: "",
  });

  const addMovie = () => {
    if (newMovie.title && newMovie.releaseDate && newMovie.rating && newMovie.description) {
      setMovies([...movies, newMovie]);
      setNewMovie({ title: "", releaseDate: "", rating: "", description: "", language: "English" });
    }
  };

  const deleteMovie = (title) => {
    setMovies(movies.filter((movie) => movie.title !== title));
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: "20px", textAlign: "center" }}>
      <Title>Movie Details</Title>

      {movies.map((movie, index) => (
        <Card key={index} style={{ width: 300, margin: "20px auto" }}>
          <h3>{movie.title}</h3>
          <p>Release Date: {movie.releaseDate}</p>
          <p>IMDB Rating: {movie.rating}</p>
          <p>{movie.description}</p>
          <p>Language: {movie.language}</p>
          <Button danger style={{ marginTop: "10px" }} onClick={() => deleteMovie(movie.title)}>Delete</Button>
        </Card>
      ))}

      <Card style={{ width: 300, margin: "20px auto", padding: "10px" }}>
        <Title level={3}>Add a Movie</Title>
        <Input placeholder="Title" onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })} />
        <Input placeholder="Release Date" onChange={(e) => setNewMovie({ ...newMovie, releaseDate: e.target.value })} />
        <Input placeholder="IMDB Rating" onChange={(e) => setNewMovie({ ...newMovie, rating: e.target.value })} />
        <Input placeholder="Description" onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })} />
        <Select defaultValue="Language" style={{ width: 120 }} onChange={(value) => setNewMovie({ ...newMovie, language: value })}>
          <Select.Option value="English">English</Select.Option>
          <Select.Option value="Spanish">Spanish</Select.Option>
          <Select.Option value="French">French</Select.Option>
        </Select>
        <Button type="primary" style={{ marginTop: "10px" }} onClick={addMovie}>Add Movie</Button>
      </Card>
    </div>
  );
};

export default MovieDetails;