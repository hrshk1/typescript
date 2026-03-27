import './App.css'
import { ChaiCard } from './components/ChaiCard'
import { Counter } from './components/Counter'
import type { Chai } from './types' 
import ChaiList from './components/ChaiList'
import { OrderForm } from './components/orderform'
import { Card } from './components/Card'
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
      <div>
        <OrderForm
          onSubmit={(order)=>{
            console.log("Placed", order.name, order.cups);
          }}
          />
      </div>
      {/* instead we can write onSubmit({ name, cups }); instead of using order */}
      <div>
        <Card title="Chai aur typescript"
        footer={<button>Order Now</button>}/>
      </div>
      {/* the thing that we used with footer is called react node that contains parts of html elements */}
    </>
  )
}

export default App
