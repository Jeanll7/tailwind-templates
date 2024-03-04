import { Link } from "react-router-dom"
import menuLeft from '../../assets/menu-left.png'
import menuFooter from '../../assets/menu-footer.png'
import form from '../../assets/form.png'
import header from '../../assets/header.png'
import login from '../../assets/login.png'
import image from '../../assets/image.png'
import { Header } from "../../components/Header"
import { Container } from "../../components/Container"

export function Home() {
  return (
    <div>
      <Header />
      <Container>

        <h1 className="font-bold text-center mt-8 text-2xl mb-10">
          Componentes do Tailwind para usar no seu projeto.
        </h1>

        <main className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          <section className="w-full bg-slate-200 rounded-lg">
            <Link to="/menuleft">
              <img
                className="w-full rounded-lg mb-3 max-h-60 hover:scale-105 transition-all" 
                loading="lazy"
                src={menuLeft}             
                alt="imagem componente menu left"             
              />            
            </Link>

            <div className="font-bold text-center mb-4">
              <span>Menu left</span>
            </div>      
          </section>

          <section className="w-full bg-slate-200 rounded-lg">
            <Link to="/form">
              <img
                className="w-full rounded-lg mb-3 max-h-60 hover:scale-105 transition-all" 
                loading="lazy"
                src={form}             
                alt="imagem componente form"             
              />            
            </Link>

            <div className="font-bold text-center mb-4">
              <span>Formulário</span>
            </div>      
          </section>

          <section className="w-full bg-slate-200 rounded-lg">
            <Link to="/menufooter">
              <img
                className="w-full rounded-lg mb-3 max-h-60 hover:scale-105 transition-all" 
                loading="lazy"
                src={menuFooter}             
                alt="imagem componente menu footer"             
              />            
            </Link>

            <div className="font-bold text-center mb-4">
              <span>Menu Footer</span>
            </div>      
          </section>

          <section className="w-full bg-slate-200 rounded-lg mb-4">
            <Link to="/navheader">
              <img
                className="w-full rounded-lg mb-3 max-h-60 hover:scale-105 transition-all" 
                loading="lazy"
                src={header}             
                alt="imagem componente menu left"             
              />            
            </Link>

            <div className="font-bold text-center mb-4">
              <span>Header</span>
            </div>      
          </section>
          
          <section className="w-full bg-slate-200 rounded-lg mb-4">
            <Link to="/login">
              <img
                className="w-full rounded-lg mb-3 max-h-60 hover:scale-105 transition-all" 
                loading="lazy"
                src={login}             
                alt="imagem componente menu left"             
              />            
            </Link>

            <div className="font-bold text-center mb-4">
              <span>Login</span>
            </div>      
          </section>

          <section className="w-full bg-slate-200 rounded-lg mb-4">
            <Link to="/image">
              <img
                className="w-full rounded-lg mb-3 max-h-60 hover:scale-105 transition-all" 
                loading="lazy"
                src={image}             
                alt="imagem componente menu left"             
              />            
            </Link>

            <div className="font-bold text-center mb-4">
              <span>Image</span>
            </div>      
          </section>

        </main>
      </Container>       
    </div>
  )
}