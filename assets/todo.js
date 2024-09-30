document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");  // inputun deyerini tutur
    const addTaskButton = document.getElementById("addTaskButton"); // inputun buttonunu tutur
    const taskList = document.getElementById("taskList"); // ul elementini tutur cunki daxilinde li elementleri yazilacaq elave olunanda

    addTaskButton.addEventListener("click", () => { // button click olduqda
        const taskText = taskInput.value.trim(); // inputun deyerinde bosluqlar olmasin yeni yazilmalidir her hansi bir sey inputa trim boslugu kesir

        if (taskText) { // eger bosluq deyilse yeni her hansi bir sey yazilibsa
            const li = document.createElement("li"); // ve li elementini yaradiriq her defe elave olunanda li elementi yaratsin
            li.className = "d-flex justify-content-between text-white my-2"; // li elementine class veririki (bootstrap classlaridi)
            li.style.listStyle = "none"; // li elementin evvelinde noqte olur o olmasin deye yigisdiririq

            li.innerHTML = `
                ${taskText}
                <button class="remove">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            `;  // innerHtml li elementin daxilini yazir yeni burda taskText inputdan yazilan deyerdi ve button ise her defe li artirilanda silmek iconuda gelsin onunla birlikde 

            taskList.appendChild(li); // taskList ul idi ve appendChild li - ni elave edir ul-ye her defe 
            taskInput.value = "";  // elave olunduqdan sonra ise input bos olur

            li.querySelector(".remove").addEventListener("click", () => { // burada ise silmek iconunu tuturuq ve click olundugu zaman 
                taskList.removeChild(li); // li elementini silecek
            });
        }
    });

});
