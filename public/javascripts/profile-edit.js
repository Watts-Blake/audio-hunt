// const fetchUser = async (userId) => {
//   const res = await fetch(
//     (`/users/api/${userId}`,
//     {
//       method: "DELETE",
//     })
//   );

const fetchUser = async (userId) => {
  try {
    const res = await fetch(`/api/users/${userId}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      console.log("");
      throw res;
    }
    const something = await res.json();
    window.location.href = "/";
  } catch (err) {
    console.error(err);
  }
};

document.addEventListener("DOMContentLoaded", (e) => {
  const pathArr = window.location.pathname.split("/");
  const userId = pathArr[2];
  const deleteBtn = document.getElementById("deactivateProfBtn");

  deleteBtn.addEventListener("click", (e) => {
    // e.preventDefault();
    const modalDiv = document.getElementById("confirmDeleteModal");

    modalDiv.classList.remove("hidden");

    const deactivateAcc = document.getElementById("deactivateAcc");
    const cancelDeactivate = document.getElementById("cancelDeactivate");
    deactivateAcc.addEventListener("click", (e) => {
      // async fetch with method delete users/id

      fetchUser(userId);
    });
    cancelDeactivate.addEventListener("click", (e) => {
      modalDiv.classList.add("hidden");
    });
  });
});
