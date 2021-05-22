import {provider} from './init-pact';
import {MoviesController} from '../../../src/controllers';
import {Matchers} from '@pact-foundation/pact';

describe('Movie service', () => {
    describe('When a request to delete a movie is made', () => {
        const movie_title = "The Avengers";
        const movie = {
            title: 'The Avengers',
            description: "Superheroes movie",
            director: "Marvel"
        }
        beforeAll(async () => {
            await provider.setup();
            await provider.addInteraction({
                state: 'edit a movie information',
                uponReceiving: 'a request to edit a movie',
                withRequest: {
                    method: 'PUT',
                    path: `/movies/${movie_title}`,
                    body: movie
                },
                willRespondWith: {
                    status: 200,
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body: Matchers.somethingLike(
                        {
                            title: Matchers.like('Los Vengadores'),
                            description: Matchers.like("Superheroes movie"),
                            director: Matchers.like("Marvel")
                        }
                    )
                }
            });
        });

        it('Then it should return the right data', async () => {
            const response = await MoviesController.update(movie_title, movie);
            expect(response.data).toMatchSnapshot();
            await provider.verify();
        });

        afterAll(async () => {
            await provider.finalize();
        })
    });
});