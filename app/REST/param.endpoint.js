import business from '../business/business.container';
import applicationException from "../service/applicationException";

const paramEndpoint = (router) => {
    router.get('/api/params', async (request, response, next) => {
        try {
            let result = await business.getParamManager().query();
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });


    // dodanie ścieżki pobierającej ostatni wpis | GET /api/params/last
    // router.get ...

    // dodanie ścieżki pobierającej ostatni wpis | GET /api/params/:id
    // router.get ...
};
export default paramEndpoint;
