document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
      });
    });
  }

  var form = document.getElementById("enquiry-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var note = document.getElementById("form-note");
      if (note) {
        note.textContent = "Thank you! Your enquiry has been noted. Our team will call you within 24 hours.";
        note.style.display = "block";
      }
      form.reset();
    });
  }

  // Package photo popup
  var overlay = document.getElementById("pkg-modal-overlay");
  if (overlay) {
    var modalImg = document.getElementById("pkg-modal-img");
    var modalTag = document.getElementById("pkg-modal-tag");
    var modalTitle = document.getElementById("pkg-modal-title");
    var modalDesc = document.getElementById("pkg-modal-desc");
    var modalPrice = document.getElementById("pkg-modal-price");
    var modalWa = document.getElementById("pkg-modal-wa");
    var closeBtn = document.getElementById("pkg-modal-close");

    function openModal(card) {
      modalImg.src = card.dataset.img;
      modalImg.alt = card.dataset.title;
      modalTag.textContent = card.dataset.tag;
      modalTitle.textContent = card.dataset.title;
      modalDesc.textContent = card.dataset.desc;
      modalPrice.textContent = card.dataset.price;
      modalWa.href = card.dataset.wa;
      overlay.classList.add("open");
      document.body.style.overflow = "hidden";
    }
    function closeModal() {
      overlay.classList.remove("open");
      document.body.style.overflow = "";
    }

    document.querySelectorAll(".pkg-card .card-media").forEach(function (media) {
      media.addEventListener("click", function () {
        openModal(media.closest(".pkg-card"));
      });
      media.addEventListener("keypress", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          openModal(media.closest(".pkg-card"));
        }
      });
    });

    closeBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) closeModal();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeModal();
    });
  }
});
