let practice1 = [];
            let practice2 = [];
            let practice3 = [];

            function addtolist1() {
                practice1.push(document.querySelector('.js-txt1').value);
                console.log(practice1);
                document.querySelector('.js-txt1').value = '';
            }

            function addtolist2() {
                let a = document.querySelector('.js-txt2');
                practice2.push(a.value);
                console.log(practice2);
                let b = '';
                for(let i=0; i<practice2.length;i++) {
                    b += `<p>${practice2[i]}</p>`;
                }
                console.log(b);
                document.querySelector('.js-prnttest').innerHTML=b;
                document.querySelector('.js-txt2').value = '';          
            }

            function addtolist3() {
                let todo = document.querySelector('.js-txt3').value;
                let dueDate = document.querySelector('.js-dt1').value;
                practice3.push({todo, dueDate});
                //practice3.push(a+b);
                // console.log(practice3);
                viewList3();
                document.querySelector('.js-txt3').value = '';
                document.querySelector('.js-dt1').value = '';
            }

            function viewList3() {
                let c ='';
                for(let i=0; i<practice3.length; i++) {
                    // console.log(practice3[i]);
                    // const todo = practice3[i].todo;
                    // const date = practice3[i].dueDate;
                    let {todo, dueDate} = practice3[i];
                    // console.log(todo, dueDate);
                    c += `<div class="todo-row">
                            <div class="js-txt3 t">${todo}</div>
                            <div class="js-dt1 t">${dueDate}</div>
                            <button class="js-dlt js-btn3 b" onclick="deleteTodo(${i})">Delete</button>
                          </div>`;
                }
                // console.log(c);
                document.querySelector('.js-prnttest2').innerHTML = c;
            }

            function deleteTodo(i) {
                practice3.splice(i,1);
                // console.log(practice3);
                viewList3();
            }
            
