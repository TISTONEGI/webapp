import React, { useState } from 'react';

const Cadastro = ({ handleCadastro }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de criação de usuário
    // Por exemplo, adicionar o usuário a um banco de dados ou a um array de usuários
    // Para este exemplo, vamos apenas chamar a função handleCadastro passada como prop
    handleCadastro(username, email, password);
  };

  const styles = {
    container: {
      margin: '20px auto',
      width: '80%',
      maxWidth: '400px',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    input: {
      marginBottom: '10px',
      padding: '8px',
      fontSize: '16px',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    button: {
      padding: '10px',
      fontSize: '16px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <h2>Página de Cadastro</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Nome de usuário"
          style={styles.input}
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          style={styles.input}
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;
