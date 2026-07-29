document.addEventListener("DOMContentLoaded",()=>{

    haberleriGoster(
        "superlig-container",
        superligHaberleri
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
/* Basketbol haberlerini küçült ve yan yana diz */

#basketbol-container{
    display:grid;
    grid-template-columns:repeat(3, 1fr);
    gap:15px;
}


#basketbol-container .haber-card{
    border-radius:12px;
}


#basketbol-container .haber-card img{
    height:120px;
}


#basketbol-container .haber-card h3{
    font-size:15px;
    padding:8px;
}


#basketbol-container .haber-card p{
    font-size:13px;
    padding:0 8px 10px;
}


/* Telefon görünümü */

@media(max-width:768px){

#basketbol-container{
    grid-template-columns:1fr;
}

}
