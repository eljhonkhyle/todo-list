import './App.css'
import Header from './components/Header'
import DarkMode from './components/DarkMode'
import Footer from './components/Footer'
import TodoContainer from './components/TodoContainer'


function App() {
  

  return (
    <>
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
