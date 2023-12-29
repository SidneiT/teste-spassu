import axios from "./helper";

export const getAll = () => {
  return axios.get('authors').then(({ data }) => data)
}

export const deleteOne = ({ bookID }) => {
  return axios.delete(`authors/${bookID}`)
}

export const create = ({ name }) => {
  return axios
    .post('authors', { name })
    .then(({ data }) => data)
}