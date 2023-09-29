import './App.css'
import Linechart from './components/lineChart/Linechart'
import Navbar from './components/nav/Navbar'
import Phones from './components/phones/Phone'
import Priceoptions from './components/priceOption/Priceoptions'
// import Desisynav from './components/navbar/Desisynav'

function App() {

  return (
    <>
      <div>

        <Navbar></Navbar>
        {/* <Desisynav></Desisynav> */}
        <Priceoptions></Priceoptions>
        <Linechart></Linechart>
        <Phones></Phones>
      </div>
    </>
  )
}

export default App
