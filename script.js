const drawerFrontBiennial = document.querySelector('#biennial');

if (drawerFrontBiennial) {
  drawerFrontBiennial.addEventListener('click', () => {
    const drawerInside = drawerFrontBiennial.previousElementSibling;
    if (drawerInside && drawerInside.classList.contains('drawer-inside')) {
      drawerInside.classList.toggle('open');
    }
  });
}

const drawerFrontGradShow = document.querySelector('#grad-show');

if (drawerFrontGradShow) {
  drawerFrontGradShow.addEventListener('click', () => {
    const drawerInside = drawerFrontGradShow.previousElementSibling;
    if (drawerInside && drawerInside.classList.contains('drawer-inside')) {
      drawerInside.classList.toggle('open2');
    }
  });
}

////// this section is for student table png pop-ups////////////

function togglePopup(evt, id) {
  const existing = document.getElementById(`popup-${id}`);
  if (existing) {
    existing.remove();
    return;
  }

  const rectEl = evt.target;
  const rectBounds = rectEl.getBoundingClientRect();

  const img = document.createElement('img');
  img.src = `studio-mate-image/${id}-image.png`;
  img.id = `popup-${id}`;
  img.style.position = 'absolute';
  img.style.width = '55px';
  img.style.left = `${rectBounds.left + rectBounds.width / 2 - 35}px`; // center horizontally (35/2=17.5)
  img.style.top = `${rectBounds.top - 70 + window.scrollY}px`; // 40px above the rect, adjust as needed
  img.style.pointerEvents = 'none'; // let mouse events pass through

  document.body.appendChild(img);
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.student-table').forEach(el => {
    const id = el.id;
    const rect = el.querySelector('rect');
    if (rect) {
      rect.setAttribute('onclick', `togglePopup(event, '${id}')`);
    }
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const thesisBlocks = document.querySelectorAll(".thesis-single-year");

  thesisBlocks.forEach(block => {
    const toggleButton = block.querySelector(".thesis-uncollapse-tag");
    const collapseSection = block.querySelector(".thesis-collapse");

    if (toggleButton && collapseSection) {
      toggleButton.addEventListener("click", () => {
        collapseSection.classList.toggle("open");
      });
    }
  });
});