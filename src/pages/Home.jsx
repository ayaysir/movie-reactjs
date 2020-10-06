import React from 'react';
import Container from '@material-ui/core/Container';
import packageJson from '../../package.json'

const Home = () => {

    const dependencies = packageJson.dependencies
    const depElements = []
    for(let key in dependencies) {
        depElements.push(<li key={key}>{`${key}: ${dependencies[key]}`}</li>)
    }

    return (
        <Container>
            <h3>사용된 라이브러리 및 프레임워크</h3>
            <ul>
                {depElements}
            </ul>
        </Container>
        );

}

export default Home