function Header({ ip }) {
  return (
    <header>
      <h1>Hello, from: {ip}!</h1>
    </header>
  );
}
export default function ({ Component, pageProps }) {
  return (
    <>
      <Header {...pageProps} />
      <Component {...pageProps} />
    </>
  );
}
