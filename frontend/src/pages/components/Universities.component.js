import {Component} from "react";


import exclIMG from "../../img/exclamation.png";

import Info from "./Universities/Info.component";

export default class Universities extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            unis: [],
        };

        this.univeristiesList = this.univeristiesList.bind(this);
    }

    async componentDidMount() {
        const unis = await fetch("https://localhost:8000/api/unis")
            .then(res => res.json())
            .then(res => res)
            .catch(err => console.error(err));

        const uo = [];
        unis.forEach(uni => {
            uo.push(uni.name);
        });

        this.setState({unis: uo});
    }


    univeristiesList() {
        if(this.state.unis.length <= 0) {
            <p>Ładowanie listy...</p>
        } else {
            return this.state.unis.map((uni, index) => (
                <>
                    <div key={index} className="universityResultHeading">
                        <h3>{uni}</h3>
                        <div className="universityResultHeadingIconHolder">
                            <img src={exclIMG} />
                            <i className="fa-solid fa-chevron-up"></i>
                        </div>
                    </div>

                    <Info />
                </>
            ));
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