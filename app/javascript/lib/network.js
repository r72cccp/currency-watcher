import { RestMethods } from '../bundles/CurrencyMonitor/constants/currencyMonitorConstants'

const parseJSON = (response) => {
  return new Promise((resolve) => {
    response.json().then((json) => resolve({
      json,
      ok: response.ok,
      status: response.status,
    }))
  })
}

export const request = (url, options) => {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then(parseJSON)
      .then((response) => response.ok ? resolve(response.json) : reject(response.json))
      .catch((error) => reject({ error }))
  })
}

export const fetchJsonFromAPI = (fetchParams) => {
  const {
    path,
    params = {},
    method = RestMethods.get,
  } = fetchParams
  const options = {
    headers: {
      'Accept': 'application/json',
    },
    method,
  }

  if ([RestMethods.post, RestMethods.put].includes(method)) {
    const urlencoded = new URLSearchParams();
    Object.keys(params).forEach((key) => urlencoded.append(key, params[key]))
    options.body = urlencoded
    options.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  } else {
    path += `?${searchString}`
  }
  return request(path, options)
}
