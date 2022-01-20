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
    router.get('/api/params/last', async(req, res, next) => {
        try{
            let result = await business.getParamManager().getLast();
            res.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, res);
        }
    })
    // dodanie ścieżki pobierającej ostatni wpis | GET /api/params/:id
    // router.get ...
    router.get('/api/params/:id', async(req, res, next) => {
        try{
            let result = await business.getParamManager().get(req.params.id);
            res.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, res);
        }
    })
    //dodanie ścieżki do zajęć 12
    router.get('/api/params/search/:date', async(req,res,next) => {
        try{
            let result = await business.getParamManager().getFromDate(req.params.date);
            res.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error,res);
        }
    })
};
export default paramEndpoint;
