import Icone from "./Icone";

export default function Icones() {

    return (
        <>
            <div className="icones">
                <Icone name="paper-plane-outline" />
                <Icone name="compass-outline" />
                <Icone name="heart-outline" />
                <Icone name="person-outline" />
            </div>

            <div className="icones-mobile">
                <Icone name="paper-plane-outline" />
            </div>

        </>
    );
}