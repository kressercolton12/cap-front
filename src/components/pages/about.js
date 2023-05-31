import React from 'react';
import aboutPicture from '../../../static/assets/images/DSC03101.jpg'

export default function() {
    return (
        <div className='about-content'>
            <div className='left-content' style={{
                background: "url(" + aboutPicture + ") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
            />

            <div className='right-content'>
                Are you ready to make a lifestyle change? Build muscle? Lose fat?

                We can help!

                We offer one on one training and nutrition plans catered specifically for your body type & lifestyle! We also offer online options!

                Our nutrition plans are custom and unique to each client depending on what they typically do in a day and their activity level. We understand that not everyone wants to eat plain chicken and rice meals. We have lots of different options and can work with you on your favorite meals. We want you to be able to enjoy this process and make a sustainable lifestyle change.

                This is not a diet program, this is a lifestyle change. We want to help our clients achieve their goals and learn how to MAINTAIN them even after they are finished with our program.  
                
            </div>    
        </div>
    );
}