document.addEventListener('DOMContentLoaded', e => {
	const deleteBtn = document.querySelector(".deactivateProfBtn")
	
	deleteBtn.addEventListener('click', e=> {
		// e.preventDefault();
		const modalDiv = document.querySelector('#confirmDeleteModal');

		modalDiv.classList.remove("hidden");
		
		console.log('DEACTIVATE')
	})



});