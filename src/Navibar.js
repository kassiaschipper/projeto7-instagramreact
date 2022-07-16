import Logo from "./Logo"
import Icones from "./Icones";

export default function Navibar (){
    return(
      <div className="navbar">
        <div className="container">
          <Logo />
          <Icones /> 
        </div>
      </div>
    );
}