
const contents = document.querySelectorAll(".content");
const navItems = document.querySelectorAll("nav ul li");
const ico = document.querySelector(".ico");

const hideAllContents = () => {
  contents.forEach((content) => {
    content.classList.remove("show");
    if (content.tagName === "VIDEO") {
      content.pause();
      content.currentTime = 0;
    }
  });
};

const hideAllItems = () => {
  navItems.forEach((item) => item.classList.remove("active"));
};

navItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    hideAllContents();
    hideAllItems();
    item.classList.add("active");

    if (index < contents.length) {
      contents[index].classList.add("show");
      contents[index].play();
      ico.classList.remove("show");
    } else if (index === 3) {
      // Соцсети
      ico.classList.toggle("show");
    }
  });
});

// При смене вкладки — ставим видео на паузу
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    document.querySelectorAll("video").forEach((video) => {
      video.pause();
    });
  }
});
