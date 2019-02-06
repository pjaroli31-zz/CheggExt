

//alert('I am running');
if(window.location.href == "https://www.chegg.com/homework-help/expertquestion"){
	var ask = confirm("Should I skip the question ?");
}
//console.log();
if(ask == true){
    console.log("skippimh");
    document.getElementById("skipQuestion").click();
    document.getElementById("noSubKnowledge").checked = true;
    var classes = document.getElementsByClassName('primary btn-lg btn-primary');
    var btn1 = classes[0];
    btn1.click();
}
