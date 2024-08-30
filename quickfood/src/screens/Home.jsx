import logo from './/logo_quickfood.png'
import topimg_home from '../assets_imgs/home-top-1.jpg'

export default function Home() {




    return (
        <div className='home-container'>
            <div style={{backgroundImage: `url(${topimg_home})`}}  className="container_fluid-home">
                    <div  className="container_son">
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
                                <br/>
                                <strong className='strongclass_txt'> AGORA DE UMA FORMA MAIS FACIL E RÁPIDA</strong>
                                </h1>
                            </div>
                            <div className='container_searchbar'>
                                <input placeholder='NOME RESTAURANTE' className='inputtext_style' type="text" />
                                <button className='buttonsearch_text'>PROCURAR</button>
                            </div>
                            <div className='container_'>

                            </div>


                        </div>
                    </div>
            </div>
        </div>
    )




}