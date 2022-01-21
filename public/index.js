let students = [
{
    lname:"tamez",
    name:"Ezequiel",
    age:26,
    birthday:{
        year:1995,
        month:04,
        day:24
    },
    career: "TIC"
}
]

for(let i = 0; students.length >i;i++){
    let templ = document.getElementById("tbodytempl").content.clonenode(true);
    let tdnumber = templ.querySelector('span[name=tbodyNumber]')
    let tdname = templ.querySelector('span[name=tbodyName]')
    let tdage = templ.querySelector('span[name=tbodyAge]')
    let tdcareer = templ.querySelector('span[name=tbodyCareer]')

    tdnumber.innerText= i+1;
    tdage.innerText=students[i].lname + " " + students[i].name;
    tdcareer.innerText= students[i].career;
}