import { render, fireEvent,  screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {BrowserRouter} from 'react-router-dom';
import * as React from 'react'
import Home from '../components/Home';

it('the login button will take you to the login screen', () => {
    render(<BrowserRouter><Home /></BrowserRouter>)

    fireEvent.click(screen.getByTestId(/homeButton/i))

})