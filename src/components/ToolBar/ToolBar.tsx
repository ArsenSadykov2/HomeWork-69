import {ChangeEvent, useEffect, useState} from "react";
import { Show } from "../../types";
import axios from "axios";

const URL = 'http://api.tvmaze.com/search/shows?q=';

const ToolBar = () => {
    const [search, setSearch] = useState<string>("");
    const [movies, setMovies] = useState<Show[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [selectedShow, setSelectedShow] = useState<Show | null>(null);

    const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSearch(value);
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

    const handleShowClick = (show: Show) => {
        setSelectedShow(show);
        setSearch("");
        setMovies([]);
    };

    return (
        <div>
            <nav className="navbar navbar-light bg-light justify-content-between">
                <a className="navbar-brand">Navbar</a>
                <form className="form-inline">
                    <div style={{position: "relative"}}>
                        <input
                            type="text"
                            value={search}
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
                                    <div
                                        key={result.show.id}
                                        style={{padding: "10px", cursor: "pointer"}}
                                        onClick={() => handleShowClick(result)} // Клик по сериалу
                                    >
                                        {result.show.name}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <button
                        className="btn btn-outline-success my-2 my-sm-0"
                        type="submit"
                    >
                        Search
                    </button>
                </form>
            </nav>

            <main className="container mt-4">
                {selectedShow && (
                    <div className="card">
                        <div className="card-body">
                            <h1 className="card-title">{selectedShow.show.name}</h1>
                            {selectedShow.show.image && (
                                <img
                                    src={selectedShow.show.image.medium}
                                    alt={selectedShow.show.name}
                                    className="img-fluid rounded mb-3"
                                />
                            )}
                            <p className="card-text">
                                {selectedShow.show.summary?.replace(/<[^>]+>/g, "")}
                            </p>
                            <p className="card-text">
                                <strong>Жанры:</strong> {selectedShow.show.genres.join(", ")}
                            </p>
                            <p className="card-text">
                                <strong>Статус:</strong> {selectedShow.show.status}
                            </p>
                            <p className="card-text">
                                <strong>Премьера:</strong> {selectedShow.show.premiered}
                            </p>
                            <p className="card-text">
                                <strong>Рейтинг:</strong> {selectedShow.show.rating?.average || "Нет данных"}
                            </p>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default ToolBar;