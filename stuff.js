const tiles = document.querySelectorAll('.tile');

tiles.forEach((tile) => {
  tile.addEventListener('click', () => {
    tiles.forEach((tile) => {
      tile.classList.remove("active");
    });
    tile.classList.add("active");
  })
});
