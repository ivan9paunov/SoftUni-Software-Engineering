let httpRequest;
const resultContainer = document.getElementById('res');

function loadRepos() {
   const url = 'https://api.github.com/users/testnakov/repos';

   httpRequest = new XMLHttpRequest();

   httpRequest.addEventListener('readystatechange', displayRepos);
   httpRequest.open('GET', url);
   httpRequest.send();
}

function displayRepos() {
   if (httpRequest.readyState == 4 && httpRequest.status == 200) {
      resultContainer.textContent = httpRequest.responseText;
   }
}