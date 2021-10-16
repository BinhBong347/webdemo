import React, { Component } from 'react';
import { Card, CardImgOverlay, CardText, CardTitle, CardImg } from 'reactstrap';
import { DISHES } from '../shared/Dished'



const dishes= DISHES;
// Cần 1 component Fc để hiện thị ở đây
function Tododishes(props) {
    return (
        <div className="col-12 col-md-5 m-1">
            <Card onClick={() => props.onClick(props)}>
                <Card>
                    <CardImg width="100%" src={props.image} alt={props.name}/>
                </Card>
                <CardImgOverlay>
                    <CardTitle>{props.name}</CardTitle>
                    
                </CardImgOverlay>

            </Card>
           
        </div>

    )
}
// 1 cái FC để trả về kết quả khi được click
function HandleClick(props) {
    console.log(props.name)
    // return (
    //     <div className="container">
    //     <div className="row">
    // <h1 style={{color:'green'}}>{props.name}</h1>
    // </div>
    // </div>
    // )
}

// Tý mang đi add vào cái App nó được call là containter
function MenuFunction () {
    
    return(
        <div className="container">
            <div className="row">
                {dishes.map((dishe,idex) => {
                    return(
                        <Tododishes
                        key={idex}
                        image={dishe.image}
                        name={dishe.name}
                        description={dishe.description}
                        // dishe1={dishe}
                        onClick={HandleClick
                       }
                        />
                    )
                })}
            </div>
        </div>
    )
}

// Thử để 1 Fc ren dẻ tất cả
export default MenuFunction;