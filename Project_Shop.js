// Adding click event listeners to each product image
document.querySelectorAll('.collection-img, .special-img , .popular-img').forEach(img => {
    img.addEventListener('click', function() {
      const productId = this.getAttribute('data-id');
      const productName = this.getAttribute('data-name');
      const productImage = this.getAttribute('data-image');
      const productPrice = this.getAttribute('data-price');

      // Store the product details in local storage
      localStorage.setItem('productId', productId);
      localStorage.setItem('productName', productName);
      localStorage.setItem('productImage', productImage);
      localStorage.setItem('productPrice', productPrice);

      // Redirect to the product detail page
      window.location.href = 'product.html';
    });
  });

  