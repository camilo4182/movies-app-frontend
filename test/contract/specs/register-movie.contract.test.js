import {provider} from './init-pact';
import {MoviesController} from '../../../src/controllers';
import {Matchers} from '@pact-foundation/pact';

describe('Movie service', () => {
    describe('When a request to register a movie is made', () => {
        const movie = {
            title: 'Matrix',
            description: "Desc 1",
            director: "Dir 1"
        }
        beforeAll(async () => {
            await provider.setup();
            await provider.addInteraction({
                state: 'register a movie',
                uponReceiving: 'a request to register a movie',
                withRequest: {
                    method: 'POST',
                    path: '/movies',
                    body: movie
                },
                willRespondWith: {
                    status: 201,
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body: Matchers.somethingLike(
                        {
                            title: Matchers.like('Matrix'),
                            description: Matchers.like("Desc 1"),
                            director: Matchers.like("Dir 1")
                        }
                    )
                }
            });
        });

        it('Then it should return the right data', async () => {
            const response = await MoviesController.register(movie);
            expect(response.data).toMatchSnapshot();
            await provider.verify();
        });

        afterAll(async () => {
            await provider.finalize();
        })
    });
});