import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import MovieEdit from '../../../src/MovieEdit'
import { BrowserRouter as Router } from "react-router-dom"

test('The register component shows the title, the movie input fields like the movie title, the description and director of the movie', () => {
  render(<Router>
            <MovieEdit />
          </Router>);

  expect(screen.getByRole('textbox', { name: /title/i })).toBeInTheDocument();
  expect(screen.getByRole('textbox', { name: /description/i })).toBeInTheDocument();
  expect(screen.getByRole('textbox', { name: /director/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument();
  expect(screen.getByText(/save/i)).toBeInTheDocument();
  expect(screen.getByText(/cancel/i)).toBeInTheDocument();
});
