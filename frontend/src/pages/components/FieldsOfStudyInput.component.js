
const FieldsOfStudyInput = (props) => {
    const {
        topic,
        imgURI ="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Calculator_icon.svg/2048px-Calculator_icon.svg.png",
    } = props;

    return (
        <div className="resultObject">
            <div className="subjectHeader">
                <img src={imgURI}/>
                <h2>{topic}</h2>
            </div>
            <div className="inputBox">
                <input type="text" name="" required/>
                <span className="animatedPlacedholder">Podstawa</span>
                <span className="resultPercent">%</span>
            </div>
            <div className="inputBox">
                <input type="text" name="" required/>
                <span className="animatedPlacedholder">Rozszerzenie</span>
                <span className="resultPercent">%</span>
            </div>
        </div>
    )
}

export default FieldsOfStudyInput;