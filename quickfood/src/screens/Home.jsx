import logo from './/logo_quickfood.png'
import topimg_home from '../assets_imgs/home-top-1.jpg'
import optionsimg from '../assets_imgs/options-img.png'
import caminhaoimg from '../assets_imgs/how-to-work1.png'
import lojaimg from '../assets_imgs/how-to-work2.png'
import sinoimg from '../assets_imgs/how-to-work3.png'

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

                    <h4 className='teste2'>Como funciona o processo até a sua casa.</h4>
                </div>
                <ul className='container_blockhowitworks'>
                    <div className='tst'>
                        <span className='span_circlue'><img src={caminhaoimg} alt="" /></span>

                    </div>
                    <div className='tst'>
                        <span><img src={sinoimg} alt="" /></span>
                        

                    </div>
                    <div className='tst'>
                        <span><img src={sinoimg} alt="" /></span>
                        
                    </div>
                </ul>

            </div>

        </div>
    )




}