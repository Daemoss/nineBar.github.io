document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("toggleMenu");
  const navDrawer = document.getElementById("nav-drawer");
  const closeBtn = document.getElementById("closeMenu");

  // allow transitions by making it present in layout, but closed
  if (navDrawer.hasAttribute("hidden")) {
    navDrawer.removeAttribute("hidden");
    navDrawer.classList.remove("is-open");
    navDrawer.setAttribute("aria-hidden", "true");
    navDrawer.setAttribute("inert", "");
  }

  const openDrawer = () => {
    navDrawer.classList.add("is-open");
    navDrawer.removeAttribute("inert");
    navDrawer.setAttribute("aria-hidden", "false");
    if (navToggle) navToggle.setAttribute("aria-expanded", "true");
  };

  const closeDrawer = () => {
    navDrawer.classList.remove("is-open");
    navDrawer.setAttribute("inert", "");
    navDrawer.setAttribute("aria-hidden", "true");
    if (navToggle) navToggle.setAttribute("aria-expanded", "false");
  };

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      expanded ? closeDrawer() : openDrawer();
    });
  }

  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);

  navDrawer.addEventListener("click", (e) => {
    if (e.target.closest("a")) closeDrawer();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDrawer();
  });

  document.addEventListener(
    "click",
    (e) => {
      const inside =
        e.target.closest("#nav-drawer") || e.target.closest("#toggleMenu");
      if (!inside) closeDrawer();
    },
    true
  );
});
