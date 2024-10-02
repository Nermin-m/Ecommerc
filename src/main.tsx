import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./ui/layout.tsx";
import App from "./App.tsx";
import Product from "./pages/product.tsx";
import Favorite from "./pages/favorite.tsx";
import Success from "../src/pages/sucsses.tsx";
import Card from "./pages/card.tsx";
import Orders from "./pages/orders.tsx";
import NotFound from "./pages/notFound.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainContainer from "./ui/mainContainer.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.tsx";
import CategoryFilter from '../src/components/catagoryFilter.tsx';
import ProductItem from "../src/components/productItem.tsx";
import Blog from "./pages/blog.tsx";
import Signin from "./pages/signin.tsx";
import ProfileLayout from "./ui/profileLayout.tsx";
import SignUp from "./pages/signUp.tsx";
import { SnackbarProvider } from 'notistack';

const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <MainContainer />
            },
            {
                path: 'favorite',
                element: <Favorite />
            },
            {
                path: 'product',
                element: <CategoryFilter />,
                children: [
                    {
                        index: true,
                        element: <Product />
                    },
                    {
                        path: ':id',
                        element: <Product />,
                        children: [
                            {
                                path: ':item',
                                element: <ProductItem />
                            }
                        ]
                    }
                ]
            },
            {
                path: 'success',
                element: <Success />
            },
            {
                path: 'card',
                element: <Card />
            },
            {
                path: 'order',
                element: <Orders />
            },
            {
                path: 'blog',
                element: <Blog />
            }
        ]
    },
    {
        path: '/profile',
        element: <ProfileLayout />,
        children: [
            {
                index: true,
                element: <Signin />
            },
            {
                path: 'signup',
                element: <SignUp />
            }
        ]
    }
]);

createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <SnackbarProvider maxSnack={3}>
                <RouterProvider router={router}>
                    <App />
                </RouterProvider>
            </SnackbarProvider>
        </Provider>
    </QueryClientProvider>
);

