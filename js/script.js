var nameM = window.document.getElementById('name');
var descriptionM = window.document.getElementById('description');
var characterM = window.document.getElementById('character')

var luffy = window.document.getElementById('option1');

var zoro = window.document.getElementById ('option2')

var nami = window.document.getElementById ('option3')

var usopp = window.document.getElementById ('option4')

var sanji = window.document.getElementById ('option5')

var chopper = window.document.getElementById ('option6')

var robin = window.document.getElementById ('option7')

var franky = window.document.getElementById ('option8')

var brook = window.document.getElementById ('option9')


function padrao() {
        nameM.innerHTML = 'Mugiwaras'
        descriptionM.innerHTML = 'Existem inúmeras tripulações piratas em One Piece, mas nenhum grupo se destaca e cativa tantos fãs como os Piratas do Chapéu de Palha. Eles são o grupo de piratas principal do anime/mangá e são liderados por Monkey D. Luffy nessa jornada que os fãs acompanham há mais de 20 anos.'
        characterM.src = 'assets/images/mugiwaras.jpg'
        characterM.classList.remove('small-character')    
}

//Luffy start
//Luffy == l
var lclick = 0
luffy.addEventListener("click", function () {
    if(lclick == 0){
        lclick = 1
        zclick = 0 /*clique na opção zoro sai*/
        nclick = 0 /*clique na opção nami sai*/
        uclick = 0 /*clique na opção ussop sai*/
        sclick = 0 /*clique na opção sanji sai*/
        cclick = 0 /*clique na opção chopper sai*/
        rclick = 0 /*clique na opção robin sai*/
        fclick = 0 /*clique na opção franky sai*/
        bclick = 0 /*clique na opção brook sai*/
        characterM.classList.add('small-character')    
        characterM.src = 'assets/images/luffy-image.png'
        nameM.innerHTML = 'Monkey D. Luffy'
        descriptionM.innerHTML = 'Luffy é neto de Monkey D. Garp, Vice-Almirante da Marinha e arqui-inimigo de Gol D. Roger, que fez história no mundo como o Rei dos Piratas e o dono original do tesouro One Piece. Ainda assim, desde jovem Luffy quis seguir os passos dos piratas que admirava, como Shanks e o próprio Roger. Ainda criança, ingeriu acidentalmente a Gomu Gomu no Mi, fruta que lhe proporcionou poderes de borracha, habilidades que ele desenvolve consideravelmente no decorrer do anime, desenvolvendo diferentes golpes.'
    } else {
        lclick = 0
        padrao();
    }
})
//Luffy end

//Zoro start
//Zoro == 2
var zclick = 0
zoro.addEventListener("click", function () {
    if(zclick == 0){
        lclick = 0 /*clique na opção luffy sai*/
        zclick = 1 
        nclick = 0 /*clique na opção nami sai*/
        uclick = 0 /*clique na opção ussop sai*/
        sclick = 0 /*clique na opção sanji sai*/
        cclick = 0 /*clique na opção chopper sai*/
        rclick = 0 /*clique na opção robin sai*/
        fclick = 0 /*clique na opção franky sai*/
        bclick = 0 /*clique na opção brook sai*/
        characterM.classList.remove('small-character')  
        characterM.src = 'assets/images/zoro-image.png'
        nameM.innerHTML = 'Roronoa Zoro'
        descriptionM.innerHTML = 'Primeiro pirata a ser recrutado por Luffy para os Chapéus de Palha - convite feito no episódio 2 e oficialmente aceito no 3 - Zoro também está entre os quatro integrantes mais poderosos do grupo, além de, assim como seu capitão, fazer parte da Pior Geração, com uma recompensa de $1.111.000.000. Enquanto Luffy sonha em se tornar o Rei dos Piratas, o sonho de Zoro é um dia ser o melhor espadachim do mundo.'
    } else {
        zclick = 0
        padrao();
    }
})
//Zoro end

//Nami start
//Nami == 3
var nclick = 0
nami.addEventListener("click", function () {
    if(nclick == 0){
        lclick = 0 /*clique na opção luffy sai*/
        zclick = 0 /*clique na opção zoro sai*/
        nclick = 1
        uclick = 0 /*clique na opção ussop sai*/
        sclick = 0 /*clique na opção sanji sai*/
        cclick = 0 /*clique na opção chopper sai*/
        rclick = 0 /*clique na opção robin sai*/
        fclick = 0 /*clique na opção franky sai*/
        bclick = 0 /*clique na opção brook sai*/
        characterM.classList.remove('small-character')  
        characterM.src = 'assets/images/nami-image.png'
        nameM.innerHTML = 'Nami'
        descriptionM.innerHTML = 'Primeiro pirata a ser recrutado por Luffy para os Chapéus de Palha - convite feito no episódio 2 e oficialmente aceito no 3 - Zoro também está entre os quatro integrantes mais poderosos do grupo, além de, assim como seu capitão, fazer parte da Pior Geração, com uma recompensa de $1.111.000.000. Enquanto Luffy sonha em se tornar o Rei dos Piratas, o sonho de Zoro é um dia ser o melhor espadachim do mundo.'
    } else {
        nclick = 0
        padrao();
    }
})
//Nami end

//Usopp start
//Usopp == 4
var uclick = 0
usopp.addEventListener("click", function () {
    if(uclick == 0){
        lclick = 0 /*clique na opção luffy sai*/
        zclick = 0 /*clique na opção zoro sai*/
        nclick = 0 /*clique na opção nami sai*/
        uclick = 1 
        sclick = 0 /*clique na opção sanji sai*/
        cclick = 0 /*clique na opção chopper sai*/
        rclick = 0 /*clique na opção robin sai*/
        fclick = 0 /*clique na opção franky sai*/
        bclick = 0 /*clique na opção brook sai*/
        characterM.classList.remove('small-character')  
        characterM.src = 'assets/images/usopp-image.png'
        nameM.innerHTML = 'Usopp'
        descriptionM.innerHTML = 'A origem de seu nome ("Uso", em japonês, quer dizer "mentira" ou "falsidade"), seu nariz comprido e suas constantes histórias fantásticas fizeram com que Usopp ganhasse fama de mentiroso. Contudo, o pirata é um homem sensível, e suas narrativas incríveis, inclusive, surgiram como mecanismo de defesa. São uma forma que ele encontrou, ainda criança, de lidar com a morte da mãe e o abandono do pai.'
    } else {
        uclick = 0
        padrao();
    }
})
//Usopp end

//Sanji start
//Sanji == 3
var sclick = 0
sanji.addEventListener("click", function () {
    if(sclick == 0){
        lclick = 0 /*clique na opção luffy sai*/
        zclick = 0 /*clique na opção zoro sai*/
        nclick = 0 /*clique na opção nami sai*/
        uclick = 0 /*clique na opção ussop sai*/
        sclick = 1
        cclick = 0 /*clique na opção chopper sai*/
        rclick = 0 /*clique na opção robin sai*/
        fclick = 0 /*clique na opção franky sai*/
        bclick = 0 /*clique na opção brook sai*/
        characterM.classList.remove('small-character')  
        characterM.src = 'assets/images/sanji-image.png'
        nameM.innerHTML = 'Sanji'
        descriptionM.innerHTML = 'Sanji é o terceiro filho da família nobre Vinsmoke, e cresceu em meio a maus tratos de seus parentes próximos. Seus irmãos faziam bullying com ele na infância menosprezando sua atitude de alimentar aqueles que seu pai julgava inferiores e a quem não dava atenção. O patriarca via o filho como a vergonha da família. Sanji renunciou seu título de príncipe do Reino Germa e cortasse os laços com todos quando tinha apenas oito anos de idade.'
    } else {
        sclick = 0
        padrao();
    }
})
//Sanji end

//Chopper start
//Chopper == 3
var cclick = 0
chopper.addEventListener("click", function () {
    if(cclick == 0){
        lclick = 0 /*clique na opção luffy sai*/
        zclick = 0 /*clique na opção zoro sai*/
        nclick = 0 /*clique na opção nami sai*/
        uclick = 0 /*clique na opção ussop sai*/
        sclick = 0 /*clique na opção sanji sai*/
        cclick = 1
        rclick = 0 /*clique na opção robin sai*/
        fclick = 0 /*clique na opção franky sai*/
        bclick = 0 /*clique na opção brook sai*/
        characterM.classList.remove('small-character')  
        characterM.src = 'assets/images/chopper-image.png'
        nameM.innerHTML = 'Tony Tony Chopper'
        descriptionM.innerHTML = 'Sexto integrante dos Chapéus de Palha e um dos poucos que nasceram na Grand Line, Tony Tony Chopper era uma rena comum até ingerir a fruta Hito Hito no Mi, que lhe deu não apenas características humanoides, como também grande inteligência e a capacidade de alterar a forma física de seu corpo. Após desastrosas primeiras interações com os humanos, Chopper foi resgatado pelo Dr Hiriluk, que ajudou a jovem rena a se tornar um médico, sendo ensinado ainda por seis anos pela Dra. Kureha.'
    } else {
        cclick = 0
        padrao();
    }
})
//Chopper end

//Robin start
//Robin == 3
var rclick = 0
robin.addEventListener("click", function () {
    if(rclick == 0){
        lclick = 0 /*clique na opção luffy sai*/
        zclick = 0 /*clique na opção zoro sai*/
        nclick = 0 /*clique na opção nami sai*/
        uclick = 0 /*clique na opção ussop sai*/
        sclick = 0 /*clique na opção sanji sai*/
        cclick = 0 /*clique na opção chopper sai*/
        rclick = 1
        fclick = 0 /*clique na opção franky sai*/
        bclick = 0 /*clique na opção brook sai*/
        characterM.classList.remove('small-character')  
        characterM.src = 'assets/images/robin-image.png'
        nameM.innerHTML = 'Nico Robin'
        descriptionM.innerHTML = 'Embora tenha sido apresentada antes de Chopper, Nico Robin inicialmente era uma antagonista secundária da Saga Alabasta, período em que era conhecida como Miss All Sunday. Ela só passou a integrar a tripulação de Luffy já depois da entrada do médico rena, chegando a sair do grupo uma vez e reintegrando a equipe oficialmente apenas no final do Arco Enies Lobby.'
    } else {
        rclick = 0
        padrao();
    }
})
//Robin end

//Franky start
//Franky == 3
var fclick = 0
franky.addEventListener("click", function () {
    if(fclick == 0){
        lclick = 0 /*clique na opção luffy sai*/
        zclick = 0 /*clique na opção zoro sai*/
        nclick = 0 /*clique na opção nami sai*/
        uclick = 0 /*clique na opção ussop sai*/
        sclick = 0 /*clique na opção sanji sai*/
        cclick = 0 /*clique na opção chopper sai*/
        rclick = 0 /*clique na opção robin sai*/
        fclick = 1
        bclick = 0 /*clique na opção brook sai*/
        characterM.classList.remove('small-character')  
        characterM.src = 'assets/images/franky-image.png'
        nameM.innerHTML = 'Franky'
        descriptionM.innerHTML = 'Na Saga Water 7, conhecemos aquele que se tornaria o oitavo pirata a fazer parte da tripulação de Luffy, Franky. Contudo, assim como Nico Robin, o personagem começa sua trajetória como um antagonista. Um ciborgue de 36 anos, Franky é o líder da Família Franky, que trabalhava com o desmantelamento de navios.'
    } else {
        fclick = 0
        padrao();
    }
})
//Franky end

//Brook start
//Brook == 3
var bclick = 0
brook.addEventListener("click", function () {
    if(bclick == 0){
        lclick = 0 /*clique na opção luffy sai*/
        zclick = 0 /*clique na opção zoro sai*/
        nclick = 0 /*clique na opção nami sai*/
        uclick = 0 /*clique na opção ussop sai*/
        sclick = 0 /*clique na opção sanji sai*/
        cclick = 0 /*clique na opção chopper sai*/
        rclick = 0 /*clique na opção robin sai*/
        fclick = 0 /*clique na opção franky sai*/
        bclick = 1
        characterM.classList.add('small-character')  
        characterM.src = 'assets/images/brook-image.png'
        nameM.innerHTML = 'Brook'
        descriptionM.innerHTML = 'Nono pirata a integrar a tripulação dos Chapéus de Palha, Brook foi encontrado por Luffy e sua equipe em uma ilha fantasma conhecida como Thriller Bark, no Triângulo Florian. O pirata viveu lá por quase 50 anos após a morte de sua tripulação. Sua antiga equipe foi vítima de doenças e diferentes inimigos. Brook sobreviveu apenas graças à fruta Yomi Yomi no Mi, que lhe proporcionou uma segunda vida como um esqueleto imortal.'
    } else {
        bclick = 0
        padrao();
    }
})
//Brook end