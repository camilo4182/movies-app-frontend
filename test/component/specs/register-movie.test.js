import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import MovieEdit from '../../../src/MovieEdit'
import { BrowserRouter as Router } from "react-router-dom"

test('The register component shows the title, the movie input fields like the movie title, the description and director of the movie', () => {
  render(<Router>
            <MovieEdit />
          </Router>);

  //expect(screen.getByRole('heading', { name: /registro de gatos/i })).toBeInTheDocument()
  expect(screen.getByRole('textbox', { name: /title/i })).toBeInTheDocument();
  expect(screen.getByRole('textbox', { name: /description/i })).toBeInTheDocument();
  expect(screen.getByRole('textbox', { name: /director/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument();
  /**expect(screen.getByRole('button', { name: /raza ​/i })).toBeInTheDocument();
  expect(screen.getByRole('radio', { name: /hembra/i })).toBeInTheDocument();
  expect(screen.getByRole('radio', { name: /macho/i })).toBeInTheDocument();
  expect(screen.getByRole('checkbox', { name: /moquillo/i })).toBeInTheDocument();
  expect(screen.getByRole('checkbox', { name: /gripe felina/i })).toBeInTheDocument();
  expect(screen.getByRole('checkbox', { name: /leucemia felina/i })).toBeInTheDocument();
  expect(screen.getByRole('checkbox', { name: /peritonitis infecciosa felina/i })).toBeInTheDocument();
  expect(screen.getByRole('checkbox', { name: /rabia/i })).toBeInTheDocument();
  expect(screen.getByRole('checkbox', { name: /acepto términos y condiciones/i })).toBeInTheDocument();*/
  expect(screen.getByText(/save/i)).toBeInTheDocument();
});

/**test('The register button should be disabled by deffect', () => {
  render(<RegisterCat />);

  expect(screen.getByTestId("register-button")).toHaveAttribute("disabled")
});

test('When the accept terms and conditions checkbox is clicked, then the register button is enabled', () => {
  render(<RegisterCat />);

  fireEvent.click(screen.getByRole('checkbox', { name: /acepto términos y condiciones/i }));
  expect(screen.getByTestId("register-button")).not.toHaveAttribute("disabled")
});*/
