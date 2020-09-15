import React from 'react';
import Container from '@material-ui/core/Container';

const Home = () => {
    return (
        <Container>
            <h3>사용된 라이브러리 및 프레임워크</h3>
            <ul>
                <li>axios: ^0.20.0</li>
                <li>react-router-dom: ^5.2.0</li>
                <li>@material-ui/core: ^4.11.0</li>
            </ul>
        </Container>
        );

}

export default Home