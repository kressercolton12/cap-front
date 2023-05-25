import React, { Component } from 'react';


export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            pageTitle: "Welcome to the UFL Podcast!",
            isLoading: false,
            data: []
        };
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }

        return (
        <div className='homepage'>
            <div className='yt-vid'>
            <iframe width="1080" 
            height="620" 
            src="https://www.youtube.com/embed/8_PDpZ5BC10" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
            </iframe>
            </div>

            <div className='listen'>
                <h2>AVAILABLE ON</h2>
            </div>

            <div className='btn-container'>
                <div className='spotify-btn btn'>
                <div className="text"><a target="_blank" href="https://open.spotify.com/show/0VXImJJHAmppBj3MYhlx43?si=c25b0ac31a724a36"><button>Spotify</button></a></div>
                </div>

                <div className='yt-btn btn'>
                <div className="text"><a target="_blank" href="https://www.youtube.com/@unfinishedlifestyle"><button>YouTube</button></a></div>
                </div>
            </div>
        </div>

        )
    };
}