import { createBrowserRouter, Outlet } from 'react-router-dom'
import AuthLayout from '@/layouts/auth'
import HomePage from '@/pages/main/home'
import LoginPage from '@/pages/auth/login'
import SignUpPage from '@/pages/auth/sign-up'
import DashboardLayout from '@dash-lay/index'
// import ProtectedRoutes from '@/router/ProtectedRoutes'
import MeProvider from '@/modules/auth/contexts/MeProvider'
import AuthProvider from '@/modules/auth/contexts/AuthProvider'


const router = createBrowserRouter([
  {
    path: '/',
    element: (
        <AuthProvider>
          <MeProvider>
            <DashboardLayout>
              {/*<ProtectedRoutes/>*/}
              <Outlet/>
            </DashboardLayout>
          </MeProvider>
        </AuthProvider>
    ),
    children: [
      {
        path: '/',
        element: <HomePage/>,
      },
    ],
  },
  {
    path: '/auth',
    element: (
        <AuthProvider>
          <AuthLayout>
            <Outlet/>
          </AuthLayout>
        </AuthProvider>
    ),
    children: [
      {
        path: 'login',
        element: <LoginPage/>,
      },
      {
        path: 'signup',
        element: <SignUpPage/>,
      },
    ],
  },
])

export default router