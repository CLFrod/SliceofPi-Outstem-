// Made by : Callum Frodsham 300199446
import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import './ReviewAnalytics.css';
import Review from './Review.js';
import ReviewList from './ReviewList.jsx'

function ReviewAnalytics() {
    const reviewDataDictionary = Review.processSentiment();
    const colours = ["#ffc857", "#78BC61", "#235789", "#ED1C24"];

    // In my sentiment.js file i convert the JSON into a dictionary
    // In my haste, I realized rechart doesn't use dictionaries directly
    // Thus I opted to just turn it into an array of the key value pairs 
    const reviewDataToArray = Object.keys(reviewDataDictionary).map((key) => {
        return {name: key, count: reviewDataDictionary[key]};
    });

    // Logic and variables to dynamically resize chart height and radius
    // obviously depending on window size.
    const [chartSize, setChartSize] = useState({height:500, radius:170})
    useEffect(() => {
        function handleChartSize(){
            let currentHeight = window.innerHeight < 600 ? 300: 500;
            let currentRadius = window.innerWidth < 768 ? 80 : 150;
            setChartSize({height:currentHeight, radius:currentRadius})
        }
        handleChartSize();

        window.addEventListener('resize', handleChartSize);

        return () => window.removeEventListener('resize', handleChartSize);
    }, []);


    // Logic and variables to implement the review section
    const reviewArray = Review.createReviewArray();

    return (
        <>
            <div style={{ width: '100%', height: chartSize.height }} className='boundingDiv'>
                <ResponsiveContainer width="100%" height="90%">
                          <PieChart>
                              <Pie
                                  data={reviewDataToArray}
                                  dataKey="count"
                                  nameKey="name"
                                  cx="50%"
                                  cy="50%"
                                  outerRadius={chartSize.radius}
                                  label
                                >
                                  {reviewDataToArray.map((entry,index) => (
                                      <Cell key={`cell-${index}`} fill={colours[index]} />  
                                  ))}
                              </Pie>
                              <Legend />
                              <Tooltip />
                          </PieChart>
                   </ResponsiveContainer>
                   </div>
                   <hr className='breakLine2'></hr>
                   <h2 className="reviewText"> Slice of Pi Reviews: </h2>
                   <hr className='breakLine2'></hr>
                   <hr className='spacer'></hr>
                   <div className='reviewListContainer'>
                    <ReviewList reviews={reviewArray}/>
                   </div>
            </>
    );
}

export default ReviewAnalytics;