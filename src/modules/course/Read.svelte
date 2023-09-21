<script>
  import { onMount } from 'svelte';
  import NavPagination from '../../components/NavPagination.svelte';
  import { fetchData } from '../../services/course';
  import CreateCourse from './Create.svelte';
  import DeleteCourse from './Delete.svelte';

	let courses = [];
	let selectedCourseId = null;

  const loadData = async () => {
    courses = await fetchData();
  };

  onMount(() => {
    loadData();
  });

  const refreshData = () => {
    loadData();
  };

function openDeleteDrawer(id) {
	selectedCourseId = id;
	const event = new CustomEvent('deleteClicked', { detail: { id } });
	document.dispatchEvent(event);
}
</script>

	<div
		class="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700"
	>
		<div class="w-full mb-1">
			<div class="mb-4">
				<nav class="flex mb-5" aria-label="Breadcrumb">
					<ol
						class="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2"
					>
						<li class="inline-flex items-center">
							<button
								class="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white"
							>
								<svg
									class="w-5 h-5 mr-2.5"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
									><path
										d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
									></path></svg
								>
								Inicio
							</button>
						</li>
						<li>
							<div class="flex items-center">
								<svg
									class="w-6 h-6 text-gray-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
									><path
										fill-rule="evenodd"
										d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
										clip-rule="evenodd"></path></svg
								>
								<span
									class="ml-1 text-gray-400 md:ml-2 dark:text-gray-500"
									aria-current="page">Curso</span
								>
							</div>
						</li>
					</ol>
				</nav>
				<h1
					class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white"
				>
					Todos los cursos
				</h1>
			</div>
			<div class="items-center justify-between block sm:flex">
				<div class="flex items-center mb-4 sm:mb-0">
					<form class="sm:pr-3" action="#" method="GET">
						<label for="course-search" class="sr-only">Buscar</label>
						<div class="relative w-48 mt-1 sm:w-64 xl:w-96">
							<input
								type="text"
								name="email"
								id="course-search"
								class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
								placeholder="Buscar por curso"
							/>
						</div>
					</form>
				</div>

				<div class="flex items-center ml-auto space-x-2 sm:space-x-3">
					<button
						type="button"
						on:click={refreshData}
						data-refresh
						class="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
					>
						<svg
							class="w-5 h-5 mr-2 -ml-1"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
							></path>
						</svg>
						Refrescar
					</button>
					<button
						id="createCourseButton"
						class="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
						type="button"
						data-drawer-target="drawer-create-course-default"
						data-drawer-show="drawer-create-course-default"
						aria-controls="drawer-create-course-default"
						data-drawer-placement="right"
					>
						<svg
							class="w-5 h-5 mr-2 -ml-1"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
								clip-rule="evenodd"></path></svg
						>
						Agregar un curso
					</button>
				</div>
			</div>
		</div>
	</div>
	<!-- Tabla -->
	<div class="flex flex-col">
		<div class="overflow-x-auto">
			<div class="inline-block min-w-full align-middle">
				<div class="overflow-hidden shadow">
					<table
						class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600"
					>
						<thead class="bg-gray-100 dark:bg-gray-700">
							<tr>
								<th scope="col" class="p-4">
									<div class="flex items-center">
										<input
											id="checkbox-all"
											aria-describedby="checkbox-1"
											type="checkbox"
											class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
										/>
										<label for="checkbox-all" class="sr-only">checkbox</label>
									</div>
								</th>

								{#each ['ID', 'Sección', 'Academia', 'Aula', 'Activo', 'Acciones'] as th}
								<th
									scope="col"
									class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
								>
									{th}
								</th>
							{/each}
							</tr>
						</thead>
						<tbody
							class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"
						>
							{#each courses as course}
									<tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
										<td class="w-4 p-4">
											<div class="flex items-center">
												<input
													id={`checkbox-${course.id}`}
													aria-describedby="checkbox-1"
													type="checkbox"
													class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
												/>
												<label for={`checkbox-${course.id}`} class="sr-only">
													checkbox
												</label>
											</div>
										</td>
										<td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
											#<data value="id">{course.id}</data>
										</td>
										<td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
											<div class="text-base font-semibold text-gray-900 dark:text-white">
												<data value="firstName">{course.firstName}</data>
											</div>
										</td>
										<td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
											<div class="text-base font-semibold text-gray-900 dark:text-white">
												<data value="lastName">{course.lastName}</data>
											</div>
										</td>
										<td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
											<div class="text-base font-semibold text-gray-900 dark:text-white">
												<data value="academyName">{course.academyName}</data>
											</div>
										</td>
										<td class="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
											<input id="default-checkbox" type="checkbox" checked class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
										</td>
										<!-- TODO: Implement edit button-->
										<td class="p-4 space-x-2 whitespace-nowrap">
											<!-- <button
												type="button"
												id="updateCourseButton"
												data-drawer-target="drawer-update-course-default"
												data-drawer-show="drawer-update-course-default"
												aria-controls="drawer-update-course-default"
												data-drawer-placement="right"
												class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
											>
												<svg
													class="w-4 h-4 mr-2"
													fill="currentColor"
													viewBox="0 0 20 20"
													xmlns="http://www.w3.org/2000/svg"
												>
													<svg>
														<path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
														<path
															fill-rule="evenodd"
															d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
															clip-rule="evenodd"
														/>
													</svg>
												</svg>
												Editar
											</button>-->
											<button
												type="button"
												id="deleteCourseButton"
												on:click={() => openDeleteDrawer(course.id)}
												data-drawer-target="drawer-delete-course-default"
												data-drawer-show="drawer-delete-course-default"
												aria-controls="drawer-delete-course-default"
												data-drawer-placement="right"
												class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
											>
												<svg
													class="w-4 h-4 mr-2"
													fill="currentColor"
													viewBox="0 0 20 20"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														fill-rule="evenodd"
														d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
														clip-rule="evenodd"
													/>
												</svg>
												Borrar
											</button>
										</td>
									</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
	
	<CreateCourse></CreateCourse>
	<DeleteCourse {selectedCourseId}></DeleteCourse>
	<NavPagination />
