$(document).ready(function () {
  $(".mail-button").click(function (event) {
      event.preventDefault();
      CopyToClipboard("soulgoodman@gmail.com", true, "Value copied");
  });
});

function CopyToClipboard(value) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val(value).select();
  document.execCommand("copy");
  $temp.remove();
  alert("Value copied")
}