import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RecoilRoot } from 'recoil'
import ToastProvider from './components/ToastProvider.tsx';
import ModalProvider from './components/ModalProvider.tsx';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <BrowserRouter>
      <App />
      <ModalProvider />
      <ToastProvider />
    </BrowserRouter>
  </RecoilRoot>,
)
