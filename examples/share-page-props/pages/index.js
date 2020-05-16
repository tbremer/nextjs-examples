export default function Home() {
  return 'This is the homepage';
}

export async function getServerSideProps() {
  const { ip } = await (
    await fetch('https://api.ipify.org?format=json')
  ).json();

  return {
    props: {
      ip,
    },
  };
}
