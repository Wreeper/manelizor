/* 
Manelizor Script
Description: API Manele Random pe website.
Author: Wreeper
Version: 1.0

Discord: wreeper#7997
YouTube channel: https://youtube.com/c/DariusGamingOfficial
GitHub repository: https://github.com/Wreeper/manelizor/

Multumiri speciale:
Rmly @ rmly.dev - Hosting darius1.xyz & fisierul original de pe YouTube al melodiei "Curwa" care nu putea fi descarcat cu API normal din cauza restrictiei de varsta.




ChangeLog:

In viitor: Suport URL YouTube (embed, redirects)

Variabile de folosit: maneaUrl, maneaUrlLink, maneaUrlEmbed
Veti putea face functie de redirect daca doriti:

Notita: Caracterele [ si ] sunt < respectiv > in acest exemplu.

[script]
setTimeout(redirect, 25);
function redirect() {
window.location.href = maneaUrlLink;
}
[/script]

(!) Acesta se pune DUPA <script src> obligatoriu si se pune timeout la 10 milisecunde sau mai mult pentru a preveni erorile. (practic, tot instant se incarca, dar in javascript nu e chiar asa)


06.05.2021 v1.0
Adaugate manelele

*/





var servermanele;
var pathmanele;
var antispamlog = "true";

var maneaNumber = 1;
var maneaLocation;
var maneaName;
var maneaNametw;
var maneaUrl;
var maneaUrlLink = "https://youtu.be/" + maneaUrl;
var maneaUrlEmbed = "https://youtube.com/embed/" + maneaUrlLink;



setTimeout(maneaList, 0);


function maneaList() {
maneaNumber = (Math.floor(Math.random() * 91) + 1);

/* Toate manelele o sa aiba ca path serverul meu, manelizor.darius1.xyz daca nu faci variabilele urmatoare: 

var servermanele = "https://serverultau"
var pathmanele = "/unde/iti/sunt/localizate-manelele"

rezulta in: https://serverultau/unde/iti/sunt/localizate-manelele/Dani Mocanu - Afaceri Ilegale HIT 2014.mp3 (pentru numarul 1)

Lista cu manelele o poti descarca de pe github la manelizor.

*/

/* Daca observi asta, dar doresti sa ai serverele mele in loc de cele ale tale, tot trebuie sa faci variabila:

var antispamlog = "true";

Acesta va seta serverul cu configuratia fara sa-ti mai dea erori in consola ca nu le-ai schimbat. */

if (antispamlog == "true") {
servermanele = "https://manelizor.darius1.xyz/";
pathmanele = "manele/";
}

if (servermanele == undefined) {
servermanele = "https://manelizor.darius1.xyz/";
console.log("Server manele negasit.\nServerul a fost setat in " + servermanele + "\nPentru a-ti seta propriul server pune asta in cod:\n\n<script>\nvar servermanele = \"serverultau\";\n<\/script>");
}

if (pathmanele == undefined) {
pathmanele = "manele/";
console.log("Folder manele nu a fost setat.\nFolderul a fost setat in " + pathmanele + " .\nFull path: " + servermanele + pathmanele + "\nPentru a-ti seta propria cale de manele pune asta in cod:\n\n<script>\nvar pathmanele = \"/unde/iti/sunt/localizate/manelele\";\n<\/script>");
}

if (maneaNumber == 1) {
/* Manea numarul 1 */
/* Ahahaha, de cate ori m-a prins Etupilaker cu "afaceri ilegale" ca cumparam avere B-Hood cu conturi de minecraft. Apropo, ce s-a mai intamplat cu B-Hood? */
maneaName = "Dani Mocanu - Afaceri ilegale";
maneaNametw = "Dani Mocanu - Afaceri Ilegale HIT 2014.mp3";
maneaUrl = "";
} else if (maneaNumber == 2) {
/* Manea numarul 2 */
maneaName = "Dani Mocanu - Am bani de ma enerveaza";
maneaNametw = "Dani Mocanu - Am bani de ma enerveazaOfficial Video.mp3";
maneaUrl = "https://youtu.be/rTeObJmb7hQ"
} else if (maneaNumber == 3) {
/* Manea numarul 3 */
/* Maneaua mea preferata, nimic mai mult. */
maneaName = "Dani Mocanu - Tare tare";
maneaNametw = "Dani Mocanu - Tare TareOfficial Video 4K.mp3";
maneaUrl = "";
} else if (maneaNumber == 4) {
/* Manea numarul 4 */
maneaName = "Dani Mocanu - Am contract cu Dumnezeu";
maneaNametw = "Dani Mocanu - Am contract cu Dumnezeu Official Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 5) {
/* Manea numarul 5 */
maneaName = "Dani Mocanu - Tigan infractor";
maneaNametw = "Dani Mocanu - Tigan Infractor Official Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 6) {
/* Manea numarul 6 */
maneaName = "Dani Mocanu - Haina penala";
maneaNametw = "Dani Mocanu & Lenna - Haina penalaOfficial Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 7) {
/* Manea numarul 7 */
/* Sunt 2 versiuni ale manelei "Tradarea". Nu o folosesc si pe cealalta, chit ca seamana a manea, e foarte urata. */
maneaName = "Dani Mocanu & Lenna - Tradarea | Manea version";
maneaNametw = "Dani Mocanu & Lenna - Tradarea Manea Version.mp3";
maneaUrl = "";
} else if (maneaNumber == 8) {
/* Manea numarul 8 */
maneaName = "Dani Mocanu & Lenna - Reguli de iubire";
maneaNametw = "Dani Mocanu & Lenna - Reguli de IubireOfficial Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 9) {
/* Manea numarul 9 */
maneaName = "Dani Mocanu - Acuzat";
maneaNametw = "Dani Mocanu - Acuzat Official Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 10) {
/* Manea numarul 10 */
maneaName = "Dani Mocanu - Nu comenteaza nimeni la mine";
maneaNametw = "Dani Mocanu - Nu Comenteaza Nimeni La Mine pentru Costel Corduneanu.mp3";
maneaUrl = "";
} else if (maneaNumber == 11) {
/* Manea numarul 11 */
maneaName = "Dani Mocanu - Proxenet";
maneaNametw = "Dani Mocanu - Proxenet Official Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 12) {
/* Manea numarul 12 */
maneaName = "Dani Mocanu - Acuzat 2";
maneaNametw = "Dani Mocanu - Acuzat 2Official Video.mp3";
maneaUrl = "https://youtu.be/-jIV6j1tgF4";
} else if (maneaNumber == 13) {
/* Manea numarul 13 */
maneaName = "Dani Mocanu - Acuzati-ma de hituri";
maneaNametw = "Dani Mocanu - Acuzati-ma de hituri Official Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 14) {
/* Manea numarul 14 */
maneaName = "Dani Mocanu - Bodyguardul lui Dumnezeu";
maneaNametw = "Dani Mocanu - Bodyguardul lui Dumnezeu Official Audio.mp3";
maneaUrl = "";
} else if (maneaNumber == 15) {
/* Manea numarul 15 */
maneaName = "Dani Mocanu - Elvetia";
maneaNametw = "Dani Mocanu - ElvetiaOfficial Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 16) {
/* Manea numarul 16 */
/* nici eu */
maneaName = "Dani Mocanu - Eu nu dau inapoi";
maneaNametw = "DANI MOCANU - Eu nu dau inapoiCOVER.mp3";
maneaUrl = "";
} else if (maneaNumber == 17) {
/* Manea numarul 17 */
/* dar eu da ... pe league of legends, ce credeai? ca joc nasus tank si trb sa ma bag pt echipa */
maneaName = "Dani Mocanu - Eu nu ma las batut";
maneaNametw = "Dani Mocanu - Eu nu ma las batut Official Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 18) {
/* Manea numarul 18 */
maneaName = "Dani Mocanu - Campion";
maneaNametw = "Dani Mocanu - Campion Official Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 19) {
/* Manea numarul 19 */
/* Multumiri speciale lui Rmly de la rmly.dev pentru obtinerea acestui fisier. */
maneaName = "Dani Mocanu - Curwa";
maneaNametw = "DANI MOCANU-CURWA OFFICIAL VIDEO PAMFLET.mp3";
maneaUrl = "";
} else if (maneaNumber == 20) {
/* Manea numarul 20 */
maneaName = "Dani Mocanu si Dani Printul Banatului - Sa ma feresc de garda";
maneaNametw = "DANI PRINTUL BANATULUI SI DANI MOCANU - SA MA FERESC DE GARDA.mp3";
maneaUrl = "";
} else if (maneaNumber == 21) {
/* Manea numarul 21 */
maneaName = "Dani Mocanu - Facearai spume";
maneaNametw = "Dani Mocanu - Facearai spume Official Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 22) {
/* Manea numarul 22 */
maneaName = "Dani Mocanu - Evaziune fiscala";
maneaNametw = "Dani Mocanu - Evaziune Fiscala Official Audio.mp3";
maneaUrl = "";
} else if (maneaNumber == 23) {
/* Manea numarul 23 */
maneaName = "Dani Mocanu - Evadarea";
maneaNametw = "Dani Mocanu - EvadareaCover 50 Cent.mp3";
maneaUrl = "";
} else if (maneaNumber == 24) {
/* Manea numarul 24 */
/* Melodia are introduceri la inceput ca este doar un pamflet. Daca-mi poate face cineva rost de fisierul .mp3 fara acea introducere si la calitate buna (nu pot sa fac un fisier cu calitate buna aparent) sa-mi dati add pe Discord: wreeper#7997
Rasplata: veti fi trecuti la contribuitori =]] */
maneaName = "Dani Mocanu - Femeie usoara";
maneaNametw = "Dani Mocanu - Femeie usoara Official Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 25) {
/* Manea numarul 25 */
maneaName = "Dani Mocanu - Mama";
maneaNametw = "Dani Mocanu - Mama Official Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 26) {
/* Manea numarul 26 */
maneaName = "Dani Mocanu - Smecher cu parfum de dama";
maneaNametw = "Dani Mocanu - Smecher cu parfum de dama Official Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 27) {
/* Manea numarul 27 */
maneaName = "Dani Mocanu - Scandal";
maneaNametw = "DANI MOCANU - SCANDAL Official Audio.mp3";
maneaUrl = "";
} else if (maneaNumber == 28) {
/* Manea numarul 28 */
maneaName = "Dani Mocanu - Sa nu crezi ca am fost prost";
maneaNametw = "Dani Mocanu - Sa nu crezi ca am fost prostOfficial Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 29) {
/* Manea numarul 29 */
maneaName = "Dani Mocanu - Sa n-ai incredere in femei";
maneaNametw = "Dani Mocanu - Sa n-ai incredere in femei Official Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 30) {
/* Manea numarul 30 */
maneaName = "Dani Mocanu - Revolutia";
maneaNametw = "Dani Mocanu - RevolutiaOfficial Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 31) {
/* Manea numarul 31 */
maneaName = "Dani Mocanu - Politisti si procurori";
maneaNametw = "Dani Mocanu - Politisti si procurori Official Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 32) {
/* Manea numarul 32 */
maneaName = "Dani Mocanu - Puiul meu";
maneaNametw = "Dani Mocanu - Puiul meu Official Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 33) {
/* Manea numarul 33 */
maneaName = "Dani Mocanu - Suflet sub armura";
maneaNametw = "Dani Mocanu - Suflet sub armura Official Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 34) {
/* Manea numarul 34 */
maneaName = "Dani Mocanu - Tot aurul din lume";
maneaNametw = "Dani Mocanu - Tot aurul din lume Official Audio.mp3";
maneaUrl = "";
} else if (maneaNumber == 35) {
/* Manea numarul 35 */
maneaName = "Dani Mocanu - Tot ce am avut";
maneaNametw = "Dani Mocanu - Tot ce am avutOfficial Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 36) {
/* Manea numarul 36 */
maneaName = "Dani Mocanu - Trage de fiare";
maneaNametw = "Dani Mocanu - Trage de fiare Official Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 37) {
/* Manea numarul 37 */
maneaName = "Dani Mocanu - Strangerea dovezilor";
maneaNametw = "Dani Mocanu - Strangerea dovezilor Official Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 38) {
/* Manea numarul 38 */
maneaName = "Dani Mocanu - Tu vrei zi de zi de toate";
maneaNametw = "Dani Mocanu - Tu vrei zi de zi de toate Official Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 39) {
/* Manea numarul 39 */
maneaName = "Dani Mocanu - Va pun interdictie";
maneaNametw = "Dani Mocanu - Va pun interdictie Official Audio.mp3";
maneaUrl = "";
} else if (maneaNumber == 40) {
/* Manea numarul 40 */
maneaName = "Dani Mocanu - Viata pe Internet";
maneaNametw = "Dani Mocanu - Viata pe InternetOfficial Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 41) {
/* Manea numarul 41 */
/* Voi nu ma haliti, dar ma discutati, vi se umfla muschii cat ma criticati, comentati din fata unui monitor */
maneaName = "Dani Mocanu - Voi nu ma haliti";
maneaNametw = "Dani Mocanu - Voi nu ma haliti Official Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 42) {
/* Manea numarul 42 */
maneaName = "Dani Mocanu - Coarda";
maneaNametw = "Dani Mocanu COARDA Official Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 43) {
/* Manea numarul 43 */
maneaName = "Dani Mocanu - Nu denigrez femeile";
maneaNametw = "Dani Mocanu - Nu denigrez femeile Official Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 44) {
/* Manea numarul 44 */
maneaName = "Dani Mocanu - Nu dau faliment";
maneaNametw = "Dani Mocanu - Nu dau faliment Official Audio.mp3";
maneaUrl = "";
} else if (maneaNumber == 45) {
/* Manea numarul 45 */
maneaName = "Dani Mocanu - Frate de sange";
maneaNametw = "Dani Mocanu - Frate de sange Official Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 46) {
/* Manea numarul 46 */
maneaName = "Dani Mocanu - Fetele din club";
maneaNametw = "Dani Mocanu - Fetele din club FULL.mp3";
maneaUrl = "";
} else if (maneaNumber == 47) {
/* Manea numarul 47 */
maneaName = "Dani Mocanu - Doar Dumnezeu ma poate judeca";
maneaNametw = "Dani Mocanu - Doar Dumnezeu ma poate judeca Official Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 48) {
/* Manea numarul 48 */
maneaName = "Dani Mocanu - E normal sa dau un ban";
maneaNametw = "Dani Mocanu - E normal sa dau un ban Official Audio.mp3";
maneaUrl = "";
} else if (maneaNumber == 49) {
/* Manea numarul 49 */
maneaName = "Dani Mocanu - Domnilor mascati";
maneaNametw = "Dani Mocanu - Domnilor Mascati Official Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 50) {
/* Manea numarul 50 */
maneaName = "Dani Mocanu - Respectat ca o vedeta";
maneaNametw = "Dani Mocanu - Respectat ca o Vedeta ( pentru fratii Stoica ).mp3";
maneaUrl = "";
} else if (maneaNumber == 51) {
/* Manea numarul 51 */
maneaName = "Dani Mocanu - Ruleta ruseasca";
maneaNametw = "DANI MOCANU - Ruleta ruseasca Official Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 52) {
/* Manea numarul 52 */
maneaName = "Dani Mocanu - Spartanii";
maneaNametw = "Dani Mocanu - SpartaniiOfficial Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 53) {
/* Manea numarul 53 */
maneaName = "Dani Mocanu - Sifonari nenorociti";
maneaNametw = "Dani Mocanu - Sifonari Nenorociti Official Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 54) {
/* Manea numarul 54 */
maneaName = "Dani Mocanu - Singur impotriva tuturor";
maneaNametw = "Dani Mocanu - Singur impotriva tuturorOfficial Audio.mp3";
maneaUrl = "";
} else if (maneaNumber == 55) {
/* Manea numarul 55 */
maneaName = "Dani Mocanu & David Oscar - Sangele apa nu se face";
maneaNametw = "Dani Mocanu & David Oscar - Sangele apa nu se faceOfficial Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 56) {
/* Manea numarul 56 */
maneaName = "Dani Mocanu & Mitzu din Salaj - Unde pune leul gheara";
maneaNametw = "Dani Mocanu & Mitzu din Salaj - Unde pune leul gheara Official Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 57) {
/* Manea numarul 57 */
maneaName = "Dani Mocanu & David Oscar - Respect";
maneaNametw = "Dani Mocanu & David Oscar - Respect Official Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 58) {
/* Manea numarul 58 */
maneaName = "Dani Mocanu & Alex din Aparatori - Cola";
maneaNametw = "Dani Mocanu & Alex din Aparatori - ColaOfficial Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 59) {
/* Manea numarul 59 */
maneaName = "Dani Mocanu - Razbunarea";
maneaNametw = "Dani Mocanu - RAZBUNAREA ( VIDEOCLIP OFFICIAL HD !!! ).mp3";
maneaUrl = "";
} else if (maneaNumber == 60) {
/* Manea numarul 60 */
maneaName = "Dani Mocanu - El Chapo";
maneaNametw = "Dani Mocanu El Chapo Official Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 61) {
/* Manea numarul 61 */
maneaName = "Dani Mocanu - De ce esti rea";
maneaNametw = "Dani Mocanu De ce esti rea VIDEOCLIP OFFICIAL.mp3";
maneaUrl = "";
} else if (maneaNumber == 62) {
/* Manea numarul 62 */
maneaName = "Dani Mocanu - Legenda vie";
maneaNametw = "Dani Mocanu Legenda vie Official Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 63) {
/* Manea numarul 63 */
maneaName = "Dani Mocanu - Gata cu lupii";
maneaNametw = "Dani Mocanu - Gata cu Lupii Official Audio.mp3";
maneaUrl = "";
} else if (maneaNumber == 64) {
/* Manea numarul 64 */
maneaName = "Dani Mocanu - Hotul mondial";
maneaNametw = "Dani Mocanu - Hotul Mondial Official Audio.mp3";
maneaUrl = "";
} else if (maneaNumber == 65) {
/* Manea numarul 65 */
maneaName = "Dani Mocanu - Iubesc numai banii";
maneaNametw = "Dani Mocanu - Iubesc numai baniiOfficial Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 66) {
/* Manea numarul 66 */
maneaName = "Dani Mocanu & Costi - Artileria";
maneaNametw = "Dani Mocanu Costi - Artileria Official Video 5K.mp3";
maneaUrl = "";
} else if (maneaNumber == 67) {
/* Manea numarul 67 */
maneaName = "Dani Mocanu - Alo politia";
maneaNametw = "Dani Mocanu - Alo Politia Official Audio.mp3";
maneaUrl = "";
} else if (maneaNumber == 68) {
/* Manea numarul 68 */
maneaName = "Dani Mocanu - Coltul rosu";
maneaNametw = "Dani Mocanu - Coltul Rosu Official Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 69) {
/* Manea numarul 69 */
maneaName = "Dani Mocanu - Capul tuturor";
maneaNametw = "Dani Mocanu - Capul Tuturor Official Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 70) {
/* Manea numarul 70 */
maneaName = "Dani Mocanu - Celebrul interlop";
maneaNametw = "Dani Mocanu - Celebrul interlopOfficial Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 71) {
/* Manea numarul 71 */
maneaName = "Dani Mocanu - De ce sa ne certam iubi";
maneaNametw = "Dani Mocanu - De ce sa ne certam iubi 2016 [ COVER ].mp3";
maneaUrl = "";
} else if (maneaNumber == 72) {
/* Manea numarul 72 */
maneaName = "Dani Mocanu - Fara numar";
maneaNametw = "Dani Mocanu - Fara numar 69 Official Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 73) {
/* Manea numarul 73 */
maneaName = "Dani Mocanu - Mafia";
maneaNametw = "Dani Mocanu - MAFIA Official Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 74) {
/* Manea numarul 74 */
maneaName = "Dani Mocanu - Palma de mallorca";
maneaNametw = "Dani Mocanu - Palma de Mallorca Official Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 75) {
/* Manea numarul 75 */
maneaName = "Dani Mocanu - Milioane milioane";
maneaNametw = "Dani Mocanu - Milioane Milioane ( Videoclip Oficial ).mp3";
maneaUrl = "";
} else if (maneaNumber == 76) {
/* Manea numarul 76 */
maneaName = "Dani Mocanu - Lege blestemata";
maneaNametw = "Dani Mocanu - Lege blestemata Official Audio.mp3";
maneaUrl = "";
} else if (maneaNumber == 77) {
/* Manea numarul 77 */
maneaName = "Dani Mocanu - Pentru mama pentru tata";
maneaNametw = "Dani Mocanu - Pentru mama pentru tata Official Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 78) {
/* Manea numarul 78 */
maneaName = "Dani Mocanu - Of of dusmanii mei";
maneaNametw = "Dani Mocanu - Of Of dusmanii mei Official Audio.mp3";
maneaUrl = "";
} else if (maneaNumber == 79) {
/* Manea numarul 79 */
maneaName = "Dani Mocanu - Alcapone";
maneaNametw = "DANI MOCANU- ALCAPONEOfficial Audio.mp3";
maneaUrl = "";
} else if (maneaNumber == 80) {
/* Manea numarul 80 */
maneaName = "Dani Mocanu - Stop Romania";
maneaNametw = "Dani Mocanu Stop Romania Official Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 81) {
/* Manea numarul 81 */
maneaName = "Dani Mocanu - Asasin 2";
maneaNametw = "Dani Mocanu Asasin 2 Official Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 82) {
/* Manea numarul 82 */
maneaName = "Dani Mocanu - Mafiot cu suflet mare";
maneaNametw = "Dani Mocanu - Mafiot cu suflet mare (oficial video).mp3";
maneaUrl = "";
} else if (maneaNumber == 83) {
/* Manea numarul 83 */
maneaName = "Dani Mocanu - Ma rog pentru libertate";
maneaNametw = "DANI MOCANU - Ma rog pentru Libertate (Gaby Jianu Videography).mp3";
maneaUrl = "";
} else if (maneaNumber == 84) {
/* Manea numarul 84 */
maneaName = "Dani Mocanu - Femei femei";
maneaNametw = "Dani Mocanu - Femei Femei Official Audio.mp3";
maneaUrl = "";
} else if (maneaNumber == 85) {
/* Manea numarul 85 */
maneaName = "Dani Mocanu - Beton armat";
maneaNametw = "Dani Mocanu - Beton Armat Official Audio.mp3";
maneaUrl = "";
} else if (maneaNumber == 86) {
/* Manea numarul 86 */
maneaName = "Dani Mocanu - Mare patron";
maneaNametw = "Dani Mocanu - Mare patron Official Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 87) {
/* Manea numarul 87 */
maneaName = "Dani Mocanu - Nimeni, nimeni";
maneaNametw = "Dani Mocanu - Nimeni , Nimeni Official Video Cover 2020.mp3";
maneaUrl = "";
} else if (maneaNumber == 88) {
/* Manea numarul 88 */
maneaName = "Dani Mocanu - Nevasta, nevasta";
maneaNametw = "Dani Mocanu - Nevasta , Nevasta Official Audio.mp3";
maneaUrl = "";
} else if (maneaNumber == 89) {
/* Manea numarul 89 */
maneaName = "Dani Mocanu - Producator";
maneaNametw = "Dani Mocanu - Producator ( Oficial Audio ) 2018.mp3";
maneaUrl = "";
} else if (maneaNumber == 90) {
/* Manea numarul 90 */
maneaName = "Dani Mocanu - Vita aleasa";
maneaNametw = "Dani Mocanu - Vita aleasa Official Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 91) {
/* Manea numarul 91 */
maneaName = "Dani Mocanu - Rosia montana";
maneaNametw = "Dani Mocanu - Rosia Montana Official Video.mp3";
maneaUrl = "";
} else if (maneaNumber == 92) {
/* Manea numarul 92 */
maneaName = "Dani Mocanu - Mai e un an si te intorci acasa";
maneaNametw = "Dani Mocanu - Mai e un an si te intorci acasaOfficial Video.mp3";
maneaUrl = "";
}
}

setTimeout(maneaRandom, 5);

function maneaRandom() {
maneaLocation = servermanele+pathmanele+maneaNametw;
document.getElementById("test").innerHTML = maneaName + "<br>" + maneaLocation;
console.log("=======================\n\nManelizor by Wreeper v1.0 loaded succesfully.\nDiscord: wreeper#7997\nYouTube: https://youtube.com/c/DariusGamingOfficial/\nGitHub repository: https://github.com/Wreeper/manelizor\n\nDaca vezi acest mesaj, inseamna ca scriptul functioneaza si esti gata de a incepe sa pui elemente pentru a fi inlocuite cu manele random.\n\n=======================");
}


