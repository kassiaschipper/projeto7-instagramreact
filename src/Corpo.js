import Stories from "./Stories";
import Posts from "./Posts";
import Sidebar from "./Sidebar";

export default function (){

    return (
        <div className="corpo">
        <div className="esquerda">
         <Stories url="assets/img/9gag.svg" pagina="9gag" />
         <Stories url="aassets/img/meowed.svg" pagina="meowed" />
         <Stories url="aassets/img/meowed.svg" pagina="meowed" />
         <Posts />          
        </div>

        <Sidebar />
      </div>
    );
}