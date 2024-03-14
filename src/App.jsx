import { useState } from 'react';
import './App.css'
import Title from './Title'
import Cart from './components/Cart/Cart'
import Courses from './components/Course/Courses'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export const totalCredits = 15;
function App() {

  const [carts , setChats] = useState([]);
  const handleCharts = (course) =>{
    // console.log('add charts',course)
    const credits = carts.reduce((p , c)=> p + c.Credit,0);
    if(credits+course.Credit > totalCredits){
      toast.error(`only ${totalCredits} cradits allowed`)
    }
    const newCarts = [...carts ,course]
    const allReadtExist = carts.find(c => c.ID == course.ID);
    if(!allReadtExist){
      setChats(newCarts);
      toast.success("Course addes successfully!");
    }else{
      toast.warn("Course allready selected!!");
    }
  }
// console.log(carts)

const credits = carts.reduce((p,c)=>p+c.Credit,0);
  return (
    <>
    
      <Title></Title>
      <div className='flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between mt-16 mx-8'>
      <Courses handleCharts={handleCharts}></Courses>
      <div className="col-span-2 px-5 border-2 border-zinc-500 rounded-lg p-3 bg-slate-50 lg:w-[250px]">
            <h4 className="text-blue-500 font-bold mb-3">Credit Hour Remaining {totalCredits - credits}cr </h4>
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
      <ToastContainer />
    </>
  )
}

export default App
