import axios from 'axios';

export async function getAllUsers() {
  const response = await fetch('/api/users');
  return await response.json();
}
export async function test() {
  const result = await axios.get('/api');
  if (result.data) {
    return result.data;
  }
}

export async function createUser(data) {
  const response = await fetch(`/api/user`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user: data }),
  });
  return await response.json();
}
