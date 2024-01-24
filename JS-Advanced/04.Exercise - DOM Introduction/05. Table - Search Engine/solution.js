function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const tableData = document.querySelector('tbody');
      let tableRows = Array.from(tableData.children);
      const inputFieldRef = document.getElementById('searchField');
      let inputText = inputFieldRef.value;

      for (let row of tableRows) {
         let rowItems = Array.from(row.children);

         for (let data of rowItems) {
            let info = data.textContent;

            if (info.includes(inputText)) {
               row.classList.add('select');
               break;
            } else {
               row.classList.remove('select');
            }
         }
      }

      inputFieldRef.value = '';
   }
}