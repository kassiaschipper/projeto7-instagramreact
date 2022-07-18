export default function Sugestoes(){

    const sugestoes = [
        {url:"assets/img/bad.vibes.memes.svg", nome:"bad.vibes.memes", razao:"Segue você"}, 
        {url:"assets/img/chibirdart.svg", nome:"chibirdart", razao:"Segue você"},
        {url:"assets/img/razoesparaacreditar.svg", nome:"razoesparaacreditar", razao:"Novo no Instagram"},
        {url:"assets/img/adorable_animals.svg", nome:"adorable_animals", razao:"Segue você"},
        {url:"assets/img/smallcutecats.svg", nome:"smallcutecats", razao:"Segue você"}  

    ]
    return (
        
       sugestoes.map(value =>(
        <div className="sugestao">
        <div className="usuario">
          <img src={value.url} />
          <div className="texto">
            <div className="nome">{value.nome}</div>
            <div className="razao">{value.razao}</div>
          </div>
        </div>

        <div className="seguir">Seguir</div>
      </div>
       ))

      
    );
}