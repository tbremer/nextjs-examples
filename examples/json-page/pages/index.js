import { STATUS_CODES } from 'http';

/**
 *
 * @param {import('next').GetServerSidePropsContext} ctx
 * @returns
 */
export async function getServerSideProps({ res }) {
  const props = { hello: 'world' };
  const propsString = JSON.stringify(props);
  const propsLength = Buffer.from(propsString).byteLength;

  res.writeHead(200, STATUS_CODES[200], {
    ...res.getHeaders(),
    'Content-Type': 'application/json',
    'Content-Length': propsLength,
  });

  res.write(propsString);
  res.end();

  return { props };
}

export default function JSONPage(props) {
  return JSON.stringify(props);
}
