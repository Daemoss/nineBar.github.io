// Change the text here
const TEXT = "ΤΣΕΚΑΡΕ ΤΟ ΜΕΝΟΥ ΜΑΣ •";
const RADIUS = parseInt(
  getComputedStyle(document.documentElement).getPropertyValue("--radius")
);
const FONT_SIZE = parseInt(
  getComputedStyle(document.documentElement).getPropertyValue("--font-size")
);

const ring = document.getElementById("ring");
function layout(text, radius, fontSize) {
  ring.innerHTML = "";
  const chars = [...text];
  const step = 360 / chars.length; // degrees per character
  chars.forEach((ch, i) => {
    const span = document.createElement("span");
    span.className = "char";
    span.textContent = ch;
    span.style.fontSize = fontSize + "px";
    const angle = -90 + i * step; // start at top
    span.style.transform = `rotate(${angle}deg) translate(${radius}px) rotate(90deg)`;
    ring.appendChild(span);
  });
}

layout(TEXT, RADIUS, FONT_SIZE);
