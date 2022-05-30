const AWS = require('aws-sdk')
const dynamoDb = new AWS.DynamoDB.DocumentClient()

module.exports.Drop = async (event) => {
    
    const { code } = JSON.parse(event.body);
    console.log({code});
    const params= {
        TableName : process.env.DYNAMODB_COURSE_TABLE,
        Key : { CourseCode : code },
    };

    try {
        await dynamoDb.delete(params).promise();
    }
    catch(error){
        console.error(error);
    }

    return{
        statusCode:200,
    };
}
