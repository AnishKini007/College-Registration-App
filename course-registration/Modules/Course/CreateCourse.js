const AWS = require('aws-sdk')

module.exports.CreateCourse = async (event) => {
  const body1 = JSON.parse(event.body)
  const dynamo = new AWS.DynamoDB.DocumentClient()
  const putparams = {
    TableName: process.env.DYNAMODB_COURSE_TABLE,
    Item: {
      CourseCode: body1.code,
      Title: body1.name,
      Credits: body1.credits,
      Description: body1.description,
    }
  }
  await dynamo.put(putparams).promise()

  return {
    statusCode: 201
  }
}