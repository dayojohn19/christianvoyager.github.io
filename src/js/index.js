console.log("\n Starting Index.js...\n\n");
csrftoken = `{{csrf_token}}`;
bloggerID = 23;
fetch(`http://127.0.0.1:8000/apis/getBlogger/${bloggerID}`, {
  headers: { "X-CSRFToken": csrftoken, Accept: "application/json", "Content-Type": "application/json" },
  method: "GET",
})
  .then((response) => response.json())
  .then((blog) => {
    document.querySelector("#profile_about").innerHTML = blog.aboutme;
    // document.querySelector("#profile_image").innerHTML = blog.profile;
    // document.querySelector("#profile_image").style.backgroundImage = blog.profile;
    document.querySelector("#profile_image").style.backgroundImage = `url(${blog.profile})`;
    // document.querySelector("#profile_image")._setProperty("background-image", blog.profile);
    document.querySelector("#profile_title").innerHTML = blog.shortsay;
  });

fetch(`http://127.0.0.1:8000/apis/blogsItem/${bloggerID}`, {
  headers: { "X-CSRFToken": csrftoken, Accept: "application/json", "Content-Type": "application/json" },
  method: "GET",
})
  .then((response) => response.json())
  .then((blog) => {
    flex_container = document.querySelector(".flexbox-container");
    for (i in blog) {
      x = new BlogMaker(blog[i]);
      flex_container.append(x.mainContainer);
    }
  });
// CONSTRUCTOR
// timestamp
// customTime
// ImageUrl
// url
// title
// context
// latitude
// longitude
function viewFullScreen(blog) {
  alert(blog);
}
class BlogMaker {
  constructor(blog) {
    this.mainContainer = document.createElement("div");
    // this.mainContainer.setAttribute("onclick","alert("as")")
    this.full = blog;
    this.mainContainer.innerHTML = `<h4 class="title-header"><span class="" id=""> </span><a href="#">${blog.title.substring(0, 14)}</a><span class=""></span></h4><div class=""><p>${blog.context.substring(0, 20)}...</p></div>`;
    this.mainContainer.className = "item_inside_container";
    this.mainContainer.setAttribute("onclick", `viewFullScreen('Thank you')`);
    this.mainContainer.style.backgroundImage = `url(${blog.ImageUrl})`;
    console.log("ImageURL: ", blog.ImageUrl);
    this.mainContainer = this.mainContainer;
  }
}
console.log("\n Script End... \n");
