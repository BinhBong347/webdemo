import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle, Media } from 'reactstrap';



    function RenderItem({dish}) {
        
        if(dish) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <Card>
                            <CardImg src={dish.image} alt={dish.name}/>
                        </Card>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>

                </div>
            )
        } else{return <div></div>}
    }
    function RenderComments({comments}) {
        if(comments) {
            const commentList = comments.map((comment,index) => {
                return(
                    <div className="" key={index}>
                        <p>{comment.id}</p>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, {comment.date}</p>
                    </div>
                )
            });
            return (
                    <div className='col-12 col-md-5 m-1'>
                        <h4 style={{textAlign:"center", color:"blue"}}>COMMENTS</h4>
                        <ul className="list-unstyled">
                            {commentList}
                        </ul>
                    </div>
                
            )
        } else {return <div></div>}
    }

    function DetailDish(props) {

        console.log(props.dish)
        if(props.dish != null) {
            
            return(
            <div className="container">
                <div className="row">
                    <RenderItem dish={props.dish}/>
                    <RenderComments comments={props.dish.comments}/>
                </div>
            </div>
            )
        } else {return <div></div>}
    }


export default DetailDish;