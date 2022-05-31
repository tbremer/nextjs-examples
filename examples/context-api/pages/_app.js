import Head from 'next/head';
import { NotificationProvider } from '../lib/contexts/notification';

export default function App({ Component, ...pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
            'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
            'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
            'Noto Color Emoji';
          font-size: 100%;
          font-family: var(--font);
          box-content: border-box;
        }

        button {
          font-family: var(--font);
          font-size: 1rem;
          padding: 0.4rem 1rem;
          border-radius: 0.5rem;
          border: 1px solid #64748b;
        }
      `}</style>

      <NotificationProvider>
        <Component {...pageProps} />
      </NotificationProvider>
    </>
  );
}
