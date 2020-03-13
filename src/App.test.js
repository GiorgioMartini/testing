import React from 'react'
import {render, cleanup, waitForElement } from 'react-testing-library'
// import { MemoryRouter } from 'react-router-dom'
import App from './App'


afterEach(() => {
  cleanup
  console.error.mockClear()
})

console.error = jest.fn()


test('<App />', async  () => {
  const {debug, getByText, getByTestId} = render(<App />)
  // await waitForElement(() => getByText('title'))
  expect(getByTestId('app')).toBeTruthy()
})
