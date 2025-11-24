import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'

function App() {


  return (
    <>

      <Navbar></Navbar>

      <Banner></Banner>

      <div className='bg-[#DCE5F3] text-[#010000]'>
        <div className="container mx-auto main-container flex gap-10 p-20">
          <div className="auction-list-container border w-[70%]">
            <h1 className='text-xl font-bold mb-2'>Active Auctions</h1>
            <p className='text-slate-700'>Discover and bid on extraordinary items</p>

          </div>
          <div className="favorite-auction-list-container border w-[30%]">
            <h2>fav</h2>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
