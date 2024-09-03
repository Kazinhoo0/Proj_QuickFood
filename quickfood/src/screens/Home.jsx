import logo from '../assets_imgs/logo_quickfood.png'
import topimg_home from '../assets_imgs/home-top-1.jpg'
import optionsimg from '../assets_imgs/options-img.png'
import caminhaoimg from '../assets_imgs/how-to-work1.png'
import lojaimg from '../assets_imgs/how-to-work2.png'
import sinoimg from '../assets_imgs/how-to-work3.png'
import imgpicanha_tophowitworks from '../assets_imgs/call-to-action-paralax.jpg'

export default function Home() {




    return (
        <div className='home-container'>
            <div style={{ backgroundImage: `url(${topimg_home})` }} className="container_fluid-home">
                <div className="container_son">
                    <nav className="style_navbar">
                        <div className='container_logo'>
                            <a className='imglogo_position'>
                                <img className='imglogo_width' src={logo} alt="" />
                            </a>
                        </div>
                        <div className='container_navbar_buttons'>
                            <ul className='navbar_style'>
                                <lo className='navbar_itens_style'>RESTAURANTS</lo>
                                <lo className='navbar_itens_style'>LOGIN /  REGISTER</lo>
                                <lo className='navbar_itens_style_orange'>REGISTRAR RESTAURANT</lo>

                            </ul>
                        </div>
                    </nav>
                    <div className='container.home_text'>
                        <div className='container_h1tittle'>
                            <h1><strong>FAST FOOD ORGANICO E SAUDÁVEL NA SUA MESA</strong>
                                <br />
                                <strong className='strongclass_txt'> AGORA DE UMA FORMA MAIS FACIL E RÁPIDA</strong>
                            </h1>
                        </div>
                        <div className='container_searchbar'>
                            <input placeholder='NOME RESTAURANTE' className='inputtext_style' type="text" />
                            <button className='buttonsearch_text'>PROCURAR</button>
                        </div>
                        <div className='container_options'>
                            <img src={optionsimg} alt="" />
                        </div>
                    </div>

                </div>
            </div>
            <div className='container_cadast-restaurants'>
                <div className='container_cadastro-elements'>
                    <ul>
                        <lo></lo>
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
                            <h3>Escolha um prato saboroso</h3>
                        </div>
                        <div style={{width: '250px'}}>
                            <p>Purus enim. Cras massa massa, maximus sit amet finibus quis, pharetra eu erat.</p>
                        </div>
                        
                    </div>
                    <div className='tst'>

                        <div className='span_circlue'><img src={lojaimg} alt="" /></div>
                        <div className='container_tittleimgs'>
                            <h3>Escolha um restaurante</h3>
                        </div>
                        <div style={{width: '250px'}}>
                            <p>Purus enim. Cras massa massa, maximus sit amet finibus quis, pharetra eu erat.</p>
                        </div>
                       
                    </div>
                    <div className='tst'>

                        <div className='span_circlue'><img src={sinoimg} alt="" /></div>
                        <div className='container_tittleimgs'>
                            <h3 className= 'style_writehowdo'>Entrega ou Delivery</h3>
                        </div>
                        <div style={{width: '250px'}}>
                            <p>Purus enim. Cras massa massa, maximus sit amet finibus quis, pharetra eu erat.</p>
                        </div>
        
                    </div>
                </ul>
                <div className= 'container_imgpicanha' style={{backgroundImage: `url(${imgpicanha_tophowitworks})` }}>
                    <div className='container_gridpicanha'>
                        <h2 style={{color: 'white', fontSize:'40px'}}>BASTA ENCOMENDAR E NÓS ENTREGAREMOS</h2>
                            <p  className='teste2223' style={{color: 'white'}}>Pellentesque eget justo eget nibh luctus semper at ut tellus.</p>
                        <div className='teste2223'>
                            <button className='style_button-ordenaragora'>ORDENAR AGORA</button>
                        </div>
                        
                    </div>
                </div>
                <div className='container_destaques'>
                    <div className='container_tittle-restaurantesemdestaque'>
                        <h2 style={{fontSize: '30px'}}>RESTAURANTES EM DESTAQUE</h2>
                        <p className='style-paragrafo-destaque'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <div className='container_restaurants-destaques'>
                        <div className='minicontainers-destaques' ></div>
                    </div>
                </div>

            </div>

        </div>
    )




}