import { createRoot } from 'react-dom/client'

import 'react-toastify/dist/ReactToastify.css';
import router from './Routes/Routes'
import './index.css'
import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>
)
