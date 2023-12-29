import axios from "./helper";

export const getAll = () => {
  return axios.get('books').then(({ data }) => data)
}

export const deleteOne = ({ bookID }) => {
  return axios.delete(`books/${bookID}`)
}

export const create = ({ title, publisher, edition, year, author, topic }) => {
  return axios
    .post('books', { title, publisher, edition, year, author, topic })
    .then(({ data }) => data)
}