import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Card,
  Box,
  CardContent,
  IconButton,
  Grid,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import "./App.css"; // Make sure to create this file for styling

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [noteText, setNoteText] = useState("");

  const addNote = () => {
    if (noteText.trim()) {
      const newNote = {
        id: Date.now(),
        text: noteText,
      };
      setNotes([...notes, newNote]);
      setNoteText("");
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const searchNotes = (text) => {
    setSearchText(text);
  };

  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Container maxWidth="md">
      <Box sx={{ textAlign: "center", margin: "40px 0" }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ fontFamily: "Poppins", fontSize: "24px" }}
        >
          Notes App
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Create and manage your notes efficiently
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <TextField
          label="Search notes"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={(e) => searchNotes(e.target.value)}
          InputProps={{
            startAdornment: <SearchIcon sx={{ marginRight: "8px" }} />,
          }}
          sx={{ maxWidth: "600px" }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <TextField
          label="New note"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          margin="normal"
          sx={{ maxWidth: "600px", marginRight: "10px" }}
        />
        <Button
          sx={{
            color: "white",
            paddingRight:"30px",
            // height: '56px',
            borderRadius: "10px",
            border: "1px solid black",
          }}
          onClick={addNote}
          startIcon={<NoteAddIcon />}
           
        >
          <Typography
            sx={{ fontFamily: "Poppins", fontSize: "15px", color: "black" }}
          >
            Save
          </Typography>
        </Button>
        {/* <Button >
          <Typography
            sx={{ fontFamily: "Poppins", fontSize: "15px", color: "black" }}
          >
            Save
          </Typography>
        </Button> */}
      </Box>

      <Grid container spacing={2}>
        {filteredNotes.map((note) => (
          <Grid item xs={12} sm={6} md={4} key={note.id}>
            <Card variant="outlined" sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="body1" sx={{ fontFamily: "Poppins" }}>
                  {note.text}
                </Typography>
                <IconButton
                  aria-label="delete"
                  onClick={() => deleteNote(note.id)}
                  sx={{ float: "right", color: "green" }}
                >
                  <DeleteIcon />
                </IconButton>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default App;
