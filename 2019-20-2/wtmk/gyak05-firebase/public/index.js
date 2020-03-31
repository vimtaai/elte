import { firestore, firebaseUI } from "./firebase.js";

firebaseUI.start("#firebaseui-auth-container", {
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ]
});

const postsRef = firestore.collection("posts");
// const docRef = postsRef.doc("eIFGTr66hAd0V5qnk5LY");

// async function handleLoad() {
//   const snapshot = await postsRef.get();
//   snapshot.forEach(element => {
//     console.log(element.data());
//   });
// }

const root = document.querySelector("#root");

// ~ addEventListener("postRefContentChanges")
postsRef.onSnapshot(function (snapshot) {
  let html = "";

  snapshot.forEach(element => {
    const data = element.data();
    const date = data.date && data.date.toDate();

    html += `
      <div class="collection">
        <div class="collection-item">
          <strong class="title brown-text text-darken-2">${data.title}</strong><br>
          <small>Posted: ${date && date.toLocaleString()}</small>
          <p>${data.text}</p>
        </div>
      </div>
    `;
  });
  
  root.innerHTML = html;
});

const button = document.querySelector("button");
const title = document.querySelector("#title");
const text = document.querySelector("#text");

button.addEventListener("click", async function () {
  const postTitle = title.value;
  const postText = text.value;

  // Beszúrás az adatbázisba
  postsRef.add({
    title: postTitle,
    text: postText,
    date: firebase.firestore.Timestamp.now()
  });

  // console.log(result);
});

//window.addEventListener("load", handleLoad);

window.firestore = firestore;