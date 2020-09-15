import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/movie">Movie</Link></li>
                <li><Link to="/movie/foo">Movie Foo</Link></li>
            </ul>
            <hr/>
        </div>
    );
};

export default Menu;