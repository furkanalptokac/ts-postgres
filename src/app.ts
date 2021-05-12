import server from './server';

const port = process.env.PORT || '3000';

const starter = new server()
  .start(port)
  .then((port) => console.log(`Server is running on http://localhost:${port}`))
  .catch((error) => console.log(error));

export default starter;
