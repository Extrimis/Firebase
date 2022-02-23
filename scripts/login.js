$(document).ready(function(){
    $('.forgot-password-btn').on('click',function(){
        
        var email = $('.email').val();

        if(email && validateEmail(email))
        {
            forgotPassword(email);
        }
        else
        {
            Snackbar.show({
                text: 'Please enter a valid email address.',
                pos: 'bottom-right',
                actionTextColor:'#ff4500'
            });
        }
    });

    $('.sign-in-btn').on('click',function(){
        
        var email = $('.email').val();
        var password = $('.password').val();

        if(email && validateEmail(email))
        {
            if(password)
            {
                signIn(email,password);
            }
            else
            {
                Snackbar.show({
                    text: 'Please enter your password.',
                    pos: 'bottom-right',
                    actionTextColor:'#ff4500'
                });
            }
        }
        else
        {
            Snackbar.show({
                text: 'Please enter a valid email address.',
                pos: 'bottom-right',
                actionTextColor:'#ff4500'
            });
        }
    });

    $('.sign-in-google-btn').on('click',function(){
        googleSignIn();
    });
});

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};

function forgotPassword(email)
{
    firebase.auth().sendPasswordResetEmail(email).then(() => {
        Snackbar.show({
            text: 'Password Reset Email Sent',
            pos: 'bottom-right',
            actionTextColor:'#ff4500'
        });
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        if(errorCode == 'auth/user-not-found')
        {
            errorMessage = "User does not exist";
        }
    });
}

function signIn(email,password)
{
    firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential) => {
        var user = userCredential.user;
        if(user!=null)
        {
            window.location = 'dashboard.html';
        }
    }).catch((error) => {

        var errorCode = error.code;
        var errorMessage = error.message;

        if(errorCode == 'auth/user-not-found')
        {
            errorMessage = "User does not exist";
        }

        Snackbar.show({
            text: errorMessage,
            pos: 'bottom-right',
            actionTextColor:'#ff4500'
        });
  });
}

function googleSignIn()
{
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;

        if(user!=null)
        {
            window.location = 'dashboard.html';
        }

      }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        Snackbar.show({
            text: errorMessage,
            pos: 'bottom-right',
            actionTextColor:'#ff4500'
        });

    });
}