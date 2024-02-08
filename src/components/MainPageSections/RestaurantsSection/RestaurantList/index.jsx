export const RestaurantList = ({ restaurants }) => {
  const { id, image, name, description } = restaurants
  return (
    <li>
      <img src={image} alt="Foto Comida do restaurante" />
      <h3 className="title3">{name}</h3>
      <p className="textP">{description}</p>
    </li>
  )
}
