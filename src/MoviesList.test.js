import React from 'react'
import {render, cleanup, waitForElement } from 'react-testing-library'
import { MemoryRouter } from 'react-router-dom'
import MoviesList from './MoviesList'

// use fetch mock
global.fetch = require('jest-fetch-mock')

afterEach(() => {
  cleanup
  console.error.mockClear()
})

console.error = jest.fn()

test('<MoviesList />', async  () => {
  const {debug, getByText, getByTestId, getAllByTestId} = render(<MoviesList />)

  const movies = [
    {
      id: 'hi1',
      title: 'title1'
    },
    {
      id: 'hi2',
      title: 'title2'
    }
  ]

  fetch.mockResponseOnce(JSON.stringify(movies))

  await waitForElement(() => getByTestId('movie-link'))
  debug()
  // expect(getAllByTestId('movie-link')).toHaveLength(2)
})