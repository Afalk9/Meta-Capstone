function ItemMenu(name,text, image, price){
return(
    
<div className="item">

<h2 className="nameMenu">{name}</h2>
<p className="descriptionMenu">{text}</p>
<h3 className="priceMenu">{price}</h3>
<img src={image} className="imageMenu"/>
<p className="spacing"></p>

</div>
)
}

export default ItemMenu
