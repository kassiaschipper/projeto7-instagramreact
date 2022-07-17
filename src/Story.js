export default function Story() {

    const storie = [
        { urlImg: "assets/img/9gag.svg", pagina: "9gag" },
        { urlImg: "assets/img/meowed.svg", pagina: "meowed" },
        { urlImg: "assets/img/barked.svg", pagina: "barked" },
        { urlImg: "assets/img/nathanwpylestrangeplanet.svg", pagina: "nathanwpylestrangeplanet" },
        { urlImg: "assets/img/wawawicomics.svg", pagina: "wawawicomics" },
        { urlImg: "assets/img/respondeai.svg", pagina: "respondeai" },
        { urlImg: "assets/img/filomoderna.svg", pagina: "filomoderna" },
        { urlImg: "assets/img/memeriagourmet.svg", pagina: "memeriagourmet" }
    ];

    return (
        <>
            {storie.map(value => (
                <div class="story">
                    <div class="imagem">
                        <img src={value.urlImg} />
                    </div>
                    <div class="usuario">
                        {value.pagina}
                    </div>
                </div>))
            }</>);
}

