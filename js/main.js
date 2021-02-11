function currencyConverter(value) {
if(converter.bdt.value <= 0)
window.alert("Enter value Greater than 0");
else
{
   document.getElementById("dollar").value=(value/83.0287).toFixed(3)
  document.getElementById("inr").value=(value/1.13756).toFixed(3)
  document.getElementById("euro").value=(value/100.413).toFixed(3)
   document.getElementById("riyal").value=(value/22.1252).toFixed(3)
};
};

