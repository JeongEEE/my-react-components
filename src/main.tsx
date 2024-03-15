import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RecoilRoot } from 'recoil'
import ToastProvider from './components/ToastProvider.tsx';
import ModalProvider from './components/ModalProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <App />
    <ModalProvider />
    <ToastProvider />
  </RecoilRoot>,
)
