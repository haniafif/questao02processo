function fibocal() {
  var numbertesting = 4
  var fibonacci = [];
  fibonacci[0] = 0;
  fibonacci[1] = 1;
  for (var i = 2; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}

if (fibonacci.includes(numbertesting))
    {  
        alert("Sim o valor pertence a sequencia fibonnaci até o vigésimo valor!")  
}   
else  
{  
        alert("O valor não pertence a sequencia fibonnaci até o vigésimo valor!")  
 
}
}