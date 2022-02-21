document.addEventListener('DOMContentLoaded', e => {

  /* CREATING A NEW COMMENT ************************************
  *************************************************************/
  const commentForm = document.getElementById('comment_form');
    let numComments = document.getElementById('num_comments')
    let currentNumComments = numComments.innerText
  document.getElementById('send_button').addEventListener('click', async e => {
    e.preventDefault();

    const pathArr = window.location.pathname.split("/");
    const postId = pathArr[2];
    let newNumComments = ++currentNumComments
    numComments.innerText = newNumComments
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
        // console.log('res not ok');
        throw res;
      }

      const { content, timeElapsed, username, profileImg, userId } = await res.json()

      // DOM MANIPULATION *********************************
      document.querySelector('input.form_input').value = "";

      const commentSection = document.getElementById('post_body_container');
      const newCommentContainer = document.createElement('div');
      newCommentContainer.classList.add('media');
      newCommentContainer.setAttribute('id', 'comments');
      newCommentContainer.classList.add('container')
      newCommentContainer.innerHTML = `
        <div class="container comment_left"
          <a class="profPicNav comments_pfp" href="/users/${userId}">
          <img class="comment_pfp" style="border: 2.5px solid #1db954;border-radius: 50%; height:75px; width:75px; margin-right:5px; "src="${profileImg}", alt="ProfPic">
          </a>
        </div>
        <div class="container comment_content">
          <p>${content}</p>
          <small>${username}</small>
        </div>
        <div class="container">
        <div class="form_group">
        <a href=${document.location.href} class="btn edit_icon" > \&#8634 <small>Refresh to edit/delete</small> </a>
        
        </div>
        <span>${timeElapsed}</span>
        </div>
      `;

      const collection = Array.from(commentSection.children);
      collection.unshift(newCommentContainer);
      collection.forEach(e => commentSection.append(e));

    } catch (error) {
      // IF FETCH FAILS ***********************************
      if (error.status >= 400 && error.status <= 600) {
        const errorObj = await error.json();
        // DOM MANIPULATION ERROR CONTAINER ***************
        const errorsContainer = document.querySelector('.comment_error_container');
        errorsContainer.classList.remove('hidden');

        let errorsHTML = [
          `
          <a href="/users/login" style="color: #FFFFFF; text-decoration: underline;">
              Click me to log in first!
          </a><span> 🙂</span>
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


  /* EDITING A COMMENT ****************************************
  *************************************************************/
  // WIP
  document.querySelectorAll('#edit_comment').forEach(btn => {
    btn.addEventListener('click', async e => {
      const commentId = e.currentTarget.dataset.comment;

      const comment = document.querySelector(`#comments[data-comment="${commentId}"]`);
      const commentContent = document.querySelector(`#comments[data-comment="${commentId}"] .comment_content`);
      const commentP = document.querySelector(`#comments[data-comment="${commentId}"] p`);
      const commentText = commentP.innerHTML;

      commentContent.remove();

      const inputDiv = document.createElement('div');
        inputDiv.style.width = '100%';
        inputDiv.style.height = '100px';
        inputDiv.style.padding = '1em';
        inputDiv.style.display = 'flex';
        inputDiv.style.alignItems = 'center';
      const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('value', commentText);
        input.setAttribute('autofocus', 'true');
        input.style.width = `75%`;
        input.style.height = '51%'
        input.style.padding = '6px'
        input.style.border = '2px solid #FFFFFF';
        input.style.borderRadius = '5px';
      const updateButton = document.createElement('button');
        updateButton.classList.add('btn', 'btn--secondary--outline');
        updateButton.innerText = 'update';
        updateButton.style.borderRadius = '6px';
      inputDiv.append(input);
      inputDiv.append(updateButton);

      // get all of the comment's elements in an array
      const commentChildren = Array.from(comment.children);
      // insert the input where it needs to go in the comment container
      commentChildren.splice(1, 0, inputDiv);
      // delete all of the original children of the comment...
      for (let i = 0; i < comment.children.length; i++) {
        comment.children[i].remove();
      }
      // so that you can replace them in the new order
      commentChildren.forEach(e => comment.append(e));


      // WHEN UPDATE BUTTON IS CLICKED...
      updateButton.addEventListener('click', async e => {
        // FETCH *******************************************
        // console.log(input.value);
        try {
          const res = await fetch(`/api/comments/${commentId}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ content: input.value }),
          });


          if (res.status === 403) {
            alert('You are not authorized to edit this comment!');
          }

          if (!res.ok) {
            // console.log('bruh');
            throw res;
          }

          commentP.innerHTML = input.value;
          inputDiv.remove();
          const commentChildren = Array.from(comment.children);
          commentChildren.splice(1, 0, commentContent);
          for (let i = 0; i < comment.children.length; i++) {
            comment.children[i].remove();
          }
          commentChildren.forEach(e => comment.append(e));

        } catch (err) {
          if (err.status >= 400 && err.status <= 600) {
            const errorObj = await err.json();
            // DOM MANIPULATION ERROR CONTAINER ***************
            const errorsContainer = document.querySelector('.comment_error_container');
            errorsContainer.classList.remove('hidden');

            let errorsHTML = [
              `
              <div>
                  Sorry, something went wrong while updating your comment!
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
  });


  /* DELETING A COMMENT ****************************************
  *************************************************************/
  document.querySelectorAll('#delete_comment').forEach(btn => {

    btn.addEventListener('click', async e => {
      const commentId = e.currentTarget.dataset.comment;
    let newNumComments = --currentNumComments
    numComments.innerText = newNumComments
      if (window.confirm('Are you sure you want to delete this comment?')) {
        // console.log(commentId);
        try {
          const res = await fetch(`/api/comments/${commentId}`, {
            method: 'delete',
          });

          if (res.status === 403) {
            return alert('You don\'t have permission to delete this! >:(');
          } else if (!res.ok) {
            // console.log('error from fetch response');
            throw res;
          }

          const comment = document.querySelector(`#comments[data-comment="${commentId}"]`)
          comment.remove();

        } catch (err) {
          alert('Something went wrong while deleting your comment! :( Please check your internet connection and try again.');

        }
      }
    });
  });
});
