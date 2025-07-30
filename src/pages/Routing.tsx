import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Draw from '../components/Draw';
import Layouts from "./Layouts";
import Editor from "./Editor";

function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Draw />}>
                    <Route index element={<Editor />} />
                    <Route path="layouts" element={<Layouts />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default Routing