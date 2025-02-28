import ToolBar from "../../components/ToolBar/ToolBar.tsx";
import {useState} from "react";
import {IFilm, IFilmAPI} from "../../types";

const Home = () => {
    const [items, setItems] = useState<IFilm>();
    return (
        <div>
            <header><ToolBar/></header>
            <main className="conteiner">
                <div></div>
            </main>
        </div>
    );
};

export default Home;