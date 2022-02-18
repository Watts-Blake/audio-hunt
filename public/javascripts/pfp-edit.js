
//dont delete yet pleaseeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee




// let currentPfp = ''

// const updateUserFetch = async (userId, body) => {
//   const cookies = document.cookie;
//   console.log(cookies);
//   try {
//     const res = await fetch(`/api/users/${userId}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         // "Cookie": cookies,
//       },
//       body: JSON.stringify(body),
//     });

//     if (!res.ok) {
//       console.log('wswfdgbcgn');
//       throw res;
//     }
//     const confirmMessage = await res.json();
//     window.location.href = `/users/${userId}`;
//   } catch (error) {
//     if (error.status >= 400 && error.status <= 600) {
//       console.log('bruh');
//       const errorObj = await error.json();
//       console.log(errorObj);

//       const errorsContainer = document.querySelector('.error-container');
//       let errorsHTML = [
//         `
//         <div class="alert alert-danger">
//             Something went wrong. Please try again.
//         </div>
//       `,
//       ];

//       if (errorObj && Array.isArray(errorObj)) {
//         errorsHTML = errorObj.map(message => {
//           return `
//           <div class="alert alert-danger">
//               ${message}
//           </div>
//         `
//         });
//       }

//       errorsContainer.innerHTML = errorsHTML.join('');
//     } else {
//       alert('Something went wrong. Please check your internet connection and try again.')
//     }

//   }
// };
// //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^function/variables^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// document.addEventListener("DOMContentLoaded", (e) => {
//   const cookie = document.cookie;
//   const pathArr = window.location.pathname.split("/");
//   const userId = pathArr[2];
//   const currentHtmlPfp = document.getElementById('current-pfp')
//   const pfpModal = document.getElementById('profile-pic-modal')
//   const changeProfileBtn = document.getElementById('change-profile-picture')
//   const pfp1 = document.getElementById('profile-pic-1')
//   const pfp2 = document.getElementById('profile-pic-2')
//   const pfp3 = document.getElementById('profile-pic-3')
//   const pfp4 = document.getElementById('profile-pic-4')
//   const pfp5 = document.getElementById('profile-pic-5')
//   const pfp6 = document.getElementById('profile-pic-6')
//   const pfpArr = [pfp1, pfp2, pfp3, pfp4, pfp5, pfp6]

//   changeProfileBtn.addEventListener('click', (e) => {
//     e.preventDefault()
//     pfpModal.classList.remove('hidden')
//   })


//   pfpModal.addEventListener('click', (e) => {
//     e.preventDefault()
//       pfpArr.forEach(pic => {
//       if (e.target === pic) {

//         currentPfp = pic.src
//         console.log(currentPfp)
//         currentHtmlPfp.src=pic.src
//         pfpModal.classList.add('hidden')

//       }

//       if (e.target === e.currentTarget)  {
//         pfpModal.classList.add('hidden')
//       }
//   })
//   })



//     const pfp = currentPfp
//     console.log(pfp)
//     const body = { pfp };

//     // e.preventDefault();
//     // updateUserFetch(userId, body);

//   });
