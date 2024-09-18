import Header from "./components/Header"
import Footer from "./components/Footer"
import Cart from "./components/Cart"
import ProductList from "./components/ProductList"
import { useState } from "react"


function App() {
  
  const [viewCart, setViewCart] = useState(false);

  const content = viewCart ? <Cart /> : <ProductList />

  const page = (
    <>
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      {content}
      <Footer viewCart = {viewCart} />
    </>
  )

  return page
  

}

export default App
