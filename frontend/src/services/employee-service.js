import httpClient from '../http-common'

const getAll = () => {
    return httpClient.get('/employee/all');
}

const get = (id) => {
    return httpClient.get(`/employee/get/${id}`);
}

const create = (data) => {
    return httpClient.post('/employee/add', data);
}

const update = (data) => {
    return httpClient.put('/employee/update', data);
}

const remove = (id) => {
    return httpClient.delete(`/employee/delete/${id}`);
}

export default { getAll, get, create, update, remove };