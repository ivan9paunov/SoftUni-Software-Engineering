import { html, render } from './node_modules/lit-html/lit-html.js';
import { towns } from './towns.js';

const root = document.getElementById('towns');
document.querySelector('button').addEventListener('click', search);

const townsTemplate = (towns) => {
   return html`
      <ul>
         ${towns.map(town => html`<li>${town}</li>`)}
      </ul>
   `;
};

render(townsTemplate(towns), root);

function search(event) {
   let counter = 0;

   const inputText = event.target.parentElement.querySelector('input').value;
   const allTowns = Array.from(event.target.parentElement.querySelector('ul').children);

   allTowns.forEach(town => town.classList.remove('active'));

   allTowns.forEach(town => {
      if (town.textContent.includes(inputText)) {
         town.classList.add('active');
         counter++;
      }
   });

   document.getElementById('result').textContent = `${counter} matches found`;
}
