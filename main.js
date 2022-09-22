const input_text = document.querySelector('.input_text');
const output_text = document.querySelector('.output_text');


input_text.addEventListener('input',(event)=>{
    let input_text_el= event.target.value;
    let output_text_arr = [];
    for (var i = 0; i < input_text_el.length;i++)
    {
        output_text_arr.push(input_text_el.charCodeAt(i).toString(2));
    }
    output_text.innerHTML = output_text_arr.join(" ");
});

