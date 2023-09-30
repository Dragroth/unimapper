import {Component} from "react";
import briefcaseIMG from "../../../img/briefcase.png";
import exclIMG from "../../../img/exclamation.png";


export default class Info extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <section className="department">
                <div className="departmentHeading">
                    <h3>Wydział</h3>
                    <h3>Kierunek</h3>
                </div>
                <div className="departmentResultHeading">
                    <h3>Wydział Energetyki i Paliw</h3>
                <div className="departmentResultHeadingIconHolder">
                    <img src={exclIMG} />
                    <i className="fa-solid fa-chevron-up" ></i>
                </div>
                </div>
                <section className="grid-container">
                    <div className="listedDepartment">Kierunek</div>
                    <div className="listedThreshold">Progi</div>
                    <div className="listedBalance">Bilans</div>
                    <div className="listedScore">Wynik</div>
                    
                    <div className="listedDepartmentResult">
                        <img src={exclIMG} />
                        <p>Energetyka</p>
                    </div>
                    <div className="listedThresholdResult">
                        <div className="listedThresholdYears">
                            <div className="listedThresholdYears1">
                                <p className="listedThresholdBold">520</p>
                                <p>2019</p>
                            </div>
                            <div className="listedThresholdYears2">
                                <p className="listedThresholdBold">630</p>
                                <p>2019</p>
                            </div>
                            <div className="listedThresholdYears3">
                                <p className="listedThresholdBold">650</p>
                                <p>2019</p>
                            </div>
                            <div className="listedThresholdYears4">
                                <p className="listedThresholdBold">550</p>
                                <p>2019</p>
                            </div>
                        </div>
                    </div>
                    <div className="listedBalanceResult">-400pkt</div>
                    <div className="listedScoreResult">780pkt</div>
    
                    <div className="listedPerspective">
                        <div className="listedPerspectiveImage"><img src={briefcaseIMG}/></div>
                        <p>Perspektywy zawodowe</p>
                    </div>
                    <div className="listedProcess">
                        <div className="listedPerspectiveImage"><img src={briefcaseIMG}/></div>
                        <p>Przebieg nauki</p>
                    </div>
                    <div className="listedCost">
                        <div className="listedPerspectiveImage"><img src={briefcaseIMG}/></div>
                        <p>Koszty utrzymania</p>
                    </div>
                    <div className="listedTransport">
                        <div className="listedPerspectiveImage"><img src={briefcaseIMG}/></div>
                        <p>Koszty dojazdu</p>
                    </div>
                </section>
            </section>
        );
    }
}