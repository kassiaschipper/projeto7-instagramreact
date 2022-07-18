import Post from "./Post";

export default function Posts() {

    const postagem = [
        {url: "assets/img/meowed.svg", img: "assets/img/gato-telefone.svg", nome: "meowed", curtiu: "assets/img/respondeai.svg", perfil: "respondeai", likes: "101.523", video:""}, 
        {url: "assets/img/barked.svg", img: "assets/img/dog.svg", nome: "barked", curtiu: "assets/img/adorable_animals.svg", perfil: "adorable_animals", likes: "99.159", video:""},
        {url: "assets/img/catanacomics.svg", img: "", nome: "catanacomics", curtiu: "assets/img/9gag.svg", perfil: "9gag", likes: "105.00", video:"assets/video/video.mp4"}
    ]

    return (
        <div class="posts">

            {postagem.map((value) =>
                <Post url={value.url} img={value.img} nome={value.nome} curtiu={value.curtiu} perfil={value.perfil} likes={value.likes} video={value.video} />
            )}
        </div>
    )
}


