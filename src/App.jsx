import SideBar from "./components/SideBar"
import Footer from "./components/Footer"
import Main from "./components/Main"
import {useState} from 'react'


function App() {

  const [showModal, setShowModal] = useState(false);

  function handleShowModal(){
    setShowModal(true)
  }

  return (
    <>
      
      <Main />
      {showModal && (
      <SideBar />
      )}
      <Footer />
    </>
  )
}

export default App
