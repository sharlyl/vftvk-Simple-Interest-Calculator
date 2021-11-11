function updateRate(){
        var rate = document.getElementById("rate").value
        document.getElementById("rate_val").innerHTML = +rate+"%";
}

function compute(){
    var principal = document.getElementById("principal").value;
    
    if (principal <=0){
        alert("Enter a positive number")
        document.getElementByValue("Compute Interest").focus();
    } else{
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);

        document.getElementById("result").innerHTML="<p>If you deposit <mark>"+principal+"</mark>,\
        \<br>at an interest rate of <mark>"+rate+"%</mark>.\
        \<br>You will receive an amount of <mark>"+interest+"</mark>,\
        \<br>in the year <mark>"+year+"</mark>\
        \</p>";

        var target_interest = document.getElementById("target_interest").value;
        if(target_interest!=""){
            if(interest<target_interest){
                document.getElementById("recommendation").innerHTML="<p>To meet your tagret, you need to \<br> increase the \
                <mark>Amount</mark> invested, the Interest <mark>Rate</mark>, \
                \<br>or <mark>No. of Years</mark></p>"
            }else{
                document.getElementById("recommendation").innerHTML="<p>You will achieve your target</p>"
            }
        }
    }
}

       