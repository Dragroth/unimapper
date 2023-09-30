import { useState } from "react";

const FieldsOfStudyInput = (props) => {
    const {
        resultsControl,
        topic,
        imgURI ="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Calculator_icon.svg/2048px-Calculator_icon.svg.png",
    } = props;
    const [basicInputValue, setBasicInputValue] = useState(" ");
    const [extendedInputValue, setExtendedInputValue] = useState(" ");

    const handleBasicInputOnChange = (e) => {
        setBasicInputValue(e.target.value);
        
    }
    const handleExtendedInputOnChange = (e) => {
        setExtendedInputValue(e.target.value);
        
    }

    const handleInputLostFocus = (e) => {
        if(e.target.name === "basic") {
            resultsControl({
                subject: topic, 
                extended: false,
                value: parseInt(e.target.value)});
        } else {
            resultsControl({
                subject: topic, 
                extended: true,
                value: parseInt(e.target.value)}); 
        } 
    }

    return (
        <div className="resultObject">
            <div className="subjectHeader">
                <img src={imgURI}/>
                <h2>{topic}</h2>
            </div>
            <div className="inputBox">
                <input
                    type="text"
                    name="basic"
                    required
                    value={basicInputValue}
                    onChange={handleBasicInputOnChange}
                    onBlur={handleInputLostFocus}
                />
                <span className="animatedPlacedholder">Podstawa</span>
                <span className="resultPercent">%</span>
            </div>
            <div className="inputBox">
                <input
                    type="text"
                    name="extended"
                    required
                    value={extendedInputValue}
                    onChange={handleExtendedInputOnChange}
                    onBlur={handleInputLostFocus}
                />
                <span className="animatedPlacedholder">Rozszerzenie</span>
                <span className="resultPercent">%</span>
            </div>
        </div>
    )
}

export default FieldsOfStudyInput;
