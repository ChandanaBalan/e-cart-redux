import React from 'react'
import { faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'


function Wishlist() {

  const wishlistArray = useSelector((state) => state.wishlist)
  console.log(wishlistArray);

  return (
    <>
      <h1 className='pt-32  text-center text-violet-600 text-5xl'>Wishlist</h1>

      {wishlistArray?.length ?
        <div className="px-10 mb-10 md:grid grid-cols-4 mt-10">
          {wishlistArray?.map((item) => (
            <div className="p-2 ">
              <div className="p-3 rounded shadow-lg w-50" style={{height:"100%"}}>
                <div className='flex justify-center'>
                  <img src={item.image} alt="no image" className='w-50 h-72' />
                  </div>
                <h5 className='text-center text-3xl pt-5'>{item.title.slice(0, 20)}</h5>
                <p className='text-justify pt-5'>{item.description.slice(0, 100)}</p>
                <p className='text-2xl p-3'>Price  <span className='text-violet-600'>$ {item.price}</span></p>
                <div className='flex justify-between'>
                  <button className='px-5 py-3 rounded text-white bg-red-600 hover:border hover:bg-transparent hover:border-red-700 hover:text-red-700'><FontAwesomeIcon icon={faTrash} /></button>
                  <button className='px-5 py-3 rounded text-white bg-green-600 hover:border hover:bg-transparent hover:border-green-600 hover:text-green-600'><FontAwesomeIcon icon={faCartShopping} /></button>
                </div>

              </div>
            </div>
          ))

          }

        </div>
        :
        <div className='w-full pt-0 md:grid grid-cols-3'>
          <div>

          </div>
          <div>
            <img src="https://i.pinimg.com/originals/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.png" alt="no image" className='w-full h-auto' />

          </div>
          <div>

          </div>

        </div>
      }

    </>
  )
}

export default Wishlist