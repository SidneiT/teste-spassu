import axios from "./helper";

export const getAll = () => {
  return axios.get('topics').then(({ data }) => data)
}

export const deleteOne = ({ topicID }) => {
  return axios.delete(`topics/${topicID}`)
}

export const create = ({ name }) => {
  return axios
    .post('topics', { name })
    .then(({ data }) => data)
}