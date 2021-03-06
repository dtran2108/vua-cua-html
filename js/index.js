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
  if (document.getElementById(type)) {
    var headerClasslist = document.getElementById(type).classList;
    headerClasslist.remove('is-visible');
    headerClasslist.add('is-hidden');
  }
}
function showHeader(type) {
  if (document.getElementById(type)) {
    let headerClasslist = document.getElementById(type).classList;
    headerClasslist.remove('is-hidden');
    headerClasslist.add('is-visible');
  }
}

function showDropdown() {
  document.getElementsByClassName('dropdown-content')[0].style.display = 'flex';
}

// hide dropdown on click outside
window.addEventListener('click', function (e) {
  var dropdownContent = document.getElementsByClassName('dropdown-content')[0];
  if (dropdownContent)
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

function checkBackupPerson(checkbox) {
  if (checkbox.checked) {
    document.getElementById('backupPersonInfo').style.display = 'block';
  } else {
    document.getElementById('backupPersonInfo').style.display = 'none';
  }
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

function setMobileActiveChain(currentChain) {
  let parent = currentChain.parentElement.parentElement.parentElement;
  console.log('trandev ~ file: index.js ~ line 168 ~ setMobileActiveChain ~ parent', parent);
  let currentActive = parent.querySelector('.active');
  currentActive.classList.remove('active');
  currentChain.classList.add('active');
  setComboLoading();
}

function setCouponLoading(currentCategory) {
  var currentCategoryParent = currentCategory.parentElement;
  var activeCategory = currentCategoryParent.querySelector('.active');
  var activeLi = activeCategory.querySelector('.text-primary');
  activeCategory.classList.remove('active');
  activeLi.classList.remove('text-primary');
  activeLi.classList.add('gray-text');
  // set new active
  var newLi = currentCategory.querySelector('.gray-text');
  currentCategory.classList.add('active');
  newLi.classList.remove('gray-text');
  newLi.classList.add('text-primary');
  // set coupon loading
  var couponSection = document.getElementById('couponSection');
  var couponLoading = document.getElementById('couponLoading');
  couponSection.style.display = 'none';
  couponLoading.style.display = 'flex';
  setTimeout(function () {
    couponSection.style.display = 'block';
    couponLoading.style.display = 'none';
  }, 500);
}

// lazy load image
!(function (window) {
  var $q = function (q, res) {
      if (document.querySelectorAll) {
        res = document.querySelectorAll(q);
      } else {
        var d = document,
          a = d.styleSheets[0] || d.createStyleSheet();
        a.addRule(q, 'f:b');
        for (var l = d.all, b = 0, c = [], f = l.length; b < f; b++) l[b].currentStyle.f && c.push(l[b]);

        a.removeRule(0);
        res = c;
      }
      return res;
    },
    addEventListener = function (evt, fn) {
      window.addEventListener
        ? this.addEventListener(evt, fn, false)
        : window.attachEvent
        ? this.attachEvent('on' + evt, fn)
        : (this['on' + evt] = fn);
    },
    _has = function (obj, key) {
      return Object.prototype.hasOwnProperty.call(obj, key);
    };
  function loadImage(el, fn) {
    var img = new Image(),
      src = el.getAttribute('data-src');
    img.onload = function () {
      if (!!el.parent) el.parent.replaceChild(img, el);
      else el.src = src;

      fn ? fn() : null;
    };
    img.src = src;
  }

  function elementInViewport(el) {
    var rect = el.getBoundingClientRect();

    return rect.top >= 0 && rect.left >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight);
  }

  var images = new Array(),
    query = $q('img.lazy'),
    processScroll = function () {
      for (var i = 0; i < images.length; i++) {
        if (elementInViewport(images[i])) {
          loadImage(images[i], function () {
            images.splice(i, i);
          });
        }
      }
    };
  // Array.prototype.slice.call is not callable under our lovely IE8
  for (var i = 0; i < query.length; i++) {
    images.push(query[i]);
  }

  processScroll();
  addEventListener('scroll', processScroll);
})(this);

// for countdown timer
let today = new Date();
let dueDate = new Date(2021, 4, 15, 8, 0, 0, 0);
let remainingTime = new Date(dueDate.getTime() - today.getTime());
let days = remainingTime.getDate(); // starting number of days
let hours = remainingTime.getHours(); // starting number of hours
let minutes = remainingTime.getMinutes(); // starting number of minutes
let seconds = remainingTime.getSeconds(); // starting number of seconds

// converts all to seconds
let totalSeconds = Math.round(remainingTime / 1000);

//temporary seconds holder
let tempSeconds = totalSeconds;

// calculates number of days, hours, minutes and seconds from a given number of seconds
const convert = (value, inSeconds) => {
  if (value > inSeconds) {
    let x = value % inSeconds;
    tempSeconds = x;
    return Math.round((value - x) / inSeconds);
  } else {
    return 0;
  }
};

//sets seconds
const setSeconds = (s) => {
  document.querySelector('#seconds').textContent = s;
};

//sets minutes
const setMinutes = (m) => {
  document.querySelector('#minutes').textContent = m;
};

//sets hours
const setHours = (h) => {
  document.querySelector('#hours').textContent = h;
};

//sets Days
const setDays = (d) => {
  document.querySelector('#days').textContent = d;
};

// Update the count down every 1 second
var x = setInterval(() => {
  //clears countdown when all seconds are counted
  if (totalSeconds <= 0) {
    clearInterval(x);
  }
  setDays(convert(tempSeconds, 24 * 60 * 60));
  setHours(convert(tempSeconds, 60 * 60));
  setMinutes(convert(tempSeconds, 60));
  setSeconds(tempSeconds == 60 ? 59 : tempSeconds);
  totalSeconds--;
  tempSeconds = totalSeconds;
}, 1000);
