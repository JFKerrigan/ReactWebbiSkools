import '@testing-library/jest-dom';
import '@testing-library/react';
import * as React from 'react'
import Login from '../components/Login';
import {render, fireEvent, screen} from '@testing-library/react';
import {rest} from 'msw'
import {setupServer} from 'msw/node';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';

const fakeUserResponse = {token: 'fake_user_token'}
const server = setupServer(
  rest.get('/api/login', (req, res, ctx) => {
    return res(ctx.json(fakeUserResponse))
  }),
)

beforeEach(() =>{
  
})

beforeAll(() => server.listen())
afterEach(() => {
  server.resetHandlers()
  window.localStorage.removeItem('token')
})
afterAll(() => server.close())

it('renders correctly', () =>{
  const text = renderer
    .create(<Login />)
    .toJSON();
  expect(text).toMatchSnapshot()
})

test('received login success alert if a register user', async() =>{
  render(<Login />)
  fireEvent.change(screen.getByPlaceholderText(/Email/i), {
    target: {value: 'chuck'},
  })
  fireEvent.change(screen.getByPlaceholderText(/Password/i), {
    target: {value: 'norris'},
  })

  fireEvent.click(screen.getByTestId(/loginButton/i))

  // just like a manual tester, we'll instruct our test to wait for the alert
  // to show up before continuing with our assertions.
  await expect(window.localStorage.getItem('token')).toEqual(fakeUserResponse.token)

})

