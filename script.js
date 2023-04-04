const newElemnt = document.createElement("div");
document.body.append(newElemnt);
document.body.style.textAlign = "center";
setTimeout(() => {
  newElemnt.innerText = "10";
  setTimeout(() => {
    newElemnt.innerText = "9";
    setTimeout(() => {
      newElemnt.textContent = "8";
      setTimeout(() => {
        newElemnt.textContent = "7";
        setTimeout(() => {
          newElemnt.textContent = "6";
          setTimeout(() => {
            newElemnt.textContent = "5";
            setTimeout(() => {
              newElemnt.textContent = "4";
              setTimeout(() => {
                newElemnt.textContent = "3";
                setTimeout(() => {
                  newElemnt.textContent = "2";
                  setTimeout(() => {
                    newElemnt.textContent = "1";
                    setTimeout(()=>{
                        newElemnt.innerHTML=`<h1>Moodtu poi exam ku Padi da</h1>`
                    },1000)
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
