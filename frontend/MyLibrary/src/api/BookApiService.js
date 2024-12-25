import axios from "axios";

export const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
)

export const retrieveAllBooks = () => {
    return apiClient.get('books')
}

export const retrieveBook = (id) => {
    return apiClient.get(`/books/${id}`)
}