const AWS = require('aws-sdk')
const {putFunction,getFunction,updateFunction}=require('./HelperFunction/Dynamodboperation');
const {GetAccountParameter,PutAccountParameter,UpdateAccountParameter}=require('./HelperFunction/Parameters');

module.exports.AccCreate = async (event) => {
  console.log(event);
  let body;
  let parameter;
  let response;
  let Value;

  switch(event.httpMethod){
    case 'POST':
                body=JSON.parse(event.body);
                parameter=GetAccountParameter(body);
                response=await queryFunction(parameter);
                console.log(response) 
                Value=JSON.parse(response.body);
                console.log(Value.Result) 
                if(Value.Result.length!=0) 
                {
                        return{
                                "statusCode":400,
                                "body":JSON.stringify({"success":false})   
                                }
                }
                else{
                           parameter=PutAccountParameter(body);
                          response=putFunction(parameter,body);
                          return response;

                }

  
                

    case 'PUT':
                body=JSON.parse(event.body);
                parameter=GetAccountParameter(body);
                response=await queryFunction(parameter);
                        Value=JSON.parse(response.body);
                        if(Value.Result.length!=0)
                        { 
                            if(Value.Result[0].Password===Data.Password)
                            {
                                return {
                                    "statusCode":200,
                                    "body":JSON.stringify({"success":true,"StudentId":Value.Result[0].StudentId})

                                };
                            }
                            else{
                                return{
                                        "statusCode":400,
                                        "body":JSON.stringify({"success":false})  
                                        }
                            }
                        }
                        else{
                                    return {
                                        "statusCode":400,
                                        "body":JSON.stringify({"success":false}) 
                                        }
                        }

    case 'PATCH':
                  body=JSON.parse(event.body);
                  parameter=UpdateAccountParameter(body);
                  response= await updateFunction(parameter,body);
                  return response;


  }
}