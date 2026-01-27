import { createBrowserRouter } from 'react-router'
import HomePage from './src/pages/Home'

const router = createBrowserRouter([{
  path: '/',
  children: [
    {index: true, Component: HomePage}
  ]
}])

export default router