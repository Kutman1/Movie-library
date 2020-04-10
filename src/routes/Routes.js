import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Content from "../containers/Content/Content";
import GenresMovie from "../components/MoviePages/GenresMovie/GenresMovie";
import MovieDetails from "../components/MoviePages/MovieDetails/MovieDetails";
import SearchResult from "../components/SearchResult/SearchResult";
import TopRated from "../components/MoviePages/TopRated/TopRated";
import Upcoming from "../components/MoviePages/Upcoming/Upcoming";
const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Content} />
            <Route exact path='/genres/:id' component={GenresMovie} />
            <Route exact path='/top-rated' component={TopRated} />
            <Route exact path='/upcoming' component={Upcoming} />
            <Route exact path='/movie/:id' component={MovieDetails} />
            <Route path='/search/:text' component={SearchResult} />
        </Switch>
    );
};

export default Routes;