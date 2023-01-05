let content = document.querySelector('#content');
let value = document.querySelector('#searchBar');
let textValue = document.getElementById('head');



// fetch('https://reqres.in/api/users?page=2')
// .then(response => response.json())
// .then(data => data.data.forEach(element =>{
//     console.log(element);
//     let row = `<tr>
//                 <td>${element.id}</td>
//                 <td><img src="${element.avatar}" height="50px" width="50px"></td>
//                 <td>${element.first_name} ${element.last_name}</td>
//                 <td>${element.email}</td>
//                 </tr>`;
//     content.innerHTML += row;
// })); 

function functionSearch(e){
    fetch('https://reqres.in/api/users?page=2')
.then(response => response.json())
.then(data => data.data.filter(element =>{

    if(element.email.includes(e.target.value))
    {
        let row = ` <tr>
                <td>${element.id}</td>
                <td><img src="${element.avatar}" width=50px></td>
                <td>${element.first_name} ${element.last_name}</td>
                <td>${element.email}</td>
                </tr>`
    content.innerHTML += row;
    }
    
})); 
}


