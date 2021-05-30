//firebase를 전역변수로 참고
console.log(firebase)

//인증서비스 제공 업체
var provider = new firebase.auth.GoogleAuthProvider();
// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
// firebase.auth().languageCode = 'it';
// // To apply the default browser preference instead of explicitly setting it.
// // firebase.auth().useDeviceLanguage();
// provider.setCustomParameters({
//     'login_hint': 'user@example.com'
//   });  
  const auth = firebase.auth();

  const whenSignedIn = document.getElementById('whenSignedIn');
  const whenSignedOut = document.getElementById('whenSignedOut');

  const signInBtn = document.getElementById('signInBtn');
  const signOutBtn = document.getElementById('signOutBtn');

  const userDetails = document.getElementById('userDetails');

signInBtn.onclick = () => auth.signInWithPopup(provider);
signOutBtn.onclick = () => auth.signOut();

auth.onAuthStateChanged(user=>{

    if(user){//로그인
        whenSignedIn.hidden = false;
        whenSignedOut.hidden = true;
        userDetails.innerHTML = `<h3>안녕하세요 ${user.displayName}!</h3> <p>사용자 아이디: ${user.uid}</p>`;
    }
    else{
        whenSignedIn.hidden = true;
        whenSignedOut.hidden = false;
        userDetails.innerHTML = ``;   
    }

});