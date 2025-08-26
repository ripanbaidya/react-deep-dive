const FoodItem = ({name, idx}) => {
  const handleOrder = () => {
    alert(`You ordered ${name}`)
  }
  return (
    <>
    <li key={idx}>{name}</li>
    <button type="button" class="btn btn-info"
    onClick={(event)=>handleOrder(event)}>Order</button>
    </>
  )
}

export default FoodItem;