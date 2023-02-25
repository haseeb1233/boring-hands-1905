let url = "https://himanshu-bamu.onrender.com/Products";
let sidebarprdtbtn = document.getElementById("sidebarprdtbtn");
let addprdtform = document.getElementById("addprdtform");
let Addprdocutsbtn = document.getElementById("Addprdocutsbtn");
let editprdocutsbtn = document.getElementById("editprdocutsbtn");
let editprdtform = document.getElementById("editprdtform");
let productpage = document.getElementById("products");
// addproductbtn
Addprdocutsbtn.addEventListener("click", () => {
  window.open("admin/AddProduct.html");
});

// editproductbtn
editprdocutsbtn.addEventListener("click", () => {
  if (editprdtform.style.display == "block") {
    editprdtform.style.display = "none";
  } else {
    editprdtform.style.display = "block";
  }
});

window.addEventListener("load", () => {
  fetchCard(url);
});
sidebarprdtbtn.addEventListener("click", () => {
  fetchCard(url);
});

// functions
function fetchCard(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      renderCard(data);
    });
}

function renderCard(data) {
  tabledata.innerHTML = null;
  data.forEach((element) => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let pro_img = document.createElement("img");
    pro_img.setAttribute("src", element.image[0]);
    td1.append(pro_img);
    td1.setAttribute("id", "td1");
    let td2 = document.createElement("td");
    td2.setAttribute("id", "td2");
    let td3 = document.createElement("td");
    td3.setAttribute("id", "td3");
    let td4 = document.createElement("td");
    td4.setAttribute("id", "td4");
    let td5 = document.createElement("td");
    td5.setAttribute("id", "td5");
    let td6 = document.createElement("td");
    td6.setAttribute("id", "td6");
    let td7 = document.createElement("td");
    td7.setAttribute("id", "td7");
    let td8 = document.createElement("td");
    td8.setAttribute("id", "td8");

    let editprdt = document.createElement("div");
    let editbtn = document.createElement("button");
    let deletebtn = document.createElement("button");
    editprdt.append(editbtn, deletebtn);
    editprdt.setAttribute("id", "editprdt");
    editbtn.setAttribute("id", "edit");
    editbtn.setAttribute("data-id", `${element.id}`);
    editbtn.addEventListener("click", (e) => {
      console.log(e.target.dataset.id);
      editprdtform.style.display = "block";
      fetch(`${url}/${e.target.dataset.id}`)
        .then((res) => res.json())
        .then((data) => {

          editprdtform.setAttribute("data-id", data.id);
          document.getElementById("inptimg1").value = data.image[0];
          document.getElementById("inptimg2").value = data.image[1];
          document.getElementById("inptimg3").value = data.image[2];
          document.getElementById("inptimg4").value = data.image[3];
          document.getElementById("inpttitle").value = data.title;
          document.getElementById("inptprice").value = data.price;
          document.getElementById("inptcategory").value = data.category;
          document.getElementById("inptbrand").value = data.brand;
          document.getElementById("inptsize").value = data.size;
          document.getElementById("inptmaterial").value = data.material;
          document.getElementById("inptcolor").value = data.color;
        });
    });

    deletebtn.setAttribute("id", "delete");
    deletebtn.setAttribute("data-id", `${element.id}`);
    td2.innerText = element.title;
    td3.innerText = element.price;
    td4.innerText = element.category;
    td5.innerText = element.brand;
    td6.innerText = element.size;
    td7.innerText = element.material;
    td8.innerText = element.color;
    editbtn.innerText = "EDIT";
    deletebtn.innerText = "DELETE";

    deletebtn.addEventListener("click", (e) => {
      console.log(e.target.dataset);
      fetch(`${url}/${e.target.dataset.id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    });

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
          .then(res => res.json())
          .then((data) =>{
            renderCard(data)
          })

       })
     
       



    tr.append(td1, td2, td3, td4, td5, td6, td7, td8, editprdt);
    tabledata.append(tr);
  });
}

// searchbar
document.getElementById("top_search_inp").addEventListener("input", (e) => {
  let input = e.target.value;
  console.log(input);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let newData = data.filter((el, index) => {
        return el.title.toLowerCase().includes(input);
      });
      console.log(newData);
      renderCard(newData);
    });
});

//   editproductform

editprdtform.addEventListener("submit", (e) => {
  e.preventDefault();
  let img1 = document.getElementById("inptimg1").value;
  let img2 = document.getElementById("inptimg2").value;
  let img3 = document.getElementById("inptimg3").value;
  let img4 = document.getElementById("inptimg4").value;
  let title = document.getElementById("inpttitle").value;
  let price = document.getElementById("inptprice").value;
  let category = document.getElementById("inptcategory").value;
  let brand = document.getElementById("inptbrand").value;
  let size = document.getElementById("inptsize").value;
  let material = document.getElementById("inptmaterial").value;
  let color = document.getElementById("inptcolor").value;
  let obj = {};
  obj.image = [img1, img2, img3, img4];
  obj.title = title;
  obj.price = price;
  obj.category = category;
  obj.brand = brand;
  obj.size = size;
  obj.material = material;
  obj.color = color;
  console.log(obj);
  fetch(`${url}/${e.target.dataset.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .then((data) => {
      alert(`Data of ${data.id} updated.`);
      fetchCard(url);
    });
});
