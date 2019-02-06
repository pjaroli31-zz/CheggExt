
if(window.location.href == "https://www.chegg.com/homework-help/expertquestion" ){
    console.log("skippimh");
    document.getElementById("skipQuestion").click();
    document.getElementById("noSubKnowledge").checked = true;
    var classes = document.getElementsByClassName('primary btn-lg btn-primary');
    var btn1 = classes[0];
    btn1.click();
}
else{

	alert("Extension can be used only chegg site.")
}

