function SpecialEvent(name,text,time,image){
    return(
    <div className="special">
    <h2>Upcoming Event</h2>
    <h2 className="specialName">{name}</h2>
    <p className="specialDescription">{text}</p>
    <h3 className="specialTime">{time}</h3>
    <img src={image} className="specialImage"/>
    
    
    
    </div>
    )
    }
    
    export default SpecialEvent