import React, { useState } from 'react';

const Note = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  const handleAddNote = () => {
    if (newNote.trim() !== '') {
      setNotes([...notes, newNote]);
      setNewNote('');
    }
  };

  const handleDeleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  const handleEditNote = (index, updatedNote) => {
    const newNotes = [...notes];
    newNotes[index] = updatedNote;
    setNotes(newNotes);
  };

  const styles = {
    container: {
      margin: '20px auto',
      width: '80%',
      maxWidth: '600px',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
    },
    list: {
      listStyle: 'none',
      padding: 0,
    },
    listItem: {
      marginBottom: '10px',
    },
    button: {
      marginLeft: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <h2>Bloco de Notas</h2>
      <input
        type="text"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        placeholder="Digite uma nova nota"
      />
      <button onClick={handleAddNote}>Adicionar Nota</button>
      <ul style={styles.list}>
        {notes.map((note, index) => (
          <li key={index} style={styles.listItem}>
            {note}
            <button onClick={() => handleEditNote(index, prompt('Editar nota:', note))} style={styles.button}>Editar</button>
            <button onClick={() => handleDeleteNote(index)} style={styles.button}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Note;
