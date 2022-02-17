// const fetchUser = async (userId) => {
//   const res = await fetch(
//     (`/users/api/${userId}`,
//     {
//       method: "DELETE",
//     })
//   );

const deleteUserFetch = async (userId) => {
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

const updateUserFetch = async (userId, body) => {
  const cookies = document.cookie;
  console.log(cookies);
  try {
    const res = await fetch(`/api/users/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        // "Cookie": cookies,
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      console.log('wswfdgbcgn');
      throw res;
    }
    console.log(res)
    const confirmMessage = await res.json();
    console.log('we guuuuuuuuuuuuuuuuuuuuuuuuuuuuccci')
    console.log(confirmMessage);
    window.location.href = `/users/${userId}`;
  } catch (error) {
    if (error.status >= 400 && error.status <= 600) {
      console.log('bruh');
      const errorObj = await error.json();
      console.log(errorObj);

      const errorsContainer = document.querySelector('.error-container');
      let errorsHTML = [
        `
        <div class="alert alert-danger">
            Something went wrong. Please try again.
        </div>
      `,
      ];

      // console.log(errors);

      if (errorObj && Array.isArray(errorObj)) {
        errorsHTML = errorObj.map(message => {
          return `
          <div class="alert alert-danger">
              ${message}
          </div>
        `
        });
      }

      errorsContainer.innerHTML = errorsHTML.join('');
    } else {
      alert('Something went wrong. Please check your internet connection and try again.')
    }

  }
};

document.addEventListener("DOMContentLoaded", (e) => {
  const pathArr = window.location.pathname.split("/");
  const userId = pathArr[2];
  const deleteBtn = document.getElementById("deactivateProfBtn");
  const confirmChangesBtn = document.getElementById("confirmChangesBtn");
  const cookie = document.cookie;

  console.log(cookie);
  deleteBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const modalDiv = document.getElementById("confirmDeleteModal");

    modalDiv.classList.remove("hidden");

    const deactivateAcc = document.getElementById("deactivateAcc");
    const cancelDeactivate = document.getElementById("cancelDeactivate");
    deactivateAcc.addEventListener("click", (e) => {
      e.preventDefault();

      deleteUserFetch(userId);
    });
    cancelDeactivate.addEventListener("click", (e) => {
      modalDiv.classList.add("hidden");
    });
  });
  const editForm = document.getElementById("editForm");
  confirmChangesBtn.addEventListener("click", (e) => {
    const formData = new FormData(editForm);
    const username = formData.get("username");
    const email = formData.get("email");
    const header = formData.get("header");
    const bio = formData.get("editBio");
    const _csrf = formData.get("_csrf")
    const body = { username, email, header, bio, _csrf };

    e.preventDefault();
    updateUserFetch(userId, body);

  });
});
