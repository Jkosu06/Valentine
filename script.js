document.addEventListener("DOMContentLoaded", () => {
    const textElements = document.querySelectorAll(".animated-text");
    const imageGallery = document.querySelector(".image-gallery");
    const images = document.querySelectorAll(".photo");
    const changeButton = document.createElement("button");
    changeButton.innerHTML = "➡";
    changeButton.classList.add("change-button");
    document.body.appendChild(changeButton);

    let step = 0;
    let isRight = true;
    
    changeButton.style.position = "absolute";
    changeButton.style.right = "20px";
    changeButton.style.top = "50%";
    changeButton.style.transform = "translateY(-50%)";

    const textSets = [
        ["Feliz San Valentin mi niña💞", "Te amo con todo mi ser💕", "Nos vemos muy bien juntos, saquemonos muchas fotos este año💓"],
        ["Feliz San Valentin mi niña💞", "Te amo con todo mi ser💕", "Aqui hay algunas canciones que me gustaria que escucharas hoy, te las dedico💓"]
    ];
    
    const imageSets = [
        ["imagen1.jpeg", "imagen2.jpeg", "imagen3.jpeg", "imagen4.jpeg", "imagen5.jpeg", "imagen6.jpeg"],
        ["imagen7.jpeg", "imagen8.jpeg", "imagen9.jpeg", "imagen10.jpeg", "imagen11.jpeg", "imagen12.jpeg"]
    ];

    function randomizeImages() {
        images.forEach(img => {
            const rotation = (Math.random() * 20 - 10).toFixed(2);
            const translateX = (Math.random() * 10 - 5).toFixed(2);
            const translateY = (Math.random() * 10 - 5).toFixed(2);
            img.style.setProperty("--rotation", `${rotation}deg`);
            img.style.setProperty("--translateX", `${translateX}px`);
            img.style.setProperty("--translateY", `${translateY}px`);
        });
    }

    function changeContent() {
        step = (step + 1) % textSets.length;
        changeButton.innerHTML = step === 0 ? "➡" : "⬅";
        
        if (isRight) {
            changeButton.style.right = "auto";
            changeButton.style.left = "20px";
        } else {
            changeButton.style.left = "auto";
            changeButton.style.right = "20px";
        }
        isRight = !isRight;
        
        textElements.forEach((el, i) => {
            el.style.opacity = 0;
            setTimeout(() => {
                el.textContent = textSets[step][i];
                el.style.opacity = 1;
            }, 500);
        });

        images.forEach((img, i) => {
            img.style.opacity = 0;
            setTimeout(() => {
                img.src = imageSets[step][i];
                img.style.opacity = 1;
                randomizeImages();
            }, 500);
        });
    }

    changeButton.addEventListener("click", changeContent);
    randomizeImages();
});
