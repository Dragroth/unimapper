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
                        <h2>Lorem ipsum dolor.</h2>
                        <h3>Lorem ipsum dolor sit amet</h3>
                    </section>

                    <section className="mainRight">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate perspiciatis sunt eaque animi tenetur! Ipsum maxime alias, eaque sunt culpa architecto sed? Temporibus corporis sed totam vel architecto error sint quae ipsam. Molestias fugiat, sint ut nostrum alias fugit at.</p>
                        <button className="arrowBox fas fa-arrow-down"></button>
                    </section>
                </main>
            </div>
        );
    }
}