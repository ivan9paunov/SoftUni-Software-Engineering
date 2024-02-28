async function loadRepos() {
	const ulElement = document.getElementById('repos');
	ulElement.replaceChildren();

	const username = document.getElementById('username').value;
	const url = `https://api.github.com/users/${username}/repos`;
	
	try {
		const response = await fetch(url);
		if (!response.ok) {
			const errMessage = await response.json();
			throw errMessage;
		}
		
		const data = await response.json();

		data.forEach(element => {
			const liElement = createLi(element.html_url, element.full_name);
			ulElement.appendChild(liElement);
		});

	} catch (error) {
		const liElement = document.createElement('li');
		liElement.textContent = error.message;
		ulElement.appendChild(liElement);
	}

	function createLi(repoLink, repoName) {
		const liElement = document.createElement('li');
		const anchor = document.createElement('a');
		anchor.href = repoLink;
		anchor.textContent = repoName;

		liElement.appendChild(anchor);
		return liElement;
	}
}