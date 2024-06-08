import Header from "./assets/components/header"
import Footer from "./assets/components/footer"
import Body from "./assets/components/body"
import "./index.css"
function App() {
  

  return (
    <>
      <div className="bg-amber-50 min-h-screen p-3 flex flex-col gap-16 md:p-4 md:justify-between lg:px-16 lg:py-10">
        <Header/>
        <Body/>
        <Footer/>

      </div>
    </>
  )
}

export default App
