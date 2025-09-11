const navToggle = document.getElementById("toggleMenu");
const navDrawer = document.getElementById("nav-drawer");
const closeBtn = document.getElementById("closeMenu");
closeBtn.addEventListener("click", () => close(navDrawer, navToggle));

function open(el, controlBtn) {
  el.hidden = false;
  if (controlBtn) controlBtn.setAttribute("aria-expanded", "true");
}
function close(el, controlBtn) {
  el.hidden = true;
  if (controlBtn) controlBtn.setAttribute("aria-expanded", "false");
}
function isLink(el) {
  return el && el.tagName === "A";
}
// Mobile nav toggle
navToggle.addEventListener("click", () => {
  const expanded = navToggle.getAttribute("aria-expanded") === "true";
  expanded ? close(navDrawer, navToggle) : open(navDrawer, navToggle);
});

// Close nav drawer after choosing an option (event delegation)
navDrawer.addEventListener("click", (e) => {
  // If a link (including hash or mailto) is clicked, close the drawer
  const target = e.target.closest("a");
  if (target) {
    close(navDrawer, navToggle);
  }
});

// Close menus on Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    close(navDrawer, navToggle);
  }
});

// Click outside to close
document.addEventListener(
  "click",
  (e) => {
    const clickInsideDrawer =
      e.target.closest("#nav-drawer") !== null ||
      e.target.closest("#toggleMenu") !== null;

    if (!clickInsideDrawer) close(navDrawer, navToggle);
  },
  true
);
