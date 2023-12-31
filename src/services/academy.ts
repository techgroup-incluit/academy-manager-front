export const fetchData = async () => {
	try {
		const response = await fetch('http://localhost:8000/api/academy');
		return await response.json();
	} catch (error) {
		console.error('There was an error fetching data', error);
		return error;
	}
};

export const fetchAcademyById = async (id: string) => {
  try {
    const response = await fetch(`http://localhost:8000/api/academy/${id}`);
    return await response.json();
  } catch (error) {
    console.error(`There was an error fetching academy data for ID: ${id}`, error);
    return error;
  }
};

export const postData = async (payload: any) => {
	try {
		const response = await fetch('http://localhost:8000/api/academy', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(payload),
		});
		return await response.json();
	} catch (error) {
		console.error('There was an error posting data', error);
		return error;
	}
};

export const deleteData = async (id: string) => {
	try {
		const response = await fetch(`http://localhost:8000/api/academy/${id}`, {
			method: 'DELETE',
		});

		return response.status === 204 ? response : await response.json();
	} catch (error) {
		console.error('There was an error deleting data', error);
		return error;
	}
}
