import React, { Component } from 'react';


export default class BlogManager extends Component {
    constructor() {
        super();

        this.state = {
            blog_title: "",
            text_field: "",
            user_id: 1,
            date: "",
            image_url: "",
            status: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        fetch("https://capstone-back-ck.herokuapp.com/blog/create", {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                blog_title: this.state.blog_title,
                text_field: this.state.text_field, 
                date: this.state.date,
                image_url: this.state.image_url,
                status: this.state.status,
                user_id: this.state.user_id,
            }) 
        }) .then(response => {
            console.log({response})   
        })
        event.preventDefault();
    }

    render() {
        return (
            <div className='blog-submit-container'>
                <form onSubmit={this.handleSubmit} className='blog-submit'>
                    <label>Blog Title: 
                    <input
                        id='blog_title'
                        type='text'
                        name='blog_title'
                        placeholder='Blog Title'
                        value={this.state.blog_title}
                        onChange={this.handleChange}/>
                    </label>

                    <label>Blog Content: 
                    <input
                        id='text_field'
                        type='text'
                        name='text_field'
                        placeholder='text_field'
                        value={this.state.text_field}
                        onChange={this.handleChange}/>
                    </label>    

                    <label>Date: 
                    <input
                        id='date'
                        type='text'
                        name='date'
                        placeholder='Date'
                        value={this.state.date}
                        onChange={this.handleChange}/>
                    </label>

                    <label>Image URL: 
                    <input
                        id='image_url'
                        type='text'
                        name='image_url'
                        placeholder='image_url'
                        value={this.state.image_url}
                        onChange={this.handleChange}/>
                    </label>

                    <label>Blog Status: 
                    <input
                        id='status'
                        type='text'
                        name='status'
                        placeholder='status'
                        value={this.state.status}
                        onChange={this.handleChange}/>
                    </label>
                        <button className='blog-sub-btn' type='submit'>Submit Blog</button>
                </form>
            </div>
        );
    }
}
