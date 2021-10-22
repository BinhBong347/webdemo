import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from "react-router-dom";



function RenderMenuList({item}){
    return(
        <Card Link to={`/menu/${item.id}`}>
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
                    item={item}/>
                </div>
            )
            
        })
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        )
}


   
   

        

export default MenuComponent;