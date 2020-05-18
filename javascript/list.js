function displayList() {
const r_text = new Array ();
r_text[0] = "Kongen af zimbabwe, spist engang en kebab på broen";
r_text[1] = "Broen er vandtæt";
r_text[2] = "Broen er ikke på månen";
r_text[3] = "Dronningen af england lavede en dej på broen";
r_text[4] = "Jeg tabte i sten, saks, papir på broen";
r_text[5] = "Der er vand under broen";
r_text[6] = "Broen er ikke lavet af ost";
r_text[7] = "Julemanden ramte engang ind i broen med sin slæde";

var i = Math.random();
i = r_text.length * i;
i = Math.floor(i);
var i = Math.floor(r_text.length * Math.random())
var result = document.getElementById('result1'); 
    var myResult1 = r_text[i]
    document.getElementById('result1').value = myResult1;
}