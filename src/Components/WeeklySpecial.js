function WeeklySpecial(name,text, image, price){
    return(
    <div className="special">
    <h2>Weekly Special</h2>
    <h2 className="specialName">{name}</h2>
    <p className="specialDescription">{text}</p>
    <h3 className="specialPrice">{price}</h3>
    <br></br>
    <img src={image} className="specialImage"/>
    
    </div>
    )
    }
    
    export default WeeklySpecial