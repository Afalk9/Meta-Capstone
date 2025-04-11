import MenuItem from "../Components/MenuItem"
import ItemMenu from "../Components/ItemMenu"
import greekSalad from '../Assets/greek salad.jpg'
function Menu() {
    return (
        <div>
      {ItemMenu("Greek Salad","Freshly prepared, sesonal ingreditanes, balsamic vinger",greekSalad,"$13.99")}
      {ItemMenu("Greek Salad","Freshly prepared, sesonal ingreditanes, balsamic vinger",greekSalad,"$13.99")}
      {ItemMenu("Greek Salad","Freshly prepared, sesonal ingreditanes, balsamic vinger",greekSalad,"$13.99")}
      {ItemMenu("Greek Salad","Freshly prepared, sesonal ingreditanes, balsamic vinger",greekSalad,"$13.99")}
      {ItemMenu("Greek Salad","Freshly prepared, sesonal ingreditanes, balsamic vinger",greekSalad,"$13.99")}
      
        </div>
    )
}

export default Menu