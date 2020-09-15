import React from 'react';
import { Link } from 'react-router-dom';
import { Paper, Tabs, Tab } from '@material-ui/core';

const Menu = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <div>
            <Paper square>
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label="nav-bar"
                >
                    <Tab label="Home" component={Link} to="/" />
                    <Tab label="Movie" component={Link} to="/movie" />
                </Tabs>
            </Paper>
        </div>
    );
};

export default Menu;