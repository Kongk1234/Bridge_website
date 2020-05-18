function calculate3() {
              var myBox1 = document.getElementById('box1').value; 
                 var myBox2 = document.getElementById('box2').value;
                    var myBox3 = document.getElementById('box3').value
                 var result2 = document.getElementById('result'); 
              var myResult = myBox1 * myBox2 * myBox3;
              document.getElementById('result').value = myResult;
              var myBox4 = document.getElementById('box4').value; 
                 var myBox5 = document.getElementById('box5').value;
                    var myBox6 = document.getElementById('box6').value;
                 var result = document.getElementById('result1'); 
              var myResult1 = myBox4 * myBox5 * myBox6;
              document.getElementById('result1').value = myResult1;   
                var myResult3 = myResult1 - myResult;
              document.getElementById('result3').value = myResult3;   
               bridgebreak(myResult3)
               function bridgebreak(brake){
                  var x = Math.sign(brake)
                  if(x == -1){
                  document.getElementById('status').innerHTML = "Broen er i stykker"
                  }
                  else if(x == 1){
                     document.getElementById('status').innerHTML = "Broen er fuld funktionel"
                  }
                  else if(x == 0){
                     document.getElementById('status').innerHTML = "Broen er tæt på at gå i stykker"
                  }
               }
            }     