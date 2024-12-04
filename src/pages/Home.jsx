import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import userFetch from '../hooks/useFetch'
import { useDispatch } from 'react-redux'
import { addWishlistItems } from '../redux/slices/wishlistSlice'


function Home() {

  const data = userFetch('https://fakestoreapi.com/products')
  console.log(data);
  const dispatch = useDispatch()

  return (
    <>
      <div className="pt-32 px-10 mb-10 md:grid grid-cols-4">
        {data?.length > 0 &&
          data?.map((item) => (
            <div className="p-4 ">
              <div className="p-5 rounded shadow-lg w-50 " style={{height:"100%"}}>
                <div className='flex justify-center'>
                  <img src={item.image} alt="no image" className='w-50 h-72' />
                  </div>
                <h5 className='text-center text-3xl pt-5'>{item.title.slice(0,20)}</h5>
                <p className='text-justify pt-5'>{item.description.slice(0,100)} </p>
                <p className='text-2xl p-3'>Price  <span className='text-violet-600'>$ {item.price}</span></p>
                <div className='flex justify-between'>
                  <button onClick={()=>dispatch(addWishlistItems(item))} className='px-5 py-3 rounded text-white bg-red-600 hover:border hover:bg-transparent hover:border-red-600 hover:text-red-600'><FontAwesomeIcon icon={faHeart} /></button>
                  <button className='px-5 py-3 rounded text-white bg-green-600 hover:border hover:bg-transparent hover:border-green-600 hover:text-green-600'><FontAwesomeIcon icon={faCartShopping} /></button>
                </div>

              </div>
            </div>
          ))}



      </div>

    </>
  )
}

export default Home