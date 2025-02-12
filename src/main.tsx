import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ContextProvider } from './components/context/ContextProvider';

createRoot(document.getElementById('root')!).render(
  <ContextProvider>
    <App />
  </ContextProvider>,
)
