import {Component} from "react";

export default class Results extends Component {
    constructor(props) {super(props);}

    render() {
        return(
            <section className="resultsContainer">
                <section className="results">
                    <div className="resultObject">
                        <div className="subjectHeader">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Calculator_icon.svg/2048px-Calculator_icon.svg.png"/>
                            <h2>Matematyka</h2>
                        </div>
                        <div className="inputBox">
                            <input type="text" name="" required />
                            <span className="animatedPlacedholder">Podstawa</span>
                            <span className="resultPercent">%</span>
                        </div>
                        <div className="inputBox">
                            <input type="text" name="" required />
                            <span className="animatedPlacedholder">Rozszerzenie</span>
                            <span className="resultPercent">%</span>
                        </div>
                    </div>

                    <div className="resultObject">
                        <div className="subjectHeader">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Calculator_icon.svg/2048px-Calculator_icon.svg.png"/>
                            <h2>Język Polski</h2>
                        </div>
                        <div className="inputBox">
                            <input type="text" name="" required />
                            <span className="animatedPlacedholder">Podstawa</span>
                            <span className="resultPercent">%</span>
                        </div>
                        <div className="inputBox">
                            <input type="text" name="" required />
                            <span className="animatedPlacedholder">Rozszerzenie</span>
                            <span className="resultPercent">%</span>
                        </div>
                    </div>

                    <div className="resultObject">
                        <div className="subjectHeader">
                            <img src="img/calc.png"/>
                            <h2>Język Angielski</h2>
                        </div>
                        <div className="inputBox">
                            <input type="text" name="" required />
                            <span className="animatedPlacedholder">Podstawa</span>
                            <span className="resultPercent">%</span>
                        </div>
                        <div className="inputBox">
                            <input type="text" name="" required />
                            <span className="animatedPlacedholder">Rozszerzenie</span>
                            <span className="resultPercent">%</span>
                        </div>
                    </div>
                </section>
            </section>
        );
    }
}