let calci_buttons = document.getElementsByClassName('buttons');
let display_grid = document.getElementById('heads');
let get_buttons = Array.from(calci_buttons);

get_buttons.map((blocks)=>{blocks.onclick=(n)=>{
    
    if(n.target.innerText=='C'){display_grid.innerText='';}else
    if(n.target.innerText==`${String.fromCodePoint(0x2B05)}`){display_grid.innerText=display_grid.innerText.slice(0,-1);}else
    if(n.target.innerText=='='){try{
    display_grid.innerText=eval(display_grid.innerText);}catch{
        display_grid.innerText='yup, error!!';}}else{
            display_grid.innerText+=n.target.innerText;
        }
}});