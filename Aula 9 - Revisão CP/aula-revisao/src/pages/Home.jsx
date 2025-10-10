import { useEffect, useState } from "react"
import RepoCard from "../components/RepoCard"

export default function Home() {

  const [repositorios, setRepositorios] = useState([])

  const API = import.meta.env.VITE_GITHUB_API

  useEffect(() => {
    fetch(API)
    .then(response => response.json())
    .then((data) => {
      console.log(data.items)
      setRepositorios(data.items || [])
    })
    .catch(erro => console.log(erro))
    .finally('Requisição bem sucedida')
  }, [])



  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">GitHub Repositories Explorer</h1>
        {repositorios.map((repo) => (
          <RepoCard 
            key={repo.id} 
            {...repo}      
          />
        ))}
    </div>
  );
}
