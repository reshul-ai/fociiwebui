import react from 'react';
import companylogo from '../../assets/navbar/BALogo.png'
import commonlogo from "../../assets/commonIcons/page-icon.png"
import './home.css'

const Home = () =>{
    return (
        <div className="container-fluid" id='mainHome'>

                <div className='row'>
                    <div className='col-md-2' id='page-logo-div'>
                        <a href='/'><img src={companylogo} width="143px" height="142px" alt="Company Logo" className='img img-fluid' /></a>
                    </div>
                    <div className='col-md-1 pt-3' >
                        <p id='page-heading'>FOCII</p>
                    </div>
                    <div className='col-md-5'></div>
                    <div className='col pt-4'>
                        <button className='btn btn-light' id="header-button">Login</button>
                    </div>
                    <div className='col pt-4'>
                        <button className='btn btn-light' id="header-button">Register</button>
                    </div>
                </div>

            <div className='row'>
                <div className='col'>
                    <div className='container-fluid pt-5'>
                        <div className='row'>
                            <div className='col ps-5'>
                                <p id='mainHeading'>Realtime Personalized <br /> Data Visualization <br /> Expirence</p>
                            </div>
                        </div>
                        <div className='row pt-2'>
                            <div className='col ps-5'>
                                <p id='shortHeading'>FOCII is an Engagement AI solution for Learning/Webinar/Meeting hosts to understand their audience’s interest in real time and maximize engagement.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 pt-md-4'>
                        <img className='img img-fluid' src={commonlogo} height="400px" width="520px" />
                </div>
            </div>

            <div className='row pt-5'>
                <div className='col-md-2 ps-md-5'>
                        <a href="https://focii.braina.live/#/login" target="_blank"><button className='btn btn-light' id='focii-host-button' >FOCII Host</button></a>
                </div>
                <div className='col-md-2 ps-md-5'>
                        <a href='http://braina.live/contact.php' target="_blank"><button className='btn btn-light' id='focii-host-button'>Contact Us</button></a>
                </div>
            </div>

        </div>
    );
}


export default Home;