document.addEventListener("DOMContentLoaded",()=>{


    haberleriGoster(
        "superlig-container",
        superLigHaberleri
    );


    haberleriGoster(
        "avrupa-container",
        avrupaHaberleri
    );


    haberleriGoster(
        "basketbol-container",
        basketbolHaberleri
    );


    haberleriGoster(
        "transfer-container",
        transferHaberleri
    );



    const menuBtn = document.querySelector(".menu-btn");
    const navbar = document.querySelector(".navbar");


    if(menuBtn){

        menuBtn.addEventListener("click",()=>{

            navbar.classList.toggle("active");

        });

    }


});



function haberleriGoster(alan, liste){


const container=document.getElementById(alan);


if(!container) return;


container.innerHTML="";


liste.forEach(haber=>{


container.innerHTML += `

<div class="haber-card">

<img src="${haber.resim}" loading="lazy">

<div>

<span>${haber.kategori}</span>

<h3>${haber.baslik}</h3>

<p>${haber.aciklama}</p>

</div>

</div>

`;

});


}
.haber-card{
    height:420px;
    overflow:hidden;
    display:flex;
    flex-direction:column;
}


.haber-card img{
    width:100%;
    height:220px;
    object-fit:cover;
}


.haber-card div{
    padding:15px;
}


.haber-card h3{
    height:55px;
    overflow:hidden;
}


.haber-card p{
    height:45px;
    overflow:hidden;
}
