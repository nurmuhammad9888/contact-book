const elForm = document.querySelector(".form-js");
const elInputName = document.querySelector(".input-name-js");
const elInputDatalist = document.querySelector(".input-datalist-js");
const elInputNumber = document.querySelector(".input-number-js");
const elList = document.querySelector(".list");

const array = [];

elForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    
    const obj = {
        Name:elInputName.value,
        inputDatalist:elInputDatalist.value,
        inputNumber:elInputNumber.value,
    }
    array.push(obj)
    
    elList.textContent = "";
    elForm.reset();
    
    for (let arry of array) {
        const item = document.createElement("li");
        item.classList.add( "w-[320px]","shadow-xl", "p-5","mx-5","rounded")
        
        const yourname = document.createElement("h4");
        yourname.textContent = arry.Name
        yourname.classList.add("text-[24px]","mt-3","font-bold")
        item.appendChild(yourname);
        
        const inputDatalist = document.createElement("p");
        inputDatalist.textContent = arry.inputDatalist;
        inputDatalist.classList.add("my-5")
        item.appendChild(inputDatalist);
        
        const numberInput = document.createElement("a");
        numberInput.textContent = arry.inputNumber
        numberInput.setAttribute("href", `tel:+${arry.inputNumber}`)
        numberInput.classList.add("text-[18px]", "text-blue-800")
        item.appendChild(numberInput);
        
        let btn = document.createElement("button");
        btn.textContent = "Delete";
        btn.classList.add("p-3", "bg-sky-500", "text-white", "rounded", "block", "mt-3", "max-w-100px");
        btn.setAttribute("type","button")
        item.appendChild(btn)
        elList.appendChild(item)

        btn.addEventListener("click", function(){
            item.classList.add("hidden");
        })
    }
    
})