import { html, render } from './node_modules/lit-html/lit-html.js';

async function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const root = document.querySelector('tbody');

   const people = await requester();

   const trTemplate = (people) => {
      return people.map(person => html`
         <tr>
            <td>${person.firstName} ${person.lastName}</td>
            <td>${person.email}</td>
            <td>${person.course}</td>
         </tr>
      `);
   };

   render(trTemplate(people), root);
   
   function onClick() {
      const inputRef = document.getElementById('searchField');
      const searchText = inputRef.value.toLowerCase();
      const rows = Array.from(root.querySelectorAll('tr'));

      for (const row of rows) {
         row.classList.remove('select');
         const cols = Array.from(row.children);
         
         for (const col of cols) {
            if (col.textContent.toLowerCase().includes(searchText)) {
               row.classList.add('select');
            }
         }
      }

      inputRef.value = '';
   }
}

solve();

async function requester() {
   const url = 'http://localhost:3030/jsonstore/advanced/table';

   try {
      const request = await fetch(url);

      if (!request.ok) {
         const error = await request.json();
         throw new Error(error.message);
      }

      const data = await request.json();
      return Object.values(data);

   } catch (error) {
      alert(error.message);
   }
}