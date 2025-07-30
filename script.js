let DownloadTEXT = document.querySelector(".DownloadTEXT");
let bar = document.querySelector(".bar");
let percentage = document.querySelector(".percentage");
   let count = 0;

let interval = setInterval(() => {
 
    if(count <= 99){
        count++;
        bar.style.width = `${count}%`;
        percentage.textContent = `${count}%`
    }else{
        DownloadTEXT.textContent = "Downloaded"
        clearInterval(interval)
    }
}, 10);