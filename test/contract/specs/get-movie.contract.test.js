import {provider} from './init-pact';
import {MoviesController} from '../../../src/controllers';
import {Matchers} from '@pact-foundation/pact';

describe('Movie Service', () => {
    describe('When a request to retrieve a movies is made', () => {
        const title = 'El viaje de Chihiro'
        beforeAll(async () => {
            await provider.setup();
            await provider.addInteraction({
                state: "retrieve a movie",
                uponReceiving: 'a request to retrieve a movie',
                withRequest: {
                    method: 'GET',
                    path: `/movies/${title}`,
                    headers:{
                        'Content-Type': 'application/json'
                    },
                },
                willRespondWith: {
                    status: 200,
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body: Matchers.somethingLike(
                        {
                            title: Matchers.like('El viaje de Chihiro'),
                            description: Matchers.like('Anime movie'),
                            director: Matchers.like('Hayao Miyazaki')
                        }
                    )
                }
            });
        });

        test('should return the correct data', async () => {
            const response = await MoviesController.get(title);
            expect(response.data).toMatchSnapshot();
            await provider.verify()
        });

        afterAll(() => provider.finalize());
    });
});
