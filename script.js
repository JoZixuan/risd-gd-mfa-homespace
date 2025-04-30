const drawerFrontBiennial = document.querySelector('#biennial');

drawerFrontBiennial.addEventListener('click', () => {
  // Get the sibling element with the class 'drawer-inside'
  const drawerInside = drawerFrontBiennial.previousElementSibling;

  // Check if the sibling exists and has the correct class
  if (drawerInside && drawerInside.classList.contains('drawer-inside')) {
    drawerInside.classList.toggle('open'); // Toggle the 'open' class
  }
});