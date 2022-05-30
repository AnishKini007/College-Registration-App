const aws=require('aws-sdk');
const DB=new aws.DynamoDB.DocumentClient();
let Result;

exports.putFunction=async(Parameter,Data)=>{
    try{
        Result=await DB.put(Parameter).promise();
        console.log("Data Inserted",Data);
        return {
            "statusCode":200,
            "body":JSON.stringify({"Inserted":Data}) 
        }
    }
    catch(Error){
        console.log(Error);
        return{
            "statusCode":400,
            "body":JSON.stringify(Error) 
        }
    }

}
exports.getFunction=async(Parameter)=>{
    try{
        Result=await DB.get(Parameter).promise();
        console.log("Get Result",Result);
        return {
            "statusCode":200,
            "body":JSON.stringify({"Result":Result['Item']}) 
        }
    }
    catch(Error){
        console.log(Error);
        return {
            "statusCode":400,
            "body":JSON.stringify(Error) 
        }
    }
}
exports.updateFunction=async(Parameter,Data)=>{
    try{
        Result=await DB.update(Parameter).promise();
        console.log("Updated ",Data)
        return {
            "statusCode":200,
            "body":JSON.stringify({"Updated":Data}) 
        }
    }
    catch(Error){
        console.log(Error);
        return {
            "statusCode":400,
            "body":JSON.stringify(Error) 
        }
    }
}
exports.deleteFunction=async(Parameter,Data)=>{
    try{
        Result=await DB.delete(Parameter).promise();
        console.log("deleted",Data);
        return {
            "statusCode":200,
            "body":JSON.stringify({"Deleted":Data}) 
        }
    }
    catch(Error){
        console.log(Error);
        return {
            "statusCode":400,
            "body":JSON.stringify(Error) 
        }
    }
}

exports.queryFunction=async(Parameter)=>{
    try{
        Result=await DB.query(Parameter).promise();
        console.log("Query ",Result);
        return {
            "statusCode":200,
            "body":JSON.stringify({"Result":Result['Items']}) 
        }
    }
    catch(Error){
        console.log(Error);
        return {
            "statusCode":400,
            "body":JSON.stringify(Error) 
        }
    }
}