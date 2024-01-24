function search() {
   let tableRef = document.getElementById('towns').children;
   let linesArr = Array.from(tableRef);
   const inputText = document.getElementById('searchText').value;
   const resultRef = document.getElementById('result');
   let counter = 0;

   for (let li of linesArr) {
      li.style.textDecoration = '';
      li.style.fontWeight = '';

      if (li.textContent.includes(inputText)) {
         li.style.textDecoration = 'underline';
         li.style.fontWeight = 'bold';
         counter++;
      }
   }

   resultRef.textContent = `${counter} matches found`;
}
