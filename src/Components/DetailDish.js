import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle, BreadcrumbItem, Breadcrumb } from 'reactstrap';
import { Link } from "react-router-dom";





function DetailDish(props) {

    function RenderItem({ dish }) {

        if (dish) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <Card>
                            <CardImg src={dish.image} alt={dish.name} />
                        </Card>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>

                </div>
            )
        } else { return <div></div> }
    }
    function RenderComments({ comments }) {
        if (comments) {
            const commentList = comments.map((comment, index) => {
                return (
                    <div className="" key={index}>
                        <p>{comment.id}</p>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, {comment.date}</p>
                    </div>
                )
            });
            return (
                <div className='col-12 col-md-5 m-1'>
                    <h4 style={{ textAlign: "center", color: "blue" }}>COMMENTS</h4>
                    <ul className="list-unstyled">
                        {commentList}
                    </ul>
                </div>

            )
        } else { return <div></div> }
    }


    if (props.dish != null) {

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderItem dish={props.dish} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        )
    } else { return <div></div> }
}


export default DetailDish;