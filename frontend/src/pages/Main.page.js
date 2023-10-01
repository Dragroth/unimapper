import {Component} from "react";
import {Link} from "react-router-dom";

import Banner from "./components/Banner.component"
import Thresholds from "./components/Thresholds.component";
import Results from "./components/Results.component";
import Subjects from "./components/Subjects.component";
import Universities from "./components/Universities.component";
import UserData from "./components/UserData.component";

export default class Main extends Component {
    constructor(props) {super(props);}

    render() {
        return(
            <div>
                <Banner />
                {/* <Thresholds /> */}
                {/* <Subjects /> */}
                <UserData />
                {/* <Universities /> */}
            </div>
        );
    }
}