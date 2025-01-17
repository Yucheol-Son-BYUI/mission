const select = document.querySelector("#visualMode")
const body = document.body;
select.addEventListener("change", e => {
    const mode = e.target.value
    if(mode == 'dark')
        darkMode();
    else
        lightMode();

    function darkMode(){
        body.classList.add('dark')
    }

    function lightMode(){
        body.classList.remove('dark')
    }
})
