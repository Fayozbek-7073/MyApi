


function getCiyomlo(respons){
    let re=respons.data
    const divSChosex=document.querySelector(".card-box");
    let er="";
    for(let i=0; i<=49;i++){
        er +=`
        
        <div class="row g-0">
        <div class="col-md-4">
        <img src="${re[i].img}" alt="F">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${re[i].title}</h5>
            <p class="card-text">${re[i].body}</p>
            <p class="card-text"><small class="text-muted"></small></p>
          </div>
        </div>
      </div>
        `
    } 
    divSChosex.innerHTML=er
     
}

// const datanor = a.createdDate.;

function getCards(respons){
    let a=respons.data

    // console.log(a);
    let sortCard=a.sort((a,b)=>b.rating-a.rating);
    // console.log(sortCard);
    let str="";
    const divrow=document.querySelector(".div-row");
    for(let i=0; i<=2;i++){
        str +=`
        
        <div class="card-or col-12 col-md-6 col-lg-4 ">
        <div class="card-oz trans">
        <img src="${sortCard[i].img}" class="card-img-top" alt="...">
        <p class="p-data">By <span style="color: blueviolet;">John Doe</span>   l  ${sortCard[i].createdDate}</p>
        <div class="card-body">
        <h5 class="card-title">${sortCard[i].title}</h5>
        <p class="card-text">${sortCard[i].body}</p>
        <p class="card-text">rating: ${sortCard[i].rating}</p>
        </div>
        </div>
        </div>
        `
    } 
    divrow.innerHTML=str
     
}
const url = 'https://64a6fca7096b3f0fcc80ef97.mockapi.io/posts';

function getImgs(respons){
    const imgs = document.querySelector('.section');
 
    imgs.style.backgroundImage = `url(${respons.data[respons.data.length-1].img})`;
    // console.log(imgs);
    let sett = "";
                sett += 
                `
                <h3>Posted on <b>${respons.data[respons.data.length-1].category}<b/></h3>
                <h1 class="sec-top">${respons.data[respons.data.length-1].title}</h1>
                <h4 class="sec-top">By <span style="color: gold;">James West</span>   |  ${respons.data[respons.data.length-1].createdDate} </h4>
                <p class="sec-top">${respons.data[respons.data.length-1].body}</p>
                <button class="btn bg-warning  sec-top"><a class="trans" href="./abautus.html">Read More ></a>  </button>
                `
                imgs.innerHTML=sett
}


function getReting(respons){
    let c=respons.data
    const divSChose=document.querySelector(".chosa-katagory");
    let stre="";
    for(let i=3; i<=6;i++){
        stre +=`
        
        <div class="carts trans col-12 col-md-6 col-lg-4 ">
        <img src="../font/Icon1.svg" alt="F">
        <a class="" href="./category.html"><h3>${c[i].category}</h3>
        <p>${c[i].title}</p></a> 
      </div>
        `
    } 
    divSChose.innerHTML=stre
     
}



// function getRetings(respons){
//     let xc=respons.data
//     const divSChoses=document.querySelector(".cord-box");
//     let stred="";
//     for(let i=3; i<=6;i++){
//         stred +=
//         `
//         <div class="row g-0">
//         <div class="col-md-4">
//           <img src="${xc[i].img}" class="img-fluid rounded-start" alt="f">
//         </div>
//         <div class="col-md-8">
//           <div class="card-body">
//             <h5 class="card-title">${xc[i].category}</h5>
//             <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//             <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//           </div>
//         </div>
//       </div>
           
//         `
//     } 
//     divSChoses.innerHTML=stred

// }




// getReting()     





async function getPostss(){
    try{
        let respons = await axios.get(url);
        getImgs(respons);
        getCards(respons);
        getReting(respons); 
        getCiyomlo(respons);     
        
        
    }
    catch(error){
        console.log(error);
    }
}
getPostss()




async function getPosts(){
    try{
        let respons = await axios.get(url);
        console.log(respons.data);
        getCiyomlo(respons);    
        getImgs(respons);
        getCards(respons);
        getReting(respons); 
        
        
    }
    catch(error){
        console.log(error);
    }
}
getPosts()
