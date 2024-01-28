function create(words) {
   const contentContainer = document.getElementById('content');

   for (const word of words) {
      const divElement = document.createElement('div');
      contentContainer.appendChild(divElement);
      const pElement = document.createElement('p');
      divElement.appendChild(pElement);
      pElement.textContent = word;
      pElement.style.display = 'none';
   }

   const blocks = Array.from(contentContainer.children); 

   blocks.forEach((block) => block.addEventListener('click', clickTheBox));

   function clickTheBox(event) {
      const box = event.target;
      let pElement = box.children[0];
      pElement.style.display = 'block';
   }
}