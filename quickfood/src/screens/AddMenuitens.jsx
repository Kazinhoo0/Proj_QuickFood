
import topimg_home from '../assets_imgs/fb-subheader-4.jpg'
import logo from '../assets_imgs/logo_quickfood.png'
import optionsimg from '../assets_imgs/options-img.png'
import imgemail from '../assets_imgs/mail.png'
import imgmenuinstagram from '../assets_imgs/instagram.png'
import imgmenufacebook from '../assets_imgs/facebook.png'
import imgmenutwitter from '../assets_imgs/twitter.png'
import imgtelefone from '../assets_imgs/phone.png'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'



export default function AddMenuItens() {

    const [nomeitem, setNomeItem] = useState('')
    const [preco, setPreço] = useState('')
    const [ingredientes, setIngredientes] = useState('')
    const [fotomenu, setFotoMenu] = useState('')
    //                                                    // 
    const [kebabs, setKebabs] = useState('')
    const [chicken, setChicken] = useState('')
    const [burguers, setBurgers] = useState('')
    const [massas, setMassas] = useState('')
    const [japoneses, setJaponeses] = useState('')
    const [bebida, setBebida] = useState('')
    const [carnes, setCarnes] = useState('')
    const [salada, setSalada] = useState('')

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
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        handleAdicionaritem(nomeitem,preco,ingredientes, fotomenu)
        localStorage.setItem('nomeitem' , nomeitem)
        localStorage.setItem('preco' , preco)
        localStorage.setItem('ingredientes' , ingredientes)
        localStorage.setItem('fotomenu' , fotomenu)

        console.log('nomeitem -', nomeitem, 'preço -', preco, -  'ingredientes -', ingredientes, - 'fotolink -', fotomenu)

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
                                <lo className='navbar_itens-style_logon-pages'> <a onClick={handlenavigateadditens}>Adicionar itens</a></lo>
                                <lo className='navbar_itens-style_logon-pages'> <a onClick={handlenavigatemeuspratos}>Meus pratos</a></lo>
                                <lo className='navbar_itens-style_logon-pages'><a onClick={handlenavigateordenarrequisições}>Ordenar requisições</a></lo>
                                <lo className='navbar_username-logon'><a>{userdata.nomecompleto}</a></lo>
                                <lo className='navbar_itens_style_onpages-logon'><a onClick={handlenavigatehome}>SAIR</a></lo>

                            </ul>
                        </div>
                    </nav>
                    <div className='container-login_text'>
                        <div className='container_h1headerloginpage'>
                            <h1><strong>CADASTRAMENTO DE MENUS/ITENS</strong>
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
                                    onChange={(e) => setNomeItem(e.target.value)}
                                    className='style-inputs-additenspag'
                                    placeholder='Nome completo*'
                                    type="email"
                                    value={nomeitem} />
                                <span className='style_span_pageadditens'>Preço</span>
                                <input
                                    onChange={(e) => setPreço(e.target.value)}
                                    className='style-inputs-additenspag'
                                    placeholder='Preço em numero inteiro'
                                    type="email"
                                    value={preco} />
                            </form>

                            <form className='container-formulario-restaurants_pageadditens2' action="">
                                <span className='style_span_pageadditens'>Ingredientes</span>
                                <input
                                    onChange={(e) => setIngredientes(e.target.value)}
                                    className='style-inputs-additenspag'
                                    placeholder='Seu email aqui*'
                                    type="email"
                                    value={ingredientes} />
                                <span className='style_span_pageadditens'>Foto Menu</span>
                                <input
                                    onChange={(e) => setFotoMenu(e.target.value)}
                                    className='style-inputs-additenspag'
                                    placeholder='Sua senha aqui*'
                                    type="file"
                                    value={fotomenu} />


                            </form>
                        </div>
                        <div className='container_type_additens' >
                            <span className='style_span_types'>Escolha o tipo do item: </span>
                            <div className='container_checkbox_type' >
                                <input
                                    className='style_checkbox_additens'
                                    type="checkbox"
                                    onChange={(e) => setMassas(e.target.value)}
                                    value={massas}

                                />
                                <small>Massas</small>
                                <input
                                    className='style_checkbox_additens'
                                    type="checkbox"
                                    onChange={(e) => setKebabs(e.target.value)}
                                    value={kebabs} />
                                <small>Kebabs</small>
                                <input
                                    className='style_checkbox_additens'
                                    type="checkbox"
                                    onChange={(e) => setChicken(e.target.value)}
                                    value={chicken}
                                />
                                <small>Frangos</small>
                                <input
                                    className='style_checkbox_additens'
                                    type="checkbox"
                                    onChange={(e) => setBurgers(e.target.value)}
                                    value={burguers} />
                                <small>Hamburguer</small>
                            </div>

                            <div className='container_checkbox_type'>
                                <input
                                    className='style_checkbox_additens'
                                    type="checkbox"
                                    onChange={(e) => setBebida(e.target.value)}
                                    value={bebida} />
                                    
                                <small>Bebida</small>
                                <input
                                    className='style_checkbox_additens'
                                    type="checkbox"
                                    onChange={(e) => setJaponeses(e.target.value)}
                                    value={japoneses} />
                                <small>Japones</small>
                                <input
                                    className='style_checkbox_additens'
                                    type="checkbox"
                                    onChange={(e) => setCarnes(e.target.value)}
                                    value={carnes} />
                                <small>Carnes</small>
                                <input
                                    className='style_checkbox_additens'
                                    type="checkbox"
                                    onChange={(e) => setSalada(e.target.value)}
                                    value={salada} />
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