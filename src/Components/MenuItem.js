function MenuItem(name,text, image, price){
return(
<div className="item">
<h2 className="menuName">{name}</h2>
<p className="menuDescription">{text}</p>
<h3 className="menuPrice">{price}</h3>
<img src={image} className="menuImage"/>
<p className="spacing"></p>
</div>
)
}

export default MenuItem
