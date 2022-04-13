import { render, fireEvent,  screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import * as React from 'react'
import App from './App';

// const { axe, toHaveNoViolations } = require('jest-axe')
// expect.extend(toHaveNoViolations)

// it('should demonstrate this matcher`s usage with react', async () => {
//   render(<App/>, document.body)
//   const results = await axe(document.body)
//   expect(results).toHaveNoViolations()
// })

it('renders correctly', () =>{
  const text = renderer
    .create(<App />)
    .toJSON();
  expect(text).toMatchSnapshot()
})

