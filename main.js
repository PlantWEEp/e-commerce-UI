//navbar
const navbar = document.getElementById("navbar");

const handleScroll = () => {
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scroll", window.scrollY >= 5);
  });
};

handleScroll();

//menu bar responive
const menu = document.querySelector(".menu");

const handleMenu = () => {
  menu.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
};

handleMenu();

//heart

// const iconheart = document.querySelector(".iconheart");

// const handleicon = () => {
//   iconheart.addEventListener("click", () => {
//     iconheart.classList.toggle("red");
//   });
// };
// handleicon();

//products
fetch("./products.json")
  .then((response) => response.json())
  .then((products) => {
    let productplace = document.getElementById("prodContainer");
    let productItem = "";

    products.map((product) => {
      let offDiv = "";

      if (product.tag && product.offer) {
        offDiv = `
      <div class="off">
        <span class="offer">${product.tag}</span>
        <span class="offPrice">${product.offer}</span>
      </div>
    `;
      } else {
        offDiv = "";
      }

      productItem += `
        <div class="col-sm-3 col-lg-3 pt-4">
          <div class="productscontainer position-relative" >
            <div class="productimg">
              <img src="${product.image}" alt="product" class="img-prod"/>
              <div class="iconheart">
                <i class="fa-solid fa-heart"></i> 
              </div>
              ${offDiv}
            </div>
            <div class="cartbtn"> 
              <a href="#" class="text-white">Buy Now</a> 
            </div>
            <h6 class="pt-3 text-light-subtle">${product.productTitle}</h6>
            <div class="price d-flex gap-2">  
              <p class="m-0">${product.price}</p>
              <small><s class="m-0">${product.realPrice}</s></small>
            </div> 
          </div>
        </div>`;
    });

    productplace.innerHTML = productItem;
  })
  .catch((error) => console.log(error));
