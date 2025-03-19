import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import '@aws-amplify/ui-react/styles.css';
import NewProduct from "./pages/NewProduct";

const App=()=>{
    return (
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/new" element={<NewProduct/>}/>
            </Routes>
        </Router>
        </>
    );
}
export default App