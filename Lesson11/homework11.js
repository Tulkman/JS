// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
function save_data()
{ let input1 = document.getElementById('name');
 let input2 = document.getElementById('age');
    localStorage.setItem('user_name', input1.value);
    localStorage.setItem('user_age', input2.value);
    let formName = localStorage.getItem('user_name');
    let formAge = localStorage.getItem('user_age');
}

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
function save_data_second()
{ let inputModel = document.getElementById('model');
    let inpuType = document.getElementById('type');
    let inpuVolume = document.getElementById('volume');
    localStorage.setItem('model', inputModel.value);
    localStorage.setItem('type', inpuType.value);
    localStorage.setItem('volume', inpuVolume.value);
    let formModel = localStorage.getItem('model');
    let formType = localStorage.getItem('type');
    let formVolume = localStorage.getItem('volume');
}
localStorage.setItem('form2', JSON.stringify(form2));
let form2JSON = localStorage.getItem('form2');
console.log(form2JSON);
let parse = JSON.parse(form2JSON);
console.log(parse);
localStorage.setItem('form2', JSON.stringify(parse));