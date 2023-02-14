var password = "FrontEnd Web Developer";
password = password.toUpperCase();

var hidden_password = "";
for(var i = 0; i < password.length; i++ ){
    if(password.charAt(i) == " ") {
        hidden_password = hidden_password + " ";

    } else {
        hidden_password = hidden_password + "-";
    }
}

var letters = new Array(32);
letters[0] = 'A';
letters[1] = 'Ą';
letters[2] = 'B';
letters[3] = 'C';
letters[4] = 'Ć';
letters[5] = 'D';
letters[6] = 'E';
letters[7] = 'Ę';
letters[8] = 'F';
letters[9] = 'G';
letters[10] = 'H';
letters[11] = 'I';
letters[12] = 'J';
letters[13] = 'K';
letters[14] = 'L';
letters[15] = 'Ł';
letters[16] = 'M';
letters[17] = 'N';
letters[18] = 'Ń';
letters[19] = 'O';
letters[20] = 'Ó';
letters[21] = 'P';
letters[22] = 'R';
letters[23] = 'S';
letters[24] = 'Ś';
letters[25] = 'T';
letters[26] = 'U';
letters[27] = 'W';
letters[28] = 'Y';
letters[29] = 'Z';
letters[30] = 'Ź';
letters[31] = 'Ż';


window.onload = start;

function start() {
    letter_generator();
    setPassword();
   
}

function letter_generator(){
var html = '';

for(var i =0; i<32; i++){
    var temp = '<div>' + letters[i] + '</div>'
    html = html + temp;
    if((i+1) % 8 == 0){
        html = html + '<br>';
    }
}
document.getElementById("alphabet").innerHTML = html;
}

function setPassword() {
    document.getElementById("haslo").innerHTML = hidden_password;
}

