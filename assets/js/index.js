var contentHeadline = document.getElementById("contentHeadline");
var content1 = document.getElementById("content1");
var content2 = document.getElementById("content2");
var content3 = document.getElementById("content3");
var content4 = document.getElementById("content4");
var content5 = document.getElementById("content5");
var contentImage = document.getElementById("contentImage");

const urlParams = new URLSearchParams(window.location.search);
const sectionName = urlParams.get('name');

fillSection(sectionName);

function fillSection(secName)
{
    if(secName == "AmazonAM")
    {
        contentHeadline.innerHTML = "Amazon Account Managment";
        content1.innerHTML = "About account managment";
        content2.innerHTML = "About account managment";
        content3.innerHTML = "";
        content4.innerHTML = "";
        content5.innerHTML = "";
        contentImage.setAttribute("src","assets/images/right1.png");
    }
    else if(secName == "AmazonPL")
    {
        contentHeadline.innerHTML = "Product Listing On Amazon";
        content1.innerHTML = "About account managment";
        content2.innerHTML = "About account managment";
        content3.innerHTML = "";
        content4.innerHTML = "";
        content5.innerHTML = "";
        contentImage.setAttribute("src","assets/images/left3.png");
        
    }
    else if(secName == "AmazonPR")
    {
        contentHeadline.innerHTML = "Amazon Product Rsearch";
        content1.innerHTML = "About account managment";
        content2.innerHTML = "About account managment";
        content3.innerHTML = "";
        content4.innerHTML = "";
        content5.innerHTML = "";
        contentImage.setAttribute("src","assets/images/right3.png");

    }
}


function clearFormData(e){
    setTimeout(() => {
        var successAlert = document.getElementById("successAlert");
        successAlert.style.display = "block";


        var formDetails = e.target.parentNode.parentNode.parentNode;
        formDetails.childNodes[1].childNodes[1].childNodes[1].value = "";
        formDetails.childNodes[3].childNodes[1].childNodes[1].value = "";
        formDetails.childNodes[5].childNodes[1].childNodes[1].value = "";
        formDetails.childNodes[7].childNodes[1].childNodes[1].value = "";

        setTimeout(() => {
            location.reload();
        }, 2000);
    }, 3000);
}