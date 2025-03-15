function showMenu() {
    document.getElementById("nav-list").classList.toggle("active")

    if (!document.getElementById("nav-list").classList.contains("active")) {
        document.getElementById("nav-list").classList.add("fadeout")
        document.getElementById("nav-list").classList.remove("fadein")
    }
    else {
        document.getElementById("nav-list").classList.add("fadein")
        document.getElementById("nav-list").classList.remove("fadeout")
    }
}

const logo = document.querySelector(".logo")
const videos = document.getElementsByTagName("video")

logo.addEventListener("click", () => {
    Array.from(videos).forEach((video) => {
        video.classList.toggle("active")
    })
});


const projectVideo = document.getElementsByClassName("video-project")

Array.from(projectVideo).forEach((project) => {
    project.addEventListener("mouseenter", () => {
        project.play()
    })
})


Array.from(projectVideo).forEach((project) => {
    project.addEventListener("mouseleave", () => {
        project.pause()
    })
})