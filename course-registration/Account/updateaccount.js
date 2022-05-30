const AWS = require('aws-sdk')
const dynamoDb = new AWS.DynamoDB.DocumentClient()

module.exports.update = async (event) => {
    const { course } = JSON.parse(event.body);
    console.log({course});
    const params = {
        TableName : process.env.DYNAMODB_ACCOUNT_TABLE,
        Key:{
            StudentID: 
        }
        Item : 
        {Course : course}
    };

    try {
        await dynamoDb.put(params).promise();
    }
    catch(error){
        console.error(error);
    }

    return{
        statusCode:200,
    };
}    