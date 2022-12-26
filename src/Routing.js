import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { HomePage, Contact, Menu } from "./pages/Home";

export const RoutingLinks = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/menu">Menu</Link>
        </div>
        
    )
}
export const RoutingPaths = () => {
    return (
        <Routes>
            <Route path= "/" element={<HomePage/>}/>
            <Route path= "/contact" element={<Contact/>}/>
            <Route path= "/menu" element={<Menu/>}/>
        </Routes>
    )
    
}