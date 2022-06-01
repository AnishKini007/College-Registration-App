let parameter;
exports.GetAccountParameter=(body)=>{
    parameter={
        TableName: process.env.DYNAMODB_ACCOUNT_TABLE,
        Key:{
            StudentId: body.StudentId
        }
    }

    return parameter;
}

exports.PutAccountParameter=(body)=>{
    console.log("inside put account parameter",body) 
    parameter={
        TableName:process.env.DYNAMODB_ACCOUNT_TABLE,  
        Item:{
            AccountId:body.accid,
            Type:body.Type,  
            StudentId:body.StudentId, 
            Password:body.Password, 
            Course:"[]"  

        }

    }
    return parameter
}

exports.UpdateAccountParameter=(body)=>{
    parameter={
        TableName:process.env.DYNAMODB_ACCOUNT_TABLE,
        Key:{
            StudentId:body.StudentId
        },
        ConditionExpression:'StudentId=:studentid',
        UpdateExpression:'set Course =:course',
        ExpressionAttributeValues:{
            ':studentid':body.StudentId,
            ':course':body.Course
         
        }
    }
    
    return parameter
    }

