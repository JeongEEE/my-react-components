import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RecoilRoot } from 'recoil'
import {ToastProvider} from './components/Toast.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <ToastProvider>
      <App />
    </ToastProvider>
  </RecoilRoot>,
)
