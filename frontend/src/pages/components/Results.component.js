import {Component} from "react";
import FieldsOfStudyInput from "./FieldsOfStudyInput.component";

export default class Results extends Component {
    constructor(props) {super(props);}

    render() {
        return(
            <section className="resultsContainer">
                <section className="results">
                    <FieldsOfStudyInput topic="Matematyka" />
                    <FieldsOfStudyInput topic="Język polski" />
                    <FieldsOfStudyInput topic="Język angielski" />
                </section>
            </section>
        )
    }
}