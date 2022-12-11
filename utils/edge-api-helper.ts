/**
 * Generate the Edge-API Response object with status 200 containing the value as JSON
 * @param value Any object to be returned in the JSON response body
 * @returns
 */
export function successJson(value: any) {
  return responseJson(value, 200);
}

/**
 * Generate the Edge-API Response object with specified error status containing the value as JSON
 * @param value Any object to be returned in the JSON response body
 * @param status The HTTP status code
 * @returns
 */
export function responseJson(value: any, status: number = 400) {
  const valueJson = JSON.stringify(value);

  return new Response(valueJson, {
    status: status,
    headers: {
      "Content-Type": "application/json"
    }
  });
}
