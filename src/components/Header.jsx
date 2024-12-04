import { faBars, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'



function Header() {
    const [show, setShow] = useState(false)

    return (
        <nav className='bg-violet-900 p-5 text-white w-full fixed'>
            <div className='md:flex items-center md:px-10 px-5'>
                <div className='flex w-full'>
                    <Link to={'/'}><h2 className='text-3xl'><FontAwesomeIcon icon={faCartShopping} className='me-3' />E-Cart</h2></Link>

                    <button onClick={()=>setShow(!show)} className='border border-white p-3 text-white ms-auto rounded md:hidden'><FontAwesomeIcon icon={faBars} /></button>
                </div>

                 {show && <ul className='mt-5 flex md:hidden'>
                    <li>
                        <Link to={'/wishlist'}> <button className='border border-white p-3 rounded hover:bg-white hover:text-violet-900 flex'><FontAwesomeIcon icon={faHeart} style={{ color: "#d60000", }} className='me-2 pt-1' />Wishlist <span className='border bg-white px-1 rounded text-black ms-2'>0</span></button></Link>
                    </li>
                    <li>
                        <Link to={'/cart'}><button className='border border-white p-3 rounded ms-3  hover:bg-white hover:text-violet-900 flex'><FontAwesomeIcon icon={faCartShopping} style={{ color: "#4e8906", }} className='me-2 pt-1' />Cart <span className='border bg-white px-1 rounded text-black ms-2'>0</span></button></Link>
                    </li>
                </ul> }

                <ul className='ms-auto md:flex hidden'>
                    <li>
                        <Link to={'/wishlist'}> <button className='border border-white p-3 rounded hover:bg-white hover:text-violet-900 flex'><FontAwesomeIcon icon={faHeart} style={{ color: "#d60000", }} className='me-2 pt-1' />Wishlist <span className='border bg-white px-1 rounded text-black ms-2'>0</span></button></Link>
                    </li>
                    <li>
                        <Link to={'/cart'}><button className='border border-white p-3 rounded ms-3  hover:bg-white hover:text-violet-900 flex'><FontAwesomeIcon icon={faCartShopping} style={{ color: "#4e8906", }} className='me-2 pt-1' />Cart <span className='border bg-white px-1 rounded text-black ms-2'>0</span></button></Link>
                    </li>
                </ul>
            </div>


        </nav>
    )
}

export default Header