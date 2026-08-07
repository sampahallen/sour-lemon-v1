import { createBrowserRouter } from 'react-router'
import { Layout } from '@/components/layout/Layout'
import { Home } from '@/pages/Home'
import { Bakery } from '@/pages/Bakery'
import { Shop } from '@/pages/Shop'
import { Collabs } from '@/pages/Collabs'
import { Journal } from '@/pages/Journal'
import { About } from '@/pages/About'
import { Contact } from '@/pages/Contact'
import { NotFound } from '@/pages/NotFound'

export const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/bakery', element: <Bakery /> },
        { path: '/shop', element: <Shop /> },
        { path: '/collabs', element: <Collabs /> },
        { path: '/journal', element: <Journal /> },
        { path: '/about', element: <About /> },
        { path: '/contact', element: <Contact /> },
        { path: '*', element: <NotFound /> },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL.replace(/\/$/, '') },
)
