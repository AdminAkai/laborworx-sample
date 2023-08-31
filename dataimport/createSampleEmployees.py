from faker import Faker
from random import randint
import datetime
import zoneinfo
import sqlite3
import uuid
import json
import os

"""
Python 3.10+ Is required to execute this script
PLEASE READ ANY COMMENT STARTING WITH "NOTE" AND UPDATE THE FILE ACCORDINGLY

It is highly recommended to take a copy of your mock database beforehand, as you may lose your current employees

Install the following packages with "pip install {package name}":
- tzdata
- faker
"""

fake = Faker()
ROOT_DIR: str = os.path.dirname(os.path.abspath(__file__))
CREATED_AT_FORMAT = "%Y-%m-%dT%H:%M:%S.%fZ"  # 2022-08-19T18:14:29.310Z
UTC_TZ = zoneinfo.ZoneInfo("UTC")

# NOTE: If your path is different or you have a different database name, update the value below
path_to_db: str = os.path.join(os.path.dirname(ROOT_DIR), "amplify", "mock-data", "dynamodb", "fake_us-fake-1.db")

dt_now = datetime.datetime.utcnow().replace(tzinfo=datetime.timezone.utc)

# NOTE: Add your own industries and trades here
industries: list = ["test industry", "test industry 1"]
industries_w_trades: dict = {
    "test industry": ["test trade"],
    "test industry 1": ["test trade 2"]
}

experiences: list = ["1-3 years", "3-5 years"]

states: list = ["GA", "FL", "NY", "PA", "CA", "TX"]

lst_numbers: list = []
# NOTE: To change the amount of numbers to add, replace 3000 with the number
final_four_nums: int = 1111
for i in range(1, 3000):
    initial_num = "111-111"
    output_num: str = initial_num + str(final_four_nums)
    final_four_nums += 1

    # print(output_num)
    lst_numbers.append(output_num)

def main():
    if not os.path.exists(path_to_db):
        raise Exception(f"Failed to locate database at path: {path_to_db}")

    db = sqlite3.connect(path_to_db)
    cursor = db.cursor()
    for phone_number in lst_numbers:
        try:
            current_uuid = uuid.uuid4()
            current_industry: str = industries[randint(0, len(industries) - 1)]
            dt_formatted = dt_now.strftime(CREATED_AT_FORMAT)

            data_object: str = json.dumps({
                "lastName": {"S": fake.last_name()},
                "city": {"S": fake.city()},
                "desiredWageMin": {"N": f"{randint(20, 40)}"},
                "__typename": {"S": "Employee"},
                "industry": {"S": current_industry},
                "zipcode": {"S": fake.postcode()},
                "createdAt": {"S": dt_formatted},
                "firstName": {"S": fake.first_name()},
                "emailAddress": {"S": fake.email()},
                "phoneNumber": {"S": phone_number},
                "trade": {"S": industries_w_trades[current_industry][randint(0, len(industries_w_trades[current_industry]) - 1)]},
                "desiredWageMax": {"N": f"{randint(41, 75)}"},
                "id": {"S": str(current_uuid)},
                "state": {"S": states[randint(0, len(states) - 1)]},
                "yearsInTrade": {"S": experiences[randint(0, len(experiences) - 1)]},
                "updatedAt": {"S": dt_formatted}
            })
            item_size: int = len(data_object)
            tuple_to_insert: tuple = (str(current_uuid), str(current_uuid), item_size, data_object, phone_number)
            cursor.execute(
                "INSERT INTO EmployeeTable (hashKey, hashValue, itemSize, ObjectJSON, indexKey_0) VALUES (?, ?, ?, ?, ?)", tuple_to_insert
            )
            db.commit()
        except Exception as e:
            print(f"Failed to insert phone number ({phone_number}), error: {e}")


if __name__ == '__main__':
    main()
