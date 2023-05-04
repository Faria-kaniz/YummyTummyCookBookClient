import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import AuthProviders from './components/providers/AuthProviders';
import router from './components/routes/Routes';
import './index.css';


ReactDOM.createRoot(document.getElementById("root")).render(
    <AuthProviders>
        <RouterProvider router={router} />
    </AuthProviders>
);
