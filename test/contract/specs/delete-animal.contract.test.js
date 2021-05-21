import {provider} from "../specs/init-pact";
import {AnimalController} from "../../../controllers";

describe('Given an animal service', () => {
    describe('When a request to delete an animal is made', () => {
        const animal_name = "Pelusa";
        beforeAll(async () => {
            await provider.setup();
            await provider.addInteraction({
                state: 'delete an animal',
                uponReceiving: 'a request to delete an animal',
                withRequest: {
                    method: 'DELETE',
                    path: `/animals/${animal_name}`
                },
                willRespondWith: {
                    status: 204
                }
            });
        });

        it('Then it should return the right http code', async () => {
            const response = await AnimalController.delete(animal_name);
            expect(response.data).toMatchSnapshot();
            await provider.verify();
        });

        afterAll(async () => {
            await provider.finalize();
        })
    });
});