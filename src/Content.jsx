import { useEffect } from "react"
import ItemList from "./ItemList"

function Content({ items, setItems, handleChange, handleDelete }){
  // we can't send more things and destrucutre less, so if something is not being used we will have to not send it down

  // ? this whole useEffect isn't needed here, we can set the state in App() in the useState itself
  // useEffect(()=>{
  //   const savedState = localStorage.getItem("stateOfShoppingList")
  //   console.log(savedState)
  //   if(savedState){
  //     setItems(JSON.parse(savedState))
  //   }
  // }, [])
  // we can use another useEffect that will listen to [items] and update the local storage if the items is changed, so the updation code we can remove from our handleChange function 

  return (
    <>
      {items.length? (
        <ItemList
          items={items}
          handleChange={handleChange}
          handleDelete={handleDelete}
        />
      ):(
        <p>
          All tasks completed! Great Work!
        </p>
      )}
      
    </>
  )
}

export default Content