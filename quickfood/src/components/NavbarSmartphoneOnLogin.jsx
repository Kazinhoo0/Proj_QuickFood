import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react'
import '../App.css';
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";


export default function NavbarSmartphonepagonlogin() {


    const [isButtonOn, setIsButtonon] = useState(false);
    const [userdata, setUserData] = useState({
        
        username: ''
    })


    const handleclickbutton = () => {
        setIsButtonon(!isButtonOn)
    }

    const navigate = useNavigate();

    const handlenavigatehome = () => {
        navigate('/')
        console.log('Executado com sucesso')
    }

    const handlenavigatemeuspratos = () => {
        navigate('/gerenciarpratos')
        console.log('Executado com sucesso')
    }

    const handlenavigateadditens = () => {
        navigate('/Adicionaritensmenu')
        console.log('Executado com sucesso')
    }

    const handlenavigateordenarrequisições = () => {
        navigate('/Ordenarrequisicoes')
        console.log("executado com sucesso")
    }

    useEffect(() => { 
        const username = localStorage.getItem('nomecompleto');


        setUserData ({
            username: username || ''
        })
    })




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

                        <lo className='navbar_itens_style_onlog'><a onClick={handlenavigateadditens}>ADICIONAR ITENS</a></lo>
                        <lo className='navbar_itens_style_onlog'><a onClick={handlenavigatemeuspratos}>MEUS PRATOS</a></lo>
                        <lo className='navbar_itens_style_onlog'><a onClick={handlenavigateordenarrequisições}>ORDENAR REQUISIÇÕES</a></lo>
                        <lo className='navbar_itens_style_onlog'><a onClick={userdata.username}>nomeuser</a></lo>
                        <lo className='navbar_itens_style_orange'><a onClick={handlenavigatehome}>SAIR</a></lo>

                    </ul>

                </div>
            )}
        </div>

    )
}























