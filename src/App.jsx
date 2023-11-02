import './App.css'
import Header from './components/Header'
import DarkMode from './components/DarkMode'
import Footer from './components/Footer'
import TodoContainer from './components/TodoContainer'
import Logo from './components/Logo'


function App() {
  

  return (
    
    <>
    <Logo />
    <Header />
    <DarkMode />
    <div className='App'>
    <TodoContainer />
  
    </div>

    <Footer />
    </>
    
  )
}

export default App
