export const fetchData = async () => {
	try {
		const response = await fetch('http://localhost:8000/api/teacher');
		return await response.json();
	} catch (error) {
		console.error('There was an error fetching data', error);
		return error;
	}
};

export const postData = async (payload: any) => {
	try {
		const response = await fetch('http://localhost:8000/api/teacher', {
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
