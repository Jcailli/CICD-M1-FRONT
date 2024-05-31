import axios from "axios"

const BASE_URL = 'https://cicd-m1-jcail-back-preprod.azurewebsites.net/v1/employee/'

export const getAllEmployees = () => {
    return axios.get(BASE_URL)
}

export const saveEmployee = (employeeDTO) => {
    return axios.post(BASE_URL, employeeDTO)
}

export const updateEmployee = (id, employeeDTO) => {
    return axios.put(BASE_URL + `${id}`, employeeDTO)
}

export const getEmployee = (id) => {
    return axios.get(BASE_URL + `${id}`)
}

export const deleteEmployee = (id) => {
    return axios.delete(BASE_URL + `${id}`)
}
export const signIn = (email, password) => {
    return axios.get(BASE_URL + `${email}/${password}`)
}
