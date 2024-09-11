import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Home from '../screens/Home'
import Login from '../screens/Login'
import RegisterRestaurants from '../screens/RegisterRestaurants'
import OrderRequests from '../screens/OrderRequests'
import MyFoods from '../screens/MyFoods'
import MyOrders from '../screens/MyOrders'
import AddMenuitens from '../screens/AddMenuitens'
import Restaurants from '../screens/Restaurants'
import RestaurantsDetails from '../screens/RestaurantsDetails'
import CreateAccount from "../screens/CreateAccount";






const Rotas = () => {

    return (

        <BrowserRouter>
            <Routes>
                <Route Component={Home} path='/' exact ></Route>
                <Route Component={Login} path='/Login'></Route>
                <Route Component={RegisterRestaurants} path="/Registrarrestaurantes"></Route>
                <Route Component={OrderRequests} path="/Ordenarrequisições"></Route>
                <Route Component={MyFoods} path="/gerenciarpratos" ></Route>
                <Route Component={MyOrders} path="/Ordenarrequisicoes"></Route>
                <Route Component={AddMenuitens} path="/Adicionaritensmenu" > </Route>
                <Route Component={Restaurants} path='/Pesquisarrestaurants'> </Route>
                <Route Component={RestaurantsDetails} path='Detalhesrestaurantes' ></Route>
                <Route Component={CreateAccount} path="/Criarconta"> </Route>
            </Routes>
        </BrowserRouter>

    )
}

export default Rotas