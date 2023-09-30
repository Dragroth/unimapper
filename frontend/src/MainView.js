import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import "./css/tooltip.min.css";
import "./css/virtual-select.min.css";
import "./css/style.css";

import Main from "./pages/Main.page";

function MainView() {
    return(
        <Router>
            {/* <Banner />         */}
            <Routes>
                <Route exact path="/" element={<Main />} />
            </Routes>
        </Router>
    );
}

export default MainView;
