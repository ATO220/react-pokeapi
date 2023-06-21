import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.scss'
import { Home, PokeDetail } from './pages'
import PokemonProvider from './context/PokemnContext'
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/:pokeId',
        element: <PokeDetail/>
    }
])
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <PokemonProvider>
        <RouterProvider router={router}/>
    </PokemonProvider>
)
