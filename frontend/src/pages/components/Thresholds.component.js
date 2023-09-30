import {Component} from "react";


import CitySelect from "./VirtualSelect/CitySelect";
import DeptSelect from "./VirtualSelect/DeptSelect";
import IntrestSelect from "./VirtualSelect/IntrestSelect";
import UniSelect from "./VirtualSelect/UniSelect";
import SubjectSelect from "./VirtualSelect/SubjectSelect";

export default class Thresholds extends Component {
    constructor(props) {
        super(props);
    
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(e) {
        this.setState({ value: e.target.value });
      }
    
      handleSubmit(e) {
        e.preventDefault();
        console.log('New value: ', this.state.value);
      }
    render() {
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

                <CitySelect />
                <UniSelect />
                <DeptSelect />
                <DeptSelect />
                <IntrestSelect />
            </section>
        );
    }
}