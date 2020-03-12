import React from 'react'
import {render, cleanup, waitForElement, getAllByTestId } from 'react-testing-library'
import { MemoryRouter } from 'react-router-dom'
import MoviesList from './MoviesList'

// use fetch mock
global.fetch = require('jest-fetch-mock')

afterEach(() => {
  cleanup
  console.error.mockClear()
})

console.error = jest.fn()

const movies = {
  results: [
    {
      id: 'hi1',
      title: 'title1',
      poster_path: 'gfdsftg'
    },
    {
      id: 'hi2',
      title: 'title2',
      poster_path: 'gfdsftg'
    }
  ]
}

test('<MoviesList />', async  () => {
  fetch.mockResponseOnce(JSON.stringify(movies))
  const {debug, getByTestId, queryByTestId, getAllByTestId} = render(
    <MemoryRouter>
      <MoviesList />
    </MemoryRouter>
  )

  expect(getByTestId('loading')).toBeTruthy()
  await waitForElement(() => getByTestId('movie-link'))
  expect(getByTestId('movie-grid').children).toHaveLength(movies.results.length) 
  expect(getAllByTestId('movie-link')).toHaveLength(movies.results.length) 
  expect(queryByTestId('loading')).toBeFalsy()
})  
