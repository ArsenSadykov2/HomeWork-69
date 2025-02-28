import {useState} from "react";

const URL = 'http://api.tvmaze.com/search/shows?q=csi';

const ToolBar = () => {
    const [search, setSearch] = useState<string>('');
    const [movies, setMovies] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    return (
        <div>
            <nav className="navbar navbar-light bg-light justify-content-between">
                    <a className="navbar-brand">Navbar</a>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
            </nav>
        </div>
    );
};

export default ToolBar;