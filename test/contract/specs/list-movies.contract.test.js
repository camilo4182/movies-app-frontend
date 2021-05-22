import {provider} from './init-pact';
import {MoviesController} from '../../../src/controllers';
import {Matchers} from '@pact-foundation/pact';

describe('Movie Service', () => {
    describe('When a request to list all movies is made', () => {
        beforeAll(async () => {
            await provider.setup();
            await provider.addInteraction({
                state: "list movies",
                uponReceiving: 'a request to list all movies',
                withRequest: {
                    method: 'GET',
                    path: '/movies'
                },
                willRespondWith: {
                    status: 200,
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body: Matchers.eachLike(
                        {
                            title: Matchers.like('Star Wars Episode IV'),
                            description: Matchers.like("A new hope"),
                            director: Matchers.like("George Lucas")
                        }
                    )
                }
            });
        });

        test('should return the correct data', async () => {
            const response = await MoviesController.list();
            expect(response.data).toMatchSnapshot();
            await provider.verify()
        });

        afterAll(() => provider.finalize());
    });
});
