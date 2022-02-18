const deletePostIdFetch = async (postId) => {
  try {
    const res = await fetch(`/api/posts/${postId}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      console.log("shidddeeddededeededed and fwarteddddddddd");
      throw res;
    }
    const userId = await res.json();
    const id = {userId}
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    window.location.href = `/users/${id}`;
  } catch (err) {
    console.error(err);
  }
};

document.addEventListener("DOMContentLoaded", (e) => {
  const deleteModal = document.querySelector('#confirmDeleteModal');
  const pathArr = window.location.pathname.split("/");
  const postId = pathArr[2];
  const deleteBtn = document.querySelector('#delete_post_button');
  deleteBtn.addEventListener('click', e => {
    e.preventDefault()
    const confirmDelete = document.getElementById('deletePost')

    confirmDelete.addEventListener('click', (e) => {
       console.log('bfiujbfszz');
      deletePostIdFetch(postId)

    })



    deleteModal.classList.remove('hidden');
  });
});
//---------------------------------------------------------------/

// router.delete(
//   "/users/:id(\\d+)",
//   requireAuth,
//   asyncHandler(async (req, res, next) => {
//     const userId = req.params.id * 1;

//     const user = await db.User.findByPk(userId);

//     if (req.session.auth.userId !== user.id) {
//       const err = new Error("You are not authorized to delete this user.");
//       err.status = 403;
//       return next(err);
//     }

//     if (user) {
//       user.activeState = false;
//       await user.save();
//       logoutUser(req, res);
//       return res.json("success");
//     } else {
//       const err = new Error("User to delete was not found.");
//       err.status = 404;
//       next(err);
//     }
//   })
// );
