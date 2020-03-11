import React from 'react'
import {render, cleanup, waitForElement } from 'react-testing-library'
import { MemoryRouter } from 'react-router-dom'
import MovieDetail from './MovieDetail'
global.fetch = require('jest-fetch-mock')

afterEach(() => {
  cleanup
  console.error.mockClear()
})

console.error = jest.fn()

const match = {
  params: {
    id: "",
  }
}

test('<MovieDetail />', async  () => {

  const movie = {
    id: 'hi',
    title: 'title',
  }

  fetch.mockResponseOnce(JSON.stringify(movie))

  const {debug, getByText, getByTestId} = render(<MovieDetail match={match} />)
  await waitForElement(() => getByText('title'))
  expect(getByTestId('movie-title')).toBeTruthy()
  expect(getByTestId('movie-title').textContent).toBe('title')
})
