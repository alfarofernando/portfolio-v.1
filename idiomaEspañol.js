
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("idiomaEspañol").addEventListener('click', function () {
        document.getElementById("inicio").innerText = "Inicio";
        document.getElementById("sobreMi").innerText = "Sobre Mi";
        document.getElementById("proyectos").innerText = "Proyectos";
        document.getElementById("estudios").innerText = "Estudios";
        document.getElementById("idioma").innerText = "Idioma";


        document.getElementById("fraseCarousel").innerText = '"La tecnología es la herramienta que libera todo el potencial humano."';

        document.getElementById("seccionSobreMi").innerText = "Sobre Mi";
        document.getElementById("textoSobreMi1").innerText = "Hola, soy Fernando Alfaro";
        document.getElementById("textoSobreMi2").innerText = "Me considero una persona seria, organizada y, sobre todo, con capacidad para adquirir conocimientos en poco tiempo.";
        document.getElementById("textoSobreMi3").innerText = "Me encanta trabajar, compartir y vivir experiencias con los demás.";
        document.getElementById("textoSobreMi4").innerText = "Estoy interesado en participar en proyectos donde pueda desempeñar mis habilidades con personas positivas y con quienes pueda mejorar y aprender.";

        document.getElementById("seccionProyectos").innerText = "Proyectos";
        document.getElementById("textoProyectos1").innerText = "Portafolio";
        document.getElementById("textoProyectos2").innerText = "Mi primer proyecto";
        document.getElementById("textoProyectos3").innerText = "Al repositorio";
        document.getElementById("textoProyectos4").innerText = "Próximamente";
        document.getElementById("textoProyectos5").innerText = "Próximamente";
        document.getElementById("textoProyectos6").innerText = "Haz clic aquí";

        document.getElementById("seccionEstudio").innerText = "Estudios";
        document.getElementById("textoEstudios1").innerText = "Técnico Universitario en Sistemas Informáticos";
        document.getElementById("textoEstudios2").innerText = "Actualmente cursando el 2º año en UTN Avellaneda, con un promedio parcial de 8.6, habiendo aprendido fundamentos y lógica de programación";
        document.getElementById("textoEstudios3").innerText = "Curso de Bootstrap 5 en Udemy";
        document.getElementById("textoEstudios4").innerText = "Curso extenso de alrededor de 100 horas donde aprendí a desarrollar páginas web responsivas (mobile first) con HTML, CSS, Flexbox, Sass, Bootstrap 5, Git y Github";
        document.getElementById("textoEstudios5").innerText = "Curso de C#";
        document.getElementById("textoEstudios6").innerText = "Curso extenso de alrededor de 50 horas donde aprendí programación orientada a objetos, WPF, BBDD, SqlServer y LINQ";

        document.getElementById("footer").innerText = "Portafolio de Alfaro Fernando 05-2024";


    })
})