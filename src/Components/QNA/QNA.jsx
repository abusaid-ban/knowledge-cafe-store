import React from 'react';
import './QNA.css';

const QNA = () => {
    return (
        <div className='card'>
            <h1>Simple Answer Question About React</h1>
            <h3><span>Question #1:Write About Props vs state? </span><br />
           
            Answer: 'Props' is a method system of passing data from one component to another.Here parent component passes data to his child component and child component receive it as an object. On the other hand 'state' is a javascript object which store data can change and update the trigger over time.Normally it use for component change and interactivity.
          

            </h3>
            <h3><span>Question #2:How does useState work?</span> <br />
            Answer:"useState" is a function in React that allows you to add state to a functional component. It takes an initial value as an argument and returns an array containing the current state value and a function to update the state.</h3>
            <h3><span>Question #3:Purpose of useEffect other than fetching data?</span> <br />
            Answer:The primary purpose of useEffect is to enable side effects in functional components, which are updating the document title,event listener.This is useful for handling user interactions like scrolling, resizing, or keyboard input. </h3>
            <h3><span>Question #4:How Does React work?</span> <br />
            Answer: React provides a declarative and efficient approach to building user interfaces by using a virtual DOM and unidirectional data flow. It is based on the concept of components, which are reusable and modular building blocks that represent a part of the user interface.It use component,rendering,state etc.</h3>
        </div>
    );
};

export default QNA;