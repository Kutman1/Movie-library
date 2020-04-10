import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import Routes from "./routes/Routes";
import {BrowserRouter} from 'react-router-dom'
import Sidebar from "./containers/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import {Provider} from "react-redux";
import store from "./store/store";

const App = () => {
    const [toggleSidebar, setSidebar] = useState(false);
    return (
        <>
            <div className='movie-app'>
                <div className="sidebar">
                    <Sidebar toggleSidebar={toggleSidebar}/>
                </div>
                <Header toggleSidebar={toggleSidebar} setSidebar={setSidebar}/>
                <Routes/>
            </div>
        </>
    )
}


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>, document.getElementById('root')
);
