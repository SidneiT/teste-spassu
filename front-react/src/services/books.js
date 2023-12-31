import axios from "./helper";

export const getAll = () => {
  return axios.get('books').then(({ data }) => data)
}

export const deleteOne = (id) => {
  return axios.delete(`books/${id}`)
}

export const create = (payload) => {
  return axios
    .post('books', payload)
    .then(({ data }) => data)
}

export const update = ({ id, ...payload }) => {
  return axios
    .patch(`books/${id}`, payload)
    .then(({ data }) => data)
}

export const createOrUpdate = (payload) => {
  if (payload?.id) {
    return update(payload)
  }

  return create(payload)
}