import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Cards from './Components/Cards/Cards'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

function App() {

  const [bidNow, setBidNow] = useState([]);

  const handleBidNow = (card) => {
    const newBidNow = [...bidNow, card];
    setBidNow(newBidNow);
  }

  const [totalBidMoney, setTotalBidMoney] = useState(0);

  const handleBidMoney = (money) => {
    const newTotalBidMoney = totalBidMoney + money;
    setTotalBidMoney(newTotalBidMoney);
  }

  return (
    <>

      <Navbar></Navbar>

      <Banner></Banner>

      <div className='bg-[#DCE5F3] text-[#010000]'>
        <div className="container mx-auto main-container flex gap-10 p-20">
          <div className="auction-list-container w-[70%]">
            <h1 className='text-xl font-bold mb-2'>Active Auctions</h1>
            <p className='text-slate-700 mb-6'>Discover and bid on extraordinary items</p>
            <div className='bg-[#FFFFFF] rounded-xl p-5'>
              <Cards handleBidNow={handleBidNow} handleBidMoney={handleBidMoney}></Cards>
            </div>

          </div>
          <div className="favorite-auction-list-container w-[30%] p-2 mt-22 bg-[#FFFFFF] rounded-md ">
            <h1 className='text-center font-semibold p-1 border-b-2 mb-2 border-slate-300'>Favourite Item</h1>
            <div>
              {
                bidNow.map((bid) =>
                  <p className='border rounded-md mb-1 p-2'
                    key={bid.id}>
                    Item   : {bid.item} <br />
                    Amount : {bid.currentBid} <br />
                    Time left : {bid.timeLeft}
                  </p>)
              }
            </div>
            <h1 className='text-center font-semibold p-1' >Total Bid ammount : {totalBidMoney}$</h1>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  )
}

export default App
