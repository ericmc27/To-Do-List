import { createBrowserRouter } from 'react-router'
import HomePage from './src/pages/Home'
import SignupPage from './src/pages/Signup'

const router = createBrowserRouter([{
  path: '/',
  children: [
    {path: '/home', Component: HomePage},
    {path: '/signup', Component: SignupPage}
  ]
}])

export default router