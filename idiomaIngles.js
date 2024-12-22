document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("idiomaIngles").addEventListener('click', function () {

        console.log("entrando al getelementbyid on click");

        document.getElementById("inicio").innerText = "Start";
        document.getElementById("sobreMi").innerText = "About Me";
        document.getElementById("proyectos").innerText = "Proyects";
        document.getElementById("estudios").innerText = "Studies";
        document.getElementById("idioma").innerText = "Languaje";
        document.getElementById("fraseCarousel").innerText = '"Technology is the tool that set free all human potential."';

        console.log("seccion sobre mi");

        document.getElementById("seccionSobreMi").innerText = "About Me";
        document.getElementById("textoSobreMi1").innerText = "Hello, I'm Fernando Alfaro";
        document.getElementById("textoSobreMi2").innerText = "I consider myself a serious, organized person who, above all, has the ability to acquire knowledge in a short time.";
        document.getElementById("textoSobreMi3").innerText = "I love to work, share and live experiences with others.";
        document.getElementById("textoSobreMi4").innerText = "I am interested in participating in projects where I can perform my skills with positive people and with whom I can improve and learn.";

        console.log("seccion proyectos");

        document.getElementById("seccionProyectos").innerText = "Proyects";
        document.getElementById("textoProyectos1").innerText = "Portfolio";
        document.getElementById("textoProyectos2").innerText = "My first proyect";
        document.getElementById("textoProyectos3").innerText = "To repository";
        document.getElementById("textoProyectos4").innerText = "Coming soon";
        document.getElementById("textoProyectos5").innerText = "Coming up next";
        document.getElementById("textoProyectos6").innerText = "Click here";

        console.log("seccion estudios");

        document.getElementById("seccionEstudio").innerText = "Studies";
        document.getElementById("textoEstudios1").innerText = "University Technician in Computer Systems";
        document.getElementById("textoEstudios2").innerText = "Currently studying the 2nd year at UTN Avellaneda, with a partial average of 8.6, having learned fundamentals and logic of programming";
        document.getElementById("textoEstudios3").innerText = "Bootstrap 5 Udemy Course";
        document.getElementById("textoEstudios4").innerText = "Extensive course of around 100 hours where I learned how to develop web pages responsive (mobile first) with HTML, CSS, Flexbox, Sass, Bootstrap 5, Git and Github";
        document.getElementById("textoEstudios5").innerText = "C# course";
        document.getElementById("textoEstudios6").innerText = "Extensive course of around 50 hours where I learned programming oriented to objects, WPF, DDBB, SqlServer and LINQ";

        console.log("seccion footer");

        document.getElementById("footer").innerText = "Alfaro Fernando's portfolio 05-2024";

        console.log("finalizado scrtipt sin novedad :V");

    })

})