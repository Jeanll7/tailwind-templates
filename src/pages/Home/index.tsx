import { Link } from "react-router-dom"
import menuLeft from '../../assets/menu-left.png'
import menuFooter from '../../assets/menu-footer.png'
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
            <Link to="/menufooter">
              <img
                className="w-full rounded-lg mb-3 max-h-60 hover:scale-105 transition-all" 
                loading="lazy"
                src={menuFooter}             
                alt="imagem componente menu left"             
              />            
            </Link>

            <div className="font-bold text-center mb-4">
              <span>Menu Footer</span>
            </div>      
          </section>

          <section className="w-full bg-slate-200 rounded-lg">
            <Link to="/menuleft">
              <img
                className="w-full rounded-lg mb-3 max-h-60 hover:scale-105 transition-all" 
                loading="lazy"
                src={menuFooter}             
                alt="imagem componente menu left"             
              />            
            </Link>

            <div className="font-bold text-center mb-4">
              <span>Menu left</span>
            </div>      
          </section>

          <section className="w-full bg-slate-200 rounded-lg">
            <Link to="/menuleft">
              <img
                className="w-full rounded-lg mb-3 max-h-60 hover:scale-105 transition-all" 
                loading="lazy"
                src={menuFooter}             
                alt="imagem componente menu left"             
              />            
            </Link>

            <div className="font-bold text-center mb-4">
              <span>Menu left</span>
            </div>      
          </section>

          <section className="w-full bg-slate-200 rounded-lg">
            <Link to="/menuleft">
              <img
                className="w-full rounded-lg mb-3 max-h-60 hover:scale-105 transition-all" 
                loading="lazy"
                src={menuFooter}             
                alt="imagem componente menu left"             
              />            
            </Link>

            <div className="font-bold text-center mb-4">
              <span>Menu left</span>
            </div>      
          </section>

          <section className="w-full bg-slate-200 rounded-lg">
            <Link to="/menuleft">
              <img
                className="w-full rounded-lg mb-3 max-h-60 hover:scale-105 transition-all" 
                loading="lazy"
                src={menuFooter}             
                alt="imagem componente menu left"             
              />            
            </Link>

            <div className="font-bold text-center mb-4">
              <span>Menu left</span>
            </div>      
          </section>         
        </main>
      </Container>       
    </div>
  )
}