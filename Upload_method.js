const url = 'https://example.com/profile';
const data = { username: 'example' };

try {
  const response = await fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const json = await response.json();
  console.log('Success:', JSON.stringify(json));
} catch (error) {
  console.error('Error:', error);
}
