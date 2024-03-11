import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { css } from '@emotion/react'

interface ToastContextType {
  showMessage: (message: string, duration?: number) => void;
}

const toastStyle = css`
  position: absolute; top: 20px;left: 50%;transform: translateX(-50%);background: black;
  color: white;padding: 10px 25px;border-radius: 6px;z-index: 1000;
`

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toast, setToast] = useState<{ message: string; duration: number } | null>(null);

  const showMessage = useCallback((message: string, duration: number = 3000) => {
    setToast({ message, duration });
    setTimeout(() => setToast(null), duration);
  }, []);

  return (
    <ToastContext.Provider value={{ showMessage }}>
      {children}
      {toast && (
        <div className="toast-message" css={toastStyle}>{toast.message}</div>
      )}
    </ToastContext.Provider>
  );
};
