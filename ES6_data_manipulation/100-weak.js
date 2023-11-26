const weakMap = new WeakMap();

function queryAPI(endpoint) {
  const endpointCount = weakMap.has(endpoint)
    ? weakMap.get(endpoint)
    : 0;
  const newEndpointCount = endpointCount + 1;

  if (newEndpointCount >= 5) {
    throw new Error('Endpoint load is high');
  }

  weakMap.set(endpoint, newEndpointCount);
}

exports.weakMap = weakMap;
exports.queryAPI = queryAPI;
