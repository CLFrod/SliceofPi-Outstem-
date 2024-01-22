// Made by: Callum Frodsham

import orderData from './order_data.json' assert{type: "json"}
import pricingData from './pricing_data.json' assert{type: "json"}

class Order{
    constructor(){

    }
    /**
     * 
     * @returns an array of dictionaries each containing two key value pairs of month: specific month,
     * and revenue: specific revenue
     */
    static calcMoneyPerMonth(){
        const monthDict = {}
        // iterating through the orderData
        for(let i = 0; i < orderData.length; i++){
            // splitting the months up using split
            let month = orderData[i].date.split("-")[1];
            if(month in monthDict){
                for(let j = 0; j < orderData[i].items.length; j++){
                    monthDict[month] += pricingData[orderData[i].items[j].type][orderData[i].items[j].size];
                }
            }
            else{
                monthDict[month] = 0;
                for(let j = 0; j < orderData[i].items.length; j++){
                    monthDict[month] += pricingData[orderData[i].items[j].type][orderData[i].items[j].size];
                }
            }
        }
        // converting the month dict into an array to be used by recharts for the line graph
        const moneyPerMonthArray = Object.keys(monthDict).map(key => {return {month : key, revenue : monthDict[key]}})
        // bit of logic using an arrow/lambda function to be able to sort the months from least to greatest
        moneyPerMonthArray.sort((a,b) => a.month.localeCompare(b.month))
        return moneyPerMonthArray;
    }

    /**
     * 
     * @returns the total revenue made by the store for all of the orders.
     */
    static calcTotalMoneyMade(){
        let revenue = 0;

        //simple iteration to calculate the revenue
        for(let i =0;i<orderData.length;i++){
            for(let j =0; j<orderData[i].items.length;j++){
                revenue += pricingData[orderData[i].items[j].type][orderData[i].items[j].size]
            }
        }
        return revenue;
    }

    static ordersPerStoreArray(pizzaType, pizzaSize){
        const orderCountDict = {}

        // Guard clauses :)
        // Sort by both pizza size and type
        if((pizzaSize != "") && (pizzaType != "")){
            console.log("notyet1")
        }
        // Sort by pizza size logic
        else if((pizzaSize !="")){
            console.log("notyet2")
        }
        // Sort by pizza type logic
        else if ((pizzaType != "")){
            console.log("notyet3")
        }
        // Otherwise just display as normal.
        else{
            for(let i =0; i < orderData.length; i++){
                // just directly summing up the order
                if(orderData[i].store in orderCountDict){
                    orderCountDict[orderData[i].store] +=1;
                }
                else{
                    orderCountDict[orderData[i].store] = 1;
                }
            }


        }

        // converting the dict to an array for recharts to be able to use
        const orderCountArray = Object.keys(orderCountDict).map(key => {return {name : key, orders: orderCountDict[key]}});

        return orderCountArray;
    }
    

    
}


export default Order;