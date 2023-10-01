import {Component} from "react";

export default class Banner extends Component {
    constructor(props) {super(props);}

    render() {
        return(
            <div>
                <header>
                    <img src="https://www.gov.pl/photo/format/6be39b18-462b-4c19-b9fc-1aea667525b8/resolution/1920x810" alt="banner"/>
                    <p>Serwis Rzeczypospolitej Polskiej</p>
                </header>
            
                <main>
                    <div className="mainOverlay"></div>

                    <section className="mainLeft">
                        <h2>University Mapper</h2>
                        <h3>Odkryj swoją przyszłość z odrobiną pomocy</h3>
                    </section>

                    <section className="mainRight">
                        <p>Wybór studiów, to jedna z najważniejszych w życiu decyzji. Nie pozwól sobie zostać z nią sam i już teraz skorzystaj z pomocy sztucznej inteligencji, zaawansowanych algorytmów, oraz wierdzy eskpertów w celu odnalezienia swojej wymarzonej przyszłości. </p>
                        <button className="arrowBox fas fa-arrow-down"></button>
                    </section>
                </main>
            </div>
        );
    }
}