import React from 'react'

function Contact() {
  return (
    <>
    <div className='md:min-h-60 bg-purple-500 p-10 w-100 md:grid'>
        <p className='text-white md:text-8xl text-3xl ms-5 pt-4'>About Us</p>
    </div><br /><br /><br />

    <div>
    <h1 className='text-center text-purple-500'>GET IN TOUCH</h1><br /><br />
    <h2 className='text-center text-6xl'>Contact Us</h2> <br /><br />
    <p className='text-center'>Whether you have inquiries about adoption, volunteering <br /> opportunities, donations, or general questions, we’re here to help. <br /> Reach out to us today and join our mission to make a difference in the <br /> lives of animals in need.</p>

    

</div> 

<div className='row container-fluid p-5'>
    <div className='col-md-6 md:p-5'> 
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13333371.177859498!2d-17.580322245566784!3d35.32541827375993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc42e3783261bc8b%3A0xa6ec2c940768a3ec!2sSpain!5e0!3m2!1sen!2sin!4v1729862540757!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-100 h-100'></iframe>
    </div>
    <div className="col-md-6 md:p-5 ">
        <h4><b>Send  e-mail</b></h4>
        <h4>info@bigeasyanimalrescue.org</h4> <br /> <br />

       <h4> <b>Phone</b></h4>
       <h4>Shop: (504) 324-7773 <br />

           Rescue: (504) 322-8637
       </h4> <br />

       <h4><b>Shop Address</b></h4> <br />
       <h4>839 Spain Street <br />
       New Orleans, LA 70117</h4>

    </div>
</div>


      
    </>
  )
}

export default Contact
