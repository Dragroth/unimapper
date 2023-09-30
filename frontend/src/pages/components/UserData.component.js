import {Component} from "react";
import Thresholds from "./Thresholds.component";
import Subjects from "./Subjects.component";

export default class UserData extends Component {
    constructor(props) {
        super(props);
    
        this.thresholdsDataControl = this.thresholdsDataControl.bind(this);
        this.subjectsDataControl = this.subjectsDataControl.bind(this);
        this.resultsDataControl = this.resultsDataControl.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            thresholdsData: {},
            subjectsData: {},
            resultsData: [],
        };
    }

    thresholdsDataControl(data) {
        this.setState({thresholdsData: data});
    }

    subjectsDataControl(data) {
        this.setState({subjectsData: data});
    }

    resultsDataControl(data) {
        const inputs = this.state.resultsData;
        this.setState({resultsData: [...inputs, data]});
    }


    handleSubmit(e) {
        e.preventDefault();
        console.log({
            thresholdsData: this.state.thresholdsData,
            subjectsData: this.state.subjectsData,
            resultsData: this.state.resultsData
        });
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <Thresholds thresholdsControl={this.thresholdsDataControl} />
                <Subjects subjectsControl={this.subjectsDataControl} resultsControl={this.resultsDataControl} />

                <section className="additionalSubjectSubmit">
                    <button type="submit" className="btn-default">Pokaż uczelnie</button>
                </section>
            </form>
        )

        // if(Object.keys(this.state.thresholdsData).length <= 0) {
        //     return(
        //         <form onSubmit={this.handleSubmit}>
        //             <Thresholds thresholdsControl={this.thresholdsDataControl} />
        //             <Subjects subjectsControl={this.subjectsDataControl} resultsControl={this.resultsDataControl} />
    
        //             <section className="additionalSubjectSubmit">
        //                 <button type="submit" className="btn-default">Pokaż uczelnie</button>
        //             </section>
        //         </form>
        //     )
        // } else {
        //     return(
        //         <form onSubmit={this.handleSubmit}>
        //             <p>test</p>
        //             <Thresholds parentComponent={this.state.thresholdsData} />
        //             <Subjects parentComponent={this.state.subjectsData} />
    
        //             <section className="additionalSubjectSubmit">
        //                 <button type="button" className="btn-default">Pokaż uczelnie</button>
        //             </section>
        //         </form>
        //     )
        // }
    }
}