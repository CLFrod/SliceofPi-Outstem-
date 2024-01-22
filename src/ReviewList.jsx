// Made by : Callum Frodsham
import { useEffect, useState } from 'react';
import './ReviewList.css'
import happy from './assets/img/happy.ico';
import sad from './assets/img/sad.ico';
import angry from './assets/img/angry.ico';
import  delighted from './assets/img/delighted.ico';


function getIcon(review){
    if(review.getSentiment() == "delighted"){
        return delighted;
    }
    else if(review.getSentiment() == "happy"){
        return happy;
    }
    else if(review.getSentiment() == "sad"){
        return sad;
    }
    else{
        return angry;
    }
}

const Comment = ({ review }) => {
    return (
        <div className="reviewBox">
            <div className='reviewHeader'>
            <h5>{review.getReviewID()}</h5>
            <img className="reviewIcon" src={getIcon(review)}></img>
            </div>
            <p className='message'>{review.getMessage()}</p>
            <p className='date'>Date: {review.getDate()}</p>
        </div>
    );
};

function ReviewList({reviews}){
    return (
        <div className='reviewList'>
            {reviews.map((review) => (
                <Comment key={review.getReviewID()} review={review}  />    
            ))}
        </div>
    );
}

export default ReviewList;