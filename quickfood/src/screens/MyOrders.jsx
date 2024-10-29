import topimg_home from '../assets_imgs/cover-photo20.jpg'
import logo from '../assets_imgs/logo_quickfood.png'
import imgemail from '../assets_imgs/mail.png'
import imgmenuinstagram from '../assets_imgs/instagram.png'
import imgmenufacebook from '../assets_imgs/facebook.png'
import imgmenutwitter from '../assets_imgs/twitter.png'
import imgtelefone from '../assets_imgs/phone.png'
import { useNavigate } from 'react-router-dom'
import imgprofileteste from '../assets_imgs/user.png'
import imgpendente from '../assets_imgs/loading.png'
import imgentregue from '../assets_imgs/list-option.png'
import imgcaminho from '../assets_imgs/fast-delivery.png'
import { useEffect, useState } from 'react'
import NavbarSmarphone from '../components/NavbarSmartphoneOnLogin'
import LinksBar from '../components/LinksInfoBar'


export default function MyOrders() {


    const [userdata, setUserData] = useState({
        nomecompleto: '',
        email: ''

    })

    const navigate = useNavigate('')


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
        const nomecompleto = localStorage.getItem('nomecompleto')
        const email = localStorage.getItem('email')

        if (nomecompleto || email) {
            setUserData({

                nomecompleto: nomecompleto || '',
                email: email || '',

            })
        }
    }, [])


    return (
        <div className="home-container">

            <div style={{ backgroundImage: `url(${topimg_home})` }} className="container_fluid-pagmyfoods">

                <div className="container_son-myfoods">

                    <nav className="style_navbar">
                        <div className='container_logo'>
                            <a onClick={handlenavigatehome} className='imglogo_position'>
                                <img className='imglogo_width' src={logo} alt="" />
                            </a>
                        </div>

                        <div className='container_navbar_buttons'>

                            <ul className='navbar_style'>

                                <lo className='navbar_itens_style'><a className='style_a_paginasafterlogin' onClick={handlenavigateadditens} >Adicionar itens</a></lo>
                                <lo className='navbar_itens_style'><a className='style_a_paginasafterlogin' onClick={handlenavigatemeuspratos} >Meus pratos</a></lo>
                                <lo className='navbar_itens_style'><a className='style_a_paginasafterlogin' onClick={handlenavigateordenarrequisições} >Ordenar requisições</a></lo>
                                <lo className='navbar_itens_style'><a style={{ color: 'orange', fontWeight: 'bolder' }}>{userdata.nomecompleto}</a></lo>
                                <lo className='style_button_sair'><a className='style_a_paginasafterlogin' onClick={handlenavigatehome}>SAIR</a></lo>

                            </ul>

                        </div>

                        <NavbarSmarphone />
                    </nav>

                    <div className='container_userprofile-myfoods' >


                        <img className='style-img-profile' src={imgprofileteste} alt="" />

                        <ul style={{ display: 'grid', justifyContent: 'center', alignItems: 'center', listStyle: 'none', color: 'white' }}>

                            <li>
                                <h2 className='style_titulo_pagesafterlogin'>{userdata.nomecompleto}</h2>
                            </li>

                            <li>
                                <small className='style_descrição_pagesafterlogin' >Apple Juice, Beef Roast, Cheese Burger</small>
                            </li>

                        </ul>

                    </div>

                </div>
            </div>
            <div className='container-principal-meuspedidos'>
                <div className='container_organizarpedidos' >
                    <div className='container_options-meuspedidos'>
                        <ul className='style_container_lista_pagordernarreq'>
                            <lo className='style-options-meuspedidos'><img className='style-imgs-meuspedidos' src={imgpendente} alt="" />Pendente</lo>
                            <lo className='style-options-meuspedidos'><img className='style-imgs-meuspedidos' src={imgcaminho} alt="" />Em transito</lo>
                            <lo className='style-options-meuspedidos'><img className='style-imgs-meuspedidos' src={imgentregue} alt="" />Entregues</lo>
                        </ul>
                    </div>
                    <div className='container_result-options'>

                    </div>
                </div>
            </div>

            
                <LinksBar/>
        </div>
    )
}

