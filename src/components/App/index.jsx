import React from 'react';
import {createBrowserRouter, Link, RouterProvider, Outlet, useParams} from 'react-router-dom'
import {Footer} from '../Footer';
import {Header} from '../Header';
import {Home} from '../Home';

export const App = () => (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
);
