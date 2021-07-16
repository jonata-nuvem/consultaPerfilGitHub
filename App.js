import { useState } from 'react'


function App(props) {
  const [ username, setUsername ] = useState({})
  
  function handleTextChange(e) {
    e.preventDefault()
    fetch(`https://api.github.com/users/${e.target.value}`)
      .then(res => res.json())
      .then(res => setUsername(res));
  }

  return (
    <div>
      <strong>Olá, {props.name}</strong>
      
        <h1>
            Digite o Usuário do candidato no GITHub: <input type="text" onChange={handleTextChange}></input>
            {Object.entries(username).map((values, key) => (
              <h2 key={key}><strong>{values[0]}:</strong>{values[1]}</h2>
            ))}
        </h1>
        
    </div>
  );
}

export default App;
