import topimg_home from '../assets_imgs/fb-subheader-4.jpg'
import logo from '../assets_imgs/logo_quickfood.png'
import { useNavigate } from 'react-router-dom'
import NavbarSmarphone from '../components/NavbarSmartphone'
import LinksBar from '../components/LinksInfoBar'


export default function RegisterRestaurant() {


    const navigate = useNavigate('')


    const handlenavigatehome = () => {
        navigate('/')
        console.log('Executado com sucesso')
    }

    const handlenavigateregister = () => {
        navigate('/Registrarrestaurantes')
        console.log('Executado com sucesso')
    }

    const handlenavigateLogin = () => {
        navigate('/Login')
        console.log('Executado com sucesso')
    }

    const handlenavigaterestaurant = () => {
        navigate('/Registrarrestaurantes')
        console.log("executado com sucesso")
    }




    return (
        <div className="home-container">
            <div style={{ backgroundImage: `url(${topimg_home})` }} className="container_fluid-home">
                <div className="container_son-login">
                    <nav className="style_navbar">
                        <div className='container_logo'>
                            <a onClick={handlenavigatehome} className='imglogo_position'>
                                <img className='imglogo_width' src={logo} alt="" />
                            </a>
                        </div>
                        <div className='container_navbar_buttons'>
                            <ul className='navbar_style'>
                                <lo className='navbar_itens_style'><a onClick={handlenavigaterestaurant}>RESTAURANTS</a></lo>
                                <lo className='navbar_itens_style'> <a onClick={handlenavigateLogin}>LOGIN /  REGISTER</a></lo>
                                <lo className='navbar_itens_style_orange'><a onClick={handlenavigateregister}>REGISTRAR RESTAURANT</a></lo>

                            </ul>
                        </div>

                        <NavbarSmarphone />
                    </nav>
                    <div className='container-login_text_pagregister'>
                        <div className='container_h1headerloginpage_paglogin'>
                            <h1 className='style_tittlelogin-senha'>CADASTRAR USUÁRIOS E RESTAURANTES</h1>
                        </div>
                    </div>

                </div>
            </div>
            <div className='container-principal-restaurants-register'>
                <div className='container-second-login-register'>
                    <div className='container_input-restaurants-register'>
                        <h2 className='style-h2-loginpage' >REGISTRAR RESTAURANTES</h2>
                        <div className='container-input-registerrestaurants'>
                            <form className='container-formulario-restaurants' action="">
                                <span>Nome Completo</span>
                                <input className='style-inputs-loginpage' placeholder='Nome completo*' type="text" />
                                <span>Senha</span>
                                <input className='style-inputs-loginpage' placeholder='Sua senha aqui*' type="password" />
                                <span>Cidade</span>
                                <input className='style-inputs-loginpage' type="email" />
                                <span>Genero</span>
                                <select className='style-inputs-loginpage' name="" id="">
                                    <option value=""></option>
                                    <option value="feminino">Feminino</option>
                                    <option value="masculino">Masculino</option>
                                </select>
                                <div className='style-container-termosecondicoes'>
                                    <input type="checkbox" />
                                    <small>Concordo com os termos e condições</small>
                                </div>

                                <div>
                                    <button className='style-button-loginpage'>Registrar</button>
                                </div>



                            </form>

                            <form className='container-formulario-restaurants' action="">
                                <span>Email</span>
                                <input className='style-inputs-loginpage' placeholder='Seu email aqui*' type="email" />
                                <span>Confirmar Senha</span>
                                <input className='style-inputs-loginpage' placeholder='Sua senha aqui*' type="password" />
                                <span>Pais</span>
                                <input className='style-inputs-loginpage' type="email" />
                                <span>Foto Perfil</span>
                                <input className='style-input-loginpage-file' placeholder='Escolher Imagem*' type="file" />
                            </form>

                        </div>
                    </div>
                </div>
            </div>

            
                <LinksBar/>
          
        </div>


    )
}