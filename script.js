let list = document.getElementById("colorSelect");

let btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
    let Value = list.value;
for (let i = 0; i < list.length; i++) {
   // console.log(list.length)
    console.log(Value);
	if (list.options[i].value == Value) {
		list.remove(i);
		break;
	}
}
})
