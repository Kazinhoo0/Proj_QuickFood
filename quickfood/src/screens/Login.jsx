import topimg_home from '../assets_imgs/fb-subheader-4.jpg'
import logo from '../assets_imgs/logo_quickfood.png'
import imgemail from '../assets_imgs/mail.png'
import imgmenuinstagram from '../assets_imgs/instagram.png'
import imgmenufacebook from '../assets_imgs/facebook.png'
import imgmenutwitter from '../assets_imgs/twitter.png'
import imgtelefone from '../assets_imgs/phone.png'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Toastify from 'toastify-js';
import { MutatingDots } from 'react-loader-spinner'


export default function Login() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [loader, setLoader] = useState(false)
    const [AutoEmail, setAutoEmail] = useState('')

    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 5000)
    })


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

    const handlenavigatecreateaccount = () => {
        navigate('/Criarconta')
    }

    // const handleloginuser = () => {
    //     if (email === 'lopeskazin@gmail.com' && senha === '123456') {
    //         console.log('Executado com sucesso')
    //         navigate('/gerenciarpratos')
    //     }

    // }

    useEffect  (() => {
        const AutocompleteEmail = localStorage.getItem('email')

        if (AutocompleteEmail) {
            setEmail(AutocompleteEmail)
        }
    })


    const handleenteraccount = async (e) => {
        e.preventDefault();

        setLoader(true); // Começa a carregar


        setTimeout(async () => {
            const response = await fetch('https://proj-quickfood.onrender.com/Login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, senha })
            });

            const data = await response.json();

            console.log(data)

            
            if (data.success) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('email', email);
                localStorage.setItem('nomecompleto', data.nomecompleto);
                localStorage.setItem('userid', data.id)

                

                Toastify({
                    text: 'Login efetuado com sucesso!',
                    position: 'center',
                    style: {
                        background: '#33ff00',
                        color: '#ffffff'
                    }
                }).showToast();

                // Garantindo que o loader seja visível por pelo menos 2 segundos
                setTimeout(() => {
                    setLoader(false);
                    navigate('/gerenciarpratos');
                }, 2000);

            } 
            else {
                Toastify({
                    text: 'Usuário não cadastrado, porfavor crie uma conta!',
                    position: 'center',
                    style: {
                        background: '#db2d0e',
                        color: '#ffffff'
                    }
                }).showToast();
            }

            if (!senha || !email) {
                Toastify({
                    text: 'Todos os campos precisam estar preenchidos!',
                    position: 'center',
                    style: {
                        background: '#db2d0e',
                        color: '#ffffff'
                    }
                }).showToast();
            }
            

            // else {
            //     setLoader(false);

            //     Toastify({
            //         text: 'Não foi possível realizar o login!',
            //         position: 'center',
            //         style: {
            //             background: '#db2d0e',
            //             color: '#ffffff'
            //         }
            //     }).showToast();
            // }
        }, 2000);
    };


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
                            <h1 className='style_tittlelogin-senha-loginpage'>LOGIN USUÁRIO/REGISTRAR</h1>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container-principal-login-register">
                <div className="container-second-login-register">
                    <div className="container_input-login-register">
                        <h2 className="style-h2-loginpage">LOGIN SUA CONTA</h2>

                        {loader ? (

                            <MutatingDots
                                visible={true}
                                height="100"
                                width="100"
                                color="#4fa94d"
                                secondaryColor="#4fa94d"
                                radius="12.5"
                                wrapperStyle={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}
                                ariaLabel="mutating-dots-loading"
                            />

                        ) : (

                            <form onSubmit={handleenteraccount} className="container-formulario-login">
                                <span>Email</span>
                                <input
                                    className="style-inputs-loginpage"
                                    placeholder="Seu email aqui*"
                                    type="email"
                                    autoComplete='email'
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                                <span>Senha</span>
                                <input
                                    className="style-inputs-loginpage"
                                    placeholder="Sua senha aqui*"
                                    type="password"
                                    onChange={(e) => setSenha(e.target.value)}
                                    value={senha}
                                />
                                <button className="style-button-loginpage">Entrar</button>
                            </form>
                        )}

                        <div className='container-nothaveaccount'>
                            <p className='style-criarconta'>Ainda não tem uma conta ?
                                <a onClick={handlenavigatecreateaccount} className='style-link-a' >Criar Conta</a>
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
                    <p style={{ color: 'white' }}>© 2024 Quick Food.Developed by Kauã Lopes</p>
                </div>
            </div>
        </div>
    )
}