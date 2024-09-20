import topimg_home from '../assets_imgs/fb-subheader-4.jpg';
import logo from '../assets_imgs/logo_quickfood.png';
import imgemail from '../assets_imgs/mail.png';
import imgmenuinstagram from '../assets_imgs/instagram.png';
import imgmenutwitter from '../assets_imgs/twitter.png';
import imgmenufacebook from '../assets_imgs/facebook.png'
import imgtelefone from '../assets_imgs/phone.png';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css"





export default function CreateAccount() {


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


    const [nomecompleto, setNomecompleto] = useState("")
    const [email, setemail] = useState("")
    const [senha, setsenha] = useState("")
    const [confirmarsenha, setconfirmarsenha] = useState('')
    const [pais, setpais] = useState("")
    const [cidade, setcidade] = useState("")
    const [genero, setgenero] = useState('masculino')


    const handleCadastrarUsuario = async () => {

        const response = await fetch('http://localhost:3000/Criarconta', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                nomecompleto,
                senha,
                cidade,
                genero,
                email
            })
        });


        if (response.ok) {
            const data = await response.json();
            Toastify(
                {
                    text: 'Usuário criado com sucesso!',
                    position: 'center',
                    style: {
                        background: '#ff7b00',
                        color: '#ffffff'
                    }

                }
            ).showToast();
            console.log("Usuário registrado com sucesso!", data);
        }
        if (!nomecompleto || !senha || !cidade || !genero || !email) {
            Toastify(
                {
                    text: 'Todos os campos precisam ser preenchidos',
                    position: 'center',
                    style: {
                        background: '#ff7b00',
                        color: '#ffffff'
                    }

                }
            ).showToast();
            console.log("Todos os campos precisam ser preenchidos");
        }
        if (senha != confirmarsenha) {
            Toastify(
                {
                    text: 'Ops! As senhas precisam ser iguais!',
                    position: 'center',
                    style: {
                        background: '#ff7b00',
                        color: '#ffffff'
                    }

                }
            ).showToast();
            console.log("Ops! As senhas precisam ser iguais!");
        }
        else {
            Toastify({
                text: 'Já existe uma conta com este email',
                position: 'center',
                style: {
                    background: '#db2d0e',
                    color: '#ffffff'
                    
                }
            }).showToast();

            console.log('Já existe uma conta com este email')
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        handleCadastrarUsuario(nomecompleto, genero, email, pais, cidade); 
        localStorage.setItem('nomecompleto' , nomecompleto);
        localStorage.setItem('email', email);
        localStorage.setItem('genero' , genero);
        localStorage.setItem('pais' , pais);
        localStorage.setItem('cidade', cidade )

        console.log(nomecompleto + genero + email, pais, cidade)
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
                                <lo className='navbar_itens_style'><a onClick={handlenavigaterestaurant}>RESTAURANTS</a></lo>
                                <lo className='navbar_itens_style'> <a onClick={handlenavigateLogin}>LOGIN /  REGISTER</a></lo>
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
            <div className='container-principal-restaurants-register'>
                <div className='container-second-login-register'>
                    <div className='container_input-restaurants-register'>
                        <h2 className='style-h2-loginpage' >CRIAR NOVA CONTA</h2>
                        <div className='container-input-registerrestaurants'>
                            <form className='container-formulario-restaurants' action="">

                                <span>Nome Completo</span>
                                <input
                                    className='style-inputs-loginpage'
                                    placeholder='Nome completo*'
                                    type="text"
                                    onChange={(e) => setNomecompleto(e.target.value)}
                                    value={nomecompleto} />

                                <span>Senha</span>
                                <input
                                    className='style-inputs-loginpage'
                                    placeholder='Sua senha aqui*'
                                    type="password"
                                    onChange={(e) => setsenha(e.target.value)}
                                    value={senha} />

                                <span>Cidade</span>
                                <input
                                    className='style-inputs-loginpage'
                                    type="text"
                                    onChange={(e) => setcidade(e.target.value)}
                                    value={cidade} />

                                <span>Genero</span>
                                <select

                                    className='style-inputs-loginpage'
                                    name=""
                                    id=""
                                    onChange={(e) => setgenero(e.target.value)}
                                    value={genero}>
                                    <option value=""></option>
                                    <option value="feminino">Feminino</option>
                                    <option value="masculino">Masculino</option>

                                </select>

                                <span className='style_spans'>Email</span>
                                <input value={email} onChange={(e) => setemail(e.target.value)} className='style-inputs-loginpage' placeholder='Seu email aqui*' type="email" />


                            </form>



                            <div className='container-formulario-restaurants' action="">

                                <span>Confirmar Senha</span>
                                <input
                                    className='style-inputs-loginpage'
                                    placeholder='Sua senha aqui*'
                                    type="password"
                                    onChange={(e) => setconfirmarsenha(e.target.value)}
                                    value={confirmarsenha} />

                                <span>Pais</span>
                                <input value={pais} onChange={(e) => setpais(e.target.value)} className='style-inputs-loginpage' type="text" />
                                <small className='style_naoobrigatoriotext'>*Não obrigatório</small>

                                <span>Foto Perfil</span>
                                <input className='style-input-loginpage-file' placeholder='Escolher Imagem*' type="file" />
                                <small className='style_naoobrigatoriotext'>*Não obrigatório</small>

                                <div className='style-container-termosecondicoes'>
                                    <input type="checkbox" />
                                    <small >Concordo com os termos e condições</small>
                                </div>

                                <div className='container_buttoncriarconta'>

                                    <button onClick={handleSubmit} className='style-button-loginpage'>Criar Conta</button>
                                    <p className='style-criarconta-a'>Ainda não tem uma conta ?
                                        <a onClick={handlenavigateLogin} className='style-link-a' > Faça Login</a>
                                    </p>
                                </div>
                            </div>
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