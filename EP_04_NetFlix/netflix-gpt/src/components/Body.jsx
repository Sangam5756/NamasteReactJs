import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Provider } from 'react-redux'
import appStore from '../redux/store'

const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browse",
      element: <Browse />
    }
  ])

  return (
    <div className=''>
      <Provider store={appStore}>

      <RouterProvider router={appRouter} />
      </Provider>
        

    </div>
  )
}

export default Body