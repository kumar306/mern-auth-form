# mern-auth-form
MERN app for implementing simple login, registration, to do planner with authentication using JWT's

**Frontend**: Bootstrap, React, Redux <br />
**Backend**: NodeJS, Express <br />
**Database**: MongoDB Atlas <br />

1. Starting page


![image](https://user-images.githubusercontent.com/29352643/149523481-ad50781b-6c50-49bb-b690-d8a53e299d56.png)


2. Register page

Password is hashed using brcrypt and then, user details are stored in the database


![image](https://user-images.githubusercontent.com/29352643/149525053-15ff9d2a-4550-4dc8-9e0f-29b2f3f32aac.png)

![image](https://user-images.githubusercontent.com/29352643/149524943-4f36e58a-7678-47d1-95d0-ffbf8091b667.png)



3. Once account is created, log in 

JWT payload is created and stored in Local storage on successful sign in


![image](https://user-images.githubusercontent.com/29352643/149524010-cbfcde29-f8b8-4927-bc38-433653ca2b53.png)


4. Once logged in, routed to the dashboard of the user implemented as a PrivateRoute. (This page cannot be accessed unless the user is authenicated)


![image](https://user-images.githubusercontent.com/29352643/149525642-8b413bdb-1e3c-4871-9977-d863c9c9934e.png)

![image](https://user-images.githubusercontent.com/29352643/149525370-9075b692-75a6-4a06-8652-a1c0318e484a.png)


5. User can add tasks to be done


![image](https://user-images.githubusercontent.com/29352643/149525846-a8327e6f-d2b4-4834-8d5b-740737206682.png)


![image](https://user-images.githubusercontent.com/29352643/149525952-bbc8a9c3-564c-4b52-82a7-c86831829146.png)


6. Delete task

![image](https://user-images.githubusercontent.com/29352643/149526108-949781dd-5a85-4d60-b3be-71f77b935600.png)

