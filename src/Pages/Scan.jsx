import React, { useState, useRef } from 'react'
import scan from '../assets/icons/scan.png'
import browser from '../assets/icons/browser.png'

const Scan = () => {
    const [fileName, setFileName] = useState('');
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        console.log(event.target.files)
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
        } else {
            setFileName('');
        }
    };

    const handleClick = () => {
        fileInputRef.current.click();
    };
    return (
        <section className='bg-radial-gradient h-screen flex justify-center items-center'>
            <div className='text-center  text-white border-2 rounded-3xl p-20 '>
                <h2 className='text-4xl font-[700] pb-14'>Scan Input</h2>
                <p className='text-[14] font-semibold'>Choose the type of disease</p>

                <div className='flex justify-center items-center gap-5 py-5'>
                    <button className='border-2 rounded-full py-2 px-6 text-[13px] font-bold text-slate-300'>Brain Tumor</button>
                    <button className='border-2 rounded-full py-2 px-6 text-[13px] font-bold text-slate-300'>Skin Caner</button>
                </div>

                <div className='py-5'>
                    <div className='flex items-center justify-between gap-5'>
                        <label className='font-semibold'>Upload Photo</label>
                        <button className="flex items-center bg-white text-slate-500 rounded-md px-6 font-semibold py-2 text-[12px] " onClick={handleClick}>
                            Brows..
                            <img className='w-4' src={browser} />
                        </button>
                    </div>

                    <input id="actual-btn"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        style={{ display: 'none' }} className='' type='file' />
                    <p className='text-sm py-2'>{fileName}</p>
                </div>


                <button className='flex items-center shadow-lg m-auto bg-Primary px-20 py-2 rounded-md text-sm gap-3 font-semibold'>Scan Now <img className='w-6 h-6' src={scan} /></button>
            </div>

        </section>
    )
}

export default Scan