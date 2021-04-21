function copyToClipboard() {
  var copyText = document.getElementById('couponCode');
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand('copy');

  var tooltip = document.getElementById('couponCode');
  tooltip.innerHTML = 'Copied: ' + copyText.value;
}

function outFunc() {
  var tooltip = document.getElementById('couponCode');
  tooltip.innerHTML = 'Copy to clipboard';
}

function expandImg(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById('expandedImg');
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = 'block';
}

function removeItem(item) {
  item.parentElement.querySelector("#quantity").remove();
  item.parentElement.querySelector("#removeBtn").remove();
}

function createRemoveBtn() {
  var button = document.createElement("button");
  button.setAttribute('class', 'icon-button');
  button.setAttribute('onclick', 'removeItem(this)');
  button.setAttribute('id', 'removeBtn');

  var remove_badge = document.createElement('span');
  remove_badge.setAttribute('class', 'badge bg-danger');
  remove_badge.innerHTML = "remove";

  button.appendChild(remove_badge)
  return button;
}

function addItem(addButton) {
  var parent = addButton.parentElement
  var quantity_el = parent.querySelector('#quantity');
  if (quantity_el) {
    var quantity = Number(quantity_el.innerHTML.slice(1));
    quantity += 1;
    quantity_el.innerHTML = 'x' + quantity;
  } else {
    var new_el = document.createElement('span');
    new_el.setAttribute('id', 'quantity');
    new_el.setAttribute('class', 'me-2');
    new_el.innerHTML = 'x1';
    
    parent.appendChild(new_el);
    parent.appendChild(createRemoveBtn());
  }
}
