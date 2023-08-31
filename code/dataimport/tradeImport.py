import boto3
import csv
import uuid
import sys
import datetime
from datetime import timezone

if (len(sys.argv) != 3):
    exit("Must provide table name and csv file path.")

dt = datetime.datetime.now(timezone.utc)  
utc_time = dt.replace(tzinfo=timezone.utc)
utc_timestamp = utc_time.timestamp()  
# print(utc_timestamp)
now = dt.isoformat()
print(now)
# print(dt.strftime('%Y-%m-%dT%H:%M:%S.%f%z'))



# when using amplify mock api, must use the values specified here:
dynamodb = boto3.resource('dynamodb', aws_access_key_id='fake', aws_secret_access_key='fake', endpoint_url='http://localhost:62224', region_name='us-fake-1')
#dynamodb = boto3.resource('dynamodb')
tableName = sys.argv[1]

def import_data():
    print("Importing data")

    batch_size = 100
    batch = []

    # DictReader is a generator; not stored in memory
    fname = sys.argv[2]
    with open(fname, newline='', encoding='utf-8-sig') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            if len(batch) >= batch_size:
                write_to_dynamo(batch)
                batch.clear()

            batch.append(row)

        if batch:
            write_to_dynamo(batch)


def write_to_dynamo(rows):
    try:
        table = dynamodb.Table(tableName)
    except:
        print("Error loading DynamoDB table. Check if table was created correctly and environment variable.")

    # print(rows)

    try:
        with table.batch_writer() as batch:
            for i in range(len(rows)):                
                batch.put_item(
                    Item={
                        'id': str(uuid.uuid4()),
                        'createdAt': now,
                        'updatedAt': now,
                        'name': rows[i]['name'],
                        'industry': rows[i]['industry']                       
                    }
                )
            print(f'Imported {i+1} items successfully')
    except Exception as e:
        print(e)


if __name__ == '__main__':
    import_data()
