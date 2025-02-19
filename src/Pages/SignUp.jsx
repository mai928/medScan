import React from 'react'
import shadow from '../assets/Bg-Shape.png'
import logo from '../assets/logo1.png'
import apple from '../assets/icons/apple.png'
import face from '../assets/icons/face.png'
import google from '../assets/icons/google.png'

const SignUp = () => {
    return (
        <section className=' px-20 py-10 relative'>
            <img className='m-auto  w-[70%]  h-full  relative z-0' src={shadow} />
            <div className='flex  w-[70%] h-[86%]   absolute  start-60  top-14'>
                <div className='w-1/2 bg-linear-gradient  rounded-s-3xl  flex justify-center items-center '>
                    <img className=' z-20 w-72' src={logo} />
                </div>
                <div className='bg-white w-1/2   rounded-e-3xl px-8 py-14'>
                    <h2 className='text-center font-semibold text-2xl py-10'>Creat your account!</h2>
                    <div className='flex gap-3 py-2'>
                        <div className=''>
                            <label className='block  mb-2 text-[14px]' >First Name</label>
                            <input placeholder='first name' className='w-full border-[1px] rounded-lg ps-3 py-1 border-slate-300 placeholder:text-sm ' />
                        </div>
                        <div>
                            <label className='block  mb-2 text-[14px]'>Last Name</label>
                            <input placeholder='last name' className='w-full border-[1px] rounded-lg ps-3 py-1 border-slate-300 placeholder:text-sm' />
                        </div>


                    </div>
                    <div className='py-2'>
                        <label className='block  mb-2 text-[14px]'>UserName</label>
                        <input placeholder='username' className='w-full border-[1px] rounded-lg ps-3 py-1 border-slate-300 placeholder:text-sm' />

                    </div>

                    <div className='py-2'>
                        <label className='block  mb-2 text-[14px]'>Email</label>
                        <input placeholder='email' className='w-full border-[1px] rounded-lg ps-3 py-1 border-slate-300 placeholder:text-sm' />

                    </div>

                    <div className='py-2'>
                        <label className='block  mb-2 text-[14px]'>Password</label>
                        <input type='password' placeholder='password' className='w-full border-[1px] rounded-lg ps-3 py-1 border-slate-300 placeholder:text-sm' />

                    </div>

                    <div className='text-center py-5'>
                        <p className='py-2 text-Secondary-darkGray text-sm'>Sign Up With</p>
                        <div className='flex items-center justify-center gap-4 py-2'>
                        <img src={face}/>
                        <img src={google}/>
                        <img src={apple}/>
                        </div>
                        <p className='pt-2 text-black-medium'>Already have an account?<button className='text-Primary'>Log in</button></p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default SignUp