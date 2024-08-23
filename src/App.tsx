import Header from './components/Header'
import Body from './components/Body'
import './App.css'

function App() {
  return (
    <>
      <div className="header sticky top-0 z-5 ">
        <Header />
      </div>
      <div className="body z-0">
        <Body />
      </div>
    </>
  )
}

export default App
