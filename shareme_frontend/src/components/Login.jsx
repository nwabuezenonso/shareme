import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // import use navigate to simply navigation
import shareVideo from '../assets/share.mp4'; // importing video
import logo from '../assets/logowhite.png'; // importing logo

import { client } from '../client';  // import sanity client

const Login = () => {
  const [ email, setEmail] = useState([])
  const navigate = useNavigate();

  const handleChange = (e) =>{
    setEmail(e.target.value)
  }

  // response google function
  const handleSubmit = (e) => {
    e.preventDefault();

   localStorage.setItem('user', JSON.stringify(email))

    const id = Math.floor(Math.random() * 10)
    
    const doc = {
      _type: 'user',
      _id: id,
      userName: email
    }

    client.createIfNotExists(doc)
      .then(() => {
        navigate('/', {replace: true})
        console.log('success')
    })
  };
  // styling the 
  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className=" relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />

        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className="p-5">
            <img src={logo} width="130px" alt='logo' />
          </div>

          {/* render props comin from the google button */}
          <div className="shadow-2xl">
            {/* get data from google */}
            <form className='flex mr-30' onSubmit={ handleSubmit }>
              <input name='signin' onChange={ handleChange } type="text"className='bg-mainColor flex items-center p-3 rounded-lg outline-none' />
              {/* <Link> */}
                <button
                className='opacity-100 bg-black text-white p-4 mx-2'
                >
                  Sign in
                </button>
              {/* </Link> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;