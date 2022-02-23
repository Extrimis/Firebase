# Firebase Authentication

Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

## Authentication Types

1. Email and Password based Authentication
2. Federated identity provider integration
   * Google
   * Apple
   * Facebook
   * Twitter
   * GitHub
3. Phone Number Authentication
4. Custom Auth System Integration
5. Anonymous Authentication

## Google Authentication

![image](https://user-images.githubusercontent.com/72641365/155247149-3551e88c-6918-479c-956b-882548557659.png)

## Creating a new user account

To create a new user account with a password, The new users email address and password is passed to **createUserWithEmailAndPassword()** function as parameters.
```js
firebase.auth().createUserWithEmailAndPassword(email, password)
.then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
})
.catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
});
```

## Sign in to an existing account

To Sign in to an existing user account with a password, The users email address and password is passed to **signInWithEmailAndPassword()** function as parameters 

```js
firebase.auth().signInWithEmailAndPassword(email, password)
.then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
})
.catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
});
```

## User Session Management

We can get the currently signed-in user by using the **currentUser** property or By using **onAuthStateChanged()** observer. If a user isn't signed in, currentUser is null. 

```js
const user = firebase.auth().currentUser;
if (user) {
    // User is signed in.
} else {
    // No user is signed in.
}
```

```js
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // User is signed in.
    } else {
        // User is signed out
    }
});
```

## Sign out

To Sign out a user we should call **signOut()** method. If an **onAuthStateChanged()** observer is defined, The observer gets triggered and the user object is set to null.

```js
firebase.auth().signOut().then(() => {
    // Sign-out successful.
}).catch((error) => {
    // An error happened.
});
```




