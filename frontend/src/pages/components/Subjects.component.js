import {Component} from "react";
import SubjectSelect from "./VirtualSelect/SubjectSelect";
import Results from "./Results.component";

export default class Subjects extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            subjectOptions: [],
            fieldsOfStudy: [
                "Matematyka",
                "Polski",
                "Angielski",
            ],
        };

        this.handleChange = this.handleChange.bind(this);
    }

    async componentDidMount() {
        const subjects = await fetch("https://localhost:8000/api/studies")
            .then(res => res.json())
            .then(res => res)
            .catch(err => console.error(err));

        const so = [];
        subjects.forEach(subject => {
            so.push({label: subject.name, value: subject.name});
        });

        this.setState({subjectOptions: so});
    }

    handleChange(e) {
        this.props.subjectsControl({subjects: this.state.fieldsOfStudy});
        this.setState({fieldsOfStudy: [...this.state.fieldsOfStudy, e.target.value], subjectOptions: e.target.value})
    }

    render() {
        if(this.state.subjectOptions.length <= 0) {
            return(
                <div>
                    <Results fieldsOfStudy={this.state.fieldsOfStudy} />

                    <section className="additionalSubjectSelect">
                        <p>Ładowanie opcji wyboru...</p>
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
        } else {
            return(
                <div>
                    <Results fieldsOfStudy={this.state.fieldsOfStudy} resultsControl={this.props.resultsControl} />

                    <section className="additionalSubjectSelect">
                        <SubjectSelect id="subject" options={this.state.subjectOptions} onChange={this.handleChange} />
                        <div className="checkboxContainer">
                            <input type="checkbox" className="additionalSubjectCheckbox" />
                            <p>Pokaż tylko kierunki na których osiągnięto próg</p>
                        </div>
                    </section>
                </div>
            );
        }
    }
}