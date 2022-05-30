dbAdmin = db.getSiblingDB("admin");

db = new Mongo().getDB("helio");

db.createUser({user: 'backend', pwd: 'Int371039098103', roles: [ {role: 'readWrite', db:'helio'}] });

db.createCollection("account")
db.createCollection("subject")
db.createCollection("class")
db.createCollection("studentList")
db.createCollection("score")
db.createCollection("academic")
db.createCollection("school")
db.createCollection("lov")

db.lov.insert(
    [{
        "_id": ObjectId("6288f1e8ef0785020ed10e4d"),
        "lovId": 1,
        "lovType": "grade",
        "lovName": "1"
    },{
        "_id": ObjectId("6288f1e8ef0785020ed10e4e"),
        "lovId": 2,
        "lovType": "grade",
        "lovName": "2"
    },{
        "_id": ObjectId("6288f1e8ef0785020ed10e4f"),
        "lovId": 3,
        "lovType": "grade",
        "lovName": "3"
    },{
        "_id": ObjectId("6288f1e8ef0785020ed10e50"),
        "lovId": 4,
        "lovType": "grade",
        "lovName": "4"
    },{
        "_id": ObjectId("6288f1e8ef0785020ed10e51"),
        "lovId": 5,
        "lovType": "grade",
        "lovName": "5"
    },{
        "_id": ObjectId("6288f1e8ef0785020ed10e52"),
        "lovId": 6,
        "lovType": "grade",
        "lovName": "6"
    },{
        "_id": ObjectId("6288f1e8ef0785020ed10e53"),
        "lovId": 7,
        "lovType": "semester",
        "lovName": "1"
    },{
        "_id": ObjectId("6288f1e8ef0785020ed10e54"),
        "lovId": 8,
        "lovType": "semester",
        "lovName": "2"
    },{
        "_id": ObjectId("6288f1e8ef0785020ed10e55"),
        "lovId": 9,
        "lovType": "semester",
        "lovName": "summer"
    },{
        "_id": ObjectId("6288f1e8ef0785020ed10e56"),
        "lovId": 10,
        "lovType": "room",
        "lovName": "1"
    },{
        "_id": ObjectId("6288f1e8ef0785020ed10e57"),
        "lovId": 11,
        "lovType": "room",
        "lovName": "2"
    },{
        "_id": ObjectId("6288f1e8ef0785020ed10e58"),
        "lovId": 12,
        "lovType": "room",
        "lovName": "3"
    },{
        "_id": ObjectId("6288f1e8ef0785020ed10e59"),
        "lovId": 13,
        "lovType": "room",
        "lovName": "4"
    },{
        "_id": ObjectId("6288f1e8ef0785020ed10e5a"),
        "lovId": 14,
        "lovType": "room",
        "lovName": "5"
    },{
        "_id": ObjectId("6288f1e8ef0785020ed10e5b"),
        "lovId": 15,
        "lovType": "room",
        "lovName": "6"
    },{
        "_id": ObjectId("6288f1e8ef0785020ed10e5c"),
        "lovId": 16,
        "lovType": "room",
        "lovName": "7"
    },{
        "_id": ObjectId("6288f1e8ef0785020ed10e5d"),
        "lovId": 17,
        "lovType": "room",
        "lovName": "8"
    },{
        "_id": ObjectId("6288f1e8ef0785020ed10e5e"),
        "lovId": 18,
        "lovType": "room",
        "lovName": "9"
    },{
        "_id": ObjectId("6288f1e8ef0785020ed10e5f"),
        "lovId": 19,
        "lovType": "room",
        "lovName": "10"
    },{
        "_id": ObjectId("6288f1e8ef0785020ed10e60"),
        "lovId": 20,
        "lovType": "room",
        "lovName": "11"
    },{
        "_id": ObjectId("6288f1e8ef0785020ed10e61"),
        "lovId": 21,
        "lovType": "room",
        "lovName": "12"
    },{
        "_id": ObjectId("6288f1e8ef0785020ed10e62"),
        "lovId": 22,
        "lovType": "room",
        "lovName": "13"
    },{
        "_id": ObjectId("6288f1e8ef0785020ed10e63"),
        "lovId": 23,
        "lovType": "room",
        "lovName": "14"
    },{
        "_id": ObjectId("6288f1e8ef0785020ed10e64"),
        "lovId": 24,
        "lovType": "room",
        "lovName": "15"
    },{
        "_id": ObjectId("6288f1e8ef0785020ed10e65"),
        "lovId": 25,
        "lovType": "room",
        "lovName": "16"
    },{
        "_id": ObjectId("6288f1e8ef0785020ed10e66"),
        "lovId": 26,
        "lovType": "room",
        "lovName": "17"
    },{
        "_id": ObjectId("6288f1e8ef0785020ed10e67"),
        "lovId": 27,
        "lovType": "room",
        "lovName": "18"
    },{
        "_id": ObjectId("6288f1e8ef0785020ed10e68"),
        "lovId": 28,
        "lovType": "room",
        "lovName": "19"
    },{
        "_id": ObjectId("6288f1e8ef0785020ed10e69"),
        "lovId": 29,
        "lovType": "room",
        "lovName": "20"
    }]
)

db.school.insert(
    [{
        "_id": ObjectId("6288f14eef0785020ed10e44"),
        "schoolId": 1,
        "schoolName": "โรงเรียนวัดโสธรวรารามวรวิหาร"
    },{
        "_id": ObjectId("6288f14eef0785020ed10e45"),
        "schoolId": 2,
        "schoolName": "โรงเรียนเตรียมอุดมศึกษาพัฒนาการ นนทบุรี"
    },{
        "_id": ObjectId("6288f14eef0785020ed10e46"),
        "schoolId": 3,
        "schoolName": "โรงเรียนเบญจมราชรังสฤษฎิ์"
    }]
)

db.account.insert({
    "_id": ObjectId("628129ff40d44e57e4e24a29"),
    "email": "noreply.helioscoresystem@gmail.com",
    "password": "$2b$10$Nzem9cQ18TXQ.vEk.4eOGO9v7L6XMOvcKvwKMQrgrz3TZtcyJc1Fu",
    "firstName": "กนกพร",
    "lastName": "ประภาร",
    "schoolId": 1,
    "googleId": ""
})

db.subject.insert(
    [{
        "_id": ObjectId("62812b3e40d44e57e4e24a34"),
        "subjectCode": "ค1210",
        "subjectName": "คณิตศาสตร์พื้นฐาน",
        "owner": ObjectId("628129ff40d44e57e4e24a29"),
        "semester": "1",
        "grade": "4"
    },{
        "_id": ObjectId("62812b3e40d44e57e4e24a35"),
        "subjectCode": "ค1121",
        "subjectName": "คณิตศาสตร์พื้นฐาน",
        "owner": ObjectId("628129ff40d44e57e4e24a29"),
        "semester": "1",
        "grade": "5"
    },{
        "_id": ObjectId("628e3e20077885021df6a957"),
        "subjectCode": "ค1122",
        "subjectName": "คณิตศาสตร์พื้นฐาน",
        "owner": ObjectId("628129ff40d44e57e4e24a29"),
        "semester": "2",
        "grade": "4"
    }]
)

db.academic.insert({
    "_id": ObjectId("6288f267ef0785020ed10e74"),
    "academicYear": "2560",
    "subjects": [ObjectId("62812b3e40d44e57e4e24a34"), ObjectId("62812b3e40d44e57e4e24a35"), ObjectId("628e3e20077885021df6a957")]
})

db.studentList.insert(
    [{
        "_id": ObjectId("62812aa640d44e57e4e24a2d"),
        "groupName": "ม.4/1 ปีการศึกษา 2560",
        "owner": ObjectId("628129ff40d44e57e4e24a29"),
        "members": [
            {
              "no": "1",
              "studentId": "11110",
              "title": "นางสาว",
              "firstName": "ธัญลักษณ์",
              "lastName": "งามชัยพิสิฐ",
              "email": "thanyaluck.yict@mail.kmutt.ac.th"
            },
            {
              "no": "2",
              "studentId": "11111",
              "title": "นาย",
              "firstName": "เกริกวิทย์",
              "lastName": "อัศวภัชรกุล",
              "email": ""
            },
            {
              "no": "3",
              "studentId": "11112",
              "title": "นางสาว",
              "firstName": "เกวลิน",
              "lastName": "ทรัพยภักดิ์โภคิน",
              "email": ""
            },
            {
              "no": "4",
              "studentId": "11113",
              "title": "นางสาว",
              "firstName": "ขวัญจิรา",
              "lastName": "เปรมธาราโชติ",
              "email": ""
            },
            {
              "no": "5",
              "studentId": "11114",
              "title": "นาย",
              "firstName": "คุณภัทร",
              "lastName": "นิธิธรา",
              "email": ""
            },
            {
              "no": "6",
              "studentId": "11115",
              "title": "นาย",
              "firstName": "คุณานนท์",
              "lastName": "นิธิธรา",
              "email": ""
            },
            {
              "no": "7",
              "studentId": "11116",
              "title": "นาย",
              "firstName": "ชนิตพล",
              "lastName": "เมธานนท์",
              "email": ""
            },
            {
              "no": "8",
              "studentId": "11117",
              "title": "นางสาว",
              "firstName": "ญาณิดา",
              "lastName": "พัชรวรา",
              "email": ""
            },
            {
              "no": "9",
              "studentId": "11118",
              "title": "นาย",
              "firstName": "ฐิติวัฒน์",
              "lastName": "ปุญญอภิวัฒนา",
              "email": ""
            }
        ]
    },{
        "_id": ObjectId("628a653fecfeecf80292d286"),
        "groupName": "ม.5/1 ปีการศึกษา 2560",
        "owner": ObjectId("628129ff40d44e57e4e24a29"),
        "members": [
            {
              "no": "1",
              "studentId": "11210",
              "title": "นางสาว",
              "firstName": "สุนันทา",
              "lastName": "สิงห์กา",
              "email": ""
            },
            {
              "no": "2",
              "studentId": "11211",
              "title": "นาย",
              "firstName": "ศิวกร",
              "lastName": "ดวงไกรแสง",
              "email": ""
            },
            {
              "no": "3",
              "studentId": "11212",
              "title": "นางสาว",
              "firstName": "ศศิวิมล",
              "lastName": "ดวงไกรแสง",
              "email": ""
            },
            {
              "no": "4",
              "studentId": "11213",
              "title": "นางสาว",
              "firstName": "สริดา",
              "lastName": "ธาดาโอภาส",
              "email": ""
            },
            {
              "no": "5",
              "studentId": "11214",
              "title": "นาย",
              "firstName": "สุประกิตติ์",
              "lastName": "สุพิพัฒน์",
              "email": ""
            },
            {
              "no": "6",
              "studentId": "11215",
              "title": "นาย",
              "firstName": "ธนภัทร",
              "lastName": "แจ้งศรีสุข",
              "email": ""
            },
            {
              "no": "7",
              "studentId": "11216",
              "title": "นาย",
              "firstName": "นทีภัทร",
              "lastName": "ณัฐิไกรสิทธิ์",
              "email": ""
            },
            {
              "no": "8",
              "studentId": "11217",
              "title": "นางสาว",
              "firstName": "ศศิวิมล",
              "lastName": "แสงเรือง",
              "email": ""
            },
            {
              "no": "9",
              "studentId": "11218",
              "title": "นางสาว",
              "firstName": "ภัทรวรรณ",
              "lastName": "ช่างถม",
              "email": ""
            }
        ]
    },{
        "_id": ObjectId("628f2db6077885021df6a965"),
        "groupName": "ม.4/2 ปีการศึกษา 2560",
        "owner": ObjectId("628129ff40d44e57e4e24a29"),
        "members": [
            {
              "no": "1",
              "studentId": "11119",
              "title": "นาย",
              "firstName": "กรชวัล",
              "lastName": "ก้องวัฒนะกุล",
              "email": ""
            },{
              "no": "2",
              "studentId": "11120",
              "title": "นาย",
              "firstName": "เขมนันท์",
              "lastName": "อรรถคุณากรณ์",
              "email": ""
            },{
              "no": "3",
              "studentId": "11121",
              "title": "นาย",
              "firstName": "ชญานนท์",
              "lastName": "นันทพิวัฒน์",
              "email": ""
            },{
              "no": "4",
              "studentId": "11122",
              "title": "นาย",
              "firstName": "ชยพล",
              "lastName": "เกียรติบวรสกุล",
              "email": ""
            },{
              "no": "5",
              "studentId": "11123",
              "title": "นางสาว",
              "firstName": "เขมิกา",
              "lastName": "อัครวัชรโยธิน",
              "email": ""
            },{
              "no": "6",
              "studentId": "11124",
              "title": "นางสาว",
              "firstName": "จารวี",
              "lastName": "อัศวรักษ์โกศล",
              "email": ""
            },{
              "no": "7",
              "studentId": "11125",
              "title": "นางสาว",
              "firstName": "ธัญชนก",
              "lastName": "ภัททกิจโภคิน",
              "email": ""
            },{
              "no": "8",
              "studentId": "11126",
              "title": "นางสาว",
              "firstName": "เบญญาภา",
              "lastName": "พงษ์สกุล",
              "email": ""
            },{
              "no": "9",
              "studentId": "11127",
              "title": "นางสาว",
              "firstName": "อาคิรา",
              "lastName": "วัชรสกุล",
              "email": ""
            }
        ]
    }]
)

db.class.insert(
    [{
        "_id": ObjectId("62812b8e40d44e57e4e24a3b"),
        "subject": ObjectId("62812b3e40d44e57e4e24a34"),
        "room": "1",
        "studentList": [ObjectId("62812aa640d44e57e4e24a2d")]
    },{
        "_id": ObjectId("62812b8e40d44e57e4e24a3c"),
        "subject": ObjectId("62812b3e40d44e57e4e24a35"),
        "room": "1",
        "studentList": [ObjectId("628a653fecfeecf80292d286")]
    },{
        "_id": ObjectId("628e41e7077885021df6a95c"),
        "subject": ObjectId("628e3e20077885021df6a957"),
        "room": "1",
        "studentList": [ObjectId("62812aa640d44e57e4e24a2d")]
    },{
        "_id": ObjectId("628f31fd077885021df6a969"),
        "subject": ObjectId("62812b3e40d44e57e4e24a34"),
        "room": "2",
        "studentList": [ObjectId("628f2db6077885021df6a965")]
    },{
        "_id": ObjectId("628f32b3077885021df6a96e"),
        "subject": ObjectId("628e3e20077885021df6a957"),
        "room": "2",
        "studentList": [ObjectId("628f2db6077885021df6a965")]
    }]
)