
let url="https://63f5f6d5ab76703b15b55021.mockapi.io/products"
let sidebarprdtbtn=document.getElementById("sidebarprdtbtn")
let addprdtform=document.getElementById("addprdtform")
let Addprdocutsbtn=document.getElementById("Addprdocutsbtn")
let editprdocutsbtn=document.getElementById("editprdocutsbtn")
let editprdtform=document.getElementById("editprdtform")

Addprdocutsbtn.addEventListener("click",() =>{
    if(addprdtform.style.display=="block"){
        addprdtform.style.display="none"
    }else{
        addprdtform.style.display="block"
    }
    console.log(addprdtform.style.display)
})
editprdocutsbtn.addEventListener("click",() =>{
    if(editprdtform.style.display=="block"){
        editprdtform.style.display="none"
    }else{
        editprdtform.style.display="block"
    }
})

window.addEventListener("load",() =>{
    fetchCard(url)
})
sidebarprdtbtn.addEventListener("click",()=>{
    fetchCard(url)
})

// functions
function fetchCard(url){
    fetch(url)
    .then(res => res.json())
    .then((data) =>{
        console.log(data)
        renderCard(data)
    })
}

function renderCard(data){
    tabledata.innerHTML=null
    data.forEach((element) => {
        let tr=document.createElement("tr")
       let td1=document.createElement("td")
       let pro_img=document.createElement("img")
       pro_img.setAttribute("src",element.image[0])
       td1.append(pro_img)
       td1.setAttribute("id","td1")
       let td2=document.createElement("td")
       td2.setAttribute("id","td2")
       let td3=document.createElement("td")
       td3.setAttribute("id","td3")
       let td4=document.createElement("td")
       td4.setAttribute("id","td4")
       let td5=document.createElement("td")
       td5.setAttribute("id","td5")
       let td6=document.createElement("td")
       td6.setAttribute("id","td6")
       let td7=document.createElement("td")
       td7.setAttribute("id","td7")
       let td8=document.createElement("td")
       td8.setAttribute("id","td8")
      
       let editprdt=document.createElement("div")
       let editbtn=document.createElement("button")
       let deletebtn=document.createElement("button")
       editprdt.append(editbtn,deletebtn)
       editprdt.setAttribute("id","editprdt")
       editbtn.setAttribute("id","edit")
       editbtn.setAttribute("data-id",`${element.id}`)
       editbtn.addEventListener("click",(e)=>{
        console.log(e.target.dataset.id)
        editprdtform.style.display="block"
        fetch(`${url}/${e.target.dataset.id}`)
        .then(res => res.json())
        .then((data) => {
            document.getElementById("editpriceidinput").value=data.id
            document.getElementById("editpriceinput").value=data.price
        })
        
       })

       deletebtn.setAttribute("id","delete")

       td2.innerText=element.title
       td3.innerText=element.price
       td4.innerText=element.category
       td5.innerText=element.brand
       td6.innerText=element.size
       td7.innerText=element.material
       td8.innerText=element.color
       editbtn.innerText="EDIT"
       deletebtn.innerText="DELETE"

     
       


       tr.append(td1,td2,td3,td4,td5,td6,td7,td8,editprdt)
       tabledata.append(tr)
        
   });
}



// searchbar
document.getElementById("top_search_inp").addEventListener("input", (e) => {
    let input = e.target.value;
    console.log(input)
    fetch(url)
    .then(res => res.json())
    .then((data) =>{
        console.log(data)
        let newData = data.filter((el, index) => {
            return el.title.toLowerCase().includes(input);
          });
          console.log(newData)
          renderCard(newData);
    })
   
  });