(function () {
    const mainMenu = document.getElementById('main-menu');
    const navBar = document.getElementById('nav-bar');
    const subMenu = document.getElementById('sub-menu');
    const icons = document.getElementById('icons');
    const fieldSearch = document.getElementById('search');
    const iconSearch = document.getElementById('search-icon');


    iconSearch.addEventListener('click', searchField, false);

    function searchField (){
        if (!fieldSearch.style.display || fieldSearch.style.display === 'none'){
            fieldSearch.style.display = 'block';
        }
        else if (fieldSearch.style.display) {
            fieldSearch.style.display = 'none';
        }
    }


    navBar.addEventListener('mouseover', e => {
        if (e.target === mainMenu){
            subMenu.style.display = 'flex';
            mainMenu.classList.add('item-change');
            console.log(e);
        }
        
        if (e.target.classList.value === 'sub-menu__main-menu-item'){
            let listItem = e.target.innerText;
            let letter;

            e.target.innerHTML = '';

            for (let i = 0; i < listItem.length; i++){
                if (i % 2 !== 0){

                    let span = document.createElement('span');
                    span.className = "yellow-letter";
                    span.innerText = listItem[i];

                    e.target.appendChild(span);
                    continue
                }

                letter = document.createTextNode(listItem[i]);
                e.target.appendChild(letter);
            }
        }
    })
})();