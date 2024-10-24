import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import '../App.css';
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";


export default function NavbarSmartphonepagonlogin() {


    const [isButtonOn, setIsButtonon] = useState(false);


    const handleclickbutton = () => {
        setIsButtonon(!isButtonOn)
    }

    const navigate = useNavigate();

    const handlenavigaterestaurant = () => {
        navigate('/Pesquisarrestaurants')
    };

    const handlenavigateregister = () => {
        navigate('/Registrarrestaurantes')
    };


    const handlenavigateLogin = () => {
        navigate('/Login')
    };




    return (

        <div style={{ display: 'flex', justifyContent: 'end', width: '80%' }}>

            <div className="container_navbarbutton">
                <FaBars onClick={handleclickbutton} className="style_navbarbutton" color="white" />
            </div>

            {isButtonOn && (
                <div className='container_navbar_smartphones'>

                    <div className="container_buttonclosenavbar">
                        <IoMdClose onClick={handleclickbutton} className="style_buttonclosenavbar" color="white" />
                    </div>

                    <ul className='navbar_style_pagonuserlog'>

                        <lo className='navbar_itens_style_onlog'><a onClick={handlenavigaterestaurant}>ADICIONAR ITENS</a></lo>
                        <lo className='navbar_itens_style_onlog'><a onClick={handlenavigateLogin}>MEUS PRATOS</a></lo>
                        <lo className='navbar_itens_style_onlog'><a onClick={handlenavigateLogin}>ORDENAR REQUISIÇÕES</a></lo>
                        <lo className='navbar_itens_style_onlog'><a onClick={handlenavigateLogin}>nomeuser</a></lo>
                        <lo onClick={handlenavigateregister} className='navbar_itens_style_orange'><a onClick={handlenavigateregister}>SAIR</a></lo>

                    </ul>

                </div>
            )}
        </div>

    )
}























