import {Component} from "react";


import exclIMG from "../../img/exclamation.png";

import Info from "./Universities/Info.component";

export default class Universities extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            unis: [],
            depts: [],
            combinedData: [],

            filteredResults: [],
        };

        this.univeristiesList = this.univeristiesList.bind(this);
    }

    async componentDidMount() {
        const fos = await fetch(`http://localhost:8000/api/studies`)
            .then(res => res.json())
            .then(res => res)
            .catch(err => console.error(err));

        const depts = [];
        await Promise.all(fos.map(async f => {
            const d = await fetch(`http://localhost:8000/api/departaments/${f.departament_id}`)
                .then(res => res.json())
                .then(res => res)
                .catch(err => console.error(err));

            depts.push({fos: f, dept: d});
        }));

        const un = [];
        await Promise.all(depts.map(async dept => {
            const univeristy = await fetch(`http://localhost:8000/api/unis/${dept.dept.university_id}`)
                .then(res => res.json())
                .then(res => res)
                .catch(err => console.error(err));

            un.push({uni: univeristy.name, uni_id: univeristy.id, dept});
        }));

        this.setState({unis: un});
    }



    univeristiesList() {
        if(this.state.unis.length <= 0) {
            <p>Ładowanie listy...</p>
        } else {
            return this.state.unis.map((uni, index) => {
                return (
                    <>
                        <div key={index} className="universityResultHeading">
                            <h3>{uni.uni}</h3>
                            <div className="universityResultHeadingIconHolder">
                                <img src={exclIMG} />
                                <i className="fa-solid fa-chevron-up"></i>
                            </div>
                        </div>

                        <Info dept={uni.dept} results={this.props.results[index]} />
                    </>
                )
            });
        }
    }


    render() {
        return(
            <div>
                <section className="universitiesListed">
                    <section className="university">
                        <div className="universityHeading">
                            <h3>Uniwersytet</h3>
                            <h3>Kierunki</h3>
                        </div>

                        {this.univeristiesList()}
                    </section>
                </section>
            </div>
        );
    }
}