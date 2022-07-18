import React from "react";
import Icone from "./Icone";

export default function Post(props) {

    const [curtida, SetCurtida] = React.useState('heart-outline');
    const [classe, setClasse] = React.useState("sem-like");

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.url} />
                    {props.nome}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>
            <div class="conteudo">
                <img src={props.img} onClick={() => {
                            if (curtida === "heart-outline") {
                                SetCurtida("heart")
                                setClasse("preenchido")
                            } else {
                                SetCurtida("heart-outline")
                                setClasse("sem-like")
                            }
                        }}/>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name={curtida} class={classe} onClick={() => {
                            if (curtida === "heart-outline") {
                                SetCurtida("heart")
                                setClasse("preenchido")
                            } else {
                                SetCurtida("heart-outline")
                                setClasse("sem-like")
                            }
                        }}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.curtiu} />
                    <div class="texto">
                        Curtido por <strong>{props.perfil}</strong> e <strong>outras {props.likes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )


}























//     const postagem = [
//         { url: "assets/img/meowed.svg", pagina: "meowed", imagemPost: "assets/img/gato-telefone.svg", ulrCurtidas: "assets/img/respondeai.svg", curtiu: "respondeai", quantidadeCurtidas: "101.523" },
//         { url: "assets/img/barked.svg", pagina: "barked", imagemPost: "assets/img/dog.svg", ulrCurtidas: "assets/img/adorable_animals.svg", curtiu: "adorable_animals", quantidadeCurtidas: "99.159" }

//     ];


//     return (
//         <>
     
//        { postagem.map(value => (
//                 <div className="post" >
//                     <div className="topo">
//                         <div className="usuario">
//                             <img src={value.url} />
//                             {value.pagina}
//                         </div>
//                         <div className="acoes">
//                             <Icone name="ellipsis-horizontal" />
//                         </div>
//                     </div>

//                     <div className="conteudo">
//                         <img src={value.imagemPost} />
//                     </div>

//                     <div className="fundo">
//                         <div className="acoes">
//                             <div>
//                                 <Icone className="preenchido" name="heart" />
//                                 <Icone name="chatbubble-outline" />
//                                 <Icone name="paper-plane-outline" />
//                             </div>
//                             <div>
//                                 <Icone name="bookmark-outline" />
//                             </div>
//                         </div>

//                         <div className="curtidas">
//                             <img src={value.ulrCurtidas} />
//                             <div className="texto">
//                                 Curtido por <strong>{value.curtiu}</strong> e <strong>outras {value.quantidadeCurtidas} pessoas</strong>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//        ))
//         }
//         </>

//     );
// }