const isIntersecting = (entry) => {
    return entry.isIntersecting; 
};

const accion = (entry) => {
    const container = entry.target; // container(div)
    const imagen = container.firstChild;
    const url = imagen.dataset.src 

    //load image
    imagen.src = url;
   

// unlistened cuando ya registro una imagen, no la vuelva a observar. 
    observer.unobserve(container)
};

const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(accion);
});

export const registerImage = (imagen) => {
    observer.observe(imagen)
};