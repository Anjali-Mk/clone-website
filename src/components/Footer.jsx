import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'
import Button from 'react-bootstrap/Button';




function Footer() {
  return (
    <>
     <div className='min-h-80 bg-white p-10 w-100 md:grid md:grid-cols-[repeat(1,2fr)_repeat(1,2fr)_repeat(1,2fr)]'>
        <div className='p-3'>
        <h1 className='text-white text-4xl'><img src="https://bigeasyanimalrescue.org/wp-content/uploads/2024/03/BigEasyAnimalRescue_logo.jpg" alt="" width={'60px'} /></h1>
       <div className='ms-2'>
          <FontAwesomeIcon icon={faFacebookF} />
          <FontAwesomeIcon icon={faInstagram} className='px-3'/>
          <FontAwesomeIcon icon={faTiktok} />
       </div>

        <p className=' pt-5 text-justify'>Big Easy Animal Rescue is a 501(c)(3) non-profit organization. <br /><br />

         Contributions are tax-deductible to the extent permitted by law. Tax identification number is 81-4091176.</p>
         <Button variant="outline-success">Donate</Button>

        </div>



        <div className=' p-3 ms-4 '>
            <h1 className='text-2xl pt-2 '><p><b>Our website</b></p></h1>
        <div className='p-3'>
            <p className='mt-4'>Adoptable Pets</p>
            <p className='mt-3'>Foster</p>
            <p className='mt-3'>Surrender</p>
            <p className='mt-3'>Store</p>
            <p className='mt-3'>Volunteer</p>

        </div>
        </div>


        <div className=' p-2 ms-2'>
        <h1 className='text-2xl pt-2 '><b>Contact us</b></h1>
        <p><b>Pet Store</b><br />
        839 Spain Street <br />
        New Orleans, LA 70117 <br />
        (504) 324-7773 <br /><br />

        Monday to Friday: 10 a.m. to 6 p.m. <br />
        Saturday & Sunday: 11 a.m. to 5 p.m. <br /> <br /><br />

        <b>Rescue</b> <br />
        (504) 322-8637 (text only)</p>
        </div>
        <hr /><hr /><hr />
        <p>Copyright © 2024 – Big Easy Animal Rescue</p>
        </div>
    </>
  )
}

export default Footer
