import paramDAO from '../DAO/paramDAO';

function create() {
    async function query() {
        //funkcja pobierająca wszystkie wpisy
        let result = paramDAO.query();
        if (result) {
            return result;
        }
    }

    async function get(id) {
        // funkcja pobierająca pojedynczy wpis po ID
        let result = paramDAO.get(id);
        if(result) {
            return result;
        }
    }

    async function getLast() {
        // funkcja pobierająca ostatni wpis
        let result = paramDAO.getLast();
        if(result) {
            return result;
        }
    }

    async function getFromDate(date) {
        let result = paramDAO.getFromDate(date);
        if(result) {
            return result;
        }
    }

    return {
        query: query,
        get: get,
        getLast,
        getFromDate
    };
}

export default {
    create: create
};
