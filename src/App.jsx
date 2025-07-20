import React, { useEffect, useState } from 'react'
import Navbar from './componenets/Navbar'
import Coursel from './componenets/Coursel'
import TopSelling from './componenets/TopSelling'
import Toprated from './componenets/Toprated'
import WinterSale from './componenets/WinterSale'
import Banner from './componenets/Banner'
import Textimonial from './componenets/Textimonial'
import Footer from './componenets/Footer'
import Ordercard from './componenets/Ordercard'
const black="#33343B";
const blue="#749DD0";
const lightblue="#CFE7F8"
const App = () => {
  const[order,setOrder]=useState(false)


  const [dark,setDark] =useState(false)
  const [bgcolor,setBgCOlor]=useState("#FBFBFB")
  const [orange,setOrange]=useState("#ffd092ff")
  const [darkorange,setDarkOrange]=useState("#FF8400")
  const [white,setWhite]=useState("#fff")
  useEffect(()=>{
    setBgCOlor(dark?black:"#FBFBFB")
    setOrange(dark?lightblue:"#ffd092ff")
    setDarkOrange(dark?blue:"#FF8400")
    setWhite(dark===false?"#000":"#fff")
  },[dark])
  return (
    <div className={`w-full min-h-screen bg-[${bgcolor}] `}
    style={{backgroundColor:bgcolor}}
    >
      {order && <Ordercard orange={orange} darkorange={darkorange} setOrder={setOrder} order={order}/>}
      
      <Navbar bgcolor={bgcolor} orange={orange} darkorange={darkorange} dark={dark} setDark={setDark} white={white} setOrder={setOrder}/>
      <Coursel orange={orange} darkorange={darkorange} bgcolor={bgcolor} dark={dark} white={white} setOrder={setOrder}/>
      <TopSelling bgcolor={bgcolor} orange={orange} darkorange={darkorange}dark={dark} white={white} />
      <Toprated  bgcolor={bgcolor} orange={orange} darkorange={darkorange} dark={dark} white={white} black={black} setOrder={setOrder}/>
      <WinterSale bgcolor={bgcolor} orange={orange} darkorange={darkorange} dark={dark} white={white}/>
      <Banner dark={dark} white={white}/>
      <TopSelling bgcolor={bgcolor} orange={orange} darkorange={darkorange} dark={dark} white={white}/>
      <Textimonial bgcolor={bgcolor} orange={orange} darkorange={darkorange} dark={dark} white={white}/>
      <Footer  bgcolor={bgcolor} orange={orange} darkorange={darkorange} dark={dark} white={white}/>
    </div>

  )
}



export default App