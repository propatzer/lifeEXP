
let taskinput = document.querySelector(".taskinput");
let taskbutton = document.querySelector(".taskbutton");
let mylist = document.querySelector(".mylist");

let taskArray = [];  
let completedArray = [];  


taskbutton.addEventListener("click", function(){
    taskArray.push(taskinput.value);
    adtodo();
});

function adtodo(){
   mylist.innerHTML = "" ; 
    taskArray.map((item) => {  // item = taskinput.value
        mylist.innerHTML += `<li><div class ="texts_flex"><p>${item}</p></div><div class="buttons_flex"><button class ="edit">edit</button><button class ="delete">delete</button><button class ="complete">complete</button></div></li>`;  
        let remove = document.querySelectorAll(".delete");
        let removarr = Array.from(remove);  

        removarr.map((button, index) =>{   
            button.addEventListener("click", function(){
                taskArray.splice(index, 1); 
                adtodo();
            });
        });

        //creating edit button
        let edit = document.querySelectorAll(".edit");
        let editrArr = Array.from(edit);

        editrArr.map((element, index) => {
            element.addEventListener("click",function(){
                adtodo();
                updateData(index);
            });
        });

        let finished = document.querySelectorAll(".complete");
        let finishedArr = Array.from(finished);

        finishedArr.map((element, index) => {
            element.addEventListener("click",function(){
                completedArray.push(taskArray[index]);
                taskArray.splice(index, 1);
                exp();
                adtodo();
                }
                
                
            );
        });

        function updateData(items){

            mylist.children[items].outerHTML = `<li><div class ="texts_flex"><input class="updateInput" type="text" placeholder="update"></div><div class="buttons_flex"><button class ="update">update</button><button class ="delete">delete</button></div></li>`;

            let update = document.querySelector(".update");
            let updateInput = document.querySelector(".updateInput");

            update.addEventListener("click", function(){
                  taskArray.splice(items, 1, updateInput.value)
                  adtodo();
            });

            let remove = document.querySelectorAll(".delete");
            let removarr = Array.from(remove);  
    
            removarr.map((button, index) =>{   
                button.addEventListener("click", function(){
                    taskArray.splice(index, 1); 
                    adtodo();
                });
            });

            let reset = document.querySelectorAll(".reset");

            resetArr.map((element, index) => {
                element.addEventListener("click",function(){
                    for (let i = 0; i < taskArray.length; i++) {
                        taskArray.pop();
                    }
                    for (let i = 0; i < completedArray.length; i++) {
                        completedArray.pop();
                    }
                    exp();
                    adtodo();
                });
            });
        };  
   });
};

function exp(){
    let exp = document.querySelector(".exp");
    let totalExp = completedArray.length * 10
        exp.innerHTML = `Exp: ${totalExp}`;
    }

