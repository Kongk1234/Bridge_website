function calculate3() {
    var myBox1 = document.getElementById('box1').value; 
       var myBox2 = document.getElementById('box2').value;
       var result2 = document.getElementById('result'); 
    var myResult = myBox1 * myBox2 / 1000 * 2.25;
    document.getElementById('result').value = myResult;
    var myBox4 = document.getElementById('box4').value; 
       var myBox5 = document.getElementById('box5').value;
       var result = document.getElementById('result1'); 
    var myResult1 = myBox4 * myBox5
    document.getElementById('result1').value = myResult1;   
    var myBox6 = document.getElementById('box6').value; 
       var myBox7 = document.getElementById('box7').value;
       var result = document.getElementById('result3'); 
    var myResult3 = myBox6 * myBox7
    document.getElementById('result3').value = myResult3; 
    var myBox8 = document.getElementById('box8').value; 
       var myBox9 = document.getElementById('box9').value;
       var result = document.getElementById('result4'); 
    var myResult4 = myBox8 / myBox9
    document.getElementById('result4').value = myResult4; 
}