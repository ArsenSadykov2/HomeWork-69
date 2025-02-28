import ToolBar from "../../components/ToolBar/ToolBar.tsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {IFilmAPI} from "../../types";
import axios from "axios";
import Loader from "../../components/UI/Loader/Loader.tsx";

const ListOfMovies = () => {
    const {idFilms} = useParams();
    const [movies, setMovies] = useState<IFilmAPI | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchShowDetails = async () => {
            try {
                const response = await axios.get(
                    `http://api.tvmaze.com/shows/${idFilms}`
                );
                setMovies(response.data);
            } catch (error) {
                console.error("Ошибка при запросе данных:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchShowDetails();
    }, [idFilms]);

    if (loading) {
        return <p><Loader/></p>;
    }

    if (!movies) {
        return <p>Сериал не найден.</p>;
    }
    return (
        <div>
            <header><ToolBar/></header>
        </div>
    );
};

export default ListOfMovies;