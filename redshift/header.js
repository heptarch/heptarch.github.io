function includeHeader() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "header.html", true);
  xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      document.getElementById("header").innerHTML = this.responseText;
    }
  };
  xhr.send();
}
