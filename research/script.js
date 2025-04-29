const papers = [
  {
    title:
      "Treatment of Hallucinogen-Persisting Perception Disorder: A case report",
    authors:
      "Sylvain Creton ∙ Gaëlla Boulanger ∙ Thomas Pereon ∙ Jean-Marie Batail ∙ Dominique Drapier",
    year: "2024",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ibdrelief.com%2Fuploads%2Ffiles%2Fadobestock_138698385_gallery_image_814_163.jpeg&f=1&nofb=1&ipt=49dad102bc9a2a079fdeac1064ba25eb7d2c1bc94ecf22bbd80aa9dc5375b4d9",
    url: "/research/Treatment of Hallucinogen-Persisting Perception Disorder",
  },
];

const papersGrid = document.getElementById("papersGrid");
const searchInput = document.getElementById("searchInput");

function displayPapers(filteredPapers) {
  papersGrid.innerHTML = "";
  filteredPapers.forEach((paper) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <a
        class="no-a"
        href="${paper.url}"
      >
        <img src="${paper.image}" alt="${paper.title}">
        <div class="card-content">
          <div class="card-title">${paper.title}</div>
          <div class="card-authors">${paper.authors}</div>
          <div class="card-year">${paper.year}</div>
        </div>
      </a>
    `;
    papersGrid.appendChild(card);
  });
}

searchInput.addEventListener("input", (e) => {
  const keyword = e.target.value.toLowerCase();
  const filtered = papers.filter(
    (paper) =>
      paper.title.toLowerCase().includes(keyword) ||
      paper.authors.toLowerCase().includes(keyword) ||
      paper.year.includes(keyword)
  );
  displayPapers(filtered);
});

// Initial render
displayPapers(papers);
