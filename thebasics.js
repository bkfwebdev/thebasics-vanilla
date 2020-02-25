const theBasics = { html : "https://www.youtube.com/embed/UB1O30fR-EE",
                        css : "https://www.youtube.com/embed/yfoY53QXEnI",
                        javascript : "https://www.youtube.com/embed/hdI2bqOjy3c" }; 
    const htmlbutton = document.getElementById("basic1");
    const cssbutton = document.getElementById("basic2");
    const jsbutton = document.getElementById("basic3");
    const videocontent = document.getElementById("video-content")

    window.onload = () => {
        videocontent.setAttribute("src",theBasics.html);
        console.log("html");}
        
    htmlbutton.addEventListener("click",()=>{
        videocontent.setAttribute("src",theBasics.html);
        console.log("html");
    });
    cssbutton.addEventListener("click",()=>{
        videocontent.setAttribute("src",theBasics.css);
        console.log("css");
    });
    jsbutton.addEventListener("click",()=>{
        videocontent.setAttribute("src",theBasics.javascript);
        console.log("javascript");
    });