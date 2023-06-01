import React, { Component } from "react";

export default class BlogItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cid: this.props.match.params.slug,
            singleItem: {},
        };
    } 

    getSingleItem() {
        fetch(`https://capstone-back-ck.herokuapp.com/blog/get/${this.state.cid}`)
        .then(response => response.json())
        .then((data) => {
            console.log("getsingleitem", data)
            this.setState({
                singleItem: data
            })

        })
        .catch((error) => {
          console.log("cant get single item", error);
        });
    }

    componentDidMount() {
        this.getSingleItem();
    }


    render() {
        const {
            blog_title,
            text_field,
            image_url
        } = this.state.singleItem;
        return(
        <div className="single_blog_container">
            <div className="blog_info">
                <div className="blog_title"><h2>{blog_title}</h2></div>
                <div className="img"><a href={image_url}><img src={image_url}/></a></div>
                <div className="text">{text_field}</div>
            </div>
        </div>
      )
    }
}