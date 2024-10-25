import React from 'react'

function Foster() {
  return (
    <>
      <div className='md:min-h-60 bg-purple-500 p-10 w-100 md:grid'>
        <p className='text-white md:text-8xl text-3xl ms-5 pt-4'>Foster</p>
    </div> <br /><br /><br />

    <div>
        <h1 className='text-center text-purple-500'>HELPING PAWS</h1><br /><br />
        <h2 className='text-center text-6xl'>Foster With Us</h2> <br /><br />
        <p className='text-center'>Thank you for your interest in fostering a pet through Big Easy Animal <br /> Rescue! This application process ensures that our animals and humans <br /> are perfectly matched. Our top priority is the safety and happiness of 
            <br />our pets. <br /><br /><br />

           <b>All applicants must be 23 years of age or older.</b></p>
    </div> <br /><br /><br />


    
            <div className='md:mx-72 p-5 text-center border-4 border-indigo-600 shadow-lg' >
                <div>
                    <h1 className='text-4xl'><b>Cat Foster</b></h1>
                    <p>Enjoy the companionship, purrs, and <br /> playful antics of your feline guest <br /> while contributing to their overall <br />well-being. It’s a fulfilling way to <br /> make a difference in a cat’s life, one <br /> purr at a time.</p>
                    <button className=' btn bg-info text-light mt-md-4 shadow-lg'>CAT APPLICATION</button>
    
                </div>

                <div>
                    <h1 className='text-4xl pt-4'><b>Dog Foster</b></h1>
                    <p>Join our dog-fostering community! <br /> Whether you’re offering a haven for a <br /> puppy or a more seasoned <br /> companion, dog fostering allows you <br /> to make a meaningful impact in their <br /> lives.</p>
                    <button className=' btn bg-info text-light mt-md-4 shadow-lg'>DOG APPLICATION</button>
    
                </div>

            </div>

       

    </>
  )
}

export default Foster
