import fetch from 'isomorphic-unfetch';

export async function GET (url: string, opts = {}) {
  return request(url, 'GET', undefined, opts);
}

export async function POST (url: string, body = {}, opts = {}) {
  return request(url, 'POST', body, opts);
}

export async function PUT (url: string, body = {}, opts = {}) {
  return request(url, 'PUT', body, opts);
}

export async function DELETE (url: string, body = {}, opts = {}) {
  return request(url, 'DELETE', body, opts);
}

function getRequestOptions (options) {
  const headers = {
    'Content-Type': 'application/json',
  };

  return Object.assign({}, {
    headers,
    credentials: 'include',
  }, options);
}

async function request (url, method, body = undefined, opts = {}) {
  // Get default + specified request options
  const requestOptions = {
    ...getRequestOptions(opts),
    method,
  };

  // Attach body to request if exists
  if (body) {
    requestOptions.body = JSON.stringify(body);
  }

  // Make request
  const response = await fetch(url, requestOptions);
  const data = await response.json();
  return { ...response, data };
}
