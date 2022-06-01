import { useEffect, useState } from 'react';
import Axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [level, setLevel] = useState('');
  const [type, setType] = useState('');
  const [attribute, setAttribute] = useState('');
  const [cover, setCover] = useState('');
  const [description, setDescription] = useState('');
  const [moves, setMoves] = useState([]);

  const addNewDigimon = () => {
    Axios.post('http://localhost:8080/add-digimon', {name, level, type, attribute, cover, description})
  }

  const [digidex, setDigidex] = useState([]);
  
  useEffect( () => {
    Axios.get('http://localhost:8080/get-digimon').then(res => {
      setDigidex(res.data.digimons);
    })
  }, [addNewDigimon])

  return (
    <div>
      <label htmlFor="">Name: </label>
      <input type="text" onChange={(e) => {setName(e.target.value)}} />
      <br />
      <label htmlFor="">Level: </label>
      <input type="text" onChange={(e) => {setLevel(e.target.value)}} />
      <br />
      <label htmlFor="">Type: </label>
      <input type="text" onChange={(e) => {setType(e.target.value)}} />
      <br />
      <label htmlFor="">Attribute: </label>
      <input type="text" onChange={(e) => {setAttribute(e.target.value)}} />
      <br />
      <label htmlFor="">Cover: </label>
      <input type="text" onChange={(e) => {setCover(e.target.value)}} />
      <br />
      <label htmlFor="">Description: </label>
      <input type="text" onChange={(e) => {setDescription(e.target.value)}} />
      <br />
      <label htmlFor="">Moves: </label>
      <input type="text" onChange={(e) => {setMoves(e.target.value)}} />
      <br />
      <button onClick={addNewDigimon}>Add new Digimon</button>
      <br />
      <br />
      <br />
      <br />
      <h1>Digimon List</h1>
      {
        digidex.map((val, key) => {
          return (
            <div key={key} className="digimon">
              <img src={val.img} alt="cover" />
              <h1>{val.name}</h1>
              <p>{val.level}</p>
              <p>{val.type}</p>
              <p>{val.attribute}</p>
              <p>{val.description}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default App
