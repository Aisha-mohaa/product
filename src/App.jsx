import { Route, Routes } from "react-router-dom"
import Header from "./assets/header"
import About from "./assets/about"
import CartPage from "./assets/cartPage"

function App (){
  return <>
    <Routes>

   <Route path="/"element={<Header/>}/>
   <Route path="/About"element={<About/>}/>
   <Route path="/CartPage"element={<CartPage/>}/>

    </Routes>
  
  </>
}

export default App