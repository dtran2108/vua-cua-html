function copyToClipboard() {
  var copyText = document.getElementById("couponCode");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  
  var tooltip = document.getElementById("couponCode");
  tooltip.innerHTML = "Copied: " + copyText.value;
}

function outFunc() {
  var tooltip = document.getElementById("couponCode");
  tooltip.innerHTML = "Copy to clipboard";
}