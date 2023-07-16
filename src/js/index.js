console.log("\n Starting Index.js...\n\n");
class BlogMaker {
  constructor(blog) {
    this.mainContainer = document.createElement("div");
    // this.mainContainer.setAttribute("onclick","alert("as")")
    this.full = "blog";
    this.mainContainer.innerHTML = `<h4 class="title-header"><span class="" id=""> </span><a href="#">${blog.title.substring(0, 14)}</a><span class=""></span></h4><div class=""><p>${blog.context.substring(0, 20)}...</p></div>`;
    this.mainContainer.className = "item_inside_container";
    // this.mainContainer.setAttribute("onclick", `BlogClicked('${JSON.stringify(blog)}');window.scrollTo(0, 500);copyBackgroundImageTo(this.style.backgroundImage)`);
    this.mainContainer.setAttribute("onclick", `BlogClicked('${JSON.stringify(blog)}');window.scrollTo(0, 500);copyBackgroundImageTo('${blog.ImageUrl}')`);
    this.mainContainer.style.backgroundImage = `url(${blog.ImageUrl})`;
    // this.mainContainer.style.backgroundImage = `/src/images/example.png`;

    this.mainContainer = this.mainContainer;
  }
}
csrftoken = `{{csrf_token}}`;
// CHANGE THIS ONE
bloggerID = 13;
local_site = "https://www.treep.today";
// local_site = "http://127.0.0.1:8000";

console.log("fetch Pic");
fetch(`${local_site}/apis/getBlogger/${bloggerID}`, {
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

// Check if already in local storage

// if (localStorage.AllMapPositionUpdate == new Date().getDate() && localStorage.AllMapPosition) {
// if (1 == 1) {
console.log("\nFetching\n");
fetch(`${local_site}/apis/blogsItem/${bloggerID}`, {
  headers: { "X-CSRFToken": csrftoken, Accept: "application/json", "Content-Type": "application/json" },
  method: "GET",
})
  .then((response) => response.json())
  .then((blog) => {
    flex_container = document.querySelector(".flexbox-container");
    var AllMapPosition = [];
    for (i in blog) {
      x = new BlogMaker(blog[i]);
      flex_container.append(x.mainContainer);
      // Pushing Position
      newPosition = { lat: parseFloat(blog[i]["latitude"]), lng: parseFloat(blog[i]["longitude"]) };
      AllMapPosition.push(newPosition);
    }
    // localStorage.setItem("AllMapPosition", JSON.stringify(AllMapPosition));

    localStorage.AllBlogItem = JSON.stringify(blog);
    localStorage.AllMapPosition = JSON.stringify(AllMapPosition);
    localStorage.AllMapPositionUpdate = new Date().getDate();
    // AllMapPosition = JSON.parse(localStorage.AllMapPosition);
  });
// } else {
//   var flex_container = document.querySelector(".flexbox-container");
//   allblogsitems = JSON.parse(localStorage.AllBlogItem);
//   for (i in allblogsitems) {
//     x = new BlogMaker(allblogsitems[i]);
//     flex_container.append(x.mainContainer);
//   }
// }

// CONSTRUCTOR
// timestamp
// customTime
// ImageUrl
// url
// title
// context
// latitude
// longitude
function BlogClicked(blog) {
  currentBlog = JSON.parse(blog);
  currentContainer = document.querySelector(".current");
  if (currentContainer.style.display != "none") {
    currentContainer.style.display = "block";
  }
  documentTitle = document.querySelector("#current-title");
  documentTitle.innerHTML = currentBlog.title;
  document.querySelector("#current-customTime").innerHTML = currentBlog.customTime;
  document.querySelector("#current-context").innerHTML = currentBlog.context;
  // document.querySelector("current-ImageUrl").src = "Get the Same Image from Blog";
  documentTitle.scrollIntoView({ behavior: "smooth" });
}

function copyBackgroundImageTo(backgroundImageData) {
  bannerImg = document.getElementById("current-ImageUrl");

  bannerImg.style.backgroundImage = `url(${backgroundImageData})`;
}
function viewFullScreen(blog) {
  alert(blog);
}

console.log("\n Script End... \n");
