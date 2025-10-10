import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import About from '../pages/About' 
import App from '../App' 

const router = createBrowserRouter([
    {
        path:"/",
        element: <App />,


        children:[
            {
                index: true,
                element: <Home />
            },

            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "about",
                element: <About />
            }
        ]
    }
])


export default router;