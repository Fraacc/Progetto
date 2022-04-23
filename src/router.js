import { Route, Routes } from 'react-router'
import Registrazione from 'view/Registrazione'
import DashboardPage from 'view/Dashboard'
import LoginPage from 'view/Login'
import Contatti from 'view/Contatti'
import AboutUs from 'view/AboutUs'
import Galleria from 'view/Galleria'
import Home from 'view/Home'
import Profilo from 'view/Profilo'

export const navbarPath = [
    {
        path: '/galleria',
        component: Galleria,
        label: 'Galleria',
        exact: false
    },
    {
        path: '/contatti',
        component: Contatti,
        label: 'Contatti',
        exact: false
    },
    {
        path: '/about',
        component: AboutUs,
        label: 'About us',
        exact: false
    }
]

const hiddenPath = [
    {
        path: '/home',
        component: Home,
        exact: true
    }
]
const profiloPath =
    {
        path: '/profilo',
        component: Profilo,
        exact: true
    }

const senzaEssereLoggati = [
    {
        path: "/registrazione",
        component: Registrazione
    },
    {
        path: '/galleria',
        component: Galleria

    }]

export const printInitialRoutes = (logged) => {

    const redirect = (<Route from='*' to='/' />)
    
    if(logged)    
        return (
            
           <DashboardPage />
        )
    else
        return (
            <Routes>
                <Route key={0} path={'/'} exact={true} element={<LoginPage />}/>
                {senzaEssereLoggati.map((route,index) => (<Route key={index} path={route.path} exact={route.exact} element={<route.component />} />))}
                {redirect}
            </Routes>
        )
}

export const printRoutes = () => {
    return (
        <Routes>
            {hiddenPath.concat(navbarPath).concat(profiloPath).map((route,index) => (
                <Route key={index} path={route.path} exact={route.exact} element={<route.component />} />   
            ))}
        </Routes>
    )
}