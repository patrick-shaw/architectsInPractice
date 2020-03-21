window.onload = () => {
    setTimeout(() => {
        if (window.scrollY === 0) {
            const container = document.getElementById('container-single');
            container.scrollIntoView();
        }
    }, 3000)
}