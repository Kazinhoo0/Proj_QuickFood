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
import NavbarSmarphone from '../components/NavbarSmartphoneOnLogin'
import { Toastify } from 'toastify-js'
import LinksBar from '../components/LinksInfoBar'



export default function MyFoods() {


    const [userdata, setUserData] = useState({

        nomecompleto: '',
        pais: '',
        email: '',
        cidade: '',
        genero: '',
        userid: ''
    })



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




    useEffect(() => {
        const userid = localStorage.getItem('userid')
        const nomecompleto = localStorage.getItem('nomecompleto')
        setUserData({
            userid: userid || '',
            nomecompleto: nomecompleto || ''
        })


        const fetchPratos = async () => {
            try {


                const response = await fetch('https://proj-quickfood.onrender.com/gerenciarpratos', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ userid })

                });



                const data = await response.json();
                console.log('Dados recebidos:', data);

                if (data.success) {
                    setPratos(data.items); // Armazena os itens no estado
                } else {
                    Toastify({
                        text: 'Nenhum item encontrado!',
                        position: 'center',
                        style: {
                            background: '#db2d0e',
                            color: '#ffffff'
                        }
                    }).showToast();
                    console.log('Nenhum item encontrado');
                }
            } catch (error) {
                Toastify({
                    text: 'Erro ao buscar os pratos!',
                    position: 'center',
                    style: {
                        background: '#db2d0e',
                        color: '#ffffff'
                    }
                }).showToast();
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
                                <lo className='navbar_itens_style'><a className='style_a_paginasafterlogin' onClick={handlenavigateadditens} >Adicionar itens</a></lo>
                                <lo className='navbar_itens_style'><a className='style_a_paginasafterlogin' onClick={handlenavigatemeuspratos} >Meus pratos</a></lo>
                                <lo className='navbar_itens_style'><a className='style_a_paginasafterlogin' onClick={handlenavigateordenarrequisições} >Ordenar requisições</a></lo>
                                <lo className='navbar_itens_style'><a style={{ color: 'orange', fontWeight: 'bolder' }}>{userdata.nomecompleto}</a></lo>
                                <lo className='style_button_sair'><a className='style_a_paginasafterlogin' onClick={handlenavigatehome}>SAIR</a></lo>

                            </ul>
                        </div>

                        <NavbarSmarphone />
                    </nav>
                    <div className='container_userprofile-myfoods' >


                        <img className='style-img-profile' src={imgprofileteste} alt="" />

                        <ul style={{ display: 'grid', justifyContent: 'center', alignItems: 'center', listStyle: 'none', color: 'white' }}>

                            <li>
                                <h2 className='style_titulo_pagesafterlogin'>{userdata.nomecompleto}</h2>
                            </li>

                            <li>
                                <small className='style_descrição_pagesafterlogin' >Apple Juice, Beef Roast, Cheese Burger</small>
                            </li>

                        </ul>

                    </div>

                </div>
            </div>

            <div className='container-principal-login-register-myfoods'>

                <div className='container_menufoods'>

                    <div className='container_Foodstittle' >
                        <h3 style={{ paddingBottom: '5px' }}>Foods</h3>
                    </div>

                    <div className='container-foritens'>
                        {pratos.map((prato, index) => (

                       
                            <div key={index} className='container_itens'>
                                <div className='container_img_prod'>
                                    <img className='style_imgitensmenu' src='https://th.bing.com/th/id/R.ae6e28d8b655da23aef371023ac1bea7?rik=uHleBZgopx%2fv8w&pid=ImgRaw&r=0&sres=1&sresct=1' alt="" />
                                </div>
                                <div className='container_nomeitem_ingredientes'>

                                    <h3 className='style-infprod' >Item: {prato.nome} </h3>

                                    <h3 className='style-infprod' >Ingredientes: {prato.ingredientes} </h3>

                                    <h3 className='style-infprod' >Preço: {prato.preco} </h3>

                                </div>

                            </div>
                         ))
                        }

                    </div>


                </div>

            </div>

            <LinksBar />
        </div>
    )
}
