import React, {useEffect, useState} from 'react';
import Search from "../Search/Search";
import './Header.sass';
import Spinner from "../Spinner/Spinner";
import {useSelector} from "react-redux";

const Header = ({toggleSidebar, setSidebar}) => {
    const [addClass, setAddClass] = useState(false);
    const loading = useSelector(state => state.movie.loading)
    useEffect(() => {
        document.addEventListener('click', (e) => {
            sidebarToggle()
        })
        window.scrollTo(() => {
            if (window.scrollTop) {
                setAddClass(true)
            }
        })
    }, []);
    const sidebarToggle = (e) => {
        if (e) {
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
            setSidebar(!toggleSidebar)
        } else {
            setSidebar(false)
        }
    };
    return (
        <div className={addClass ? 'activeHeader Header' : 'Header'}>
            {loading? <Spinner/> :
                <div className="Header-Wrap">
                    <Search/>
                    <div onClick={sidebarToggle} className=" mt-2 mb-2  hamburger d-xl-none d-lg-none d-md-none">
                        <i className='fas fa-bars'/>
                    </div>
                </div>
            }
        </div>
    );
};

export default Header;