// FetchService.js
export const fetchData = async () => {
	try {
		const response = await fetch('http://localhost:8000/api/academy');
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('There was an error fetching data', error);
		return null;
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
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('There was an error posting data', error);
		return null;
	}
};
