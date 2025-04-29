const papers = [
  {
    title:
      "Treatment of Hallucinogen-Persisting Perception Disorder: A Case Report",
    description:
      "This study explores the impact of non-invasive brain stimulation techniques, such as transcranial magnetic stimulation (TMS), on cognitive performance and mental health disorders. ",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2F2%2F8%2F5%2F7336.jpg&f=1&nofb=1&ipt=71805876bd332668318f5656d19981803a8106ad8ef5228ddb5554b63f8b3b47",
    link: "/research/Treatment of Hallucinogen-Persisting Perception Disorder",
  },
];

const slider = document.getElementById("slider");

function renderSlides() {
  papers.forEach((paper) => {
    const slide = document.createElement("div");
    slide.className = "slide";
    slide.innerHTML = `
    <a href="${paper.link}" target="_blank" style="text-decoration: none; color: inherit;">
    <img src="${paper.image}" alt="${paper.title}">
    <div class="slide-body">
        <div class="slide-title">${paper.title}</div>
        <div class="slide-text">${paper.description}</div>
    </div>
    </a>
`;
    slider.appendChild(slide);
  });
}

let currentSlide = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll(".slide");
  if (!slides.length) return;

  const slideWidth = slides[0].clientWidth + 20; // include gap
  currentSlide += direction;
  const maxSlide = papers.length - 1;

  if (currentSlide < 0) currentSlide = 0;
  if (currentSlide > maxSlide) currentSlide = maxSlide;

  slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function closeAnnouncement() {
  const bar = document.getElementById("announcement-bar");
  if (bar) {
    bar.style.display = "none";
    localStorage.setItem("announcementClosed", "true");
  }
}

// Show announcement unless it was closed before
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("announcementClosed") === "true") {
    document.getElementById("announcement-bar").style.display = "none";
  }
});

function toggleMenu() {
  const nav = document.getElementById("nav-menu");
  nav.classList.toggle("active");
}

renderSlides();
