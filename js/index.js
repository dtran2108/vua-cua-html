// hide and show header on scroll
var previousScroll = 0;
document.addEventListener('scroll', function (e) {
  var currentScroll = document.documentElement.scrollTop;
  if (currentScroll > 0 && currentScroll < document.body.clientHeight - window.innerHeight) {
    if (currentScroll > previousScroll) {
      setTimeout(hideHeader('simplifiedHeader'), 1000);
      setTimeout(hideHeader('mainHeader'), 1000);
    } else {
      setTimeout(showHeader('simplifiedHeader'), 1000);
    }
    previousScroll = currentScroll;
  } else if (currentScroll === 0) {
    setTimeout(hideHeader('simplifiedHeader'), 1000);
    setTimeout(showHeader('mainHeader'), 1000);
    previousScroll = currentScroll;
  }
});
// hide and show header on scroll

function hideHeader(type) {
  let headerClasslist = document.getElementById(type).classList;
  headerClasslist.remove('is-visible');
  headerClasslist.add('is-hidden');
}
function showHeader(type) {
  let headerClasslist = document.getElementById(type).classList;
  headerClasslist.remove('is-hidden');
  headerClasslist.add('is-visible');
}

function showDropdown() {
  document.getElementsByClassName('dropdown-content')[0].style.display = 'flex';
}

// hide dropdown on click outside
window.addEventListener('click', function (e) {
  var dropdownContent = document.getElementsByClassName('dropdown-content')[0];
  if (!dropdownContent.contains(e.target)) {
    dropdownContent.style.display = 'none';
  }
});


function copyToClipboard() {
  let copyText = document.getElementById('couponCode');
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand('copy');

  let tooltip = document.getElementById('couponCode');
  tooltip.innerHTML = 'Copied: ' + copyText.value;
}

function outFunc() {
  let tooltip = document.getElementById('couponCode');
  tooltip.innerHTML = 'Copy to clipboard';
}

function expandImg(imgs) {
  // Get the expanded image
  let expandImg = document.getElementById('expandedImg');
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = 'block';
}

function removeItem(item) {
  item.parentElement.querySelector('#quantity').remove();
  item.parentElement.querySelector('#removeBtn').remove();
}

function createRemoveBtn() {
  let button = document.createElement('button');
  button.setAttribute('class', 'icon-button');
  button.setAttribute('onclick', 'removeItem(this)');
  button.setAttribute('id', 'removeBtn');

  let remove_badge = document.createElement('span');
  remove_badge.setAttribute('class', 'badge bg-danger');
  remove_badge.innerHTML = 'remove';

  button.appendChild(remove_badge);
  return button;
}

function addItem(addButton) {
  let parent = addButton.parentElement;
  let quantity_el = parent.querySelector('#quantity');
  if (quantity_el) {
    let quantity = Number(quantity_el.innerHTML.slice(1));
    quantity += 1;
    quantity_el.innerHTML = 'x' + quantity;
  } else {
    let new_el = document.createElement('span');
    new_el.setAttribute('id', 'quantity');
    new_el.setAttribute('class', 'me-2');
    new_el.innerHTML = 'x1';

    parent.appendChild(new_el);
    parent.appendChild(createRemoveBtn());
  }
}

function stepOne() {
  document.getElementById('stepOneHeader').style.display = 'none';
  document.getElementById('stepTwoHeader').style.display = 'block';
  const stepOneButtons = document.getElementsByClassName('stepOneButton');
  const stepTwoButtons = document.getElementsByClassName('stepTwoButton');
  for (const btn of stepOneButtons) {
    btn.style.display = 'none';
  }
  for (const btn of stepTwoButtons) {
    btn.style.display = 'block';
  }
}

function stepTwo() {
  document.getElementById('stepTwoHeader').style.display = 'none';
  document.getElementById('stepThreeHeader').style.display = 'block';
  const stepTwoButtons = document.getElementsByClassName('stepTwoButton');
  const stepThreeButtons = document.getElementsByClassName('stepThreeButton');
  for (const btn of stepTwoButtons) {
    btn.style.display = 'none';
  }
  for (const btn of stepThreeButtons) {
    btn.style.display = 'block';
  }
}

function stepThree() {
  document.getElementById('stepThreeHeader').style.display = 'none';
  document.getElementById('stepOneHeader').style.display = 'block';
  const stepThreeButtons = document.getElementsByClassName('stepThreeButton');
  const stepOneButtons = document.getElementsByClassName('stepOneButton');
  for (const btn of stepThreeButtons) {
    btn.style.display = 'none';
  }
  for (const btn of stepOneButtons) {
    btn.style.display = 'block';
  }
}

function setComboLoading() {
  // make combo loading
  let spinner = document.getElementById('comboLoading');
  spinner.style.display = 'flex';
  document.getElementById('comboCol1').style.display = 'none';
  document.getElementById('comboCol2').style.display = 'none';
  setTimeout(function () {
    spinner.style.display = 'none';
    document.getElementById('comboCol1').style.display = 'block';
    document.getElementById('comboCol2').style.display = 'block';
  }, 1000);
}

function setActiveChain(currentChain) {
  let parent = currentChain.parentElement;
  let currentActive = parent.querySelector('.active');
  currentActive.classList.remove('active');
  currentChain.classList.add('active');
  setComboLoading();
}
