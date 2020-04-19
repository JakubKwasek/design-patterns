export const makeRequest = (url: string, params = {}) => {
	// This is facade
	// This can be regular fetch or Axios
	// This part of application is hidden away with its implementation
	console.log("URL: ", url);
	console.log("Params: ", params);
};

export const getUsers = () => {
	const url = "https://www.example.api/users";
	return makeRequest(url);
};

export const getOneUser = () => {
	const url = "https://www.example.api/";
	const params = { id: 1, text: "test" };
	return makeRequest(url, params);
};
