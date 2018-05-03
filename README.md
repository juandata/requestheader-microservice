# API Micro Service: Request Header Parser Microservice


**Description**: 
This is one of the 10 FreeCodeCamp challenges designed to get the FCC backend certification. You can check the specific requirements here: 
https://www.freecodecamp.org/challenges/request-header-parser-microservice

This microservice is a FullStack javaScript app that returns the parameters of the url as a date in Json.
The parameters must be either a valid unix timestamp date or a natural language date, example:

May%13%2015 (natural language date separated by percentages)
[Natural Date : https://cyber-clock.glitch.me/May%13%1](https://cyber-clock.glitch.me/May%13%15)

1450137600 (unix timestamp date):
[Unix Date : https://cyber-clock.glitch.me/1431475200](https://cyber-clock.glitch.me/1431475200)

**Error Handling**:
If you write an incorrect date in the url the app will return null for both unix and natural time:
https://cyber-clock.glitch.me/this_is_wrong_date

**User stories**:

1. I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)

2. If it does, it returns both the Unix timestamp and the natural language form of that date.

3. If it does not contain a date or Unix timestamp, it returns null for those properties.

**Developed by** *Juan David Tabares Arce*