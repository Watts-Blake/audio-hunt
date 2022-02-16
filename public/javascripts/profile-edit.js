document.addEventListener("DOMContentLoaded", (e) => {
  const deleteBtn = document.getElementById("deactivateProfBtn");

  deleteBtn.addEventListener("click", (e) => {
    // e.preventDefault();
    const modalDiv = document.querySelector("#confirmDeleteModal");

    modalDiv.classList.remove("hidden");

    console.log("DEACTIVATE");
  });
});
