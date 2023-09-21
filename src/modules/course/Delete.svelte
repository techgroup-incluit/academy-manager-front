<script>
	import { deleteData } from '../../services/course';
  export let selectedCourseId;

	 async function handleSubmit() {
    try {
			const response = await deleteData(selectedCourseId);

			if (response.status === 204) {
				console.log('Course deleted successfully')
				window.location.reload();
			}
    } catch (error) {
      console.log('Error in posting data', error);
    }
  }

</script>
	<!-- Delete Course Drawer -->
	<form on:submit|preventDefault={handleSubmit}>
	<div
		id="drawer-delete-course-default"
		class="fixed top-0 right-0 z-40 w-full h-screen max-w-xs p-4 overflow-y-auto transition-transform translate-x-full bg-white dark:bg-gray-800"
		tabindex="-1"
		aria-labelledby="drawer-label"
		aria-hidden="true"
	>
		<h5
			id="drawer-label"
			class="inline-flex items-center text-sm font-semibold text-gray-500 uppercase dark:text-gray-400"
		>
			Borrar
		</h5>
		<button
			type="button"
			data-drawer-dismiss="drawer-delete-course-default"
			aria-controls="drawer-delete-course-default"
			class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
		>
			<svg
				aria-hidden="true"
				class="w-5 h-5"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
					clip-rule="evenodd"></path></svg
			>
			<span class="sr-only">Cerrar menu</span>
		</button>
		<svg
			class="w-10 h-10 mt-8 mb-4 text-red-600"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg
		>
		<h3 class="mb-6 text-lg text-gray-500 dark:text-gray-400">
			¿Estas seguro que queres eliminar el item?
		</h3>
		<button
		type="submit"
			class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2.5 text-center mr-2 dark:focus:ring-red-900"
		>
			Si, estoy seguro
		</button>
		<button
		type="button"
			class="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 border border-gray-200 font-medium inline-flex items-center rounded-lg text-sm px-3 py-2.5 text-center dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
			
		>
			No, cancelar
	</button>
	</div>
</form>

