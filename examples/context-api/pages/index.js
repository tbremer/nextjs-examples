import { useNotification } from '../lib/contexts/notification';

export default function Home() {
  const { addNotification } = useNotification();
  console.log('Home:', addNotification);

  return (
    <>
      <h1>Hello, world!</h1>
      <button
        type="button"
        onClick={() => {
          addNotification({
            message: (
              <>
                <p>Notification on:</p>
                <p>{new Date().toLocaleString()}</p>
              </>
            ),
          });
        }}
      >
        Add notification
      </button>
    </>
  );
}
