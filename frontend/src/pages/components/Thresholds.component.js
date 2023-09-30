import {Component} from "react";


import CitySelect from "./VirtualSelect/CitySelect";
import DeptSelect from "./VirtualSelect/DeptSelect";
import IntrestSelect from "./VirtualSelect/IntrestSelect";
import UniSelect from "./VirtualSelect/UniSelect";
import SubjectSelect from "./VirtualSelect/SubjectSelect";

export default class Thresholds extends Component {
    constructor(props) {
        super(props);
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            cityValue: [],
            uniValue: [],
            deptValue: [],
            interestValue: [],

            citiesOptions: [],
            unisOptions: [],
            deptsOptions: [],
            interestsOptions: [],
        };
      }


    async componentDidMount() {
        const cities = await fetch("https://localhost:8000/api/cities")
            .then(res => res.json())
            .then(res => res)
            .catch(err => console.error(err));

        const co = [];
        cities.forEach(city => {
            co.push({label: city.name, value: city.name});
        });
            

        const unis = await fetch("https://localhost:8000/api/unis")
            .then(res => res.json())
            .then(res => res)
            .catch(err => console.error(err));
        
        const uo = [];
        unis.forEach(uni => {
            uo.push({label: uni.name, value: uni.name});
        });


        const depts = await fetch("https://localhost:8000/api/departaments")
            .then(res => res.json())
            .then(res => res)
            .catch(err => console.error(err));
        
        const dpo = [];
        depts.forEach(dept => {
            dpo.push({label: dept.name, value: dept.name});
        });


        const interests = await fetch("https://localhost:8000/api/interest")
            .then(res => res.json())
            .then(res => res)
            .catch(err => console.error(err));
        
        const io = [];
        interests.forEach(interest => {
            io.push({label: interest.name, value: interest.name});
        });


        this.setState({citiesOptions: co, unisOptions: uo, deptsOptions: dpo, interestsOptions: io});
    }
    
    handleChange(e) {
        switch(e.target.name) {
            case "cities": {
                this.setState({cityValue: e.target.value})
            } break;

            case "depts": {
                this.setState({deptValue: e.target.value});
            } break;

            case "unis": {
                this.setState({uniValue: e.target.value});
            } break;

            case "intrests": {
                this.setState({interestValue: e.target.value})
            } break;
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('New value: ', this.state.cityValue);
    }
    
    render() {
        if(this.state.interestsOptions.length <= 0) {
            return(
                <section className="thresholdsContainer">
                    <section className="thresholds">
                        <h2 className="additionalHeading">Progi punktowe</h2>
                        <section className="thresholdsOptions">
                            <div id="city" placeholder="Miasta"></div>
                            <div id="university" placeholder="Uniwersytety"></div>
                            <div id="department" placeholder="Kierunki"></div>
                            <div id="intrest" placeholder="Zainteresowania"></div>
                        </section>
                    </section>

                    <p>Ładowanie opcji wyboru...</p>
                </section>
            );
        } else {
            return(
                <section className="thresholdsContainer">
                    <section className="thresholds">
                        <h2 className="additionalHeading">Progi punktowe</h2>
                        <section className="thresholdsOptions">
                            <CitySelect id="city" options={this.state.citiesOptions} onChange={this.handleChange} />
                            <UniSelect  id="university" options={this.state.unisOptions}   onChange={this.handleChange} />
                            <DeptSelect id="department" options={this.state.deptsOptions}  onChange={this.handleChange} />
                            <IntrestSelect id="intrest" options={this.state.interestsOptions} onChange={this.handleChange} />
                        </section>
                    </section>
                </section>
            );
        }
    }
}