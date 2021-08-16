const tagEl=document.getElementById("tags");
const textarea=document.getElementById("textarea");

textarea.focus();

textarea.addEventListener("keyup", (e)=>{
    createTags(e.target.value);

    if(e.key=="Enter"){
    setTimeout(()=>{
        e.target.value= ''
    },10)

    randomSelect();
    }
});

function createTags(input){
    const tags=input.split(",").filter(tag=>tag.trim()!=="").map(tag=>tag.trim());
    tagEl.innerHTML="";

    tags.forEach(tag=>{
        const tagElement=document.createElement("span");
        tagElement.classList.add("tag");
        tagElement.innerText=`#${tag}`;
        tagEl.appendChild(tagElement);
    })
}

function randomSelect(){
   interval();
}


function pickRandomTag(){
    const tags=document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random()*tags.length)];
}


function highLightTag(tag){
    tag.classList.add("highlight");
}

function unhighLightTag(tag){
    tag.classList.remove("highlight");
}


function interval(){
    const times=20;
    const interval= setInterval(()=>{
        const randomTag=pickRandomTag();
    
        highLightTag(randomTag);
        
        setTimeout(()=>{
            unhighLightTag(randomTag);
        },100);

    },100)

    setTimeout(()=>{
        clearInterval(interval);
        setTimeout(()=>{
            const randomTag=pickRandomTag();
            highLightTag(randomTag);
        },100)
    },times*100);

}