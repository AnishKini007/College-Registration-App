const AWS = require('aws-sdk')

module.exports.AccCreate = async (event) => {
  console.log(event);
  const body1 = JSON.parse(event.body)
  const dynamo = new AWS.DynamoDB.DocumentClient()
  const putparams = {
    TableName: process.env.DYNAMODB_ACCOUNT_TABLE,
    Item: {
      AccountID: body1.accid,
      Type: body1.type,
      StudentID: body1.id,
      Password: body1.pass,
      Course: [] 
    }
  }
  await dynamo.put(putparams).promise()

  return {
    statusCode: 201
  }
}