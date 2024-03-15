import './App.css'
import './styles/reset.css'
import {Route, Routes} from 'react-router-dom';
import Index from './pages/Index.tsx';
import TestPage from './pages/TestPage.tsx';
import Layout from './components/layout/Layout.tsx';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
