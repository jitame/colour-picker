const img = new Image();
img.crossOrigin = "anonymous";
img.load = () => {img.style.display = "none";};
