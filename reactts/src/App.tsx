import './App.css'
import { ChaiCard } from './components/ChaiCard'
import { Counter } from './components/Counter'

function App() {
  return (
    <>
      <div>
        <h1>Welcome to My App</h1>
        <ChaiCard name="Green Tea" price="$2.99" />
      </div>
      <div>
        <Counter/>
      </div>
    </>
  )
}

export default App
