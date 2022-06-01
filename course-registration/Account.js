const AWS = require('aws-sdk')
const {putFunction,updateFunction,getFunction}=require('./HelperFunction/Dynamodboperation');
const {GetAccountParameter,PutAccountParameter,UpdateAccountParameter}=require('./HelperFunction/Parameters');

module.exports.AccCreate = async (event) => { 
  console.log(event); 
  let body;
  let parameter;
  let response;
  let Value;

  switch(event.requestContext.http.method){ 
    case 'POST':
                body=JSON.parse(event.body);
                console.log(body)
                parameter=GetAccountParameter(body);
                response=await getFunction(parameter); 
                console.log(response) 
                Value=JSON.parse(response.body);  
                console.log(Object.keys(Value).length)    
                if(Object.keys(Value).length!=0)     
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
                response=await getFunction(parameter);
                        Value=JSON.parse(response.body);
                        console.log("response",Value.Result)     
                        if(Object.keys(Value).length!=0) 
                        { 
                            if(Value.Result.Password===body.Password)   
                            {
                                return {
                                    "statusCode":200,
                                    "body":JSON.stringify({"success":true,"StudentId":Value.StudentId})

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
                parameter=GetAccountParameter(body);
                response=await getFunction(parameter); 
                Value=JSON.parse(response.body); 
                console.log(Value)
                let courselist=Value.Result.Course
                parameter=UpdateAccountParameter(body);
                response= await updateFunction(parameter,body);
                return response;


  }
}