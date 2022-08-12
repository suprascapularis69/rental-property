const elSelect = document.getElementsByClassName("js-select");

Array.from(elSelect).forEach(item => {
  const elSelectValue = item.children[0];
  const elSelectOptions = item.children[1];
  const elSelectTrigger = item.children[2];
  const locationLabel = elSelectValue.getAttribute("data-value");

    Array.from(elSelectOptions.children).forEach(elOption => {
      elOption.addEventListener("click", (e) => {
        elSelectTrigger.textContent = e.target.textContent;

        // Close select
        item.classList.remove("isActive");
      })
    })
     
    // Toggle select on label click
    elSelectValue.addEventListener("click", () => {
      item.classList.toggle("isActive");
    })

    document.addEventListener("click", (e) => {
      const didClickedOutside = item.includes(e.target);
      if (didClickedOutside) {
        item.classList.remove('isActive');
      }
    })
  });
