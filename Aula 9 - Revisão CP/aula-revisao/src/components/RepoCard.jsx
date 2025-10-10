export default function RepoCard({ full_name, description, owner, html_url, stargazers_count }) {
  return (
    <div className="border-b p-10 mb-4 text-white shadow-lg">
      <a href={html_url} className="text-xl font-bold text-blue-400 hover:underline">
        {full_name}
      </a>
      
      <div className="flex items-center my-2 gap-2">

        <img src={owner.avatar_url} className="w-8 h-8 rounded-full"/>
        
        <a href={owner.html_url}className="text-gray-400 hover:underline">
          {owner.login} 
        </a>
      </div>

      <p className="my-2 text-gray-300">
        {description || "Sem descrição."}
      </p>

      <div className="text-gray-400">
        Estrelas: {stargazers_count.toLocaleString()}
      </div>
    </div>
  );
}