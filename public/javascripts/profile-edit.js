//----------------------------------------------dont delete this, need it for prof change

//----------------------------------------------dont delete this, need it for prof change

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
      throw res;
    }
    const confirmMessage = await res.json();

    window.location.href = `/users/${userId}`;
  } catch (error) {
    if (error.status >= 400 && error.status <= 600) {
      const errorObj = await error.json();

      const errorsContainer = document.querySelector('.error-container');
      let errorsHTML = [
        `
        <div class="alert alert-danger">
            Something went wrong. Please try again.
        </div>
      `,
      ];
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

  //-------------------------------------------------------------------------------if we have time lets refactor this
  const currentHtmlPfp = document.getElementById('current-pfp')
  let currentPfp = currentHtmlPfp.src
  const pfpModal = document.getElementById('profile-pic-modal')
  const changeProfileBtn = document.getElementById('change-profile-picture')
  const pfp1 = document.getElementById('profile-pic-1')
  const pfp2 = document.getElementById('profile-pic-2')
  const pfp3 = document.getElementById('profile-pic-3')
  const pfp4 = document.getElementById('profile-pic-4')
  const pfp5 = document.getElementById('profile-pic-5')
  const pfp6 = document.getElementById('profile-pic-6')
  const pfpArr = [pfp1, pfp2, pfp3, pfp4, pfp5, pfp6]
  //-------------------------------------------------------------------------------if we have time lets refactor this

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
  //--------------------------------------------------------------------------change prof pic
    changeProfileBtn.addEventListener('click', (e) => {
    e.preventDefault()
    pfpModal.classList.remove('hidden')
  })


  pfpModal.addEventListener('click', (e) => {
    e.preventDefault()
      pfpArr.forEach(pic => {
      if (e.target === pic) {

        currentPfp = pic.src
        console.log(currentPfp)
        currentHtmlPfp.src=pic.src
        pfpModal.classList.add('hidden')

      }

      if (e.target === e.currentTarget)  {
        pfpModal.classList.add('hidden')
      }
  })
  })
  //--------------------------------------------------------------------------change prof pic

  const editForm = document.getElementById("editForm");
  confirmChangesBtn.addEventListener("click", (e) => {
    const formData = new FormData(editForm);
    const username = formData.get("username");
    const email = formData.get("email");
    const header = formData.get("header");
    const bio = formData.get("editBio");
    const profileImg = currentPfp
    const _csrf = formData.get("_csrf")
    const body = { username, email, header, bio, profileImg, _csrf };

    e.preventDefault();
    updateUserFetch(userId, body);

  });
});
