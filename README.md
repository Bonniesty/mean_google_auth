# HW5 mean_google_auth

For backend, go into ```hw5backend``` folder and run the following code in your terminal.
```javascript 
npm install
npm start
```

For angular front end, go into ```homework4``` folder and run the following code in a new terminal.
```javascript 
ng serve
```

In this homework, I REDO homework 4 by re-layout the web and add a change button to see different dog picture. Click dog link on the index file, then it will jump to 
the following page. 

When clicking on "Click to get a new dog" button, the page will generate a NEW dog picture by call API route from node backend.

![image](https://github.com/Bonniesty/mean_google_auth/blob/master/index.png)

When clicking on logging with google button, the page will jump to google OAuth login page, by hitting a route on the back end. The login picture is following.

![image](https://github.com/Bonniesty/mean_google_auth/blob/master/google_login.png)

After logging in, the google user id and user name are stored in mongodb database.

![image](https://github.com/Bonniesty/mean_google_auth/blob/master/mongodb.png)

By using serialize and deserialize function, if logging in success, the google user id and user name will show on the redirect page.

![image](https://github.com/Bonniesty/mean_google_auth/blob/master/login_success.png)


NOTE: you need enter your own google crudential clientID and clientSecret in ```hw5backend/key.js``` to use google+ API!!!
