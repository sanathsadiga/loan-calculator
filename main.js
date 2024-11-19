

document.getElementById('loan-form').addEventListener('submit', function(e){

    document.getElementById("results").style.display="none";
    document.getElementById("loading").style.display="block";
    setTimeout(calculate, 2000);
    e.preventDefault();
});


function calculate(e){

    const amount = document.getElementById("loan_amount");
    const interest = document.getElementById("loan_interest");
    const years = document.getElementById("years");
    const mp = document.getElementById("monthly_payment");
    const tamount = document.getElementById("total_amount");
    const ti = document.getElementById("total_interest");
    
    
    

    
    const pa = parseFloat(amount.value);
    const ci = parseFloat(interest.value)/100/12;
    const cp = parseFloat(years.value)*12;
    const x= Math.pow(1+ci, cp);
    const monthly = (pa * x * ci) / (x-1);

    if(isFinite(monthly)){
        mp.value = monthly.toFixed(2);
        tamount.value = (monthly * cp).toFixed(2);
        ti.value = (monthly *cp - pa). toFixed(2);
        console.log(mp.value);
        
        document.getElementById("results").style.display="block";
        document.getElementById("loading").style.display="none";
    }else{
        showalert('Please enter the number');
    }

    e.preventDefault();
}

function showalert(error){
    const errordiv = document.createElement('div');
    document.getElementById("loading").style.display="none";
    errordiv.className="alert alert-danger";
    errordiv.appendChild(document.createTextNode(error));
    const card = document.querySelector('.card');
    const heading=document.querySelector('.heading');
    card.insertBefore(errordiv, heading);
    setTimeout(function(){
        document.querySelector('.alert'). remove();
    },3000 )
};
