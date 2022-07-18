import React, { useEffect, useRef } from "react";

export default function Post(props) {
  const [curtida, SetCurtida] = React.useState("heart-outline");
  const [classe, setClasse] = React.useState("sem-like");

  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };
  useEffect(() => {
    attemptPlay();
  }, []);

  let media =
    props.img === "" ? (
      <video
        autoPlay
        playsInline
        muted
        loop
        controls
        src={props.video}
        ref={videoEl}
        style={{ maxWidth: "100%", width: "800px", margin: "0 auto" }}
        onClick={() => {
          if (curtida === "heart-outline") {
            SetCurtida("heart");
            setClasse("preenchido");
          } else {
            SetCurtida("heart-outline");
            setClasse("sem-like");
          }
        }}
      />
    ) : (
      <img
        src={props.img}
        onClick={() => {
          if (curtida === "heart-outline") {
            SetCurtida("heart");
            setClasse("preenchido");
          } else {
            SetCurtida("heart-outline");
            setClasse("sem-like");
          }
        }}
      />
    );

  //
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
        {media}
        
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon
              name={curtida}
              class={classe}
              onClick={() => {
                if (curtida === "heart-outline") {
                  SetCurtida("heart");
                  setClasse("preenchido");
                } else {
                  SetCurtida("heart-outline");
                  setClasse("sem-like");
                }
              }}
            ></ion-icon>
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
            Curtido por <strong>{props.perfil}</strong> e{" "}
            <strong>outras {props.likes} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

