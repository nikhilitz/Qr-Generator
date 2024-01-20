
function genQr() {
    input=document.getElementById("input");
    img=document.querySelector(".container #im #img");
    ele=input.value;
    if(ele==""){
        alert("Enter text or url");
    }
    url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${ele}`;
    img.src=url;
    img.classList.add("show");

}