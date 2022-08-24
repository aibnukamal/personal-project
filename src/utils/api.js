/**
 * getAxios, fetch data to api
 * @param {object} instance, axios instance
 * @param {object} url, api path
 * @param {object} params, parameters to be sent to api
 *
 * @returns {object} response object { error, data | message }
 *
 */
const getAxios = async (instance, url, params) => {
  return instance
    .get(url, { params })
    .then((data) => ({ error: false, data }))
    .catch((error) => ({ error: true, message: error }));
};

/**
 * postAxios, post data to api
 * @param {object} instance, axios instance
 * @param {object} url, api path
 * @param {object} params, parameters to be sent to api
 *
 * @returns {object} response object { error, data | message }
 *
 */
const postAxios = async (instance, url, data) => {
  return instance
    .post(url, data)
    .then((data) => ({ error: false, data }))
    .catch((error) => ({ error: true, message: error }));
};

/**
 * deleteAxios, delete data to api
 * @param {object} instance, axios instance
 * @param {object} url, api path
 * @param {object} params, parameters to be sent to api
 *
 * @returns {object} response object { error, data | message }
 *
 */
const deleteAxios = async (instance, url, data) => {
  return instance
    .delete(url, data)
    .then((data) => ({ error: false, data }))
    .catch((error) => ({ error: true, message: error }));
};

const api = { getAxios, postAxios, deleteAxios };

export default api;
