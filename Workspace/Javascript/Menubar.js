function Menubar() {
    var path = "./Database/Application/Menubar.json"
    var txt = null;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            txt = this.responseText;
            var getContact = JSON.parse(txt);
            sidebar = document.getElementById("sidebar");
            for (i = 0; i < getContact.Menu_bar.length; i++) {
                div = document.createElement("div");
                div.className = "sidebar-button";
                div.style = "width:100%;  text-align:center; ";
                lnk = document.createElement("a");
                lnk.innerText = getContact.Menu_bar[i];
                lnk.href = "#";
                lnk.style = "color:#fff!important; ";
                appended_div = sidebar.appendChild(div);
                appended_div.appendChild(lnk);
                sidebar.append("\n");
            }
        }
    };
    xhttp.open('GET', path, true);
    xhttp.send();
}
