import {provider} from '../specs/init-pact';
import {AnimalController} from '../../../controllers';
import {Matchers} from '@pact-foundation/pact';

describe('Animal Service', () => {
    describe('When a request to list all animals is made', () => {
        beforeAll(async () => {
            await provider.setup();
            await provider.addInteraction({
                state: "list animals",
                uponReceiving: 'a request to list all animals',
                withRequest: {
                    method: 'GET',
                    path: '/animals'
                },
                willRespondWith: {
                    status: 200,
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body: Matchers.eachLike(
                        {
                            name: Matchers.like('manchas'),
                            breed: Matchers.like("Bengali"),
                            gender: Matchers.like("Female"),
                            vaccinated: Matchers.boolean(true)
                        }
                    )
                }
            });
        });

        test('should return the correct data', async () => {
            const response = await AnimalController.list();
            expect(response.data).toMatchSnapshot();
            await provider.verify()
        });

        afterAll(() => provider.finalize());
    });
});
