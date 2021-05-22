import {provider} from './init-pact';
import {MoviesController} from '../../../src/controllers';

describe('Movie service', () => {
    describe('When a request to delete a movie is made', () => {
        const movie_title = "Cars";
        beforeAll(async () => {
            await provider.setup();
            await provider.addInteraction({
                state: 'delete a movie',
                uponReceiving: 'a request to delete a movie',
                withRequest: {
                    method: 'DELETE',
                    path: `/movies/${movie_title}`
                },
                willRespondWith: {
                    status: 200
                }
            });
        });

        it('Then it should return the right http code', async () => {
            const response = await MoviesController.delete(movie_title);
            expect(response.data).toMatchSnapshot();
            await provider.verify();
        });

        afterAll(async () => {
            await provider.finalize();
        })
    });
});