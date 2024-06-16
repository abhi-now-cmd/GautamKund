const filterPhotoContainer = document.getElementsByClassName("filter-photo-container")[0];
let cmsevatotalcount=63;let cmsevacount=7;
let developmenttotalcount=50; let developmentcount=7;
let misctotalcount=29; let misccount=7;
function loadimage(name) {

if (name=="cmseva") {
    if (cmsevacount<=cmsevatotalcount) {
    const newDiv = document.createElement("div");
    const newImg = document.createElement("img");
    newImg.setAttribute("src",`images/photo gallery/cmseva/cmseva (${cmsevacount++}).jpg`);
    newImg.classList.add("newimg");
    newDiv.classList.add("card");
    newDiv.appendChild(newImg);
    filterPhotoContainer.appendChild(newDiv);
    }
}
if (name=="development") {
    
    if (developmentcount<=developmenttotalcount) {
    const newDiv = document.createElement("div");
    const newImg = document.createElement("img");

    newImg.setAttribute("src",`images/photo gallery/development/development (${developmentcount++}).jpg`);
    newImg.classList.add("newimg");
    newDiv.classList.add("card");
    newDiv.appendChild(newImg);
    filterPhotoContainer.appendChild(newDiv);
    }
}
    if (name=="misc") {
        
        if (misccount<=misctotalcount) {
        const newDiv = document.createElement("div");
        const newImg = document.createElement("img");
        newImg.setAttribute("src",`images/photo gallery/misc/misc (${misccount++}).jpg`);
        newImg.classList.add("newimg");
        newDiv.classList.add("card");
        newDiv.appendChild(newImg);
        filterPhotoContainer.appendChild(newDiv);
        }
}
}

const images = document.querySelectorAll(".filter-photo-container img");
const filterOptions =document.getElementsByClassName("filter-options")[0];
images.forEach((elem)=>{
if (!elem.getAttribute("src").toString().includes("cmseva")){
elem.parentNode.classList.add("hidden");
}
})


const fullphoto = document.getElementById("fullphoto");

fullphoto.addEventListener("click",(e)=>{
    if (e.target==e.currentTarget || e.target.classList.contains("img-full-container")) {
        fullphoto.style.display="none";
    }
})
filterPhotoContainer.addEventListener("click",(e)=>{
    if (e.target.hasAttribute("src")) {
    fullphoto.style.display = "flex" ;
    const fullphotoimg = document.getElementById("fullphotoimg").setAttribute('src',e.target.getAttribute("src"));
    }
})
document.addEventListener("keydown",(e)=>{
    if (e.key=="Escape") {
        if(fullphoto.style.display=="flex") {
            fullphoto.style.display="none";
        };
    }
})
filterOptions.addEventListener("click",(e)=>{
    if (e.target.classList.contains("filter-option")) {
        document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    images.forEach((elem)=>{
        if (!elem.getAttribute("src").toString().includes(e.target.dataset.fo)){
        elem.parentNode.classList.add("hidden");
        }
        else {
            elem.parentNode.classList.remove("hidden");
        }
        })
    Array.from(document.getElementsByClassName("newimg")).forEach((elem)=>{
        if (!elem.getAttribute("src").toString().includes(e.target.dataset.fo)){
            elem.parentNode.classList.add("hidden");
            }
            else {
                elem.parentNode.classList.remove("hidden");
            }
    })
    }
})
window.addEventListener("scroll",(e)=>{
    if (window.scrollY+window.innerHeight>=document.documentElement.scrollHeight-(document.getElementById("footer").getBoundingClientRect().height+600)){
        loadimage(document.getElementsByClassName("active")[0].dataset.fo);
    }
})