import React, {useRef} from 'react';
import { render } from '@testing-library/react';
import Movie from './../pages/Movie';

test('제목 표시', () => {
    const { getByText } = render(<Movie/>)
    expect(getByText('영화 목록')).toBeInTheDocument()
})

