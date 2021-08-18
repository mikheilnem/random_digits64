function makeid(length) {
  var result = '';
  var characters = "abcdef1234567890";
  var charactersLength = characters.length-8;
  var digitsLength = length-8;
  
  var ran = Math.random() * 0xffffffff << 0;
  var digits8 = Math.abs(ran).toString(16).padStart(8, '0');
  
  for (var i = 0; i < digitsLength; i++)
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  result = digits8 + result;
  return result;
}
function playDigits() {
  //random 40 digits
  address = "0x"+makeid(40);
  //random 64 digits
  privatekey = makeid(64);
  
  console.log("Start >>>>>>>>>>")
  console.log(address)
  console.log(privatekey)
  console.log(">>>>>>>>>> END")
}
var generateDigits = setInterval(function(){ playDigits(); }, 3000);
setTimeout(function(){ clearInterval(generateDigits); }, 3000000);