import {Component} from "react";
import Thresholds from "./Thresholds.component";
import Subjects from "./Subjects.component";
import Universities from "./Universities.component";

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

            filteredResults: [],
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


    async handleSubmit(e) {
        e.preventDefault();
        // console.log({
        //     thresholdsData: this.state.thresholdsData,
        //     subjectsData: this.state.subjectsData,
        //     resultsData: this.state.resultsData
        // });

        const body = {
            thresholdsData: this.state.thresholdsData,
            subjectsData: this.state.subjectsData,
            resultsData: this.state.resultsData
        };

        await fetch("http://localhost:8000/api/query", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        }).then(res => res.json())
        .then(res => {this.setState({filteredResults: res})})
        .catch(err => console.error(err));
    }

    render() {
        if(this.state.filteredResults.length <= 0) {
            return(
                <>
                    <form onSubmit={this.handleSubmit}>
                        <Thresholds thresholdsControl={this.thresholdsDataControl} />
                        <Subjects subjectsControl={this.subjectsDataControl} resultsControl={this.resultsDataControl} />
    
                        <section className="additionalSubjectSubmit">
                            <button type="submit" className="btn-default">Pokaż uczelnie</button>
                        </section>
                    </form>
    
                    {/* <Universities /> */}
                </>
            )
        } else {
            return(
                <>
                    <form onSubmit={this.handleSubmit}>
                        <Thresholds thresholdsControl={this.thresholdsDataControl} />
                        <Subjects subjectsControl={this.subjectsDataControl} resultsControl={this.resultsDataControl} />
    
                        <section className="additionalSubjectSubmit">
                            <button type="submit" className="btn-default">Pokaż uczelnie</button>
                        </section>
                    </form>
    
                    <Universities results={this.state.filteredResults} />
                </>
            )
        }

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