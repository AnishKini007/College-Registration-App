const AWS = require('aws-sdk')

module.exports.create = async (event) => {
  const body = JSON.parse(event.body)
  const dynamoDb = new AWS.DynamoDB.DocumentClient()
  const putParams = {
    TableName: process.env.DYNAMODB_STUDENT_TABLE,
    Item: {
      StudentID: body.id,
      email: body.email,
      Name: body.name,
      Gender: body.gender,
      DOB: body.dob,
      phone: body.ph
    }
  }
  await dynamoDb.put(putParams).promise()

  return {
    statusCode: 201
  }
}