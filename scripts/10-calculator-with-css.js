let calculation = localStorage.getItem('calculate') ? JSON.parse(localStorage.getItem('calculate')) : '';
            document.querySelector('.txt').innerHTML=JSON.parse(localStorage.getItem('calculate'));
            function calculate(a) {
                calculation += a;
                localStorage.setItem('calculate',JSON.stringify(calculation));
                console.log(calculation);
                document.querySelector('.txt').innerHTML=`${calculation}`;
            }