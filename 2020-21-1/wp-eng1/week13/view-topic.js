const postsDiv = document.querySelector("#posts");

function renderPost(post) {
  return `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${post.userFullname}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${post.date}</h6>
        <p class="card-text">${post.text}</p>
      </div>
    </div>
  `;
}

function renderPosts(posts) {
  // Convert object to array
  const postsAsArray = Object.keys(posts)
    .map((key) => posts[key])
    .reverse();
  // const postsAsArray = Object.values(posts).reverse();
  return postsAsArray.map(renderPost).join("\n");
}

async function getPosts() {
  // Get the ID of the topic from the URL (navigation bar)
  const urlSearchParams = new URLSearchParams(location.search);
  const topicId = urlSearchParams.get("id");

  // Request the list of posts from the server with the given topic ID
  const response = await fetch(`api/get-posts.php?topicId=${topicId}`);
  const posts = await response.json();

  // Generate the HTML code for the posts
  postsDiv.innerHTML = renderPosts(posts);
}

window.addEventListener("load", getPosts);

// Sending a new post
const textarea = document.querySelector("#post");
const button = document.querySelector("#send-post");

async function handleButtonClick() {
  // Get the ID of the topic from the URL (navigation bar)
  const urlSearchParams = new URLSearchParams(location.search);
  const topicId = urlSearchParams.get("id");
  const postText = textarea.value;

  // Generate $_POST data with JavaScript
  const formData = new FormData();
  formData.append("text", postText);
  formData.append("topicId", topicId);

  // Sending the form information to the server
  const response = await fetch("api/create-post.php", {
    method: "POST",
    body: formData,
  });

  // Handle errors on the client
  if (response.ok) {
    getPosts();
    textarea.value = "";
  } else {
    alert("Could not send your post");
  }
}
button.addEventListener("click", handleButtonClick);
