import { useState } from "react"

interface OrderFormProps {
  onSubmit(order:{name:string; cups:number}):void;
}

export function OrderForm({onSubmit}: OrderFormProps){
  const [name, setName] = useState<string>("Masala");
  const [cups, setCups] = useState<number>(1);

  function handleSubmit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    onSubmit({name,cups});
  }
  return<form onSubmit={handleSubmit}>  
  <label>Chai Name</label>
  <input 
  value={name}
  onChange={(e:React.ChangeEvent<HTMLInputElement>)=>
    setName(e.target.value)
  }
  />
  <label>Cups</label>
  <input type="number" 
  value={cups}
  onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setCups(Number(e.target.value)||0)}
  />
  <button type="submit">Place Order</button>
  </form>
}

//here onSubmit function is defined somewhere else in a parent file from where it is being passed as a prop and since we already know the structure of the arguments of onSubmit so we hae defined them in the start using interface again

//now, when form handleSubmit calls OnSubmit it will require exact types of the arguments 
//Also note whenever e is used it should be used with its required type only. it can have multiple types depending on its role.

 