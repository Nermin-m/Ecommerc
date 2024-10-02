// import { createRoot } from 'react-dom/client';
// import './index.css';
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Layout from "./ui/layout.tsx";
// import App from "./App.tsx";
// import Product from "./pages/product.tsx";
// import Favorite from "./pages/favorite.tsx";
// import Success from "../src/pages/sucsses.tsx"; // Corrected filename
// import Card from "./pages/card.tsx";
// import Orders from "./pages/orders.tsx";
// import NotFound from "./pages/notFound.tsx";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import MainContainer from "./ui/mainContainer.tsx";
// import { Provider } from "react-redux";
// import { store } from "./redux/store.tsx";
// import CategoryFilter from '../src/components/catagoryFilter.tsx'; // Corrected filename
// import ProductItem from "../src/components/productItem.tsx";
// import Blog from "./pages/blog.tsx";
// import Signin from "./pages/signin.tsx";
// import ProfileLayout from "./ui/profileLayout.tsx";
// import SignUp from "./pages/signUp.tsx";
// import { SnackbarProvider } from 'notistack';
//
// const queryClient = new QueryClient();
//
// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <Layout />,
//         errorElement: <NotFound />,
//         children: [
//             {
//                 index: true,
//                 element: <MainContainer />
//             },
//             {
//                 path: 'favorite',
//                 element: <Favorite />
//             },
//             {
//                 path: 'product',
//                 element: <CategoryFilter />,
//                 children: [
//                     {
//                         index: true,
//                         element: <Product />
//                     },
//                     {
//                         path: ':id',
//                         element: <Product />,
//                         children: [
//                             {
//                                 path: ':item',
//                                 element: <ProductItem />
//                             }
//                         ]
//                     }
//                 ]
//             },
//             {
//                 path: 'success',
//                 element: <Success />
//             },
//             {
//                 path: 'card',
//                 element: <Card />
//             },
//             {
//                 path: 'order',
//                 element: <Orders />
//             },
//             {
//                 path: 'blog',
//                 element: <Blog />
//             }
//         ]
//     },
//     {
//         path: '/profile',
//         element: <ProfileLayout />,
//         children: [
//             {
//                 index: true,
//                 element: <Signin />
//             },
//             {
//                 path: 'signup',
//                 element: <SignUp />
//             }
//         ]
//     }
// ]);
//
// createRoot(document.getElementById('root')!).render(
//     <QueryClientProvider client={queryClient}>
//         <Provider store={store}>
//             <SnackbarProvider maxSnack={3}>
//                 <RouterProvider router={router}>
//                     <App />
//                 </RouterProvider>
//             </SnackbarProvider>
//         </Provider>
//     </QueryClientProvider>
// );
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./ui/layout";
import App from "./App";
import Product from "./pages/product";
import Favorite from "./pages/favorite";
import Success from "./pages/sucsses";
import Card from "./pages/card";
import Orders from "./pages/orders";
import NotFound from "./pages/notFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainContainer from "./ui/mainContainer";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import CategoryFilter from '../src/components/catagoryFilter';
import ProductItem from "../src/components/productItem";
import Blog from "./pages/blog";
import Signin from "./pages/signin";
import ProfileLayout from "./ui/profileLayout";
import SignUp from "./pages/signUp";
import { SnackbarProvider } from 'notistack';

const queryClient = new QueryClient();

const RootApp = () => (
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <SnackbarProvider maxSnack={3}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<MainContainer />} />
                            <Route path="favorite" element={<Favorite />} />
                            <Route path="product" element={<CategoryFilter />}>
                                <Route index element={<Product />} />
                                <Route path=":id/:item" element={<ProductItem />} />
                            </Route>
                            <Route path="success" element={<Success />} />
                            <Route path="card" element={<Card />} />
                            <Route path="order" element={<Orders />} />
                            <Route path="blog" element={<Blog />} />
                            <Route path="*" element={<NotFound />} />
                        </Route>

                        <Route path="/profile" element={<ProfileLayout />}>
                            <Route index element={<Signin />} />
                            <Route path="signup" element={<SignUp />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </SnackbarProvider>
        </Provider>
    </QueryClientProvider>
);

createRoot(document.getElementById('root')!).render(<RootApp />);
