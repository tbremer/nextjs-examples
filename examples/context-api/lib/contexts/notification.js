import { useContext, createContext, useState } from 'react';

const NotificationContext = createContext({});

export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState(new Map());

  function removeNotification(id) {
    const newMap = new Map(notifications);

    newMap.delete(id);

    setNotifications(newMap);
  }

  function addNotification(noti) {
    const newMap = new Map(notifications);

    newMap.set(self.crypto.randomUUID(), noti);

    setNotifications(newMap);
  }

  return (
    <NotificationContext.Provider value={{ addNotification }}>
      {children}
      <div
        style={{
          position: 'fixed',
          right: '1rem',
          bottom: '1rem',
          maxHeight: 'calc(100% - 2rem)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          overflowY: 'auto',
        }}
      >
        {Array.from(notifications.entries()).map(([id, body]) => (
          <div
            key={id}
            style={{
              backgroundColor: '#f1f5f9',
              color: '#475569',
              display: 'flex',
              gap: '1rem',
              alignItems: 'center',
              borderRadius: '.5rem',
              paddingBlock: '.25rem',
              paddingInlineStart: '.75rem',
              paddingInlineEnd: '1.5rem',
              boxShadow:
                '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
            }}
          >
            <button
              type="button"
              style={{
                display: 'grid',
                placeItems: 'center',
                backgroundColor: '#cbd5e1',
                color: '#1e293b',
                fill: 'currentColor',
                borderRadius: '50%',
                border: '1px solid currentColor',
                blockSize: '2rem',
                inlineSize: '2rem',
                padding: 0,
                margin: 0,
              }}
              onClick={() => removeNotification(id)}
            >
              <svg width="18" viewBox="0 0 60 60">
                <path d="M33.3,30l10.1-10.1c0.9-0.9,0.9-2.4,0-3.3c-0.9-0.9-2.4-0.9-3.3,0L30,26.7L19.9,16.6c-0.9-0.9-2.4-0.9-3.3,0s-0.9,2.4,0,3.3  L26.7,30L16.6,40.1c-0.9,0.9-0.9,2.4,0,3.3c0.9,0.9,2.4,0.9,3.3,0L30,33.3l10.1,10.1c0.9,0.9,2.4,0.9,3.3,0s0.9-2.4,0-3.3l0,0  L33.3,30z" />
              </svg>
            </button>
            <div>{body.message}</div>
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
}

export function useNotification() {
  return useContext(NotificationContext);
}
