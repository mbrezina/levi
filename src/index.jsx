import React from 'react';
import {createRoot} from 'react-dom/client';
import {createBrowserRouter, Link, RouterProvider, Outlet, useParams} from 'react-router-dom'
import {App} from './components/App';
import './style.css';
import ErrorPage from "./components/ErrorPage";
import {Home} from "./components/Home";
import {Reservation} from "./components/Reservation";

export const API_BASE_URL = 'https://apps.kodim.cz/daweb/leviexpress/api';

const router = createBrowserRouter([
        {
            path: '/',
            element:
                <App/>,
            errorElement: <ErrorPage/>,
            children:
                [
                    {
                        path: '',
                        element: <Home/>
                    },
                    {
                        path: 'reservation',
                        element: <Reservation/>
                    }
                ],
        }
    ])
;

createRoot(document.querySelector('#app')).render(<RouterProvider router={router}/>);
