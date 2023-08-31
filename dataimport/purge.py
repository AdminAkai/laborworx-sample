import boto3
import sys

# when using amplify mock api, must use the values specified here:
dynamodb = boto3.resource('dynamodb', aws_access_key_id='fake', aws_secret_access_key='fake', endpoint_url='http://localhost:62224', region_name='us-fake-1')
#dynamodb = boto3.resource('dynamodb')

def truncateTable(tableName):
    table = dynamodb.Table(tableName)
    
    #get the table keys
    tableKeyNames = [key.get("AttributeName") for key in table.key_schema]

    #Only retrieve the keys for each item in the table (minimize data transfer)
    projectionExpression = ", ".join('#' + key for key in tableKeyNames)
    expressionAttrNames = {'#'+key: key for key in tableKeyNames}
    
    print(projectionExpression)
    print(expressionAttrNames)

    counter = 0
    page = table.scan(ProjectionExpression=projectionExpression, ExpressionAttributeNames=expressionAttrNames)
    with table.batch_writer() as batch:
        while page["Count"] > 0:
            counter += page["Count"]
            # Delete items in batches
            for itemKeys in page["Items"]:
                batch.delete_item(Key=itemKeys)
            # Fetch the next page
            if 'LastEvaluatedKey' in page:
                page = table.scan(
                    ProjectionExpression=projectionExpression, ExpressionAttributeNames=expressionAttrNames,
                    ExclusiveStartKey=page['LastEvaluatedKey'])
            else:
                break
    print(f"Deleted {counter}")

tableName = sys.argv[1]
truncateTable(tableName)