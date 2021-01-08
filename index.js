let count = 0

function TestsFunction() {
    const T = document.querySelector(".dogs");
    T.style.display = "block";  // <-- Set it to block
}

function KaviarFunction() {
    const K = document.querySelector(".kaviar");
    K.style.display = "block";  // <-- Set it to block
}

function GalleryFunction() {
    const T = document.querySelector(".gallery-div");
    T.style.display = "block";  // <-- Set it to block
    renderImgDiv(0)
    count++
}


const imageList = 
["https://assets.slice.ca/wp-content/uploads/2020/01/cutest-dog-names-2020.jpg",
"kalles.jpeg"]

const pictureNameList = ["Dogs", "Kaviar"]

function renderImgDiv(index) {
    document.querySelector(".gallery-div").innerHTML =
        `<div class="animal">
        <div class="animal-child">
            <h2>${pictureNameList[index]}</h2>
            <img class="dog-picture" src="${imageList[index]}" alt="">
            <button class="next"onclick="renderImgDiv(count)">next</button>
        </div>
    </div>`
}viarFunction()