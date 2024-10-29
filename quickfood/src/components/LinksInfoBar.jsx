import imgmenuinstagram from '../assets_imgs/instagram.png'
import imgmenufacebook from '../assets_imgs/facebook.png'
import imgmenutwitter from '../assets_imgs/twitter.png'
import imgtelefone from '../assets_imgs/phone.png'
import imgemail from '../assets_imgs/mail.png'



export default function LinksBar() {

    return (

        <div className='container_cabecalho-informacoes'>
            <div className='container_infor-text'>
                <div className='container-menus-tela'>
                    <div className='tittle-menus'>
                        <h3>Popular Cities</h3>
                        <p className='style-barra'></p>
                    </div>

                    <div className='container-categoriasmenu-popular-cities' >
                        <ul className='style-linksstyle '>
                            <li className='links-btn'>Karachi</li>
                            <li className='links-btn'>Lahore</li>
                            <li className='links-btn'>Islamabad</li>
                            <li className='links-btn'>Rawalpindi</li>
                            <li className='links-btn'>Multan</li>
                        </ul>

                    </div>

                </div>

                <div className='container-menus-tela'>
                    <div className='tittle-menus'>
                        <h3 >Popular Cuisnies</h3>
                        <p className='style-barra'></p>
                    </div>

                    <div className='container-categoriasmenu-popular-cities' >

                        <ul className='style-linksstyle'>
                            <li className='links-btn'>Apple Juice</li>
                            <li className='links-btn'>BB.Q</li>
                            <li className='links-btn'>Chicken Roast</li>
                            <li className='links-btn'>Prawns</li>
                            <li className='links-btn'>Steam Roast</li>
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
                            <li className='links-btn' >Home</li>
                            <li className='links-btn'>Contact</li>
                            <li className='links-btn'>FAQ's</li>
                            <li className='links-btn'>How it works</li>
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
    )
}