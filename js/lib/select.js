const elSelectLocationBuy = document.getElementsByClassName("js-selectLocationBuy")[0];
const elSelectLocationBuyValue = elSelectLocationBuy.children[0];
const elSelectLocationBuyOptions = elSelectLocationBuy.children[1];
const elSelectLocationBuyTrigger = elSelectLocationBuy.children[2];
const locationLabelBuy = elSelectLocationBuyValue.getAttribute("data-value");

const elSelectPropertyBuy = document.getElementsByClassName("js-selectPropertyBuy")[0];
const elSelectPropertyBuyValue = elSelectPropertyBuy.children[0];
const elSelectPropertyBuyOptions = elSelectPropertyBuy.children[1];
const elSelectPropertyBuyTrigger = elSelectPropertyBuy.children[2];
const propertyLabelBuy = elSelectPropertyBuyValue.getAttribute("data-value");

const elSelectPriceBuy = document.getElementsByClassName("js-selectPriceBuy")[0];
const elSelectPriceBuyValue = elSelectPriceBuy.children[0];
const elSelectPriceBuyOptions = elSelectPriceBuy.children[1];
const elSelectPriceBuyTrigger = elSelectPriceBuy.children[2];
const priceLabelBuy = elSelectPriceBuyValue.getAttribute("data-value");

const elSelectLocationRent = document.getElementsByClassName("js-selectLocationRent")[0];
const elSelectLocationRentValue = elSelectLocationRent.children[0];
const elSelectLocationRentOptions = elSelectLocationRent.children[1];
const elSelectLocationRentTrigger = elSelectLocationRent.children[2];
const locationLabelRent = elSelectLocationRentValue.getAttribute("data-value");

const elSelectPropertyRent = document.getElementsByClassName("js-selectPropertyRent")[0];
const elSelectPropertyRentValue = elSelectPropertyRent.children[0];
const elSelectPropertyRentOptions = elSelectPropertyRent.children[1];
const elSelectPropertyRentTrigger = elSelectPropertyRent.children[2];
const propertyLabelRent = elSelectPropertyRentValue.getAttribute("data-value");

const elSelectPriceRent = document.getElementsByClassName("js-selectPriceRent")[0];
const elSelectPriceRentValue = elSelectPriceRent.children[0];
const elSelectPriceRentOptions = elSelectPriceRent.children[1];
const elSelectPriceRentTrigger = elSelectPriceRent.children[2];
const priceLabelRent = elSelectPriceRentValue.getAttribute("data-value");

const elSelectLocationSell = document.getElementsByClassName("js-selectLocationSell")[0];
const elSelectLocationSellValue = elSelectLocationSell.children[0];
const elSelectLocationSellOptions = elSelectLocationSell.children[1];
const elSelectLocationSellTrigger = elSelectLocationSell.children[2];
const locationLabelSell = elSelectLocationSellValue.getAttribute("data-value");

const elSelectPropertySell = document.getElementsByClassName("js-selectPropertySell")[0];
const elSelectPropertySellValue = elSelectPropertySell.children[0];
const elSelectPropertySellOptions = elSelectPropertySell.children[1];
const elSelectPropertySellTrigger = elSelectPropertySell.children[2];
const propertyLabelSell = elSelectPropertySellValue.getAttribute("data-value");

const elSelectPriceSell = document.getElementsByClassName("js-selectPriceSell")[0];
const elSelectPriceSellValue = elSelectPriceSell.children[0];
const elSelectPriceSellOptions = elSelectPriceSell.children[1];
const elSelectPriceSellTrigger = elSelectPriceSell.children[2];
const priceLabelSell = elSelectPriceSellValue.getAttribute("data-value");


    Array.from(elSelectLocationBuyOptions.children).forEach(function (elOption) {
      elOption.addEventListener("click", (e) => {
        elSelectLocationBuyTrigger.textContent = e.target.textContent;
        // Close select
        elSelectLocationBuy.classList.remove("isActive");
      });
    });

    
    // Toggle select on label click
    elSelectLocationBuyValue.addEventListener("click", (e) => {
      elSelectLocationBuy.classList.toggle("isActive");
    });

 
    document.addEventListener("click", (e) => {
      const didClickedOutside = !elSelectLocationBuy.contains(event.target);
      if (didClickedOutside) {
        elSelectLocationBuy.classList.remove("isActive");
      }
    });




    Array.from(elSelectPropertyBuyOptions.children).forEach(function (elOption) {
      elOption.addEventListener("click", (e) => {
       
        elSelectPropertyBuyTrigger.textContent = e.target.textContent;
        // Close select
        elSelectPropertyBuy.classList.remove("isActive");
      });
    });

    
    // Toggle select on label click
    elSelectPropertyBuyValue.addEventListener("click", (e) => {
      elSelectPropertyBuy.classList.toggle("isActive");
    });

 
    document.addEventListener("click", (e) => {
      const didClickedOutside = !elSelectPropertyBuy.contains(event.target);
      if (didClickedOutside) {
        elSelectPropertyBuy.classList.remove("isActive");
      }
    });



    Array.from(elSelectPriceBuyOptions.children).forEach(function (elOption) {
      elOption.addEventListener("click", (e) => {
       
        elSelectPriceBuyTrigger.textContent = e.target.textContent;
        // Close select
        elSelectPriceBuy.classList.remove("isActive");
      });
    });

    
    // Toggle select on label click
    elSelectPriceBuyValue.addEventListener("click", (e) => {
      elSelectPriceBuy.classList.toggle("isActive");
    });

 
    document.addEventListener("click", (e) => {
      const didClickedOutside = !elSelectPriceBuy.contains(event.target);
      if (didClickedOutside) {
        elSelectPriceBuy.classList.remove("isActive");
      }
    });

    Array.from(elSelectLocationRentOptions.children).forEach(function (elOption) {
      elOption.addEventListener("click", (e) => {
       
        elSelectLocationRentTrigger.textContent = e.target.textContent;
        // Close select
        elSelectLocationRent.classList.remove("isActive");
      });
    });

    
    // Toggle select on label click
    elSelectLocationRentValue.addEventListener("click", (e) => {
      elSelectLocationRent.classList.toggle("isActive");
    });

 
    document.addEventListener("click", (e) => {
      const didClickedOutside = !elSelectLocationRent.contains(event.target);
      if (didClickedOutside) {
        elSelectLocationRent.classList.remove("isActive");
      }
    });




    Array.from(elSelectPropertyRentOptions.children).forEach(function (elOption) {
      elOption.addEventListener("click", (e) => {
       
        elSelectPropertyRentTrigger.textContent = e.target.textContent;
        // Close select
        elSelectPropertyRent.classList.remove("isActive");
      });
    });

    
    // Toggle select on label click
    elSelectPropertyRentValue.addEventListener("click", (e) => {
      elSelectPropertyRent.classList.toggle("isActive");
    });

 
    document.addEventListener("click", (e) => {
      const didClickedOutside = !elSelectPropertyRent.contains(event.target);
      if (didClickedOutside) {
        elSelectPropertyRent.classList.remove("isActive");
      }
    });



    Array.from(elSelectPriceRentOptions.children).forEach(function (elOption) {
      elOption.addEventListener("click", (e) => {
       
        elSelectPriceRentTrigger.textContent = e.target.textContent;
        // Close select
        elSelectPriceRent.classList.remove("isActive");
      });
    });

    
    // Toggle select on label click
    elSelectPriceRentValue.addEventListener("click", (e) => {
      elSelectPriceRent.classList.toggle("isActive");
    });

 
    document.addEventListener("click", (e) => {
      const didClickedOutside = !elSelectPriceRent.contains(event.target);
      if (didClickedOutside) {
        elSelectPriceRent.classList.remove("isActive");
      }
    });

    Array.from(elSelectLocationSellOptions.children).forEach(function (elOption) {
      elOption.addEventListener("click", (e) => {
       
        elSelectLocationSellTrigger.textContent = e.target.textContent;
        // Close select
        elSelectLocationSell.classList.remove("isActive");
      });
    });

    
    // Toggle select on label click
    elSelectLocationSellValue.addEventListener("click", (e) => {
      elSelectLocationSell.classList.toggle("isActive");
    });

 
    document.addEventListener("click", (e) => {
      const didClickedOutside = !elSelectLocationSell.contains(event.target);
      if (didClickedOutside) {
        elSelectLocationSell.classList.remove("isActive");
      }
    });




    Array.from(elSelectPropertySellOptions.children).forEach(function (elOption) {
      elOption.addEventListener("click", (e) => {
       
        elSelectPropertySellTrigger.textContent = e.target.textContent;
        // Close select
        elSelectPropertySell.classList.remove("isActive");
      });
    });

    
    // Toggle select on label click
    elSelectPropertySellValue.addEventListener("click", (e) => {
      elSelectPropertySell.classList.toggle("isActive");
    });

 
    document.addEventListener("click", (e) => {
      const didClickedOutside = !elSelectPropertySell.contains(event.target);
      if (didClickedOutside) {
        elSelectPropertySell.classList.remove("isActive");
      }
    });



    Array.from(elSelectPriceSellOptions.children).forEach(function (elOption) {
      elOption.addEventListener("click", (e) => {
       
        elSelectPriceSellTrigger.textContent = e.target.textContent;
        // Close select
        elSelectPriceSell.classList.remove("isActive");
      });
    });

    
    // Toggle select on label click
    elSelectPriceSellValue.addEventListener("click", (e) => {
      elSelectPriceSell.classList.toggle("isActive");
    });

 
    document.addEventListener("click", (e) => {
      const didClickedOutside = !elSelectPriceSell.contains(event.target);
      if (didClickedOutside) {
        elSelectPriceSell.classList.remove("isActive");
      }
    });