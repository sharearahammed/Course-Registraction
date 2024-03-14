import { useState } from 'react';
import './App.css'
import Title from './Title'
import Cart from './components/Cart/Cart'
import Courses from './components/Course/Courses'

function App() {

  const [carts , setChats] = useState([]);

  const handleCharts = (course) =>{
    // console.log('add charts',course)
    const newCarts = [...carts ,course]
    setChats(newCarts);
  }
console.log(carts)

  return (
    <>
      <Title></Title>
      <div className='flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between mt-16 mx-8'>
      <Courses handleCharts={handleCharts}></Courses>
      <div className="col-span-2 px-5 border-2 border-zinc-500 rounded-lg p-3 bg-slate-50 lg:w-[250px]">
            <h4 className="text-blue-500 font-bold mb-3">Credit Hour Remaining 7h </h4>
            <hr />
            <h3 className="text-lg font-bold mt-3 mb-4">Course Name</h3>
            {
            carts.map(cart => <Cart key={cart.ID}
              cart={cart}></Cart>)
              }
              <hr />
              <h5 className="mt-3 mb-3">Total Credit Hour: {carts.reduce((p,c)=>p+c.Credit,0)}</h5>
              <hr />
              <h5 className="mt-3">Total Price : {carts.reduce((p,c)=>p+c.Price,0)} USD</h5>
        </div>
      </div>
    </>
  )
}

export default App
