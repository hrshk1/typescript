import './App.css'
import { ChaiCard } from './components/ChaiCard'
import { Counter } from './components/Counter'
import type { Chai } from './types' 
import ChaiList from './components/ChaiList'
const menu: Chai[] = [
  { id: 1, name: "Green Tea", price: 2.99 },
  { id: 2, name: "Black Tea", price: 2.49 },
  { id: 3, name: "Earl Grey", price: 3.49 }
];
function App() {
  return (
    <>
      <div>
        <h1>Welcome to My App</h1>
        <ChaiCard name="Green Tea" price={2.99} />
      </div>
      <div>
        <Counter/>
      </div>
      <div>
        <ChaiList items={menu}/>
      </div>
    </>
  )
}

export default App
