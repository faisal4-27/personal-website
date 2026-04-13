function renderSharedHeader() {
  var headerHost = document.getElementById("site-header");
  if (!headerHost) return;

  headerHost.innerHTML =
    '<header class="site-header">' +
    '  <nav class="nav-container" aria-label="Main navigation">' +
    '    <a class="nav-link" href="index.html">Home</a>' +
    '    <a class="nav-link" href="projects.html">Projects</a>' +
    '    <a class="nav-link" href="running.html">Running</a>' +
    '    <a class="nav-link" href="soccer.html">Soccer</a>' +
    '    <a class="nav-link" href="travel.html">Travel</a>' +
    '    <a class="nav-link" href="other.html">Other</a>' +
    "  </nav>" +
    "</header>";
}

function setActiveNavLink() {
  var currentPage = window.location.pathname.split("/").pop() || "index.html";
  var links = document.querySelectorAll(".nav-link");

  links.forEach(function (link) {
    var href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("nav-link-active");
    }
  });
}

function renderSharedFooter() {
  var footerHost = document.getElementById("site-footer");
  if (!footerHost) return;

  footerHost.innerHTML =
    '<footer class="site-footer">© <span id="year"></span> Faisal Abuosbeh</footer>';
}

function setFooterYear() {
  var yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

renderSharedHeader();
renderSharedFooter();
setActiveNavLink();
setFooterYear();
