
let url="https://himanshu-bamu.onrender.com/Products"
let sidebarprdtbtn=document.getElementById("sidebarprdtbtn")
let addprdtform=document.getElementById("addprdtform")
let Addprdocutsbtn=document.getElementById("Addprdocutsbtn")
let editprdocutsbtn=document.getElementById("editprdocutsbtn")
let editprdtform=document.getElementById("editprdtform")
let productpage =document.getElementById("products")
let editorderssbtn=document.getElementById("editorderssbtn")
let editsalessbtn=document.getElementById("editsalessbtn")
let signoutbtn =document.getElementById("signup_btn")

//signout
signoutbtn.addEventListener("click",() =>{
  window.open("index.html")
})





sidebarprdtbtn.addEventListener("click",() =>{
  window.addEventListener("load",() =>{
    fetchCard(url)
})
})
// addproductbtn
Addprdocutsbtn.addEventListener("click",() =>{
   
    window.open("admin/AddProduct.html")
})

// editproductbtn
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
    productpage.innerHTML=null
    let table=document.createElement("table")
      table.setAttribute("id","table")
      let thead=document.createElement("thead")
      thead.setAttribute("id","tablehead")
      let trhead=document.createElement("tr")
      let th1=document.createElement("th")
      th1.innerText="IMAGE"
      let th2=document.createElement("th")
      th2.innerText="TITLE"
      let th3=document.createElement("th")
      th3.innerText="PRICE"
      let th4=document.createElement("th")
      th4.innerText="CATEGORY"
      let th5=document.createElement("th")
      th5.innerText="BRAND"
      let th6=document.createElement("th")
      th6.innerText="SIZE"
      let th7=document.createElement("th")
      th7.innerText="MATERIAL"
      let th8=document.createElement("th")
      th8.innerText="COLOR"
      let tbody=document.createElement("tbody")
      tbody.setAttribute("id","tabledata")
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
            editprdtform.setAttribute("data-id",data.id)
            document.getElementById("inptimg1").value=data.image[0]
            document.getElementById("inptimg2").value=data.image[1]
            document.getElementById("inptimg3").value=data.image[2]
            document.getElementById("inptimg4").value=data.image[3]
            document.getElementById("inpttitle").value=data.title
            document.getElementById("inptprice").value=data.price
            document.getElementById("inptcategory").value=data.category
            document.getElementById("inptbrand").value=data.brand
            document.getElementById("inptsize").value=data.size
            document.getElementById("inptmaterial").value=data.material
            document.getElementById("inptcolor").value=data.color
            
        })
        
       })

       deletebtn.setAttribute("id","delete")
       deletebtn.setAttribute("data-id",`${element.id}`)
       td2.innerText=element.title
       td3.innerText=element.price
       td4.innerText=element.category
       td5.innerText=element.brand
       td6.innerText=element.size
       td7.innerText=element.material
       td8.innerText=element.color
       editbtn.innerText="EDIT"
       deletebtn.innerText="DELETE"

       deletebtn.addEventListener("click",(e)=>{
        console.log(e.target.dataset)
          fetch(`${url}/${e.target.dataset.id}`,{
            method:"DELETE",
           
          })
            
            alert(`${e.target.dataset.id} is deleted`)
            tr.innerHTML=null
        
       })
     
       


       tr.append(td1,td2,td3,td4,td5,td6,td7,td8,editprdt)
       tbody.append(tr)
        trhead.append(th1,th2,th3,th4,th5,th6,th7,th8)
        thead.append(trhead)
        table.append(thead,tbody)
        productpage.append(table)
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


//   editproductform

editprdtform.addEventListener("submit",(e)=>{
   e.preventDefault()
  
    let img1=document.getElementById("inptimg1").value
    let img2=document.getElementById("inptimg2").value
    let img3=document.getElementById("inptimg3").value
    let img4=document.getElementById("inptimg4").value
    let title=document.getElementById("inpttitle").value
    let price=document.getElementById("inptprice").value
    let category=document.getElementById("inptcategory").value
     let brand=document.getElementById("inptbrand").value
    let size=document.getElementById("inptsize").value
    let material=document.getElementById("inptmaterial").value
    let color =document.getElementById("inptcolor").value
    let obj={}
    obj.image=[img1,img2,img3,img4]
    obj.title=title
    obj.price=price
    obj.category=category
    obj.brand=brand
    obj.size=size
    obj.material=material
    obj.color=color
    console.log(obj)
    fetch(`${url}/${e.target.dataset.id}`,{
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      })
      .then(res => res.json())
      .then((data) =>{
        alert(`Data of ${data.id} updated.`);
        fetchCard(url)
      })
    })

    // orders
    editorderssbtn.addEventListener("click",() =>{
      console.log("Hi")
      productpage.innerHTML=null
     let ordertable= document.createElement("table")
     ordertable.setAttribute("id","ordertable")
     let orderhead=document.createElement("thead")
     let orderheadtr=document.createElement("tr")
     let orderth1=document.createElement("th")
     orderth1.innerText="PRODUCTS"
     orderth1.setAttribute("id","orderth1")
     let orderth2=document.createElement("th")
     orderth2.innerText="PRICE"
     let orderth3=document.createElement("th")
     orderth3.innerText="QUANTITY"
     let orderth4=document.createElement("th")
     orderth4.innerText="TOTAL"
     let ordertbody=document.createElement("tbody")
     ordertbody.setAttribute("id","ordertabledata")
     let orderdata =JSON.parse(localStorage.getItem("addToBag"))
      orderdata.forEach((element) =>{
        let bodytr=document.createElement("tr")
        bodytr.setAttribute("id","bodytr")
        let bodytd1=document.createElement("td")
        let maindiv=document.createElement("div")
        maindiv.setAttribute("id","maindiv")
        let imgdiv=document.createElement("div")
        imgdiv.setAttribute("id","imgdiv")
        let imgbody=document.createElement("img")
        imgbody.setAttribute("src",element.image[0])
        let textdiv=document.createElement("div")
        textdiv.setAttribute("id","textdiv")
        let titlep=document.createElement("p")
        titlep.innerText=`Title: ${element.title}`
        let brandp =document.createElement("p")
        brandp.innerText=`Material: ${element.material}`
        let bodytd2=document.createElement("td")
         bodytd2.innerText=element.price
         bodytd2.setAttribute("class","texttd")
         let bodytd3=document.createElement("td")
         bodytd3.innerText=1
         bodytd3.setAttribute("class","texttd")
         let bodytd4=document.createElement("td")
         bodytd4.innerText=element.price
         bodytd4.setAttribute("class","texttd")
         
       let confirmprdt=document.createElement("div")
       confirmprdt.setAttribute("id","confirmprdt")
       
       let cancelbtn=document.createElement("button")
       let confirmbtn=document.createElement("button")
   
   
       cancelbtn.setAttribute("data-id",`${element.id}`)
       cancelbtn.setAttribute("id","cancelbtn")
       confirmbtn.setAttribute("data-id",`${element.id}`)
       confirmbtn.setAttribute("id","confirmbtn")
       cancelbtn.innerText="CANCEL"
       confirmbtn.innerText="CONFIRM"
       confirmbtn.addEventListener("click",(e)=>{
         
        for(let i=0;i<orderdata.length;i++){
          if(orderdata[i].id==e.target.dataset.id){
            let saledata=JSON.parse(localStorage.getItem("sale"))||[]
            saledata.push(orderdata[i])
           localStorage.setItem("sale",JSON.stringify(saledata))
           orderdata[i]=" "
          }
        }
        console.log(orderdata)
        let filtersaledata =orderdata.filter((e) =>{
         if(e!=" "){
            return e
         }
        })
        localStorage.setItem("addToBag",JSON.stringify(filtersaledata))
        bodytr.innerHTML=null
       })
      
       cancelbtn.addEventListener("click",(e) =>{
        for(let i=0;i<orderdata.length;i++){
          if(orderdata[i].id==e.target.dataset.id){
           orderdata[i]=" "
          }
        }
        console.log(orderdata)
        let filterdata =orderdata.filter((e) =>{
         if(e!=" "){
            return e
         }
        })
        console.log(filterdata)
        localStorage.setItem("addToBag",JSON.stringify(filterdata))
       bodytr.innerHTML=null
      })

       confirmprdt.append(cancelbtn,confirmbtn)
        textdiv.append(titlep,brandp)
        imgdiv.append(imgbody)
        maindiv.append(imgdiv,textdiv)
        bodytd1.append(maindiv)
        bodytr.append(bodytd1,bodytd2,bodytd3,bodytd4,confirmprdt)
        ordertbody.append(bodytr)
        
      })
    
     ordertable.append(orderhead,ordertbody)
        orderhead.append(orderheadtr)
        orderheadtr.append(orderth1,orderth2,orderth3,orderth4)
        productpage.append(ordertable)
    })
   
    editsalessbtn.addEventListener("click",() =>{
      productpage.innerHTML=null
      let data =JSON.parse(localStorage.getItem("sale"))
      let sum=0
      let total=0
      for(let i=0;i<data.length;i++){
         sum+=data[i].price
          total+=1
      }
      let salediv=document.createElement("div")
      salediv.setAttribute("id","salediv")
      let totalsaletext=document.createElement("div")
      totalsaletext.innerText="Total Sale"
      let totalprcie=document.createElement("p")
      totalprcie.innerText=sum
      let totalsaleprodt=document.createElement("div")
      totalsaleprodt.innerText="Total Number of Product Saled"
      let totalnumberprdt=document.createElement("p")
      totalnumberprdt.innerText=total
      totalsaleprodt.append(totalnumberprdt)
      totalsaletext.append(totalprcie)
      salediv.append(totalsaletext,totalsaleprodt)
      let ordertable= document.createElement("table")
     ordertable.setAttribute("id","ordertable")
     let orderhead=document.createElement("thead")
     let orderheadtr=document.createElement("tr")
     let orderth1=document.createElement("th")
     orderth1.innerText="PRODUCTS"
     orderth1.setAttribute("id","orderth1")
     let orderth2=document.createElement("th")
     orderth2.innerText="PRICE"
     let orderth3=document.createElement("th")
     orderth3.innerText="QUANTITY"
     let orderth4=document.createElement("th")
     orderth4.innerText="TOTAL"
     let ordertbody=document.createElement("tbody")
     ordertbody.setAttribute("id","ordertabledata")
     
      data.forEach((element) =>{
        let bodytr=document.createElement("tr")
        bodytr.setAttribute("id","bodytr")
        let bodytd1=document.createElement("td")
        let maindiv=document.createElement("div")
        maindiv.setAttribute("id","maindiv")
        let imgdiv=document.createElement("div")
        imgdiv.setAttribute("id","imgdiv")
        let imgbody=document.createElement("img")
        imgbody.setAttribute("src",element.image[0])
        let textdiv=document.createElement("div")
        textdiv.setAttribute("id","textdiv")
        let titlep=document.createElement("p")
        titlep.innerText=`Title: ${element.title}`
        let brandp =document.createElement("p")
        brandp.innerText=`Material: ${element.material}`
        let bodytd2=document.createElement("td")
         bodytd2.innerText=element.price
         bodytd2.setAttribute("class","texttd")
         let bodytd3=document.createElement("td")
         bodytd3.innerText=1
         bodytd3.setAttribute("class","texttd")
         let bodytd4=document.createElement("td")
         bodytd4.innerText=element.price*1
         bodytd4.setAttribute("class","texttd")
         textdiv.append(titlep,brandp)
         imgdiv.append(imgbody)
         maindiv.append(imgdiv,textdiv)
         bodytd1.append(maindiv)
         bodytr.append(bodytd1,bodytd2,bodytd3,bodytd4)
         ordertbody.append(bodytr)
         
       })
      
      ordertable.append(orderhead,ordertbody)
         orderhead.append(orderheadtr)
         orderheadtr.append(orderth1,orderth2,orderth3,orderth4)
         productpage.append(salediv,ordertable)
    })
    
let filter=document.getElementById("filter")
filter.addEventListener("change",() =>{
  fetch(url)
  .then(res => res.json())
  .then((data) =>{
    if(filter.value=="cate"){
      renderCard(data)
    }else{
      let card=data.filter((element) =>{
        if(element.category==filter.value){
          return element
        }
      })
      renderCard(card)
    }
  })
})



// let newdata =JSON.parse(localStorage.getItem("order"))||[]
let arr=[]
let obj={}
obj.image=[
  "https://www.ulcdn.net/images/products/441630/slide/1332x726/Memory_Foam_Bonded_Mattress_0.jpg",
            "https://www.ulcdn.net/images/products/438469/slide/1332x726/Memory_Foam_Bonded_Mattress_1.jpg",
            "https://www.ulcdn.net/images/products/438912/slide/1332x726/Memory_Foam_Bonded_Mattress_2.jpg",
]
obj.title="Memory & Bonded Foam Orthoapedic Single Size Mattress",
obj.price=8639,
obj.category="Mattress",
obj.color= "White",
 obj.brand="Urban Ladder",
 obj.material="Foam",
 obj.size="1-Seater"
 arr.push(obj)
 console.log(arr)
 localStorage.setItem("order",JSON.stringify(arr))