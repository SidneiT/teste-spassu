import axios from "./helper";

export const getAll = () => {
  return axios.get('authors').then(({ data }) => data)
}

export const deleteOne = (id) => {
  return axios.delete(`authors/${id}`)
}

export const create = ({ name }) => {
  return axios
    .post('authors', { name })
    .then(({ data }) => data)
}

export const update = ({ id, ...payload }) => {
  return axios
    .patch(`authors/${id}`, payload)
    .then(({ data }) => data)
}

export const createOrUpdate = (payload) => {
  if (payload?.id) {
    return update(payload)
  }

  return create(payload)
}