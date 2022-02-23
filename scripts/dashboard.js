
$(document).ready(function(){
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            $('.title-success').text('Login Success');
            var log = JSON.stringify(user, null, 4);
            var editor = new JsonEditor('.log', JSON.parse(log));
            console.log(user.photoURL);
        } 
        else 
        {
            window.location = 'index.html';
        }  
    });
    $('.sign-out-btn').on('click',function(){
        firebase.auth().signOut().then(() => {
            window.location = 'index.html';
        }).catch((error) => {
            Snackbar.show({
                text: 'Sorry, Unable to logout',
                pos: 'bottom-right',
                actionTextColor:'#ff4500'
            });
        });
    });
});