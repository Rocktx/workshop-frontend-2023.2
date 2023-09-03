import { useEffect, useState } from "react";
import "./App.css";
import Header from './componets/Header';
import Home from './componets/Home';
import Galeria from "./componets/Galeria";

function App() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((Response) => Response.json())
      .then((data) => setDados(data.results))
      .catch((error) => console.log(error));
  });
  return (
    <div className="App">
      <Header />
      <Home />
      <Galeria />


      {dados.map((item) => (
        <div key={item.id} class='content-persona'>
          <div class= 'content-persona-itens'>
            <h1 class = 'content-name'>{item.name}</h1>
            <p>Altura: {item.height}</p>
            <p>Massa: {item.mass}</p>
            <p>Cor do cabelo: {item.hair_color}</p>
            <p>Cor da roupa: {item.skin_color}</p>
            <p>Cor dos olhos: {item. eye_color}</p>
            <p>Ano de nascimento: {item. birth_year}</p>
            <p>Gênero: {item.gender}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;