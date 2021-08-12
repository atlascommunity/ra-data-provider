import axios from 'axios';
import { DataProvider } from 'react-admin';

export const jiraDataProvider = (apiUrl: string): DataProvider => {
    return {
        getOne: (resource, params) => {
            return axios
                .get(`${apiUrl}/${resource}/${params.id}`)
                .then(val => val.data);

        },
        getList: (resource, params) => {
            return axios.get(`${apiUrl}/${resource}`,
                {
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
            return axios.get(`${apiUrl}/${resource}/many`,
                {
                    params: {
                        ids: JSON.stringify(params.ids)
                    }
                }).then(val => val.data);
        },
        getManyReference(resource, params) {
            return axios.get(`${apiUrl}/${resource}/refs/${params.target}/${params.id}`,
                {
                    params: {
                        page: params.pagination.page,
                        limit: params.pagination.perPage,
                        sort: params.sort.field,
                        order: params.sort.order,
                    }
                }).then(val => val.data);
        },
        update: (resource, params) => {
            return axios.put(`${apiUrl}/${resource}/${params.id}`,
                params.data,
                {
                    headers: {
                        'Content-type': 'application/json',
                    },
                }).then(val => val.data);
        },
        updateMany: (resource, params) => {
            return axios.put(`${apiUrl}/${resource}`,
                params.data,
                {
                    headers: {
                        'Content-type': 'application/json',
                    },
                    params: {
                        ids: params.ids
                    }
                }).then(val => val.data);
        },
        create: (resource, params) => {
            return axios.post(`${apiUrl}/${resource}`,
                params.data,
                {
                    headers: {
                        'Content-type': 'application/json',
                    },
                }).then(val => val.data);
        },
        delete: (resource, params) => {
            return axios.delete(`${apiUrl}/${resource}/${params.id}`,
                {
                    headers: {
                        'Content-type': 'application/json',
                    }
                }).then(val => val.data);
        },
        deleteMany: (resource, params) => {
            return axios.delete(`${apiUrl}/${resource}`,
                {
                    headers: {
                        'Content-type': 'application/json',
                    },
                    params: {
                        ids: params.ids
                    }
                }).then(val => val.data);
        },
    }
}
