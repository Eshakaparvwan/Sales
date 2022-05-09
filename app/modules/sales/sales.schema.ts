import { Schema, model } from "mongoose"

class SalesSchema extends Schema {
    // define schema 
    constructor() {
        super({
            ORDERNUMBER: {
                type: Number,
                required: true
            },
            SALES: {
                type: Number,
                required: true
            },
            ORDERDATE: {
                type: Date,
                required: true
            },
            MONTH_ID: {
                type: Number,
                required: true
            },
            YEAR_ID: {
                type: Number,
                required: true
            }


        }, {
            timestamps: true
        })  

    }
}
const SalesModel = model('Sales', new SalesSchema())

export default SalesModel