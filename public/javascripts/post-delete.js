const deletePostIdFetch = async (postId) => {
  try {
    const res = await fetch(`/api/posts/${postId}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw res;
    }
    const userId = await res.json();
    const id = { userId }
    window.location.href = `/users/${id}`;
  } catch (err) {
    const error = await err.json();
    console.log(error);
  }
};

document.addEventListener("DOMContentLoaded", (e) => {
  const pathArr = window.location.pathname.split("/");
  const postId = pathArr[2];

  const containerDiv = document.querySelector('#confirmDeleteModal');
  const deleteBtn = document.querySelector('#delete_post_button');
  // send delete fetch request to backend and redirect to the user's prof page
  deleteBtn.addEventListener('click', e => {
    e.preventDefault()
    containerDiv.classList.remove('hidden');
    const okDeleteBtn = document.getElementById('deletePost');
    const cancelBtn = document.querySelector('#cancel-post-delete');

    containerDiv.addEventListener('click', e => {
      if (e.target === okDeleteBtn) {
        console.log('bruhfuefu');
        e.stopPropagation();
        deletePostIdFetch(postId);
      }

      if (e.target === e.currentTarget || e.target === cancelBtn) {
        e.stopPropagation();
        containerDiv.classList.add('hidden');
      }
    });
  });
});
