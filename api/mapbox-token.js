export default function handler(request, response) {
  const token = process.env.VITE_MAPBOX_TOKEN;

  if (!token) {
    response.status(404).json({ error: 'MAPBOX_TOKEN_NOT_CONFIGURED' });
    return;
  }

  response.status(200).json({ token });
}
