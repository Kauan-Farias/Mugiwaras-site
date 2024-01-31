var characterM = window.document.getElementById('character');
var nameM = window.document.getElementById('name');
var descriptionM = window.document.getElementById('description');
var bannerM = window.document.getElementById('banner')

var luffy = window.document.getElementById('option1');
var soundL = new Audio('assets/sounds/luffy.mp3')
var zoro = window.document.getElementById('option2');
var soundZ = new Audio('assets/sounds/zoro.mp3')
var nami = window.document.getElementById('option3');
var soundN = new Audio('assets/sounds/nami.mp3')
var usopp = window.document.getElementById('option4');
var soundU = new Audio('assets/sounds/usopp.mp3')
var sanji = window.document.getElementById('option5');
var soundS = new Audio('assets/sounds/sanji.mp3')
var chopper = window.document.getElementById('option6');
var soundC = new Audio('assets/sounds/chopper.mp3')
var robin = window.document.getElementById('option7');
var soundR = new Audio('assets/sounds/robin.mp3')
var franky = window.document.getElementById('option8');
var soundF = new Audio('assets/sounds/franky.mp3')
var brook = window.document.getElementById('option9');
var soundB = new Audio('assets/sounds/brook.mp3')


function removeefects(){
    luffy.classList.remove('selected')
    zoro.classList.remove('selected')
    nami.classList.remove('selected')
    usopp.classList.remove('selected')
    sanji.classList.remove('selected')
    chopper.classList.remove('selected')
    robin.classList.remove('selected')
    franky.classList.remove('selected')
    brook.classList.remove('selected')
    characterM.src = 'assets/characters/mugiwaras.jpg'
    bannerM.src = 'assets/banners/Logo-luffy.png'
    characterM.classList.remove('character-animation')
    nameM.innerHTML = 'Mugiwaras'
    descriptionM.innerHTML = 'Existem inúmeras tripulações piratas em One Piece, mas nenhum grupo se destaca e cativa tantos fãs como os Piratas do Chapéu de Palha. Eles são o grupo de piratas principal do anime/mangá e são liderados por Monkey D. Luffy nessa jornada que os fãs acompanham há mais de 20 anos.'
}

// Character Luffy start
var lclick = 0
luffy.addEventListener("click", function () {
    if(lclick == 0) {
        lclick = 1
        zclick = 0
        nclick = 0
        uclick = 0
        sclick = 0
        cclick = 0
        rclick = 0
        fclick = 0
        bclick = 0

        soundL.play()
        bannerM.src = 'assets/banners/Logo-luffy.png'
        characterM.src = 'assets/characters/luffy-image.png'
        characterM.classList.add('character-animation')
        nameM.innerHTML = 'Monkey D. Luffy'
        descriptionM.innerHTML = 'Luffy é neto de Monkey D. Garp, Vice-Almirante da Marinha e arqui-inimigo de Gol D. Roger, que fez história no mundo como o Rei dos Piratas e o dono original do tesouro One Piece. Ainda assim, desde jovem Luffy quis seguir os passos dos piratas que admirava, como Shanks e o próprio Roger. Ainda criança, ingeriu acidentalmente a Gomu Gomu no Mi, fruta que lhe proporcionou poderes de borracha, habilidades que ele desenvolve consideravelmente no decorrer do anime, desenvolvendo diferentes golpes.'
        luffy.classList.add('selected')
        zoro.classList.remove('selected')
        nami.classList.remove('selected')
        usopp.classList.remove('selected')
        sanji.classList.remove('selected')
        chopper.classList.remove('selected')
        robin.classList.remove('selected')
        franky.classList.remove('selected')
        brook.classList.remove('selected')
    } else {
        lclick = 0
        removeefects();
    }
})
// Character Luffy end

// Character Zoro start
var zclick = 0
zoro.addEventListener("click", function () {
    if(zclick == 0) {
        lclick = 0
        zclick = 1
        nclick = 0
        uclick = 0
        sclick = 0
        cclick = 0
        rclick = 0
        fclick = 0
        bclick = 0

        soundZ.play()
        bannerM.src = 'assets/banners/Logo-zoro.png'
        characterM.src = 'assets/characters/zoro-image.png'
        characterM.classList.add('character-animation')
        nameM.innerHTML = 'Roronoa Zoro'
        descriptionM.innerHTML = 'Primeiro pirata a ser recrutado por Luffy para os Chapéus de Palha - convite feito no episódio 2 e oficialmente aceito no 3 - Zoro também está entre os quatro integrantes mais poderosos do grupo, além de, assim como seu capitão, fazer parte da Pior Geração, com uma recompensa de $1.111.000.000. Enquanto Luffy sonha em se tornar o Rei dos Piratas, o sonho de Zoro é um dia ser o melhor espadachim do mundo.'
        luffy.classList.remove('selected')
        zoro.classList.add('selected')
        nami.classList.remove('selected')
        usopp.classList.remove('selected')
        sanji.classList.remove('selected')
        chopper.classList.remove('selected')
        robin.classList.remove('selected')
        franky.classList.remove('selected')
        brook.classList.remove('selected')
    } else {
        zclick = 0
        removeefects();
    }
})
// Character Zoro end

// Character Nami start
var nclick = 0
nami.addEventListener("click", function () {
    if(nclick == 0) {
        lclick = 0
        zclick = 0
        nclick = 1
        uclick = 0
        sclick = 0
        cclick = 0
        rclick = 0
        fclick = 0
        bclick = 0

        soundN.play()
        bannerM.src = 'assets/banners/Logo-nami.png'
        characterM.src = 'assets/characters/nami-image.png'
        characterM.classList.add('character-animation')
        nameM.innerHTML = 'Nami'
        descriptionM.innerHTML = 'Antes de se tornar a terceira integrante dos Chapéus de Palha, Nami chegou a se infiltrar no grupo com a intenção de roubá-los. Vamos com calma! A jovem perdeu seus pais na guerra ainda bem criança e foi adotada por Bell-mère, uma mulher da Marinha. Tudo ia bem até que o pirata Arlong chegou ao vilarejo em que elas moravam, matou a mãe adotiva de Nami e sequestrou a garota para que ela pudesse fazer mapas para ele, ofício para o qual sempre mostrou aptidão.'
        luffy.classList.remove('selected')
        zoro.classList.remove('selected')
        nami.classList.add('selected')
        usopp.classList.remove('selected')
        sanji.classList.remove('selected')
        chopper.classList.remove('selected')
        robin.classList.remove('selected')
        franky.classList.remove('selected')
        brook.classList.remove('selected')
    } else {
        nclick = 0
        removeefects();
    }
})
// Character Nami end

// Character Usopp start
var uclick = 0
usopp.addEventListener("click", function () {
    if(uclick == 0) {
        lclick = 0
        zclick = 0
        nclick = 0
        uclick = 1
        sclick = 0
        cclick = 0
        rclick = 0
        fclick = 0
        bclick = 0

        soundU.play()
        bannerM.src = 'assets/banners/Logo-usopp.png'
        characterM.src = 'assets/characters/usopp-image.png'
        characterM.classList.add('character-animation')
        nameM.innerHTML = 'Usopp'
        descriptionM.innerHTML = 'A origem de seu nome ("Uso", em japonês, quer dizer "mentira" ou "falsidade"), seu nariz comprido e suas constantes histórias fantásticas fizeram com que Usopp ganhasse fama de mentiroso. Contudo, o pirata é um homem sensível, e suas narrativas incríveis, inclusive, surgiram como mecanismo de defesa. São uma forma que ele encontrou, ainda criança, de lidar com a morte da mãe e o abandono do pai.'
        luffy.classList.remove('selected')
        zoro.classList.remove('selected')
        nami.classList.remove('selected')
        usopp.classList.add('selected')
        sanji.classList.remove('selected')
        chopper.classList.remove('selected')
        robin.classList.remove('selected')
        franky.classList.remove('selected')
        brook.classList.remove('selected')
    } else {
        uclick = 0
        removeefects();
    }
})
// Character Usopp end

// Character Sanji start
var sclick = 0
sanji.addEventListener("click", function () {
    if(sclick == 0) {
        lclick = 0
        zclick = 0
        nclick = 0
        uclick = 0
        sclick = 1
        cclick = 0
        rclick = 0
        fclick = 0
        bclick = 0

        soundS.play()
        bannerM.src = 'assets/banners/Logo-sanji.png'
        characterM.src = 'assets/characters/sanji-image.png'
        characterM.classList.add('character-animation')
        nameM.innerHTML = 'Sanji'
        descriptionM.innerHTML = 'Sanji é o terceiro filho da família nobre Vinsmoke, e cresceu em meio a maus tratos de seus parentes próximos. Seus irmãos faziam bullying com ele na infância menosprezando sua atitude de alimentar aqueles que seu pai julgava inferiores e a quem não dava atenção. O patriarca via o filho como a vergonha da família. Sanji renunciou seu título de príncipe do Reino Germa e cortasse os laços com todos quando tinha apenas oito anos de idade.'
        luffy.classList.remove('selected')
        zoro.classList.remove('selected')
        nami.classList.remove('selected')
        usopp.classList.remove('selected')
        sanji.classList.add('selected')
        chopper.classList.remove('selected')
        robin.classList.remove('selected')
        franky.classList.remove('selected')
        brook.classList.remove('selected')
    } else {
        sclick = 0
        removeefects();
    }
})
// Character Sanji end

// Character Chopper start
var cclick = 0
chopper.addEventListener("click", function () {
    if(cclick == 0) {
        lclick = 0
        zclick = 0
        nclick = 0
        uclick = 0
        sclick = 0
        cclick = 1
        rclick = 0
        fclick = 0
        bclick = 0

        soundC.play()
        bannerM.src = 'assets/banners/Logo-chopper.png'
        characterM.src = 'assets/characters/chopper-image.png'
        characterM.classList.add('character-animation')
        nameM.innerHTML = 'Tony Tony Chopper'
        descriptionM.innerHTML = 'Sexto integrante dos Chapéus de Palha e um dos poucos que nasceram na Grand Line, Tony Tony Chopper era uma rena comum até ingerir a fruta Hito Hito no Mi, que lhe deu não apenas características humanoides, como também grande inteligência e a capacidade de alterar a forma física de seu corpo. Após desastrosas primeiras interações com os humanos, Chopper foi resgatado pelo Dr Hiriluk, que ajudou a jovem rena a se tornar um médico, sendo ensinado ainda por seis anos pela Dra. Kureha.'
        luffy.classList.remove('selected')
        zoro.classList.remove('selected')
        nami.classList.remove('selected')
        usopp.classList.remove('selected')
        sanji.classList.remove('selected')
        chopper.classList.add('selected')
        robin.classList.remove('selected')
        franky.classList.remove('selected')
        brook.classList.remove('selected')
    } else {
        cclick = 0
        removeefects();
    }
})
// Character Chopper end

// Character Robin start
var rclick = 0
robin.addEventListener("click", function () {
    if(rclick == 0) {
        lclick = 0
        zclick = 0
        nclick = 0
        uclick = 0
        sclick = 0
        cclick = 0
        rclick = 1
        fclick = 0
        bclick = 0

        soundR.play()
        bannerM.src = 'assets/banners/Logo-robin.png'
        characterM.src = 'assets/characters/robin-image.png'
        characterM.classList.add('character-animation')
        nameM.innerHTML = 'Nico Robin'
        descriptionM.innerHTML = 'Embora tenha sido apresentada antes de Chopper, Nico Robin inicialmente era uma antagonista secundária da Saga Alabasta, período em que era conhecida como Miss All Sunday. Ela só passou a integrar a tripulação de Luffy já depois da entrada do médico rena, chegando a sair do grupo uma vez e reintegrando a equipe oficialmente apenas no final do Arco Enies Lobby.'
        luffy.classList.remove('selected')
        zoro.classList.remove('selected')
        nami.classList.remove('selected')
        usopp.classList.remove('selected')
        sanji.classList.remove('selected')
        chopper.classList.remove('selected')
        robin.classList.add('selected')
        franky.classList.remove('selected')
        brook.classList.remove('selected')
    } else {
        rclick = 0
        removeefects();
    }
})
// Character Robin end

// Character Franky start
var fclick = 0
franky.addEventListener("click", function () {
    if(fclick == 0) {
        lclick = 0
        zclick = 0
        nclick = 0
        uclick = 0
        sclick = 0
        cclick = 0
        rclick = 0
        fclick = 1
        bclick = 0

        soundF.play()
        bannerM.src = 'assets/banners/Logo-franky.png'
        characterM.src = 'assets/characters/franky-image.png'
        characterM.classList.add('character-animation')
        nameM.innerHTML = 'Franky'
        descriptionM.innerHTML = 'Na Saga Water 7, conhecemos aquele que se tornaria o oitavo pirata a fazer parte da tripulação de Luffy, Franky. Contudo, assim como Nico Robin, o personagem começa sua trajetória como um antagonista. Um ciborgue de 36 anos, Franky é o líder da Família Franky, que trabalhava com o desmantelamento de navios.'
        luffy.classList.remove('selected')
        zoro.classList.remove('selected')
        nami.classList.remove('selected')
        usopp.classList.remove('selected')
        sanji.classList.remove('selected')
        chopper.classList.remove('selected')
        robin.classList.remove('selected')
        franky.classList.add('selected')
        brook.classList.remove('selected')
    } else {
        fclick = 0
        removeefects();
    }
})
// Character Franky end

// Character Brook start
var bclick = 0
brook.addEventListener("click", function () {
    if(bclick == 0) {
        lclick = 0
        zclick = 0
        nclick = 0
        uclick = 0
        sclick = 0
        cclick = 0
        rclick = 0
        fclick = 0
        bclick = 1

        soundB.play()
        bannerM.src = 'assets/banners/Logo-brook.png'
        characterM.src = 'assets/characters/brook-image.png'
        characterM.classList.add('character-animation')
        nameM.innerHTML = 'Brook'
        descriptionM.innerHTML = 'Nono pirata a integrar a tripulação dos Chapéus de Palha, Brook foi encontrado por Luffy e sua equipe em uma ilha fantasma conhecida como Thriller Bark, no Triângulo Florian. O pirata viveu lá por quase 50 anos após a morte de sua tripulação. Sua antiga equipe foi vítima de doenças e diferentes inimigos. Brook sobreviveu apenas graças à fruta Yomi Yomi no Mi, que lhe proporcionou uma segunda vida como um esqueleto imortal.'
        luffy.classList.remove('selected')
        zoro.classList.remove('selected')
        nami.classList.remove('selected')
        usopp.classList.remove('selected')
        sanji.classList.remove('selected')
        chopper.classList.remove('selected')
        robin.classList.remove('selected')
        franky.classList.remove('selected')
        brook.classList.add('selected')
    } else {
        bclick = 0
        removeefects();
    }
})
// Character Brook end