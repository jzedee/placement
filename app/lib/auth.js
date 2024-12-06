import { parse } from 'cookie';

// Utility function to get the session from the cookie
export const getSession = (req) => {
  const cookies = parse(req.headers.get('cookie') || '');
  const authToken = cookies.auth_token;

  if (!authToken) return null; // No session cookie found

  try {
    return JSON.parse(authToken); // Return the session data (name, email, role)
  } catch (error) {
    return null; // In case the session data is malformed
  }
};
