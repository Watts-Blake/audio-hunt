document.addEventListener('DOMContentLoaded', e => {
  const commentForm = document.getElementById('comment_form');

  document.getElementById('send_button').addEventListener('click', async e => {
    e.preventDefault();

    const pathArr = window.location.pathname.split("/");
    const postId = pathArr[2];

    const formData = new FormData(commentForm);
    const content = formData.get('content');
    const _csrf = formData.get('_csrf');
    const body = { content, _csrf, postId };

    try {
      // FETCH REQUEST ****************************************
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (res.status === 401) {
        alert('Please login or sign up before commenting!');
      }

      if (!res.ok) {
        console.log('res not ok');
        throw res;
      }

      const { content, timeElapsed, username, profileImg, userId } = await res.json()

      // DOM MANIPULATION *********************************
      document.querySelector('input.form_input').value = "";

      const commentSection = document.getElementById('post_body_container');

      const newCommentContainer = document.createElement('div');
      newCommentContainer.classList.add('media');
      newCommentContainer.setAttribute('id', 'comments');
      newCommentContainer.innerHTML = `
      <a class="profPicNav" href="/users/${userId}">
        <img class="comment_pfp" src="${profileImg}", alt="ProfPic">
      </a>
      <p>${content}</p>
      <span>${username}</span>
      <span>${timeElapsed}</span>
      `;

      commentSection.append(newCommentContainer);

    } catch (error) {
      // IF FETCH FAILS ***********************************
      if (error.status >= 400 && error.status <= 600) {
        const errorObj = await error.json();
        // DOM MANIPULATION ERROR CONTAINER ***************
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
  });

});
