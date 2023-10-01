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


        console.log(depts[0].dept);


        // const depts = await fetch("http://localhost:8000/api/departaments")
        //     .then(res => res.json())
        //     .then(res => res)
        //     .catch(err => console.log(err));

        // const d = [];
        // depts.forEach(dept => {
        //     d.push({name: dept.name, uni: dept.university_id});
        // }); this.setState({depts: d});


        const un = [];
        await Promise.all(depts.map(async dept => {
            const univeristy = await fetch(`http://localhost:8000/api/unis/${dept.university_id}`)
                .then(res => res.json())
                .then(res => res)
                .catch(err => console.error(err));

            // console.log(univeristy.name);
            un.push({uni: univeristy.name, dept});
        }));

        // const fos = await fetch(`http://localhost:8000/api/studies`)
        //     .then(res => res.json())
        //     .then(res => res)
        //     .catch(err => console.error(err));

        this.setState({unis: un});
    }



    univeristiesList() {
        if(this.state.unis.length <= 0) {
            <p>Ładowanie listy...</p>
        } else {
            // console.log(this.state.unis[0].dept.name);

            return this.state.unis.map((uni, index) => (
                <>
                    <div key={index} className="universityResultHeading">
                        <h3>{uni.uni}</h3>
                        <div className="universityResultHeadingIconHolder">
                            <img src={exclIMG} />
                            <i className="fa-solid fa-chevron-up"></i>
                        </div>
                    </div>

                    <Info dept={uni.dept.name} />
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