let calculation=localStorage.getItem('cal')||'';
    
    document.querySelector('.js-result').innerHTML=calculation;
    function updateCalculation(num){
      calculation+=num;
      document.querySelector('.js-result').innerHTML=calculation;
    }
    function result(){
      calculation=eval(calculation);
      document.querySelector('.js-result').innerHTML=calculation;
      localStorage.setItem('cal',calculation);
    }