import logo from '../assets_imgs/logo_quickfood.png'
import topimg_home from '../assets_imgs/home-top-1.jpg'
import optionsimg from '../assets_imgs/options-img.png'
import caminhaoimg from '../assets_imgs/how-to-work1.png'
import lojaimg from '../assets_imgs/how-to-work2.png'
import sinoimg from '../assets_imgs/how-to-work3.png'
import imgpicanha_tophowitworks from '../assets_imgs/call-to-action-paralax.jpg'
import imgdestaqnatural from '../assets_imgs/listing-logo03.png'
import iconestrela from '../assets_imgs/star.png'
import imgdestaqmenu from '../assets_imgs/listing-logo09.png'
import imgdestaqchefs from '../assets_imgs/listing-logo12.png'
import imgdestaqrestaurant from '../assets_imgs/listing-logo13.png'
import imgdestaqrestaurant2 from '../assets_imgs/listing-logo15.png'
import imgdestaqifood from '../assets_imgs/listing-logo04.png'
import imgfavorithearth from '../assets_imgs/hearth.png'
import imgmenuinstagram from '../assets_imgs/instagram.png'
import imgmenufacebook from '../assets_imgs/facebook.png'
import imgmenutwitter from '../assets_imgs/twitter.png'
import imgtelefone from '../assets_imgs/phone.png'
import imgemail from '../assets_imgs/mail.png'
import { useNavigate } from 'react-router-dom'






export default function Home() {



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
        <div className='home-container'>
            <div style={{ backgroundImage: `url(${topimg_home})` }} className="container_fluid-home">
                <div className="container_son">
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
                    </nav>
                    <div className='container_home_text'>
                        <div className='container_h1tittle'>
                            <h1 className='h1titlehome-style'><strong>FAST FOOD ORGANICO E SAUDÁVEL NA SUA MESA </strong>
                                <strong className='strongclass_txt'> AGORA DE UMA FORMA MAIS FACIL E RÁPIDA</strong>
                            </h1>
                        </div>

                        <div className='container_searchbar'>
                            <input placeholder='NOME RESTAURANTE' className='inputtext_style' type="text" />
                            <button className='buttonsearch_text'>PROCURAR</button>
                        </div>
                        <div className='container_options'>
                            <img className='style_img-inforestaurant' src={optionsimg} alt="" />
                        </div>

                    </div>

                </div>
            </div>
            <div className='container_cadast-restaurants'>
                <div className='container_cadastro-elements'>
                    <ul className='container_infbalanço'>
                        <lo className='cadast_itens_style' >49  Restaurantes</lo>
                        <lo className='cadast_itens_style'>20 Pessoas servidas</lo>
                        <lo className='cadast_itens_style'>100  Usuários registrados</lo>
                    </ul>
                </div>
            </div>
            <div className='container_fotherhowitworks'>
                <div className='container_howitworks'>
                    <h2 className='teste' style={{ color: 'black', border: '5px solid white' }}>COMO TRABALHAMOS</h2>
                    <p className='teste2'>Como funciona o processo até a sua casa.</p>
                </div>
                <ul className='container_blockhowitworks'>

                    <div className='tst'>

                        <div className='span_circlue'><img className='style_imgs-howworks' src={caminhaoimg} alt="" /></div>
                        <div className='container_tittleimgs'>
                            <h3 className='style_h3-escolhaumsabor' >Escolha um prato saboroso</h3>
                        </div>
                        <div className='style_text-comotrabalhamos' style={{ width: '250px' }}>
                            <p>Purus enim. Cras massa massa, maximus sit amet finibus quis, pharetra eu erat.</p>
                        </div>

                    </div>
                    <div className='tst'>

                        <div className='span_circlue'><img src={lojaimg} alt="" /></div>
                        <div className='container_tittleimgs'>
                            <h3 className='style_h3-escolhaumsabor' >Escolha um restaurante</h3>
                        </div>
                        <div className='style_text-comotrabalhamos' style={{ width: '250px' }}>
                            <p className='style_p-comotrabalhamos'>Purus enim. Cras massa massa, maximus sit amet finibus quis, pharetra eu erat.</p>
                        </div>

                    </div>
                    <div className='tst'>

                        <div className='span_circlue'><img src={sinoimg} alt="" /></div>
                        <div className='container_tittleimgs'>
                            <h3 className='style_h3-escolhaumsabor'>Entrega ou Delivery</h3>
                        </div>
                        <div className='style_text-comotrabalhamos' style={{ width: '250px' }}>
                            <p>Purus enim. Cras massa massa, maximus sit amet finibus quis, pharetra eu erat.</p>
                        </div>

                    </div>
                </ul>
                <div className='container_imgpicanha' style={{ backgroundImage: `url(${imgpicanha_tophowitworks})` }}>
                    <div className='container_gridpicanha'>
                        <h2 className='h2-bastaencomendar-enósentregamos' style={{ color: 'white', fontSize: '40px' }}>BASTA ENCOMENDAR E NÓS ENTREGAREMOS</h2>
                        <p className='teste2223' style={{ color: 'white' }}>Pellentesque eget justo eget nibh luctus semper at ut tellus.</p>
                        <div className='teste2223'>
                            <button onClick={handlenavigaterestaurant} className='style_button-ordenaragora'>ORDENAR AGORA</button>
                        </div>

                    </div>
                </div>
                <div className='container_destaques'>
                    <div className='container_tittle-restaurantesemdestaque'>
                        <h2 className='h2-restaurantesemdestaque' style={{ fontSize: '30px' }}>RESTAURANTES EM DESTAQUE</h2>
                        <p className='style-paragrafo-destaque'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='container_pai_restaurantedestaques'>
                        <div className='container_restaurants-destaques'>
                            <div className='container-in-destaque'>
                                <div className='container-circle-destaqimg'>
                                    <img className='style_imgs-destaques' src={imgdestaqrestaurant} alt="" />

                                </div>
                                <div className='container-text-about-restaurantdestaque'>
                                    <h4 className='style-h4-destaq'>Restaurant</h4>
                                    <small className='style_smalltext'>
                                        Apple Juice, BB.Q
                                        <br />
                                        <br />
                                        <img className='style-estrelaimg' src={iconestrela} alt="" />
                                        <img className='style-estrelaimg' src={iconestrela} alt="" />
                                        <img className='style-estrelaimg' src={iconestrela} alt="" />
                                        <img className='style-estrelaimg' src={iconestrela} alt="" />
                                        <img className='style-estrelaimg' src={iconestrela} alt="" />
                                        (1) Review
                                    </small>
                                </div>
                                <div className='container-favoritar-destaque'>
                                    <img className='style-heartfavorit' src={imgfavorithearth} alt="" />
                                </div>
                            </div>
                            <div className='container-in-destaque'>
                                <div className='container-circle-destaqimg'>
                                    <img className='style_imgs-destaques' src={imgdestaqnatural} alt="" />

                                </div>
                                <div className='container-text-about-restaurantdestaque'>
                                    <h4 className='style-h4-destaq'>Natural Healthy Food</h4>
                                    <small className='style_smalltext'>
                                        Suco de maçã, carne assada, hambúrguer de queijo
                                        <br />
                                        <br />
                                        <img className='style-estrelaimg' src={iconestrela} alt="" />
                                        <img className='style-estrelaimg' src={iconestrela} alt="" />
                                        <img className='style-estrelaimg' src={iconestrela} alt="" />
                                        <img className='style-estrelaimg' src={iconestrela} alt="" />
                                        <img className='style-estrelaimg' src={iconestrela} alt="" />
                                        (1) Review
                                    </small>
                                </div>
                                <div className='container-favoritar-destaque'>
                                    <img className='style-heartfavorit' src={imgfavorithearth} alt="" />
                                </div>
                            </div>

                            <div className='container-in-destaque'>
                                <div className='container-circle-destaqimg'>
                                    <img className='style_imgs-destaques' src={imgdestaqmenu} alt="" />

                                </div>
                                <div className='container-text-about-restaurantdestaque'>
                                    <h4 className='style-h4-destaq'>Menu & Drinks</h4>
                                    <small className='style_smalltext'>
                                        Chicken Roast, Chines Soup, Cold Coffee
                                        <br />
                                        <br />
                                        <img className='style-estrelaimg' src={iconestrela} alt="" />
                                        <img className='style-estrelaimg' src={iconestrela} alt="" />
                                        <img className='style-estrelaimg' src={iconestrela} alt="" />
                                        <img className='style-estrelaimg' src={iconestrela} alt="" />
                                        <img className='style-estrelaimg' src={iconestrela} alt="" />
                                        (1) Review
                                    </small>
                                </div>
                                <div className='container-favoritar-destaque'>
                                    <img className='style-heartfavorit' src={imgfavorithearth} alt="" />
                                </div>
                            </div>
                        </div>


                        <div className='container_restaurants-destaques2'>
                            <div className='container-in-destaque'>
                                <div className='container-circle-destaqimg'>
                                    <img className='style_imgs-destaques' src={imgdestaqchefs} alt="" />

                                </div>
                                <div className='container-text-about-restaurantdestaque'>
                                    <h4 className='style-h4-destaq'>Chefs</h4>
                                    <small className='style_smalltext'>
                                        Suco de maçã, carne assada, hambúrguer de queijo
                                        <br />
                                        <br />
                                        <img className='style-estrelaimg' src={iconestrela} alt="" />
                                        <img className='style-estrelaimg' src={iconestrela} alt="" />
                                        <img className='style-estrelaimg' src={iconestrela} alt="" />
                                        <img className='style-estrelaimg' src={iconestrela} alt="" />
                                        <img className='style-estrelaimg' src={iconestrela} alt="" />
                                        (1) Review
                                    </small>
                                </div>
                                <div className='container-favoritar-destaque'>
                                    <img className='style-heartfavorit' src={imgfavorithearth} alt="" />
                                </div>
                            </div>
                            <div className='container-in-destaque'>
                                <div className='container-circle-destaqimg'>
                                    <img className='style_imgs-destaques' src={imgdestaqrestaurant2} alt="" />

                                </div>
                                <div className='container-text-about-restaurantdestaque'>
                                    <h4 className='style-h4-destaq'>Menu's</h4>
                                    <small className='style_smalltext'>
                                        Fish Fry, Fresh Juice, Stakes
                                        <br />
                                        <br />
                                        <img className='style-estrelaimg' src={iconestrela} alt="" />
                                        <img className='style-estrelaimg' src={iconestrela} alt="" />
                                        <img className='style-estrelaimg' src={iconestrela} alt="" />
                                        <img className='style-estrelaimg' src={iconestrela} alt="" />
                                        <img className='style-estrelaimg' src={iconestrela} alt="" />
                                        () Review
                                    </small>
                                </div>
                                <div className='container-favoritar-destaque'>
                                    <img className='style-heartfavorit' src={imgfavorithearth} alt="" />
                                </div>
                            </div>
                            <div className='container-in-destaque'>
                                <div className='container-circle-destaqimg'>
                                    <img className='style_imgs-destaques' src={imgdestaqifood} alt="" />

                                </div>
                                <div className='container-text-about-restaurantdestaque'>
                                    <h4 className='style-h4-destaq'>Food N&H</h4>
                                    <small className='style_smalltext'>
                                        Beef Roast, Cheese Burger, Doughnut
                                        <br />
                                        <br />
                                        <img className='style-estrelaimg' src={iconestrela} alt="" />
                                        <img className='style-estrelaimg' src={iconestrela} alt="" />
                                        <img className='style-estrelaimg' src={iconestrela} alt="" />
                                        <img className='style-estrelaimg' src={iconestrela} alt="" />
                                        <img className='style-estrelaimg' src={iconestrela} alt="" />
                                        (4) Review
                                    </small>
                                </div>
                                <div className='container-favoritar-destaque'>
                                    <img className='style-heartfavorit' src={imgfavorithearth} alt="" />
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


        </div>
    )




}