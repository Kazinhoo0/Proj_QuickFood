import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import imgemail from '../assets_imgs/mail.png'
import imgmenuinstagram from '../assets_imgs/instagram.png'
import imgmenufacebook from '../assets_imgs/facebook.png'
import imgmenutwitter from '../assets_imgs/twitter.png'
import imgtelefone from '../assets_imgs/phone.png'
import topimg_home from '../assets_imgs/fb-subheader-2.jpg'
import logo from '../assets_imgs/logo_quickfood.png'
import imgsearch from '../assets_imgs/search-interface-symbol.png'
import imgstarblack from '../assets_imgs/star.png'
import imgaz from '../assets_imgs/from-a-to-z.png'
import imglike from '../assets_imgs/like.png'
import NavbarSmarphone from '../components/NavbarSmartphone'




export default function Restaurants() {


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
                                <lo className='navbar_itens_style'><a onClick={handlenavigateLogin}>LOGIN /  REGISTER</a></lo>
                                <lo onClick={handlenavigateregister} className='navbar_itens_style_orange'><a onClick={handlenavigateregister}>REGISTRAR RESTAURANT</a></lo>

                            </ul>
                        </div>

                        <NavbarSmarphone />
                    </nav>
                    <div className='container-login_text .paglogin'>
                        <div className='container_h1headerpesquisar-restaurants-page'>
                            <div className="container-imglupasearch">
                                <img className="style-img-pesquisarrestaurants" src={imgsearch} />
                            </div>
                            <input className="style_input-pesquisarrestaurants" placeholder="Pesquisar restaurantes*" type="text" />
                        </div>
                    </div>

                </div>
            </div>
            <div className='container-principal-restaurants-search'>
                <div className="container-restaurants-searchrestaurants">
                    <div className="style-containercategorias">
                        <h3>Categorias</h3>
                        <ul className="style-lista-restaurants">
                            <li className="style-elements-input-restaurants"><input type="checkbox" />Apple Juice</li>
                            <li className="style-elements-input-restaurants"><input type="checkbox" />BB.Q</li>
                            <li className="style-elements-input-restaurants"><input type="checkbox" />Beef Roast</li>
                            <li className="style-elements-input-restaurants"><input type="checkbox" />Chicken Roast</li>
                            <li className="style-elements-input-restaurants"><input type="checkbox" />Cheese Burger</li>
                            <li className="style-elements-input-restaurants"><input type="checkbox" />Cold Coffee</li>
                        </ul>
                    </div>
                </div>
                <div className="container-categorias-searchrestaurants">
                    <h3>NÃO ENCONTRADO</h3>

                </div>
                <div className="container-sortby-searchrestaurants">
                    <div className="container-sortby">
                        <h4>Sort By</h4>
                        <a className="style-links-sortby"> <img className="style-img-sortby" src={imglike} /> ranking</a>
                        <a className="style-links-sortby" href=""><img className="style-img-sortby" src={imgstarblack} alt="" /> Melhor colocado</a>
                        <a className="style-links-sortby" href=""><img className="style-img-sortby" src={imgaz} alt="" /> Ordem Alfabética</a>
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
