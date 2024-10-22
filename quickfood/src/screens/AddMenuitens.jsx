
import topimg_home from '../assets_imgs/fb-subheader-4.jpg';
import logo from '../assets_imgs/logo_quickfood.png';
import optionsimg from '../assets_imgs/options-img.png';
import imgemail from '../assets_imgs/mail.png';
import imgmenuinstagram from '../assets_imgs/instagram.png';
import imgmenufacebook from '../assets_imgs/facebook.png';
import imgmenutwitter from '../assets_imgs/twitter.png';
import imgtelefone from '../assets_imgs/phone.png';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Toastify from 'toastify-js';
import NavbarSmartphonepagonlogin from '..//components/NavbarSmartphoneOnLogin'



export default function AddMenuItens() {

    const [novoPrato, setNovoPrato] = useState({ nomeitem: '', preco: '', ingredientes: '', fotomenu: '' })
    // 
    const [typesComidas, setTypescomidas] = useState({ kebabs: false, frango: false, hamburguer: false, massas: false, japoneses: false, bebida: false, carnes: false, salada: false })
    // 


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

    const handleAdicionaritem = () => {
        console.log('itens enviados com sucesso')
    }


    useEffect(() => {
        const nomecompleto = localStorage.getItem('nomecompleto')
        const email = localStorage.getItem('email')

        setUserData({
            nomecompleto: nomecompleto || '',
            email: email || ''
        })
    }, [])

    const handleSubmit = async () => {
        const userid = localStorage.getItem('userid')

        if (!userid) {
            Toastify({
                text: 'Usuário não autenticado!',
                position: 'center',
                style: {
                    background: '#db2d0e',
                    color: '#ffffff'
                }
            }).showToast();
            return
        }


        const response = await fetch('https://proj-quickfood.onrender.com/Adicionaritensmenu', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                nomeitem: novoPrato.nomeitem,
                preco: novoPrato.preco,
                ingredientes: novoPrato.ingredientes,
                fotomenu: novoPrato.fotomenu,
                userid: userid



            })
        });

        const data = await response.json();

        if (data.success) {
            localStorage.setItem('token', data.token);
            setNovoPrato({ nomeitem: '', preco: '', ingredientes: '', fotomenu: '', userid: '' })

            Toastify({
                text: 'Sucesso ao adiconar novo item!',
                position: 'center',
                style: {
                    background: '#33ff00',
                    color: '#ffffff'
                }
            }).showToast();

            // Garantindo que o loader seja visível por pelo menos 2 segundos
            setTimeout(() => {
                navigate('/gerenciarpratos')
            }, 2000);

        } else {
            Toastify({
                text: 'Erro ao adicionar este item!',
                position: 'center',
                style: {
                    background: '#db2d0e',
                    color: '#ffffff'
                }
            }).showToast();
        }
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
                                <lo className='navbar_itens_style'><a className='style_a_paginasafterlogin' onClick={handlenavigateadditens} >Adicionar itens</a></lo>
                                <lo className='navbar_itens_style'><a className='style_a_paginasafterlogin' onClick={handlenavigatemeuspratos} >Meus pratos</a></lo>
                                <lo className='navbar_itens_style'><a className='style_a_paginasafterlogin' onClick={handlenavigateordenarrequisições} >Ordenar requisições</a></lo>
                                <lo className='navbar_itens_style'><a  style={{color: 'orange', fontWeight: 'bolder'}}>{userdata.nomecompleto}</a></lo>
                                <lo className='style_button_sair'><a className='style_a_paginasafterlogin' onClick={handlenavigatehome}>SAIR</a></lo>

                            </ul>
                        </div>

                        <NavbarSmartphonepagonlogin />
                    </nav>
                    <div className='container-login_text'>
                        <div className='container_h1headerloginpage'>
                            <h1 className='style_tittlelogin-senha'>CADASTRAMENTO DE MENUS/ITENS
                            </h1>
                        </div>
                    </div>

                </div>
            </div>
            <div className='container-principal-restaurants-register'>
                <div className='container-second-login-register'>
                    <div className='container_input-restaurants-register'>
                        <h2 className='style-h2-loginpage' >CADASTRAR MENUS</h2>
                        <div className='container-input-additens'>
                            <form className='container-formulario-restaurants_pageadditens' action="">
                                <span className='style_span_pageadditens'>Nome item</span>
                                <input
                                    onChange={(e) => setNovoPrato({ ...novoPrato, nomeitem: e.target.value })}
                                    className='style-inputs-additenspag'
                                    placeholder='Nome completo*'
                                    type="text"
                                    value={novoPrato.nomeitem} />
                                <span className='style_span_pageadditens'>Preço</span>
                                <input
                                    onChange={(e) => setNovoPrato({ ...novoPrato, preco: e.target.value })}
                                    className='style-inputs-additenspag'
                                    placeholder='Preço em numero inteiro'
                                    type="number"
                                    value={novoPrato.preco} />
                            </form>

                            <form className='container-formulario-restaurants_pageadditens2' action="">
                                <span className='style_span_pageadditens'>Ingredientes</span>
                                <input
                                    onChange={(e) => setNovoPrato({ ...novoPrato, ingredientes: e.target.value })}
                                    className='style-inputs-additenspag'
                                    placeholder='Seu email aqui*'
                                    type="text"
                                    value={novoPrato.ingredientes} />
                                <span className='style_span_pageadditens'>Foto Menu</span>
                                <input
                                    onChange={(e) => setNovoPrato({ ...novoPrato, fotomenu: e.target.value })}
                                    className='custom-file-button'
                                    placeholder='Sua senha aqui*'
                                    type="file"
                                    value={novoPrato.fotomenu} />


                            </form>
                        </div>
                        <div className='container_type_additens' >
                            <span className='style_span_types'>Escolha o tipo do item: </span>
                            <div className='container_checkbox_type' >

                                <input
                                    className='style_checkbox_additens'
                                    type="checkbox"
                                    onChange={(e) => setTypescomidas({ ...typesComidas, massas: e.target.checked })}
                                    value={typesComidas.massas}

                                />
                                <small className='style-small-pagmenu'>Massas</small>

                                <input
                                    className='style_checkbox_additens'
                                    type="checkbox"
                                    onChange={(e) => setTypescomidas({ ...typesComidas, kebabs: e.tager.checked })}
                                    value={typesComidas.kebabs} />
                                <small>Kebabs</small>


                                <input
                                    className='style_checkbox_additens'
                                    type="checkbox"
                                    onChange={(e) => setTypescomidas({ ...typesComidas, frangos: e.target.checked })}
                                    value={typesComidas.frango}
                                />
                                <small>Frangos</small>


                                <input
                                    className='style_checkbox_additens'
                                    type="checkbox"
                                    onChange={(e) => setTypescomidas({ ...typesComidas, hamburguer: e.target.checked })}
                                    value={typesComidas.hamburguer} />
                                <small>Hamburguer</small>


                            </div>

                            <div className='container_checkbox_type'>
                                <input
                                    className='style_checkbox_additens'
                                    type="checkbox"
                                    onChange={(e) => setTypescomidas({ ...typesComidas, bebida: e.target.checked })}
                                    value={typesComidas.bebida} />

                                <small>Bebida</small>


                                <input
                                    className='style_checkbox_additens'
                                    type="checkbox"
                                    onChange={(e) => setTypescomidas(e.target.checked)}
                                    value={typesComidas.japoneses} />
                                <small>Japones</small>


                                <input
                                    className='style_checkbox_additens'
                                    type="checkbox"
                                    onChange={(e) => setTypescomidas({ ...typesComidas, carnes: e.target.checked })}
                                    value={typesComidas.carnes} />
                                <small>Carnes</small>


                                <input
                                    className='style_checkbox_additens'
                                    type="checkbox"
                                    onChange={(e) => setTypescomidas({ ...typesComidas, salada: e.target.checked })}
                                    value={typesComidas.salada} />
                                <small>Salada</small>


                            </div>

                            <div className='style_button_createmenu'>
                                <button onClick={handleSubmit} className='style_buttoncreatemenu'>ADICIONAR ITEM</button>
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