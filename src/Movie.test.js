import React from 'react'
import {render, cleanup, getByTestId } from 'react-testing-library'
import Movie, {POSTER_PATH} from './Movie'
import { MemoryRouter } from 'react-router-dom'

afterEach(() => {
  cleanup
  console.error.mockClear()
})

console.error = jest.fn()

test('<Movie />', () => {
  const {debug, getByTestId, queryByTestId, container, getByText, getByLabelText} = render(<Movie />)
  render(<Movie />)
  expect(console.error).toHaveBeenCalled()
})

const movie = {
  id: '1',
  title: 'Hulk',
  poster_path: 'hulk.jpg',
}

test('<Movie /> with movie', () => {
  const { debug, getByTestId } = render(
    <MemoryRouter>
      <Movie movie={movie} />
    </MemoryRouter>
  )
  
  expect(console.error).not.toHaveBeenCalled()
  expect(getByTestId('movie-link').getAttribute('href')).toBe("/" + movie.id)
  expect(getByTestId('movie-img').src).toBe(`${POSTER_PATH}${movie.poster_path}`)
})
    