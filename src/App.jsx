import './App.css'
import Header from './Header'
import Footer from './components/Footer'
import TodoContainer from './components/TodoContainer'


function App() {
  

  return (
    <>
    <Header />

    <div className='App'>
    <TodoContainer />
    
    </div>

    <Footer />
    </>
    
  )
}

export default App
