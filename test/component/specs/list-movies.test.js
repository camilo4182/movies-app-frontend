import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import MoviesList from '../../../src/MoviesList'
import { BrowserRouter as Router } from "react-router-dom"

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ title: "Movie mock", description: "Desc mock", director: "Dir mock" }),
  })
);

test('The register component shows the title, the movie input fields like the movie title, the description and director of the movie', () => {
    render(<Router>
              <MoviesList />
            </Router>);

    expect(screen.getByRole('heading', { name: /movies/i })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: /title/i })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: /description/i })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: /director/i })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: /actions/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /add movie/i })).toBeInTheDocument();
});