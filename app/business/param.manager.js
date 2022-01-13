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
    }

    async function getLast() {
        // funkcja pobierająca ostatni wpis
    }

    return {
        query: query,
        get: get,
        getLast
    };
}

export default {
    create: create
};
