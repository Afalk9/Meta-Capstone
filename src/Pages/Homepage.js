import foodPic from "../Assets/pizza.png"
import WeeklySpecial from "../Components/WeeklySpecial"
import greekSalad from '../Assets/greek salad.jpg'
import SpecialEvent from "../Components/SpecialEvent"
import chefPicture from "../Assets/Mario and Adrian b.jpg"

function Homepage() {
    return (
        < div className="welcome">
       <img src={foodPic} className="foodPic" alt="Picture of Food"/>
       <div className=" homepageText">
        <h1 className="greeting">Welcome to the Little Lemon</h1>
        <h3 className="subGreeting">Home of Chicago's best Mom and Pop Italian food!</h3>
       </div>
       <div className= "homepageSpecials">
        {WeeklySpecial("Greek Salad","Limted time offer!!!",greekSalad,"$9.99")}
        {SpecialEvent("Meet the chef","Join Mario for a behidn the scenes tour of th ktichen and how Little Lemon makes such declious food", "Saturday at 3pm", chefPicture)}
        </div>
        </div>
    )
}

export default Homepage
