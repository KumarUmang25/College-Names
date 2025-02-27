let url="http://universities.hipolabs.com/search?name=";

 async function getColleges(country){
    try{
        let res=await axios.get(url+country);
        return (res.data);
    }catch(e){
        console.log("Error ---",e);
    }
 }

  let btn=document.querySelector("button");
  let list=document.querySelector("ul");
  
 btn.addEventListener("click",async ()=>{
  
     let country=document.querySelector("input").value;
     console.log(country);
     let colArr=await getColleges(country);
     console.group(colArr);
     show(colArr);
 });

function show(colArr){
    list.innerText="";
    for (col of colArr){
        let li=document.createElement("li");
        li.innerText=col.name;
        list.appendChild(li);
    }
}