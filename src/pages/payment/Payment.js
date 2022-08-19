import react,{useState, useEffect} from 'react';
import companylogo from '../../assets/navbar/BALogo.png'
import commonlogo from '../../assets/commonIcons/page-icon.png'
import './payment.css'


const Payment = () =>{

    const [cardDetails, setCardDetails] = useState("");
    const [CVV, setCVV] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipcode, setZipcode] = useState("");


    const paymentDetails = (e) =>{
        e.preventDefault()
        console.log(`${cardDetails} - ${CVV} - ${country} - ${city} - ${state} - ${zipcode}`)
    }

    return (
            <div className='container-fluid pb-5'>
                    <div className='row'>
                        <div className='col-md-2' id='page-logo-div'>
                            <a href='/'><img src={companylogo} width="143px" height="142px" alt="Company Logo" className='img img-fluid' /></a>
                        </div>
                        <div className='col-md-1 pt-3' >
                            <p id='page-heading'>FOCII</p>
                        </div>
                        <div className='col-md-5'></div>
                        <div className='col pt-5'>
                            <a href='http://braina.live/contact.php' target='_blank'><button className='btn btn-light' id="header-button">Contact Us</button></a>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-md-6' style={{"paddingTop":"80px"}}>
                            <img src={commonlogo} width="450px" height="350px" />
                        </div>
                        <div className='col'>
                            <div className='container-fluid'>
                                <div className='row text-light'>
                                    <div className='col'>
                                        <h2>Payment Details</h2>
                                    </div>
                                </div>
                                    <div className='row'>
                                            
                                                <div className='col ps-5 pe-5' >
                                                        <div className='container-fluid' id='payment-form-div'>
                                                            <form onSubmit={paymentDetails} >
                                                                        <div class="form-group">
                                                                            <div className='form-outline'>
                                                                                    <label  className='form-label'>Card Details</label>     
                                                                                    <input type="text" onChange={event => setCardDetails(event.target.value)} className='form-control' />
                                                                            </div>
                                                                        </div>
                                                                        <div class="form-group">
                                                                            <div className='form-outline'>
                                                                                    <label  className='form-label'>CVV</label>     
                                                                                    <input type="text" onChange={event => setCVV(event.target.value)} className='form-control' />
                                                                            </div>
                                                                        </div>
                                                                        <div class="form-group">
                                                                            <div className='form-outline'>
                                                                                    <label  className='form-label'>Country</label>     
                                                                                    <input type="text" onChange={event => setCountry(event.target.value)} className='form-control' />
                                                                            </div>
                                                                        </div>
                                                                        <div class="form-group">
                                                                            <div className='form-outline'>
                                                                                    <label  className='form-label'>City</label>     
                                                                                    <input type="text" onChange={event => setCity(event.target.value)} className='form-control' />
                                                                            </div>
                                                                        </div>
                                                                        <div class="form-group">
                                                                            <div className='form-outline'>
                                                                                    <label  className='form-label'>State</label>     
                                                                                    <input type="text" onChange={event => setState(event.target.value)} className='form-control' />
                                                                            </div>
                                                                        </div>
                                                                        <div class="form-group">
                                                                            <div className='form-outline'>
                                                                                    <label  className='form-label'>Zip Code</label>     
                                                                                    <input type="text" onChange={event => setZipcode(event.target.value)} className='form-control' />
                                                                            </div>
                                                                        </div>
                                                                        <div className='form-outline pt-3'>
                                                                            
                                                                            <button className='btn btn-primary form-control'>Proceed</button>
                                                                            
                                                                        </div>
                                                            </form>
                                                        </div>
                                                </div>
                                            
                                    </div>
                            </div>
                        </div>
                    </div>
        </div>
    );
}


export default Payment;