import axios from "./helper";

export const getAll = () => {
  return axios.get('topics').then(({ data }) => data)
}

export const deleteOne = (id) => {
  return axios.delete(`topics/${id}`)
}

export const create = ({ description }) => {
  return axios
    .post('topics', { description })
    .then(({ data }) => data)
}

export const update = ({ id, ...payload }) => {
  return axios
    .patch(`topics/${id}`, payload)
    .then(({ data }) => data)
}

export const createOrUpdate = (payload) => {
  if (payload?.id) {
    return update(payload)
  }

  return create(payload)
}