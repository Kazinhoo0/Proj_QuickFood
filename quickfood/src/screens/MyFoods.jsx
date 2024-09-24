import topimg_home from '../assets_imgs/cover-photo20.jpg'
import logo from '../assets_imgs/logo_quickfood.png'
import imgemail from '../assets_imgs/mail.png'
import imgmenuinstagram from '../assets_imgs/instagram.png'
import imgmenufacebook from '../assets_imgs/facebook.png'
import imgmenutwitter from '../assets_imgs/twitter.png'
import imgtelefone from '../assets_imgs/phone.png'
import { useNavigate } from 'react-router-dom'
import imgprofileteste from '../assets_imgs/user.png'
import { useEffect, useState } from 'react'



export default function MyFoods() {


    const [userdata, setUserData] = useState({

        nomecompleto: '',
        pais: '',
        email: '',
        cidade: '',
        genero: '',
    })


    useEffect(() => {
        const nomecompleto = localStorage.getItem('nomecompleto')

        if (nomecompleto) {
            setUserData({

                nomecompleto: nomecompleto || '',

            })
        }
    }, [])


    const [pratos, setPratos] = useState([])
    const [loading, setLoading] = useState('')


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




    useEffect (() => {
        const fetchPratos = async () => {
        try {

            
            const response = await fetch('http://localhost:3000/gerenciarpratos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },

            });
        
        

            const data = await response.json();
            console.log('Dados recebidos:', data);
    
            if (data.success) {
              setPratos(data.items); // Armazena os itens no estado
            } else {
              console.log('Nenhum item encontrado');
            }
          } catch (error) {
            console.error('Erro ao buscar os pratos:', error);
          } finally {
            setLoading(false); // Remove o loading após a requisição
          }
        };
    
        fetchPratos(); // Executa a função ao montar o componente
      }, []);
    
      if (loading) {
        return <div>Carregando...</div>; // Exibe um loading enquanto carrega
    }
            




    return (
        <div className="home-container">
            <div style={{ backgroundImage: `url(${topimg_home})` }} className="container_fluid-pagmyfoods">
                <div className="container_son-myfoods">
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

                    <div className='container_userprofile-myfoods' >
                        <div className='container_picture-father' >
                            <div className='container_picture_son'>
                                <img className='style-img-profile' src={imgprofileteste} alt="" />
                            </div>
                        </div>

                        <div className='container_username'>
                            <h2>{userdata.nomecompleto}</h2>
                            <small>Apple Juice, Beef Roast, Cheese Burger</small>
                        </div>
                    </div>

                </div>
            </div>

            <div className='container-principal-login-register-myfoods'>
                <div className='container_menufoods'>
                    <div className='container_Foodstittle' >
                        <h3>Foods</h3>
                    </div>
                    
                        {pratos.map((prato, index) => (
                                <div key={index} className='container_itens'>
                                    <div className='container_img'>
                                        <img className='style_imgitensmenu' src={prato.fotomenu} alt="" />
                                    </div>
                                    <div className='container_nomeitem_ingredientes'>
                                        <h3>{prato.nomeitem}</h3>

                                        <h3>{prato.ingredientes}</h3>
                                    </div>
                                    <div className='container_preço'>
                                        <h4>{prato.preco}</h4>
                                    </div>
                                </div>
                        ))
                        }
                    
                </div>

            </div>
            <div className='container_cabecalho-informacoes-myfoods'>
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
