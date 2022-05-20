import { Routes, Route } from 'react-router-dom'
import ListMovies from '../components/ListMovies';
import MovieShow from '../components/MovieShow';
import NotFoundPage from '../components/404';
function getTitleProps(option) {
    let title = "";
    switch (option) {
        case 1:
            title = "List of movies";
            break;
        case 2:
            title = "Show movie";
            break;
        default:
            title = "Error 404: Page not found";
            break;
        
    }
    return title;
}
export default function Container({ title, component }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <Routes>
                        <Route name="Home" path="/" element={<ListMovies title={getTitleProps(1) } />} />
                        <Route name="MovieShow" path="/movies/:id" element={<MovieShow title={getTitleProps(2) } />} />
                        <Route name="PageNotFound" component={<NotFoundPage title={getTitleProps(404) } />}/>
                    </Routes>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
    );
};
