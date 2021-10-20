import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';



function RenderMenuList({item, onClick}){
    return(
        <Card onClick={()=> onClick(item.id)}>
            <CardImg width="100%" src={item.image} alt={item.name}/>
        <CardImgOverlay>
            <CardTitle>{item.name}</CardTitle>
        </CardImgOverlay>
        </Card>
    )
}

function MenuComponent(props) {

        const menu = props.dishes.map((item, index) => {
            
            return (
                <div className="col-12 col-md-5 m-1" key={index}>
                    <RenderMenuList
                    item={item}
                    onClick={props.onClick}/>
                </div>
            )
            
        })
        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        )
}


   
   

        

export default MenuComponent;