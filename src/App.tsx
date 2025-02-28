import './App.css'
import Home from "./containers/Home/Home.tsx";
import {Route, Routes} from "react-router-dom";
import ListOfMovies from "./containers/ListOfMovies/ListOfMovies.tsx";

const App = () => (
    <>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/show/:idFilms" element={<ListOfMovies />} />
        </Routes>
    </>
);

export default App
