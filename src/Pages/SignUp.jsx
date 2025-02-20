import React, { useState } from 'react'
import shadow from '../assets/Bg-Shape.png'
import logo from '../assets/logo1.png'
import apple from '../assets/icons/apple.png'
import face from '../assets/icons/face.png'
import google from '../assets/icons/google.png'
import { useAuth } from '../Auth/AuthProvider'

const SignUp = () => {

    const { login, isAuth } = useAuth()
    const [registerData, setRegisterData] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: ''
    })

    const handleRegisterChange = (e) => {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value })
    }


    const handleSubmit = async (e) => {

        console.log('Sending data:', registerData); // Log the data being sent

        e.preventDefault();
        const apiUrl = 'http://medscanlogin.runasp.net/api/Auth/Register'

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Tell the API we're sending JSON
                },
                body: JSON.stringify(registerData),
            })

            if (response.ok) {
                console.log('successfull')
                console.log(response)
                const responseData = await response.json()
                login(responseData)
                isAuth(responseData.isAuth)
                console.log('login', responseData)
                localStorage.setItem('userName', responseData.userName)

            } else {

                console.log('failed', response.status);
                try {
                    const errorText = await response.text(); // Get the response as text
                    console.error('Error Text:', errorText);
                    alert(`Registration failed: ${response.status} - ${errorText}`); // Show error
                } catch (error) {
                    console.error('Error parsing error response:', error);
                    alert(`Registration failed: ${response.status} - Could not parse error response`);
                }
            }
        } catch (e) {
            console.error('error', e)
        }
        // setRegisterData(
        //     {
        //         firstName: '',
        //         lastName: '',
        //         userName: '',
        //         email: '',
        //         password: ''
        //     }
        // )

    }
    return (
        <section className=' px-20 py-10 relative'>
            <img className='m-auto  w-[70%]  h-full  relative z-0' src={shadow} />
            <div className='flex  w-[70%] h-[86%]   absolute  start-60  top-14'>
                <div className='w-1/2 bg-linear-gradient  rounded-s-3xl  flex justify-center items-center '>
                    <img className=' z-20 w-72' src={logo} />
                </div>
                <form onSubmit={handleSubmit} className='bg-white w-1/2   rounded-e-3xl px-8 py-14'>
                    <h2 className='text-center font-semibold text-2xl py-10'>Creat your account!</h2>
                    <div className='flex gap-3 py-2'>
                        <div className=''>
                            <label className='block  mb-2 text-[14px]' >First Name</label>
                            <input onChange={handleRegisterChange} name='firstName' value={registerData.firstName} placeholder='first name' className='w-full border-[1px] rounded-lg ps-3 py-1 border-slate-300 placeholder:text-sm ' />
                        </div>
                        <div>
                            <label className='block  mb-2 text-[14px]'>Last Name</label>
                            <input onChange={handleRegisterChange} name='lastName' value={registerData.lastName} placeholder='last name' className='w-full border-[1px] rounded-lg ps-3 py-1 border-slate-300 placeholder:text-sm' />
                        </div>


                    </div>
                    <div className='py-2'>
                        <label className='block  mb-2 text-[14px]'>UserName</label>
                        <input onChange={handleRegisterChange} name='userName' value={registerData.userName} placeholder='username' className='w-full border-[1px] rounded-lg ps-3 py-1 border-slate-300 placeholder:text-sm' />

                    </div>

                    <div className='py-2'>
                        <label className='block  mb-2 text-[14px]'>Email</label>
                        <input onChange={handleRegisterChange} name='email' value={registerData.email} placeholder='email' className='w-full border-[1px] rounded-lg ps-3 py-1 border-slate-300 placeholder:text-sm' />

                    </div>

                    <div className='py-2'>
                        <label className='block  mb-2 text-[14px]'>Password</label>
                        <input onChange={handleRegisterChange} name='password' value={registerData.password} type='password' placeholder='password' className='w-full border-[1px] rounded-lg ps-3 py-1 border-slate-300 placeholder:text-sm' />

                    </div>
                    <div className='flex justify-center items-center '>
                        <button className='bg-Primary text-white' type='submit'>Sign Up</button>

                    </div>


                    <div className='text-center py-5'>
                        <p className='py-2 text-Secondary-darkGray text-sm'>Sign Up With</p>
                        <div className='flex items-center justify-center gap-4 py-2'>
                            <img src={face} />
                            <img src={google} />
                            <img src={apple} />
                        </div>
                        <p className='pt-2 text-black-medium'>Already have an account?<button className='text-Primary'>Log in</button></p>
                    </div>

                </form>
            </div>
        </section>
    )
}

export default SignUp