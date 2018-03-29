function devModelsSally() {
    var xhttp_a = new XMLHttpRequest();
    var devModelsList="";
    xhttp_a.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var j;
            var x_a = this.responseXML.getElementsByTagName("devModels")[0].getElementsByTagName("devModel");
            for ( j = 0; j< x_a.length; j++) {
                devModelsList += "<li class=\"tooltip\">" +
                                 x_a[j].getElementsByTagName("name")[0].childNodes[0].nodeValue +
                                 "<table class=\"tooltipData\"><tr><td width=400px>" +
                                 x_a[j].getElementsByTagName("description")[0].childNodes[0].nodeValue +
                                 "</td><td><img src=\"" +
                                 x_a[j].getElementsByTagName("imgFile")[0].childNodes[0].nodeValue +
                                 "\" alt=\"Oops! Missing image;)\"></td></tr></table></li>";
            }
        }
    document.getElementById("devModels").innerHTML = devModelsList;
    }
    xhttp_a.open("GET", "Sally.xml", true);
    xhttp_a.send();
}

function reqRulesSally() {
    //document.getElementById("reqRules").innerHTML = "<li>Fuck it!</li>";
    if (document.getElementById("reqHintsBut").innerHTML == "Show") {
        var xhttp = new XMLHttpRequest();
        var reqRuleList="";
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var i;
                var x = this.responseXML.getElementsByTagName("requirements")[0].getElementsByTagName("rule");
                for (i = 0; i< x.length; i++) {
                    //document.getElementById("reqRules").innerHTML = "<li>" + x[i].childNodes[0].nodeValue + "</li>";
                    reqRuleList += "<li>" + x[i].childNodes[0].nodeValue + "</li>";
                    //document.getElementById("reqRules").innerHTML = reqRuleList;
                    }
                }
            document.getElementById("reqRules").innerHTML = reqRuleList;
            }
        xhttp.open("GET", "Sally.xml", true);
        //document.getElementById("reqRules").innerHTML = reqRuleList;
        xhttp.send();
        document.getElementById("reqHintsBut").innerHTML = "Hide";
        }
    else {
        document.getElementById("reqRules").innerHTML = "";
        document.getElementById("reqHintsBut").innerHTML = "Show";
        }

}

