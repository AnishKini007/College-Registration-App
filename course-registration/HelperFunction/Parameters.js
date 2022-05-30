let parameter;
let AccountTable="";
exports.GetAccountParameter=(body)=>{
    parameter={
        TableName:userTable,
        KeyConditionExpression: "StudentId = :studentid",
        ExpressionAttributeValues: {
            ":studentid":body.StudentId
        },
        ProjectionExpression: "StudentId,Password",
        ScanIndexForward: false
    }

    return parameter;
}

exports.PutAccountParameter=(body)=>{
    parameter={
        TableName:AccountTable,
        Item:{
            AccountID: body.accid,
            Type: body.Type,
            StudentID: body.StudentId,
            Password: body.Password,
            Course:"[]" 

        }

    }
}

exports.UpdateAccountParameter=(body)=>{
    parameter={
        TableName:AccountTable,
        Key:{
            StudentId:body.StudentId
        },
        ConditionExpression:'StudentId=:studentid',
        UpdateExpression:'set Course =:course',
        ExpressionAttributeValues:{
            ':studentid':body.StudentID,
            ':course':body.Course
         
        }
    }
    }

}