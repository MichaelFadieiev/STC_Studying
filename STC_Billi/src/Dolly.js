function reqRulesSally() {
    //document.getElementById("reqRules").innerHTML = "<li>Fuck it!</li>";
    var xhttp = new XMLHttpRequest();
    var reqRuleList="";
    xhttp.onreadystatechange = function() {
        //document.getElementById("reqRules").innerHTML = "<li>Oh... function is on!</li>";
        if (this.readyState == 4 && this.status == 200) {
            //document.getElementById("reqRules").innerHTML = "<li>And even if cafe is working!</li>";
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
}