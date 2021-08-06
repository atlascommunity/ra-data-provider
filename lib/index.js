import axios from 'axios';
export const jiraDataProvider = (apiUrl) => {
    return {
        getOne: (resource, params) => {
            return axios
                .get(`${apiUrl}/rest/risk-management/1.0/${resource}/${params.id}`)
                .then(val => val.data);
        },
        getList: (resource, params) => {
            return axios.get(`${apiUrl}/rest/risk-management/1.0/${resource}`, {
                params: {
                    page: params.pagination.page,
                    limit: params.pagination.perPage,
                    sort: params.sort.field,
                    order: params.sort.order,
                    filter: JSON.stringify(params.filter),
                }
            }).then(val => val.data);
        },
        getMany: (resource, params) => {
            return axios.get(`${apiUrl}/rest/risk-management/1.0/${resource}/many`, {
                params: {
                    ids: JSON.stringify(params.ids)
                }
            }).then(val => val.data);
        },
        getManyReference(resource, params) {
            return axios.get(`${apiUrl}/rest/risk-management/1.0/${resource}/refs/${params.target}/${params.id}`, {
                params: {
                    page: params.pagination.page,
                    limit: params.pagination.perPage,
                    sort: params.sort.field,
                    order: params.sort.order,
                }
            }).then(val => val.data);
        },
        update: (resource, params) => {
            return axios.put(`${apiUrl}/rest/risk-management/1.0/${resource}/${params.id}`, params.data, {
                headers: {
                    'Content-type': 'application/json',
                },
            }).then(val => val.data);
        },
        updateMany: (resource, params) => {
            return axios.put(`${apiUrl}/rest/risk-management/1.0/${resource}`, params.data, {
                headers: {
                    'Content-type': 'application/json',
                },
                params: {
                    ids: params.ids
                }
            }).then(val => val.data);
        },
        create: (resource, params) => {
            return axios.post(`${apiUrl}/rest/risk-management/1.0/${resource}`, params.data, {
                headers: {
                    'Content-type': 'application/json',
                },
            }).then(val => val.data);
        },
        delete: (resource, params) => {
            return axios.delete(`${apiUrl}/rest/risk-management/1.0/${resource}/${params.id}`, {
                headers: {
                    'Content-type': 'application/json',
                }
            }).then(val => val.data);
        },
        deleteMany: (resource, params) => {
            return axios.delete(`${apiUrl}/rest/risk-management/1.0/${resource}`, {
                headers: {
                    'Content-type': 'application/json',
                },
                params: {
                    ids: params.ids
                }
            }).then(val => val.data);
        },
    };
};
