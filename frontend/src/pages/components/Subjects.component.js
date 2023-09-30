import {Component} from "react";

export default class Subjects extends Component {
    constructor(props) {super(props);}

    render() {
        return(
            <div>
                <section className="additionalSubjectSelect">
                    <div id="subject" placeholder="Przedmioty"></div>
                    <div className="checkboxContainer">
                        <input type="checkbox" className="additionalSubjectCheckbox" />
                        <p>Pokaż tylko kierunki na których osiągnięto próg</p>
                    </div>
                </section>
                <section className="additionalSubjectSubmit">
                    <a href="#" className="btn-default">Pokaż uczelnie</a>
                </section>
            </div>
        );
    }
}