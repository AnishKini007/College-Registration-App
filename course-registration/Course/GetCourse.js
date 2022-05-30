const AWS = require('aws-sdk')

module.exports.GetCourse = async (event) => {
  const scanparams = {
    TableName: process.env.DYNAMODB_COURSE_TABLE
  }

  const dynamoDB = new AWS.DynamoDB.DocumentClient()
  const result1 = await dynamoDB.scan(scanparams).promise()

  if (result1.Count === 0) {
    return {
      statusCode: 404
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      total: result1.Count,
      items: await result1.Items.map(res => {
        return {
          code: res.CourseCode,
          name: res.Title,
          credits: res.Credits,
          gender: res.Gender,
          date: res.Duration,
          Instname: res.Instructor,
          }
        })
    })
  }

}