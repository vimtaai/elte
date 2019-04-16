const name = "gallery";

const displayModes = {
  default: {}
};

function init() {
  const imagesElem = document.querySelector("#gallery-images");
  imagesElem.innerHTML = "";

  const storage = firebase.storage().ref();
  const database = firebase.firestore().collection("images");

  // Valós idejű adatot kérek az adatbázisból
  database.onSnapshot(function(snapshot) {
    // Képek tömbje: snapshot.docs
    // console.log(snapshot.docs);

    const images = snapshot.docs;

    for (const image of images) {
      const imageRef = storage.child(image.data().storagePath);
      imageRef.getDownloadURL().then(function(url) {
        // console.log(genImage(url));
        imagesElem.innerHTML += genImage(url);
      });
    }
  });
}

const html = `
<section data-page="gallery">
  <h1>Gallery</h1>

  <div id="gallery-images">
  </div>
</section>
`;

function genImage(url) {
  return `<img src="${url}">`;
}

export const GALLERY = { name, displayModes, init, html };
