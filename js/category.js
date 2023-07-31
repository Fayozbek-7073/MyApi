

// function getCiyomlo(respons){
//     let re=respons.data
//     const divSChosex=document.querySelector(".card-box");
//     let er="";
//     for(let i=0; i<=49;i++){
//         er +=`
        
//         <div class="row g-0">
//         <div class="col-md-4">
//         <img src="${re[i].img}" alt="F">
//         </div>
//         <div class="col-md-8">
//           <div class="card-body">
//             <h5 class="card-title">${re[i].title}</h5>
//             <p class="card-text">${re[i].body}</p>
//             <p class="card-text"><small class="text-muted"></small></p>
//           </div>
//         </div>
//       </div>
//         `
//     } 
//     divSChosex.innerHTML=er
     
// }




// const url = 'https://64a6fca7096b3f0fcc80ef97.mockapi.io/posts';



// async function getPosts(){
//     try{
//         let respons = await axios.get(url);
//         console.log(respons.data);
//         getImgs(respons);
//         getCards(respons);
//         getReting(respons); 
//         getCiyomlo(respons);    

        
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// getPosts()






























async function getPosts(){
    try{
        let respons = await axios.get(url);
        console.log(respons.data);
        getImgs(respons);
        getCards(respons);
        getReting(respons); 
        getCiyomlo(respons);    

        
    }
    catch(error){
        console.log(error);
    }
}
getPosts()
