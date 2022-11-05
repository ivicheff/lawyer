$(document).ready(function () {
  $(".mail-button").click(function (event) {
      event.preventDefault();
      CopyToClipboard("soulgoodman@gmail.com", true, "Value copied");
  });
});

function CopyToClipboard(value, showNotification, notificationText) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val(value).select();
  document.execCommand("copy");
  $temp.remove();
  alert("Value copied")

  if (typeof showNotification === 'undefined') {
      showNotification = true;
  }
  if (typeof notificationText === 'undefined') {
      notificationText = "Copied to clipboard";
  }

  var notificationTag = $("div.copy-notification");
  if (showNotification && notificationTag.length == 0) {
      notificationTag = $("<div/>", { "class": "copy-notification", text: notificationText });
      $("body").append(notificationTag);

      notificationTag.fadeIn("slow", function () {
          setTimeout(function () {
              notificationTag.fadeOut("slow", function () {
                  notificationTag.remove();
              });
          }, 1000);
      });
  }
}