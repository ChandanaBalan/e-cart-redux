import { faBackwardStep, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


function Cart() {
  return (
    <>
      <h1 className='pt-32  text-center text-violet-600 text-5xl'>Cart</h1>

      <div className='md:grid grid-cols-[2fr_1fr] m-10'>
        <div className='p-3'>
          <table className='w-full border border-gray-700 shadow-lg'>
            <thead>
              <tr>
                <th className='border border-gray-100 p-3 bg-violet-700 text-white'>#</th>
                <th className='border border-gray-100 p-3 bg-violet-700 text-white'>Title</th>
                <th className='border border-gray-100 p-3 bg-violet-700 text-white'>Image</th>
                <th className='border border-gray-100 p-3 bg-violet-700 text-white'>Price</th>
                <th className='border border-gray-100 p-3 bg-violet-700 text-white'>Action</th>
              </tr>

            </thead>
            <tbody>
              <tr>
                <td className='border border-gray-200 text-center'>1</td>
                <td className='border border-gray-200 text-center'>Dummy</td>
                <td className='border border-gray-200 text-center flex justify-center py-5 '><img src="https://m.media-amazon.com/images/I/71DTwHnZ6HL.jpg" alt="no image" style={{width:"150px", height:"100px"}} /></td>
                <td className='border border-gray-200 text-center'>$ 68</td>
                <td className='border border-gray-200 text-center'><button className='bg-red-700 px-5 py-3 rounded text-white hover:border hover:bg-transparent hover:border-red-700 hover:text-red-700'><FontAwesomeIcon icon={faTrash} /></button></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='pt-5 px-10'>
          <div className='shadow-lg p-5'>
            <h1 className='text-4xl text-center py-2'>Cart Summary</h1>
            <p className='mt-5 text-xl'>Total number of products : <span>3</span></p>
            <p className='mt-3 text-xl'>Grand Total : <span>$ 234.55</span></p>
            <button className='w-full bg-green-600 p-3 text-white mt-5 hover:border hover:bg-transparent hover:border-green-600 hover:text-green-600'>Check Out</button>
          </div>

        </div>

      </div>

      <div className='w-full pt-0 md:grid grid-cols-3'>
        <div></div>
        <div>
          <img src="https://aleointernational.com/img/empty-cart-yellow.png" alt="no image" className='w-full h-auto my-5' />

        </div>
        <div></div>

      </div>

      <div className='text-center mb-5'>
        <Link to={'/'}><button className=' bg-green-600 p-3 text-white mt-5 hover:border hover:bg-transparent hover:border-green-600 hover:text-green-600 rounded'><FontAwesomeIcon icon={faBackwardStep} className='me-2' />Back Home</button></Link>
      </div>
    </>
  )
}

export default Cart