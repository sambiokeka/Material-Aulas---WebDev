import { useEffect, useState } from "react";
import Tabs from "../components/Tabs";


export default function Dashboard() {


const [ligas, setLigas] = useState([]);
const[jogos, setJogos] = useState([]);

  useEffect(() => {
    fetch('https://www.thesportsdb.com/api/v1/json/123/search_all_leagues.php?c=Brazil&s=Soccer',)
    .then(response => response.json())
    .then((data) => {
      console.log(data.countries);
      setLigas(data.countries || [])
    })
      .then(console.log(setLigas))
      .catch(erro => console.log(erro))
    .finally(console.log("Carregamento finalizado!"))
  },[])

  function verLiga(idLeague) {
    fetch(`https://www.thesportsdb.com/api/v1/json/123/eventsseason.php?id=${idLeague}&s=2025`)
    .then(response => response.json())
    .then((data) => {
        setJogos(data.events || []); 
        console.log("Jogos da liga:", data.events);
    })
    .catch(erro => console.log(erro))

    console.log("Você clicou na liga:", idLeague);

  }

  return (
    <div className="p-6 flex-1 bg-gray-100">
        {ligas.map((pegaItem) => (
          <div className="teste" key={pegaItem.idLeague}>
            <a className="verLiga" href="#" onClick={(e) => {
              e.preventDefault()
              verLiga(pegaItem.idLeague)}
            }>
              {pegaItem.strLeague}
            </a>
          </div>
        ))}
        {jogos.map((jogo) => (
          <div className="teste" key={jogo.idEvent}>
            <br></br>
            <a className="verJogo" href="#">
              {jogo.strEvent}
            </a>
          </div>

        ))}
    </div>
  );
}

