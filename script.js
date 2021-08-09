/* 
Manelizor Script
Description: API Manele Random pe website.
Author: Wreeper
Version: 1.0

Discord: wreeper#7997
YouTube channel: https://youtube.com/c/DariusGamingOfficial
GitHub repository: https://github.com/Wreeper/manelizor/


(!) Dani Mocanu a dezactivat redarea pe alte site-uri a videoclipurilor sale. Asta inseamna ca variabila "maneaUrlEmbed" va fi nefolositoare in cazul clipurillor cu el. Puteti insa sa faceti redirect.



ChangeLog:

06.05.2021 v1.0 - 2 ore de la lansarea precedenta
Suport URL YouTube (embed, redirects)

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

+ adaugata maneaua 6 gloante

06.05.2021 v1.0
Adaugate manelele

*/




var servermanele = "https://manelizor.wreeper.top/";
var pathmanele = "";

var maneaNumber = 0;
var maneaLocation;
var maneaName;
var maneaNametw;
var maneaUrl;
var maneaUrlLink;
var maneaUrlEmbed;

setTimeout(regen, 0);

function regen() {
maneaNumber = (Math.floor(Math.random() * 101) + 1);

if (maneaNumber == undefined) {
console.log("Eroare la generare: numarul are valoare nula. Se regenereaza numarul, asteptati...");
setTimeout(regen, 0);
} else if (maneaNumber == 0) {
console.log("Eroare la generare: numarul este egal cu 0. Se regenereaza numarul, asteptati...");
setTimeout(regen, 0);
} else {
setTimeout(maneaList, 0);
}
}

function maneaList() {
/* Toate manelele o sa aiba ca path serverul meu daca nu faci variabilele urmatoare: 

var servermanele = "https://serverultau"
var pathmanele = "/unde/iti/sunt/localizate-manelele"

rezulta in: https://serverultau/unde/iti/sunt/localizate-manelele/Dani Mocanu - Afaceri Ilegale HIT 2014.mp3 (pentru numarul 1)

Lista cu manelele o poti descarca de pe github la manelizor.

*/

if (servermanele == undefined) {
servermanele = "https://manelizor.wreeper.top/";
console.log("Server manele negasit.\nServerul a fost setat in " + servermanele + "\nPentru a-ti seta propriul server pune asta in cod:\n\n<script>\nvar servermanele = \"serverultau\";\n<\/script>");
}

if (pathmanele == undefined) {
pathmanele = "manele";
console.log("Folder manele nu a fost setat.\nFolderul a fost setat in " + pathmanele + " .\nFull path: " + servermanele + pathmanele + "\nPentru a-ti seta propria cale de manele pune asta in cod:\n\n<script>\nvar pathmanele = \"/unde/iti/sunt/localizate/manelele\";\n<\/script>");
}

if (maneaNumber == 1) {
/* Manea numarul 1 */
/* Ahahaha, de cate ori m-a prins Etupilaker cu "afaceri ilegale" ca cumparam avere B-Hood cu conturi de minecraft. Apropo, ce s-a mai intamplat cu B-Hood? */
maneaName = "Dani Mocanu - Afaceri ilegale";
maneaNametw = "Dani%20Mocanu%20-%20Afaceri%20Ilegale%20HIT%202014.mp3";
maneaUrl = "Ghf8pyjLacE";
} else if (maneaNumber == 2) {
/* Manea numarul 2 */
maneaName = "Dani Mocanu - Am bani de ma enerveaza";
maneaNametw = "Dani%20Mocanu%20-%20Am%20bani%20de%20ma%20enerveazaOfficial%20Video.mp3";
maneaUrl = "rTeObJmb7hQ";
} else if (maneaNumber == 3) {
/* Manea numarul 3 */
/* Maneaua mea preferata, nimic mai mult. */
maneaName = "Dani Mocanu - Tare tare";
maneaNametw = "Dani%20Mocanu%20-%20Tare%20TareOfficial%20Video%204K.mp3";
maneaUrl = "TsUxWZeFCw8";
} else if (maneaNumber == 4) {
/* Manea numarul 4 */
maneaName = "Dani Mocanu - Am contract cu Dumnezeu";
maneaNametw = "Dani%20Mocanu%20-%20Am%20contract%20cu%20Dumnezeu%20Official%20Video.mp3";
maneaUrl = "tr2JIIYVVvM";
} else if (maneaNumber == 5) {
/* Manea numarul 5 */
maneaName = "Dani Mocanu - Tigan infractor";
maneaNametw = "Dani%20Mocanu%20-%20Tigan%20Infractor%20Official%20Video.mp3";
maneaUrl = "RRusPZdaThw";
} else if (maneaNumber == 6) {
/* Manea numarul 6 */
maneaName = "Dani Mocanu - Haina penala";
maneaNametw = "Dani%20Mocanu%20&%20Lenna%20-%20Haina%20penalaOfficial%20Video.mp3";
maneaUrl = "aCnklI033uI";
} else if (maneaNumber == 7) {
/* Manea numarul 7 */
/* Sunt 2 versiuni ale manelei "Tradarea". Nu o folosesc si pe cealalta, chit ca seamana a manea, e foarte urata. */
maneaName = "Dani Mocanu & Lenna - Tradarea | Manea version";
maneaNametw = "Dani%20Mocanu%20&%20Lenna%20-%20Tradarea%20Manea%20Version.mp3";
maneaUrl = "fLlBAVNTiJk";
} else if (maneaNumber == 8) {
/* Manea numarul 8 */
maneaName = "Dani Mocanu & Lenna - Reguli de iubire";
maneaNametw = "Dani Mocanu%20&%20Lenna%20-%20Reguli%20de%20IubireOfficial%20Video.mp3";
maneaUrl = "vUhCVAGSCpc";
} else if (maneaNumber == 9) {
/* Manea numarul 9 */
maneaName = "Dani Mocanu - Acuzat";
maneaNametw = "Dani%20Mocanu%20-%20Acuzat%20Official%20Video.mp3";
maneaUrl = "3_lluKG55eU";
} else if (maneaNumber == 10) {
/* Manea numarul 10 */
maneaName = "Dani Mocanu - Nu comenteaza nimeni la mine";
maneaNametw = "Dani%20Mocanu%20-%20Nu%20Comenteaza%20Nimeni%20La%20Mine%20pentru%20Costel%20Corduneanu.mp3";
maneaUrl = "we7vrIOdoHU";
} else if (maneaNumber == 11) {
/* Manea numarul 11 */
maneaName = "Dani Mocanu - Proxenet";
maneaNametw = "Dani%20Mocanu%20-%20Proxenet%20Official%20Video.mp3";
maneaUrl = "Mco82LUZXtM";
} else if (maneaNumber == 12) {
/* Manea numarul 12 */
maneaName = "Dani Mocanu - Acuzat 2";
maneaNametw = "Dani%20Mocanu%20-%20Acuzat%202Official%20Video.mp3";
maneaUrl = "-jIV6j1tgF4";
} else if (maneaNumber == 13) {
/* Manea numarul 13 */
maneaName = "Dani Mocanu - Acuzati-ma de hituri";
maneaNametw = "Dani%20Mocanu%20-%20Acuzati-ma%20de%20hituri%20Official%20Video.mp3";
maneaUrl = "Wm8pyecRvxw";
} else if (maneaNumber == 14) {
/* Manea numarul 14 */
maneaName = "Dani Mocanu - Bodyguardul lui Dumnezeu";
maneaNametw = "Dani%20Mocanu%20-%20Bodyguardul%20lui%20Dumnezeu%20Official%20Audio.mp3";
maneaUrl = "mcs8fKLxy1I";
} else if (maneaNumber == 15) {
/* Manea numarul 15 */
maneaName = "Dani Mocanu - Elvetia";
maneaNametw = "Dani%20Mocanu%20-%20ElvetiaOfficial%20Video.mp3";
maneaUrl = "6RM2qu6LvXM";
} else if (maneaNumber == 16) {
/* Manea numarul 16 */
/* nici eu */
maneaName = "Dani Mocanu - Eu nu dau inapoi";
maneaNametw = "DANI MOCANU%20-%20Eu%20nu%20dau%20inapoiCOVER.mp3";
maneaUrl = "wn1OsMSc61I";
} else if (maneaNumber == 17) {
/* Manea numarul 17 */
/* dar eu da ... pe league of legends, ce credeai? ca joc nasus tank si trb sa ma bag pt echipa */
maneaName = "Dani Mocanu - Eu nu ma las batut";
maneaNametw = "Dani%20Mocanu%20-%20Eu%20nu%20ma%20las%20batut%20Official%20Video.mp3";
maneaUrl = "IvidImBgQi4";
} else if (maneaNumber == 18) {
/* Manea numarul 18 */
maneaName = "Dani Mocanu - Campion";
maneaNametw = "Dani%20Mocanu%20-%20Campion%20Official%20Video.mp3";
maneaUrl = "YNwstIYL2rg";
} else if (maneaNumber == 19) {
/* Manea numarul 19 */
maneaName = "Dani Mocanu - Curwa";
maneaNametw = "DANI%20MOCANU-CURWA%20OFFICIAL%20VIDEO%20PAMFLET.mp3";
maneaUrl = "bKB1USWjfjY";
} else if (maneaNumber == 20) {
/* Manea numarul 20 */
maneaName = "Dani Mocanu si Dani Printul Banatului - Sa ma feresc de garda";
maneaNametw = "DANI%20PRINTUL%20BANATULUI%20SI%20DANI%20MOCANU%20-%20SA%20MA%20FERESC%20DE%20GARDA.mp3";
maneaUrl = "RjBFvInhjYI";
} else if (maneaNumber == 21) {
/* Manea numarul 21 */
maneaName = "Dani Mocanu - Facearai spume";
maneaNametw = "Dani%20Mocanu%20-%20Facearai%20spume%20Official%20Video.mp3";
maneaUrl = "K6gCPUWZBnM";
} else if (maneaNumber == 22) {
/* Manea numarul 22 */
maneaName = "Dani Mocanu - Evaziune fiscala";
maneaNametw = "Dani%20Mocanu%20-%20Evaziune%20Fiscala%20Official%20Audio.mp3";
maneaUrl = "uGcd18SlXww";
} else if (maneaNumber == 23) {
/* Manea numarul 23 */
maneaName = "Dani Mocanu - Evadarea";
maneaNametw = "Dani%20Mocanu%20-%20EvadareaCover%2050%20Cent.mp3";
maneaUrl = "bkb9hUjTd1A";
} else if (maneaNumber == 24) {
/* Manea numarul 24 */
/* Melodia are introduceri la inceput ca este doar un pamflet. Daca-mi poate face cineva rost de fisierul .mp3 fara acea introducere si la calitate buna (nu pot sa fac un fisier cu calitate buna aparent) sa-mi dati add pe Discord: wreeper#7997
Rasplata: veti fi trecuti la contribuitori =]] */
maneaName = "Dani Mocanu - Femeie usoara";
maneaNametw = "Dani%20Mocanu%20-%20Femeie%20usoara%20Official%20Video.mp3";
maneaUrl = "nR36PoTmwdc";
} else if (maneaNumber == 25) {
/* Manea numarul 25 */
maneaName = "Dani Mocanu - Mama";
maneaNametw = "Dani%20Mocanu%20-%20Mama%20Official%20Video.mp3";
maneaUrl = "T10LXpC0XDc";
} else if (maneaNumber == 26) {
/* Manea numarul 26 */
maneaName = "Dani Mocanu - Smecher cu parfum de dama";
maneaNametw = "Dani%20Mocanu%20-%20Smecher%20cu%20parfum%20de%20dama%20Official%20Video.mp3";
maneaUrl = "FJGV5N2YV18";
} else if (maneaNumber == 27) {
/* Manea numarul 27 */
maneaName = "Dani Mocanu - Scandal";
maneaNametw = "DANI%20MOCANU%20-%20SCANDAL%20Official%20Audio.mp3";
maneaUrl = "mQNZ_jWYC3M";
} else if (maneaNumber == 28) {
/* Manea numarul 28 */
maneaName = "Dani Mocanu - Sa nu crezi ca am fost prost";
maneaNametw = "Dani%20Mocanu%20-%20Sa%20nu%20crezi%20ca%20am%20fost%20prostOfficial%20Video.mp3";
maneaUrl = "xoFv3kv_AKc";
} else if (maneaNumber == 29) {
/* Manea numarul 29 */
maneaName = "Dani Mocanu - Sa n-ai incredere in femei";
maneaNametw = "Dani%20Mocanu%20-%20Sa%20n-ai%20incredere%20in%20femei%20Official%20Video.mp3";
maneaUrl = "7x_GXUcSlMY";
} else if (maneaNumber == 30) {
/* Manea numarul 30 */
maneaName = "Dani Mocanu - Revolutia";
maneaNametw = "Dani%20Mocanu%20-%20RevolutiaOfficial%20Video.mp3";
maneaUrl = "12pRrxcLldE";
} else if (maneaNumber == 31) {
/* Manea numarul 31 */
maneaName = "Dani Mocanu - Politisti si procurori";
maneaNametw = "Dani%20Mocanu%20-%20Politisti%20si%20procurori%20Official%20Video.mp3";
maneaUrl = "l2ozGYYVuPw";
} else if (maneaNumber == 32) {
/* Manea numarul 32 */
maneaName = "Dani Mocanu - Puiul meu";
maneaNametw = "Dani%20Mocanu%20-%20Puiul%20meu%20Official%20Video.mp3";
maneaUrl = "sh_Uhe7Ybe8";
} else if (maneaNumber == 33) {
/* Manea numarul 33 */
maneaName = "Dani Mocanu - Suflet sub armura";
maneaNametw = "Dani%20Mocanu%20-%20Suflet%20sub%20armura%20Official%20Video.mp3";
maneaUrl = "Hf5p52DxcbM";
} else if (maneaNumber == 34) {
/* Manea numarul 34 */
maneaName = "Dani Mocanu - Tot aurul din lume";
maneaNametw = "Dani%20Mocanu%20-%20Tot%20aurul%20din%20lume%20Official%20Audio.mp3";
maneaUrl = "p9eM06TExqI";
} else if (maneaNumber == 35) {
/* Manea numarul 35 */
maneaName = "Dani Mocanu - Tot ce am avut";
maneaNametw = "Dani%20Mocanu%20-%20Tot%20ce%20am%20avutOfficial%20Video.mp3";
maneaUrl = "H12a3L4ZCjA";
} else if (maneaNumber == 36) {
/* Manea numarul 36 */
maneaName = "Dani Mocanu - Trage de fiare";
maneaNametw = "Dani%20Mocanu%20-%20Trage%20de%20fiare%20Official%20Video.mp3";
maneaUrl = "ZBAlbIwh34g";
} else if (maneaNumber == 37) {
/* Manea numarul 37 */
maneaName = "Dani Mocanu - Strangerea dovezilor";
maneaNametw = "Dani%20Mocanu%20-%20Strangerea%20dovezilor%20Official%20Video.mp3";
maneaUrl = "k0E6NRclHE8";
} else if (maneaNumber == 38) {
/* Manea numarul 38 */
maneaName = "Dani Mocanu - Tu vrei zi de zi de toate";
maneaNametw = "Dani%20Mocanu%20-%20Tu%20vrei%20zi%20de%20zi%20de%20toate%20Official%20Video.mp3";
maneaUrl = "XvmpckdhLKA";
} else if (maneaNumber == 39) {
/* Manea numarul 39 */
maneaName = "Dani Mocanu - Va pun interdictie";
maneaNametw = "Dani%20Mocanu%20-%20Va%20pun%20interdictie%20Official%20Audio.mp3";
maneaUrl = "fjTdyHQuHv0";
} else if (maneaNumber == 40) {
/* Manea numarul 40 */
maneaName = "Dani Mocanu - Viata pe Internet";
maneaNametw = "Dani%20Mocanu%20-%20Viata%20pe%20InternetOfficial%20Video.mp3";
maneaUrl = "hMnLvqZzh2Q";
} else if (maneaNumber == 41) {
/* Manea numarul 41 */
/* Voi nu ma haliti, dar ma discutati, vi se umfla muschii cat ma criticati, comentati din fata unui monitor */
maneaName = "Dani Mocanu - Voi nu ma haliti";
maneaNametw = "Dani%20Mocanu%20-%20Voi%20nu%20ma%20haliti%20Official%20Video.mp3";
maneaUrl = "CN1IoLDsyoU";
} else if (maneaNumber == 42) {
/* Manea numarul 42 */
maneaName = "Dani Mocanu - Coarda";
maneaNametw = "Dani%20Mocanu%20COARDA%20Official%20Video.mp3";
maneaUrl = "gTidgWNMNBA";
} else if (maneaNumber == 43) {
/* Manea numarul 43 */
maneaName = "Dani Mocanu - Nu denigrez femeile";
maneaNametw = "Dani%20Mocanu%20-%20Nu%20denigrez%20femeile%20Official%20Video.mp3";
maneaUrl = "VT6fMCKti3o";
} else if (maneaNumber == 44) {
/* Manea numarul 44 */
maneaName = "Dani Mocanu - Nu dau faliment";
maneaNametw = "Dani%20Mocanu%20-%20Nu%20dau%20faliment%20Official%20Audio.mp3";
maneaUrl = "bJEoCE7v5ZA";
} else if (maneaNumber == 45) {
/* Manea numarul 45 */
maneaName = "Dani Mocanu - Frate de sange";
maneaNametw = "Dani%20Mocanu%20-%20Frate%20de%20sange%20Official%20Video.mp3";
maneaUrl = "7DNqDI9ccRs";
} else if (maneaNumber == 46) {
/* Manea numarul 46 */
maneaName = "Dani Mocanu - Fetele din club";
maneaNametw = "Dani%20Mocanu%20-%20Fetele%20din%20club%20FULL.mp3";
maneaUrl = "l2edkFxoQak";
} else if (maneaNumber == 47) {
/* Manea numarul 47 */
maneaName = "Dani Mocanu - Doar Dumnezeu ma poate judeca";
maneaNametw = "Dani%20Mocanu%20-%20Doar%20Dumnezeu%20ma%20poate%20judeca%20Official%20Video.mp3";
maneaUrl = "0q94f5kl1rs";
} else if (maneaNumber == 48) {
/* Manea numarul 48 */
maneaName = "Dani Mocanu - E normal sa dau un ban";
maneaNametw = "Dani%20Mocanu%20-%20E%20normal%20sa%20dau%20un%20ban%20Official%20Audio.mp3";
maneaUrl = "991l9xwEMIM";
} else if (maneaNumber == 49) {
/* Manea numarul 49 */
maneaName = "Dani Mocanu - Domnilor mascati";
maneaNametw = "Dani%20Mocanu%20-%20Domnilor%20Mascati%20Official%20Video.mp3";
maneaUrl = "D7K_tPjf2s0";
} else if (maneaNumber == 50) {
/* Manea numarul 50 */
maneaName = "Dani Mocanu - Respectat ca o vedeta";
maneaNametw = "Dani%20Mocanu%20-%20Respectat%20ca%20o%20Vedeta%20(%20pentru%20fratii%20Stoica%20).mp3";
maneaUrl = "vVcM1bNGnoE";
} else if (maneaNumber == 51) {
/* Manea numarul 51 */
maneaName = "Dani Mocanu - Ruleta ruseasca";
maneaNametw = "DANI%20MOCANU%20-%20Ruleta%20ruseasca%20Official%20Video.mp3";
maneaUrl = "1RDsl2QcwjA";
} else if (maneaNumber == 52) {
/* Manea numarul 52 */
maneaName = "Dani Mocanu - Spartanii";
maneaNametw = "Dani%20Mocanu%20-%20SpartaniiOfficial%20Video.mp3";
maneaUrl = "iCf6P-Su70U";
} else if (maneaNumber == 53) {
/* Manea numarul 53 */
maneaName = "Dani Mocanu - Sifonari nenorociti";
maneaNametw = "Dani%20Mocanu%20-%20Sifonari%20Nenorociti%20Official%20Video.mp3";
maneaUrl = "OvluLd5ZK24";
} else if (maneaNumber == 54) {
/* Manea numarul 54 */
maneaName = "Dani Mocanu - Singur impotriva tuturor";
maneaNametw = "Dani%20Mocanu%20-%20Singur%20impotriva%20tuturorOfficial%20Audio.mp3";
maneaUrl = "Z-dm4DrQuTU";
} else if (maneaNumber == 55) {
/* Manea numarul 55 */
maneaName = "Dani Mocanu & David Oscar - Sangele apa nu se face";
maneaNametw = "Dani%20Mocanu%20&%20David%20Oscar%20-%20Sangele%20apa%20nu%20se%20faceOfficial%20Video.mp3";
maneaUrl = "GZf308Qh9Qs";
} else if (maneaNumber == 56) {
/* Manea numarul 56 */
maneaName = "Dani Mocanu & Mitzu din Salaj - Unde pune leul gheara";
maneaNametw = "Dani%20Mocanu%20&%20Mitzu%20din%20Salaj%20-%20Unde%20pune%20leul%20gheara%20Official%20Video.mp3";
maneaUrl = "wZLQl_yKBww";
} else if (maneaNumber == 57) {
/* Manea numarul 57 */
maneaName = "Dani Mocanu & David Oscar - Respect";
maneaNametw = "Dani%20Mocanu%20&%20David%20Oscar%20-%20Respect%20Official%20Video.mp3";
maneaUrl = "fDHC5Hl-c1A";
} else if (maneaNumber == 58) {
/* Manea numarul 58 */
maneaName = "Dani Mocanu & Alex din Aparatori - Cola";
maneaNametw = "Dani%20Mocanu%20&%20Alex%20din%20Aparatori%20-%20ColaOfficial%20Video.mp3";
maneaUrl = "ZF6weGaGtv4";
} else if (maneaNumber == 59) {
/* Manea numarul 59 */
maneaName = "Dani Mocanu - Razbunarea";
maneaNametw = "Dani%20Mocanu%20-%20RAZBUNAREA%20(%20VIDEOCLIP%20OFFICIAL%20HD%20!!!%20).mp3";
maneaUrl = "GDV1SBkTXbI";
} else if (maneaNumber == 60) {
/* Manea numarul 60 */
maneaName = "Dani Mocanu - El Chapo";
maneaNametw = "Dani%20Mocanu%20El%20Chapo%20Official%20Video.mp3";
maneaUrl = "GNqLwv7gURQ";
} else if (maneaNumber == 61) {
/* Manea numarul 61 */
maneaName = "Dani Mocanu - De ce esti rea";
maneaNametw = "Dani%20Mocanu%20De%20ce%20esti%20rea%20VIDEOCLIP%20OFFICIAL.mp3";
maneaUrl = "salowh6oz3A";
} else if (maneaNumber == 62) {
/* Manea numarul 62 */
maneaName = "Dani Mocanu - Legenda vie";
maneaNametw = "Dani%20Mocanu%20Legenda%20vie%20Official%20Video.mp3";
maneaUrl = "hp-MjbsKQkM";
} else if (maneaNumber == 63) {
/* Manea numarul 63 */
maneaName = "Dani Mocanu - Gata cu lupii";
maneaNametw = "Dani%20Mocanu%20-%20Gata%20cu%20Lupii%20Official%20Audio.mp3";
maneaUrl = "1gDwl6c3Vdg";
} else if (maneaNumber == 64) {
/* Manea numarul 64 */
maneaName = "Dani Mocanu - Hotul mondial";
maneaNametw = "Dani%20Mocanu%20-%20Hotul%20Mondial%20Official%20Audio.mp3";
maneaUrl = "De4aJQipUco";
} else if (maneaNumber == 65) {
/* Manea numarul 65 */
maneaName = "Dani Mocanu - Iubesc numai banii";
maneaNametw = "Dani%20Mocanu%20-%20Iubesc%20numai%20baniiOfficial%20Video.mp3";
maneaUrl = "dexPuAO9Y7M";
} else if (maneaNumber == 66) {
/* Manea numarul 66 */
maneaName = "Dani Mocanu & Costi - Artileria";
maneaNametw = "Dani%20Mocanu%20Costi%20-%20Artileria%20Official%20Video%205K.mp3";
maneaUrl = "TSIQjwLmngI";
} else if (maneaNumber == 67) {
/* Manea numarul 67 */
maneaName = "Dani Mocanu - Alo politia";
maneaNametw = "Dani%20Mocanu%20-%20Alo%20Politia%20Official%20Audio.mp3";
maneaUrl = "6pf1uBtzeZc";
} else if (maneaNumber == 68) {
/* Manea numarul 68 */
maneaName = "Dani Mocanu - Coltul rosu";
maneaNametw = "Dani%20Mocanu%20-%20Coltul%20Rosu%20Official%20Video.mp3";
maneaUrl = "iweRjw97UHo";
} else if (maneaNumber == 69) {
/* Manea numarul 69 */
maneaName = "Dani Mocanu - Capul tuturor";
maneaNametw = "Dani%20Mocanu%20-%20Capul%20Tuturor%20Official%20Video.mp3";
maneaUrl = "_DVbbkDvcqc";
} else if (maneaNumber == 70) {
/* Manea numarul 70 */
maneaName = "Dani Mocanu - Celebrul interlop";
maneaNametw = "Dani%20Mocanu%20-%20Celebrul%20interlopOfficial%20Video.mp3";
maneaUrl = "3tZRbo49Wxg";
} else if (maneaNumber == 71) {
/* Manea numarul 71 */
maneaName = "Dani Mocanu - De ce sa ne certam iubi";
maneaNametw = "Dani%20Mocanu%20-%20De%20ce%20sa%20ne%20certam%20iubi%202016%20[%20COVER%20].mp3";
maneaUrl = "on4neR7cJ6k";
} else if (maneaNumber == 72) {
/* Manea numarul 72 */
maneaName = "Dani Mocanu - Fara numar";
maneaNametw = "Dani%20Mocanu%20-%20Fara%20numar%2069%20Official%20Video.mp3";
maneaUrl = "H-odVTbWUXU";
} else if (maneaNumber == 73) {
/* Manea numarul 73 */
maneaName = "Dani Mocanu - Mafia";
maneaNametw = "Dani%20Mocanu%20-%20MAFIA%20Official%20Video.mp3";
maneaUrl = "as7370nWa6Q";
} else if (maneaNumber == 74) {
/* Manea numarul 74 */
maneaName = "Dani Mocanu - Palma de mallorca";
maneaNametw = "Dani%20Mocanu%20-%20Palma%20de%20Mallorca%20Official%20Video.mp3";
maneaUrl = "cSiAZ6fswFw";
} else if (maneaNumber == 75) {
/* Manea numarul 75 */
maneaName = "Dani Mocanu - Milioane milioane";
maneaNametw = "Dani%20Mocanu%20-%20Milioane%20Milioane%20(%20Videoclip%20Oficial%20).mp3";
maneaUrl = "vjt6oRj5OtM";
} else if (maneaNumber == 76) {
/* Manea numarul 76 */
maneaName = "Dani Mocanu - Lege blestemata";
maneaNametw = "Dani%20Mocanu%20-%20Lege%20blestemata%20Official%20Audio.mp3";
maneaUrl = "AjF0MJoxsyc";
} else if (maneaNumber == 77) {
/* Manea numarul 77 */
maneaName = "Dani Mocanu - Pentru mama pentru tata";
maneaNametw = "Dani%20Mocanu%20-%20Pentru%20mama%20pentru%20tata%20Official%20Video.mp3";
maneaUrl = "WUIqnHw_epE";
} else if (maneaNumber == 78) {
/* Manea numarul 78 */
maneaName = "Dani Mocanu - Of of dusmanii mei";
maneaNametw = "Dani%20Mocanu%20-%20Of%20Of%20dusmanii%20mei%20Official%20Audio.mp3";
maneaUrl = "MOrChrXztNg";
} else if (maneaNumber == 79) {
/* Manea numarul 79 */
maneaName = "Dani Mocanu - Alcapone";
maneaNametw = "DANI%20MOCANU-%20ALCAPONEOfficial%20Audio.mp3";
maneaUrl = "6yEGxq-ijbc";
} else if (maneaNumber == 80) {
/* Manea numarul 80 */
maneaName = "Dani Mocanu - Stop Romania";
maneaNametw = "Dani%20Mocanu%20Stop%20Romania%20Official%20Video.mp3";
maneaUrl = "0m8sHxpgCM8";
} else if (maneaNumber == 81) {
/* Manea numarul 81 */
maneaName = "Dani Mocanu - Asasin 2";
maneaNametw = "Dani%20Mocanu%20Asasin%202%20Official%20Video.mp3";
maneaUrl = "0wXjCg2iEv0";
} else if (maneaNumber == 82) {
/* Manea numarul 82 */
maneaName = "Dani Mocanu - Mafiot cu suflet mare";
maneaNametw = "Dani%20Mocanu%20-%20Mafiot%20cu%20suflet%20mare%20(oficial%20video).mp3";
maneaUrl = "LZtsm5Myz7k";
} else if (maneaNumber == 83) {
/* Manea numarul 83 */
maneaName = "Dani Mocanu - Ma rog pentru libertate";
maneaNametw = "DANI%20MOCANU%20-%20Ma%20rog%20pentru%20Libertate%20(Gaby%20Jianu%20Videography).mp3";
maneaUrl = "2jWqnqJgI5w";
} else if (maneaNumber == 84) {
/* Manea numarul 84 */
maneaName = "Dani Mocanu - Femei femei";
maneaNametw = "Dani%20Mocanu%20-%20Femei%20Femei%20Official%20Audio.mp3";
maneaUrl = "qc59JUQGqzI";
} else if (maneaNumber == 85) {
/* Manea numarul 85 */
maneaName = "Dani Mocanu - Beton armat";
maneaNametw = "Dani%20Mocanu%20-%20Beton%20Armat%20Official%20Audio.mp3";
maneaUrl = "AY5d3QlulqM";
} else if (maneaNumber == 86) {
/* Manea numarul 86 */
maneaName = "Dani Mocanu - Mare patron";
maneaNametw = "Dani%20Mocanu%20-%20Mare%20patron%20Official%20Video.mp3";
maneaUrl = "c0a_GX2cqQM";
} else if (maneaNumber == 87) {
/* Manea numarul 87 */
maneaName = "Dani Mocanu - Nimeni, nimeni";
maneaNametw = "Dani%20Mocanu%20-%20Nimeni%20,%20Nimeni%20Official%20Video%20Cover%202020.mp3";
maneaUrl = "sUz7lmBAPEA";
} else if (maneaNumber == 88) {
/* Manea numarul 88 */
maneaName = "Dani Mocanu - Nevasta, nevasta";
maneaNametw = "Dani%20Mocanu%20-%20Nevasta%20,%20Nevasta%20Official%20Audio.mp3";
maneaUrl = "HHpseBgGVFs";
} else if (maneaNumber == 89) {
/* Manea numarul 89 */
maneaName = "Dani Mocanu - Producator";
maneaNametw = "Dani%20Mocanu%20-%20Producator%20(%20Oficial%20Audio%20)%202018.mp3";
maneaUrl = "aYS7g9D9CVI";
} else if (maneaNumber == 90) {
/* Manea numarul 90 */
maneaName = "Dani Mocanu - Vita aleasa";
maneaNametw = "Dani%20Mocanu%20-%20Vita%20aleasa%20Official%20Video.mp3";
maneaUrl = "zNeyn7p2G7M";
} else if (maneaNumber == 91) {
/* Manea numarul 91 */
maneaName = "Dani Mocanu - Rosia montana";
maneaNametw = "Dani%20Mocanu%20-%20Rosia%20Montana%20Official%20Video.mp3";
maneaUrl = "vrSf_b3u88I";
} else if (maneaNumber == 92) {
/* Manea numarul 92 */
maneaName = "Dani Mocanu - Mai e un an si te intorci acasa";
maneaNametw = "Dani%20Mocanu%20-%20Mai%20e%20un%20an%20si%20te%20intorci%20acasaOfficial%20Video.mp3";
maneaUrl = "w-YUQcJkh30";
} else if (maneaNumber == 93) {
/* Manea numarul 93 */
maneaName = "Dani Mocanu - 6 gloante";
maneaNametw = "Dani%20Mocanu%20-%206%20Gloante%20Official%20Video.mp3";
maneaUrl = "2elanqUNPYo";
} else if (maneaNumber == 94) {
/* Manea numarul 94 */
maneaName = "Florin Mitroi & Boby de la Arges - Voi fraieri fara masura";
maneaNametw = "Florin%20Mitroi%20&%20Boby%20de%20la%20Arges%20-%20Voi%20fraieri%20fara%20masura%20NOU%20NOU%20NOU.mp3";
maneaUrl = "Q7T01i-tgos";
} else if (maneaNumber == 95) {
/* Manea numarul 95 */
maneaName = "Cristi Mega - Nu suport miros de fraier";
maneaNametw = "mirosdefraier.mp3";
maneaUrl = "BVsygWz_ypo";
} else if (maneaNumber == 96) {
/* Manea numarul 96 */
maneaName = "Florin Salam - Saint Tropez";
maneaNametw = "Florin%20Salam%20-%20Saint%20Tropez%20[official%20video].mp3";
maneaUrl = "tXO2QtjixaM";
} else if (maneaNumber == 97) {
/* Manea numarul 97 */
maneaName = "Florin Salam - Capitanul";
maneaNametw = "Florin%20Salam%20-%20Capitanul%20HIT%202019.mp3";
maneaUrl = "X7W4YV5g6sk";
} else if (maneaNumber == 98) {
/* Manea numarul 98 */
maneaName = "Florin Salam - La Roma sau Paris";
maneaNametw = "Florin%20Salam%20-%20La%20Roma%20sau%20Paris%20[fara%20colaj].mp3";
maneaUrl = "UivzOgOwzz4";
} else if (maneaNumber == 99) {
/* Manea numarul 99 */
maneaName = "Florin Salam - Eu sunt bomba nucleara";
maneaNametw = "FLORIN%20SALAM%20-%20EU%20SUNT%20BOMBA%20NUCLEARA.mp3";
maneaUrl = "Lvqb_vs2wW4";
} else if (maneaNumber == 100) {
/* Manea numarul 100 */
maneaName = "Dani Mocanu - Camora";
maneaNametw = "Dani%20Mocanu%20-%20Camora%20Official%20Video.mp3";
maneaUrl = "K5Q-ZJyhckg";
} else if (maneaNumber == 101) {
/* Manea numarul 101 */
maneaName = "Marius de la Focsani - Patru puncte cardinale";
maneaNametw = "MARIUS%20DE%20LA%20FOCSANI%20-%20PATRU%20PUNCTE%20CARDINALE.mp3";
maneaUrl = "Ty8LIWqLKRI";
}
setTimeout(maneaRandom, 5);
}



function maneaRandom() {
maneaUrlLink = "https://youtu.be/" + maneaUrl;
maneaUrlEmbed = "https://youtube.com/embed/" + maneaUrl;
maneaLocation = servermanele+pathmanele+maneaNametw;
console.log("=======================\n\nManelizor de Wreeper v1.0 incarcat cu succes.\nDiscord: wreeper#7997\nYouTube: https://youtube.com/c/DariusGamingOfficial/\nGitHub repository: https://github.com/Wreeper/manelizor\nManea aleatorie: " + maneaName + "\n=======================");
}
