function solve() {
   let addBtns = Array.from(document.querySelectorAll('button.add-product'));
   const textArea = document.querySelector('textarea');

   let boughtProducts = [];
   let totalPrice = 0;
   
   for (let btn of addBtns) {
      btn.addEventListener('click', addProduct);
   }

   function addProduct(event) {
      const btn = event.target;
      const productName = btn.parentElement.parentElement.querySelector('div.product-title').textContent;
      const productPrice = Number(btn.parentElement.parentElement.querySelector('div.product-line-price').textContent);
      textArea.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
      totalPrice += Number(productPrice);

      if (!boughtProducts.includes(productName)) {
         boughtProducts.push(productName);
      }
   }

   const checkoutBtn = document.querySelector('.checkout');
   checkoutBtn.addEventListener('click', checkout);

   function checkout() {
      const allButtons = Array.from(document.querySelectorAll('button'));
      const products = boughtProducts.join(', ');
      textArea.value += `You bought ${products} for ${totalPrice.toFixed(2)}.`;
      
      for (let btn of allButtons) {
         btn.disabled = true;
      }
   }
}