import React from 'react';
import { render } from '@testing-library/react';
import MovieDetail from './../pages/MovieDetail';

test('파라미터 렌더링 확인', async () => {
    const match = { params: { searchTerm: 'foo' } }
    render(<MovieDetail match={match} />)

})
