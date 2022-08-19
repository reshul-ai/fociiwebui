import react from 'react';
import companylogo from "../../assets/navbar/BALogo.jpg"
import './navbar.css'

const Navbar = () =>{
    return (
        <div className='container-fluid' id="mainNav">
                <div className='row'>
                    <div className='col-md-2'>
                        <img src={companylogo} width="143px" height="142px" alt="Company Logo" className='img img-fluid' />
                    </div>
                    <div className='col-md-2'>
                        <h1 id='page-heading'>FOCII</h1>
                    </div>
                    <div className='col-md-5'></div>
                    <div className='col pt-4'>
                        <button className='btn btn-light'>Login</button>
                    </div>
                    <div className='col pt-4'>
                        <button className='btn btn-light'>Register</button>
                    </div>
                </div>
        </div>
    );
}

export default Navbar;