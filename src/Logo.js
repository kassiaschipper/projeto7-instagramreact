export default function Logo(){

    return(
    <>
        <div className="logo">
            <ion-icon name="logo-instagram"></ion-icon>
            <div className="separador"></div>
            <img src="assets/img/logo.png" />
        </div>

        <div className="logo-mobile">
        <ion-icon name="logo-instagram"></ion-icon>
        </div>

        <div className="instagram-mobile">
        <img src="assets/img/logo.png" />
        </div>

        <div className="pesquisa">
        <input type="text" placeholder="Pesquisar" />
        </div>
    </>
    );
}
