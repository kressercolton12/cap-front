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
        fetch(`http://127.0.0.1:5000/blog/get/${this.state.cid}`)
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
            date,
            text_field,
            image_url
        } = this.state.singleItem;
        return(
            <div className="blog_info">
            <h2>{this.state.cid}</h2>
            {date}
            {blog_title}
            {text_field}
            {image_url}
        </div>
      )
    }
}