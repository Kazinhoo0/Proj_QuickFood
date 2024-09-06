import topimg_home from '../assets_imgs/fb-subheader-4.jpg'
import logo from '../assets_imgs/logo_quickfood.png'
import optionsimg from '../assets_imgs/options-img.png'
import imgemail from '../assets_imgs/mail.png'
import imgmenuinstagram from '../assets_imgs/instagram.png'
import imgmenufacebook from '../assets_imgs/facebook.png'
import imgmenutwitter from '../assets_imgs/twitter.png'
import imgtelefone from '../assets_imgs/phone.png'
import { useNavigate } from 'react-router-dom'



export default function Login() {



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
        navigate('/Pesquisarrestaurants')
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
                                <lo className='navbar_itens_style'> <a onClick={handlenavigaterestaurant}>RESTAURANTS</a></lo>
                                <lo className='navbar_itens_style'><a onClick={handlenavigateLogin}>LOGIN /  REGISTER</a></lo>
                                <lo className='navbar_itens_style_orange'><a onClick={handlenavigateregister}>REGISTRAR RESTAURANT</a></lo>

                            </ul>
                        </div>
                    </nav>
                    <div className='container-login_text'>
                        <div className='container_h1headerloginpage'>
                            <h1><strong>LOGIN USUÁRIO/REGISTRAR</strong>
                            </h1>
                        </div>
                    </div>

                </div>
            </div>
            <div className='container-principal-login-register'>
                <div className='container-second-login-register'>
                    <div className='container_input-login-register'>
                        <h2 className='style-h2-loginpage' >LOGIN SUA CONTA</h2>
                        <form className='container-formulario-login' action="">
                            <span>Email</span>
                            <input className='style-inputs-loginpage' placeholder='Seu email aqui*' type="email" />
                            <span>Senha</span>
                            <input className='style-inputs-loginpage' placeholder='Sua senha aqui' type="password" />
                            <button className='style-button-loginpage'>Entrar</button>


                        </form>
                        <div className='container-nothaveaccount'>
                            <p className='style-criarconta'>Ainda não tem uma conta ? 
                                <a className='style-link-a' >Criar Conta</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container_cabecalho-informacoes'>
                    <div className='container_infor-text'>
                        <div className='container-menus-tela'>
                            <div className='tittle-menus'>
                                <h3>Popular Cities</h3>
                                <p className='style-barra'></p>
                            </div>

                            <div className='container-categoriasmenu-popular-cities' >
                                <ul className='style-linksstyle '>
                                    <li>Karachi</li>
                                    <li>Lahore</li>
                                    <li>Islamabad</li>
                                    <li>Rawalpindi</li>
                                    <li>Multan</li>
                                </ul>

                            </div>

                        </div>

                        <div className='container-menus-tela'>
                            <div className='tittle-menus'>
                                <h3>Popular Cuisnies</h3>
                                <p className='style-barra'></p>
                            </div>

                            <div className='container-categoriasmenu-popular-cities' >

                                <ul className='style-linksstyle '>
                                    <li>Apple Juice</li>
                                    <li>BB.Q</li>
                                    <li>Chicken Roast</li>
                                    <li>Prawns</li>
                                    <li>Steam Roast</li>
                                </ul>

                            </div>

                        </div>

                        <div className='container-menus-tela'>
                            <div className='tittle-menus'>
                                <h3>Menu</h3>
                                <p className='style-barra'></p>
                            </div>

                            <div className='container-categoriasmenu-popular-cities' >
                                <ul className='style-linksstyle '>
                                    <li>Home</li>
                                    <li>Contact</li>
                                    <li>FAQ's</li>
                                    <li>How it works</li>
                                </ul>

                            </div>
                        </div>

                        <div className='container-menus-tela'>
                            <div className='tittle-menus'>
                                <h3>Contact</h3>
                                <p className='style-barra'></p>
                            </div>
                            <div className='container_icons'>
                                <img className='style-img-redesociais' src={imgmenufacebook} alt="" />
                                <img className='style-img-redesociais' src={imgmenuinstagram} alt="" />
                                <img className='style-img-redesociais' src={imgmenutwitter} alt="" />

                            </div>
                            <div className='container-telefone'>
                                <img className='style-imgtelefone' src={imgtelefone} alt="" />
                                <small className='style-telefoneeemail' >+55 21999999999</small>
                            </div>

                            <div className='container-telefone'>
                                <img className='style-imgtelefone' src={imgemail} alt="" />
                                <small className='style-telefoneeemail' >quickfood@gmail.com</small>
                            </div>
                        </div>
                    </div>
                    <div className='container-copyright'>
                        <p style={{color:'white'}}>© 2024 Quick Food.Developed by Kauã Lopes</p>
                    </div>
                </div>
        </div>
    )
}