import {Component} from "react";
import FieldsOfStudyInput from "./FieldsOfStudyInput.component";

export default class Results extends Component {
    constructor(props) {
        super(props);
    
        this.displayTopics = this.displayTopics.bind(this);
    }

    displayTopics() {
        const subjects = this.props.fieldsOfStudy;
        return subjects.map((subject, index) => (
            <FieldsOfStudyInput topic={subject} key={index} resultsControl={this.props.resultsControl} />
        ));
    }

    render() {
        return(
            <section className="resultsContainer">
                <section className="results">
                    {this.displayTopics()}
                </section>
            </section>
        )
    }
}