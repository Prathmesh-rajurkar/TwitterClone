import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
function body() {
    const appRouter = createBrowserRouter([
        {
            path:"/home",
            element:<Home/>
        },
        {
            path:"/login",
            element:<Login/>
        }
    ])
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default body