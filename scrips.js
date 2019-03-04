var cast = {

    "projects": [
        {     
            "name": "School of corruption ",
            "hosts":  "Tania Mykytenko",
            "hosts1": "Tania Goncharova, Vasyl Krutchak, Volodymyr Petrov",
            "info": ""
        },
        {
            "name": "Classic time",
            "hosts": "Olya Dibrova",
            "info": ""
        },
        {
            "name": "Ragu.li",
            "hosts": "Tania Mykytenko",
            "info": ""
        },
        {
            "name": "AMB",
            "hosts": "Tania Mykytenko",
            "hosts1": "Andriy Pavlenko",
            "info": ""
        },
        {
            "name": "IstFaq",
            "hosts": "Bogdan Butkevych",
            "hosts1": "Vladlen Maraiev",
            "info": ""
        },
        {
            "name": "Tales from babayka",
            "hosts": "Marian Pyrozhok",
            "info": ""
        },
        {
            "name": "Ultima cena",
            "hosts": "Kyrylo Karachentsev",
            "info": ""
        },
        {
            "name": "Read the show",
            "hosts": " Olena Ivanova",
            "info": ""
        }
    ]

}
$(document).ready(function () {
    var projectsTemplate = $("#projects-template").html();
    var compiledProjectsTemplate = Handlebars.compile(projectsTemplate);
    $(".projects-list-container").html(compiledProjectsTemplate(cast));




});
