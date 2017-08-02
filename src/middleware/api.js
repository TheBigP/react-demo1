// middleware： 简化fetch处理， 并且加上token
function callApi(endpoint, init) {

  let token = localStorage.getItem('access_token') || null
  let config = init;

  if(token) {
    config = {
      ...init,
      headers: { ...init.headers, 'Authorization': `Bearer ${token}` }
    }
  }
  return fetch(endpoint, config)
    .then(response => response.json().then(json => {
      if (!response.ok) {
        return Promise.reject(json);
      }

      return json;
    }));
}

export const CALL_API = Symbol('Call API')

export default store => next => action => {

  const callAPI = action[CALL_API]

  // So the middleware doesn't get applied to every single action
  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  let { endpoint, init = {}, types } = callAPI

  const [ requestType, successType, errorType ] = types
  next({ type: requestType })

  return callApi(endpoint, init).then(
    response => {
      return next({
        response,
        type: successType
      })},
    error => next({
      error: error.message || 'There was an error.',
      type: errorType
    })
  )
}
