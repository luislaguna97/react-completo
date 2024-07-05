import { Header } from "./components/Header"
import { MainArticle } from "./components/MainArticle"
import { NewContainer } from "./components/NewContainer"
import { ArticlesContainer } from "./components/ArticlesContainer"
import { Navigate, Route, Routes } from "react-router-dom"
import Login from "./pages/login"
import contacto from "./pages/contacto"
import nuestrasmarcas from "./pages/nuestrasmarcas"
import inicio from "./pages/inicio"


export function App() {
  return (
  

    <main className="px-4 pt-6 pb-3 font-Inter lg:px-40 lg:pt-20" >
      
      <Header/>

    <Routes>
      <Route path="/inicio" Component={inicio}/>
      <Route path="/contacto" Component={contacto}/>
      <Route path="/nuestrasmarcas" Component={nuestrasmarcas}/>
      <Route path="/login" Component={Login}/>
      <Route path='*' element ={<Navigate to="/"></Navigate>}></Route>
    </Routes>
      
    
      
      
    </main>
    
  )
}
