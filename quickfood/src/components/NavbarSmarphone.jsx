import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import '../App.css';
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";


export default function NavbarSmarphone() {


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

        <div>

            <div className="container_navbarbutton">
                <FaBars onClick={handleclickbutton} className="style_navbarbutton" color="white" />
            </div>

            {isButtonOn && (
                <div className='container_navbar_buttons'>

                    <div className="container_buttonclosenavbar">
                        <IoMdClose onClick={handleclickbutton} className="style_buttonclosenavbar" color="white" />
                    </div>

                    <ul className='navbar_style'>
                        <lo className='navbar_itens_style'><a onClick={handlenavigaterestaurant}>RESTAURANTS</a></lo>
                        <lo className='navbar_itens_style'><a onClick={handlenavigateLogin}>LOGIN /  REGISTER</a></lo>
                        <lo onClick={handlenavigateregister} className='navbar_itens_style_orange'><a onClick={handlenavigateregister}>REGISTRAR RESTAURANT</a></lo>

                    </ul>
                </div>
            )}
        </div>

    )
}