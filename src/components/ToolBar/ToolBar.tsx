import { useEffect, useState} from "react";
import {IFilm, Show} from "../../types";
import axios from "axios";

const URL = 'http://api.tvmaze.com/search/shows?q=';

const ToolBar = () => {
    const [search, setSearch] = useState<IFilm[]>([]);
    const [movies, setMovies] = useState<Show[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target;
        setSearch({...search, [name]: value});
    };

    useEffect(() => {
        const fetchShows = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${URL}${search}`);
                setMovies(response.data);
            } catch (error) {
                console.error("Ошибка при запросе данных:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchShows();
    }, [search]);

    return (
        <div>
            <nav className="navbar navbar-light bg-light justify-content-between">
                    <a className="navbar-brand">Navbar</a>
                <form className="form-inline ">
                    <div style={{position: "relative"}}>
                        <input
                            type="text"
                            onChange={inputChange}
                            placeholder="Введите название сериала..."
                            style={{width: "300px", padding: "10px"}}
                        />
                        {loading && <p>Загрузка...</p>}
                        {movies.length > 0 && (
                            <div
                                style={{
                                    position: "absolute",
                                    top: "100%",
                                    left: 0,
                                    right: 0,
                                    backgroundColor: "#fff",
                                    border: "1px solid #ccc",
                                    zIndex: 1000,
                                }}
                            >
                                {movies.map((result) => (
                                    <div key={result.show.id} style={{padding: "10px"}}>
                                        <a
                                            href={result.show.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{textDecoration: "none", color: "#333"}}
                                        >
                                            {result.show.name}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <button
                        className="btn btn-outline-success my-2 my-sm-0"
                        type="submit">Search
                    </button>
                </form>
            </nav>

        </div>

    );
};

export default ToolBar;