function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
   var year = new Date().getFullYear()+parseInt(years);

    if (principal == "") { //Here Check is empty
        alert("Amount can't by empty or alphabet character");
        document.getElementById("principal").focus();
        return false;
    }else{
        if (principal <= 0) { //Here check is a positive number
            alert("Enter a positive number");
            document.getElementById("principal").focus();
            return false;
        }
    } 

    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
    var result="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"
    document.getElementById("result").innerHTML=result;
}

function showVal(newVal){ //Show range value in span
    document.getElementById("showRate").innerHTML=newVal + '%';
}
