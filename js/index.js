document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(".header");

  // Initially set label visibility to hidden
  document.querySelectorAll(".image-checkbox-label").forEach((label) => {
    label.style.visibility = "hidden"; // Hide labels initially
  });

  // "Select All" button logic to toggle label visibility
  document.getElementById("select-all").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelectorAll(".image-checkbox-label").forEach((label) => {
      label.style.visibility =
        label.style.visibility === "hidden" ? "visible" : "hidden";
    });
  });

  // Prepare checkboxes and labels for each masonry grid item
  document.querySelectorAll(".masonry-grid-item").forEach((item) => {
    // Create and append checkbox if not already present
    let checkbox = item.querySelector(".image-checkbox");
    if (!checkbox) {
      checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.classList.add("image-checkbox");
      checkbox.style.display = "none"; // Keep the actual checkbox hidden; interaction will be through the label

      // Create label which visually represents the checkbox
      const label = document.createElement("label");
      label.classList.add("image-checkbox-label");
      label.appendChild(checkbox);

      // Create a visual indicator (checkmark) for the label
      const checkmark = document.createElement("span");
      checkmark.classList.add("checkmark");
      label.appendChild(checkmark);

      item.appendChild(label);

      // Toggle checkbox checked state on label click
      label.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent triggering any parent click events
        checkbox.checked = !checkbox.checked;
      });
    }
  });
  document.querySelectorAll(".filter-btn").forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default link action
      const filter = this.getAttribute("data-filter"); // Get the filter category from the button
      filterGallery(filter); // Call the filter function with the selected category
    });
  });

  // Function to filter gallery items
  function filterGallery(category) {
    document.querySelectorAll(".masonry-grid-item").forEach((item) => {
      if (
        category === "all" ||
        item.getAttribute("data-category") === category
      ) {
        item.style.display = ""; // Show item if it matches the filter or if filter is 'all'
      } else {
        item.style.display = "none"; // Hide item if it doesn't match the filter
      }
    });
  }
  // Gallery
  let currentGallery = [];

  const albums = {
    album1: ["./Images/8resize.jpg", "./Images/3.jpg", "./Images/9.jpg"],
    album2: ["./Images/4.jpg", "./Images/5.jpg", "./Images/6.jpg"],
    album3: ["./Images/7.jpg", "./Images/9.jpg", "./Images/11.jpg"],

    // ... other albums
  };
  // Add checkboxes
  document.querySelectorAll(".masonry-grid-item img").forEach((img) => {
    img.addEventListener("click", function () {
      const albumKey = this.getAttribute("data-album");
      if (albums[albumKey]) {
        openLightbox(albumKey);
      }
    });
  });

  document.querySelectorAll(".masonry-grid-item").forEach((item) => {
    const label = document.createElement("label");
    label.classList.add("image-checkbox-label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("image-checkbox");
    label.appendChild(checkbox);
    const checkmark = document.createElement("span");
    checkmark.classList.add("checkmark");
    label.appendChild(checkmark);
    item.appendChild(label);
  });

  // Initialize the gallery
  const imageGalleries = {
    category1: [
      "./Images/8resize.jpg",
      "./Images/3.jpg",
      "./Images/4.jpg",
      "./Images/11.jpg",
    ],
    category2: [
      "./Images/5.jpg",
      "./Images/6.jpg",
      "./Images/7.jpg",
      "./Images/9.jpg",
    ],
    category3: ["./Images/2.jpg", "./Images/10.jpg"],
  };
  function updateImage(index) {
    const imgModal = document.getElementById("img01");
    if (currentGallery && currentGallery.length > index) {
      imgModal.src = currentGallery[index];
    } else {
      console.error("Invalid index or gallery:", index, currentGallery);
    }
  }

  // Lightbox functions
  function openLightbox(albumKey) {
    const albumImagesGrid = document.getElementById("albumImagesGrid");
    albumImagesGrid.innerHTML = ""; // Clear previous album images
    const images = albums[albumKey];
    images.forEach((imageSrc) => {
      const imgElement = document.createElement("img");
      imgElement.src = imageSrc;
      imgElement.classList.add("album-image");
      albumImagesGrid.appendChild(imgElement);
    });
    document.getElementById("imageModal").style.display = "block";
  }

  function updateImage(index) {
    const imgModal = document.getElementById("img01");
    imgModal.src = currentGallery[index];
  }

  document.querySelector(".close").addEventListener("click", function () {
    document.getElementById("imageModal").style.display = "none";
  });

  
});
const selectAllButton = document.getElementById("select-all");
document.querySelectorAll(".masonry-grid-item").forEach((item) => {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("image-checkbox");
  checkbox.style.opacity = "0"; // Make checkboxes invisible initially
  checkbox.style.position = "absolute";
  checkbox.style.right = "10px";
  checkbox.style.top = "10px";
  item.style.position = "relative"; // Ensure that the item's position is relative
  item.appendChild(checkbox);
});

// Toggle visibility of checkboxes when the select-all button is clicked
document.getElementById("select-all").addEventListener("click", function (e) {
  e.preventDefault();
  const checkboxes = document.querySelectorAll(".image-checkbox");
  checkboxes.forEach((checkbox) => {
    checkbox.style.opacity = checkbox.style.opacity === "0" ? "1" : "0";
  });
});

document.getElementById("select-all").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelectorAll(".image-checkbox").forEach((checkbox) => {
    checkbox.style.opacity = checkbox.style.opacity === "0" ? "1" : "0";
  });
});
