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
    language: "English",
  });
  const [editingIndex, setEditingIndex] = useState(null);

  const addMovie = () => {
    if (newMovie.title && newMovie.releaseDate && newMovie.rating && newMovie.description) {
      if (editingIndex !== null) {
        // Editing an existing movie
        const updatedMovies = [...movies];
        updatedMovies[editingIndex] = newMovie;
        setMovies(updatedMovies);
        setEditingIndex(null);
      } else {
        // Adding a new movie
        setMovies([...movies, newMovie]);
      }
      setNewMovie({ title: "", releaseDate: "", rating: "", description: "", language: "English" });
    }
  };

  const deleteMovie = (index) => {
    setMovies(movies.filter((_, i) => i !== index));
  };

  const editMovie = (index) => {
    setNewMovie(movies[index]); // Set the selected movie data in input fields
    setEditingIndex(index); // Track which movie is being edited
  };

  return (
    <div style={{ maxWidth: 450, margin: "auto", padding: "20px", textAlign: "center" }}>
      <Title>Movie Details</Title>

      {movies.map((movie, index) => (
        <Card key={index} style={{ width: 380, margin: "20px auto", padding: "15px" }}>
          <h3>{movie.title}</h3>
          <p>Release Date: {movie.releaseDate}</p>
          <p>IMDB Rating: {movie.rating}</p>
          <p>{movie.description}</p>
          <p>Language: {movie.language}</p>
          <Button type="primary" style={{ margin: "5px" }} onClick={() => editMovie(index)}>Edit</Button>
          <Button danger style={{ margin: "5px" }} onClick={() => deleteMovie(index)}>Delete</Button>
        </Card>
      ))}

      <Card style={{ width: 380, margin: "20px auto", padding: "15px" }}>
        <Title level={3}>{editingIndex !== null ? "Edit Movie" : "Add a Movie"}</Title>
        <Input placeholder="Title" value={newMovie.title} onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })} style={{ marginBottom: "10px" }} />
        <Input placeholder="Release Date" value={newMovie.releaseDate} onChange={(e) => setNewMovie({ ...newMovie, releaseDate: e.target.value })} style={{ marginBottom: "10px" }} />
        <Input placeholder="IMDB Rating" value={newMovie.rating} onChange={(e) => setNewMovie({ ...newMovie, rating: e.target.value })} style={{ marginBottom: "10px" }} />
        <Input.TextArea placeholder="Description" value={newMovie.description} onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })} style={{ marginBottom: "10px" }} />

        <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", marginBottom: "10px" }}>
          <Select style={{ flex: 1 }} value={newMovie.language} onChange={(value) => setNewMovie({ ...newMovie, language: value })}>
            <Select.Option value="English">English</Select.Option>
            <Select.Option value="Spanish">Spanish</Select.Option>
            <Select.Option value="French">French</Select.Option>
          </Select>
          <Button type="primary" style={{ background: "gold", borderColor: "gold", color: "black", flex: 1 }} onClick={addMovie}>
            {editingIndex !== null ? "Update Movie" : "Add Movie"}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default MovieDetails;