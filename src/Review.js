// Made by : Callum Frodsham 300199446
import reviewData from './review_data.json' assert {type: "json"}

class Review{
    

    // Review Constructor.
    constructor(reviewID, sentiment, store, date, message){
        this.reviewID = reviewID;
        this.sentiment = sentiment;
        this.store = store;
        this.date = date;
        this.message = message;
    }
    /**
     * @returns an array filled with review objects constructed from the review_data.json
     */
    static createReviewArray(){
        let reviewArray = []
        for(let i = 0; i < reviewData.length; i++){
            let review = new Review(reviewData[i].review_id, reviewData[i].sentiment, reviewData[i].store, reviewData[i].date, reviewData[i].message)
            reviewArray.push(review)
        }
        return reviewArray;
    }
    
    /**
     * 
     * @returns a dictionary with the keys as the sentiment, and the count of that review
     * sentiment. 
     */
   static processSentiment(){
        const sentimentCountDict = {}
        for(let i = 0; i < reviewData.length; i++){
            const sentiment = reviewData[i].sentiment;
            // quick logic checking for sentiment in the dictionary as a key 
            if (sentiment in sentimentCountDict){
                // if so then increment
                sentimentCountDict[sentiment]++;
            }
            else{
                // otherwise initialize it to 1!
                sentimentCountDict[sentiment] = 1;
            }
            
        }

        return sentimentCountDict;
    }

    // Getters and setters 
    getReviewID(){
        return this.reviewID;
    }
    getMessage(){
        return this.message;
    }
    getDate(){
        return this.date;
    }
    getSentiment(){
        return this.sentiment;
    }
    getStore(){
        return this.store;
    }

    /**
     * 
     * @returns string format of the review
     */
    toString(){
        return "Review " + this.getReviewID() + ": \n" + 
               "   Sentiment: " + this.getSentiment() + "\n"+
               "   Message: " + this.getMessage() + "\n" + 
               "   Date: " + this.getDate() + "\n" +
               "   Store: "  + this.getStore()
    }
}

export default Review;