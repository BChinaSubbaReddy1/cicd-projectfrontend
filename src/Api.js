export const BASEURL = 'http://localhost:8080/';

export const callApi = async (method, url, data, callback) => {
  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    });
    const responseData = await response.text();
    callback(responseData);
  } catch (error) {
    console.error('Error during API call:', error);
  }
};

export const getSession = (key) => {
  return localStorage.getItem(key);
};

export const setSession = (key, value, expiry) => {
  if (expiry !== -1) {
    localStorage.setItem(key, value);
  } else {
    localStorage.removeItem(key);
  }
};
