var cast = {

    "projects": [
        {
            "name": "12",
            "hosts": "Volodymyr Petrov",
            "info": "12 is a game project, created on basis of Sydney Lumet's film '12 Angry Men'. The main task of this project is to study the processes of public opinionformation and changes in it through a philistine dialogue. 12 is the first methodological media-experiment. During the game, twelve men of different age, status and occupation discuss legal, ethical, political and social issues, which they are not directly related to, and their resolution must be expressed only in two words: 'Yes' or 'No', 'Guilty' or 'Not guilty'."
        },
        {
            "name": "Stonehenge",
            "hosts": "Volodymyr Petrov",
            "hosts1": "Volodymyr Granovsky",
            "info": "Stonehenge is a school of Druids. Volodymyr Granovsky is a student at this school. Each philosophical conversation is an opportunity to see similar and different in-between the real and unreal worlds."
        },
        {
            "name": "MSA (Media Security Agency)",
            "hosts": "Tatyana Mykytenko",
            "hosts1": "Bogdan Butkevych",
            "info": "MSA is an analytical program about the underside of the media world. The purpose of the program is to narrate how the media form our idea of the world while imposing some topics and silencing the other. We study media literacy, help to confront manipulations and recognize fakes and talk about the main players of the market."
        },
        {
            "name": "Nachytalashow",
            "hosts": "Olena Ivanova",
            "info": "Nachytalashow is a cultural and educational program about books and reading. In each broadcast we discuss the documentary, scientific and business literature with experts in various fields. The program is created to popularize open issues and critical look at the pop literature."
        },
        {
            "name": "Time for classics",
            "hosts": "Olya Dibrova",
            "info": "Program for melomaniacs and art lovers. Modern look at the composers and their lives in details helps the viewer to discover characters of outstanding musicians, in order to better understand their art."
        },
        {
            "name": "Lyceum",
            "hosts": "",
            "info": "The educational project aiming at understanding the fundamental science. Series of short lectures by humanitarians and applied science scholars created to evoke closer approach of wide audiences to the academic knowledge."
        },
        {
            "name": "Ultima cena",
            "hosts": "Kyrylo Karachentsev",
            "info": "New questions posed by religion demand new answers. We propose not to bar ourselves from them, but to study out what one of the most important dimensions of human existence really is today. Every week we talk about religion in the modern world, discuss the problems of religious perception with competent guests: philosophers, religious studies scholars, science scholars and representatives of various confessions."
        },
        {
            "name": "Tales from Babayko",
            "hosts": "Marjan Pyrig",
            "info": "Chimeric and absurd, naive and mystical, creepy and phantasmagoric, funny and full of optimism - these are the Ukrainian tales you have never heard before. Program for children and adults includes readings of the unknown Ukrainian fairy tales, with author's scenery and illustrations."
        },
        {
            "name": "Ragu.li",
            "hosts": "Tatyana Mykytenko",
            "info": "Entertaining and satirical program about aggressively poor taste that overflows Ukrainian showbiz, cultural, media and political landscapes. The purpose of the program is to offer an alternative assessment of what usually does not receive any critical feedback."
        },
        {
            "name": "School of corruption ",
            "hosts": "Tatyana Mykytenko",
            "hosts1": "Tatyana Goncharova, Vasyl Krutchak, Volodymyr Petrov",
            "info": "Educational investigation project about corrupt and anti-corrupt activities of the state officials, politicians and public figures. The school sees no difference between these personages, who are absolutely unaware of instruments and nature of the corrupt processes.Authors and project hosts share common opinion, that the term 'corruption' is interpreted incorrectly in the Ukrainian society and is used mainly as an instrument in political battles as well as a social lift for certain public activists. We know the difference between avarice and corruption and reveal it in the project School of Corruption."
        }
    ]

}
$(document).ready(function () {
    var projectsTemplate = $("#projects-template").html();
    var compiledProjectsTemplate = Handlebars.compile(projectsTemplate);
    $(".projects-list-container").html(compiledProjectsTemplate(cast));
});
