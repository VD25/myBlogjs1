var familyimage=["brother.jpg", "mother.png", "father.png"];
var i=0;
function nextslide(){
    document.getElementById("image").src=familyimage[i];
    i++;
}
