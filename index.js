const axios = require('axios');
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./data.json'));
let debugon = true;

const ID = 0;
const pm = 1;
const pm_cf_1 = 2;
const pm_atm = 3;
const age = 4;
const pm_0 = 5;
const pm_1 = 6;
const pm_2 = 7;
const pm_3 = 8;
const pm_4 = 9;
const pm_5 = 10;
const pm_6 = 11;
const conf = 12;
const pm1 = 13;
const pm10 = 14;
const pless3 = 15;
const pless5 = 16;
const pless10 = 17;
const pless25 = 18;
const pless50 = 19;
const pless100 = 20;
const Humid = 21;
const Temp = 22;
const Pres = 23
const Elev = 24;
const Type = 25;
const Label1 = 26;
const Lat = 27;
const Lon = 28;
const Icon = 29;
const IsOwner = 30;
const Flags = 31;
const Voc = 32;
const Ozone1 = 33;
const Adc = 34;
const CH = 35;

let lessthanzero = [0,0,0,0,0,0,/*this last one is how many it counted*/0];
let zerotofivehundred = [0,0,0,0,0,0,/*this last one is how many it counted*/0];
let fivehundredtoonethousand = [0,0,0,0,0,0,/*this last one is how many it counted*/0];
let onethousandtofifteenhundred = [0,0,0,0,0,0,/*this last one is how many it counted*/0];
let fifteenhundredtotwothousand = [0,0,0,0,0,0,/*this last one is how many it counted*/0];
let twothousandtotwentyfivehundred = [0,0,0,0,0,0,/*this last one is how many it counted*/0];
let twentyfivehundredtothreethousand = [0,0,0,0,0,0,/*this last one is how many it counted*/0];
let threethousandplus = [0,0,0,0,0,0,/*this last one is how many it counted*/0];

let size;
const ishit = debugon;
size = data.data.length;
for(let i = 0; i < size; i++)
{
    let _data = data.data[i];
    if(_data[Elev] < 0)
    {
        lessthanzero[0] += _data[pless3];
        lessthanzero[1] += _data[pless5];
        lessthanzero[2] += _data[pless10];
        lessthanzero[3] += _data[pless25];
        lessthanzero[4] += _data[pless50];
        lessthanzero[5] += _data[pless100];
        lessthanzero[6]++;
        ishit ? console.log(lessthanzero) : null;
    } else if(_data[Elev] > 0 && _data[Elev] < 500)
    {
        zerotofivehundred[0] += _data[pless3];
        zerotofivehundred[1] += _data[pless5];
        zerotofivehundred[2] += _data[pless10];
        zerotofivehundred[3] += _data[pless25];
        zerotofivehundred[4] += _data[pless50];
        zerotofivehundred[5] += _data[pless100];
        zerotofivehundred[6]++;
        ishit ? console.log(zerotofivehundred) : null;
    } else if(_data[Elev] > 500 && _data[Elev] < 1000)
    {
        fivehundredtoonethousand[0] += _data[pless3];
        fivehundredtoonethousand[1] += _data[pless5];
        fivehundredtoonethousand[2] += _data[pless10];
        fivehundredtoonethousand[3] += _data[pless25];
        fivehundredtoonethousand[4] += _data[pless50];
        fivehundredtoonethousand[5] += _data[pless100];
        fivehundredtoonethousand[6]++;
        ishit ? console.log(fivehundredtoonethousand) : null;
    } else if(_data[Elev] > 1000 && _data[Elev] < 1500)
    {
        onethousandtofifteenhundred[0] += _data[pless3];
        onethousandtofifteenhundred[1] += _data[pless5];
        onethousandtofifteenhundred[2] += _data[pless10];
        onethousandtofifteenhundred[3] += _data[pless25];
        onethousandtofifteenhundred[4] += _data[pless50];
        onethousandtofifteenhundred[5] += _data[pless100];
        onethousandtofifteenhundred[6]++;
        ishit ? console.log(onethousandtofifteenhundred) : null;
    } else if(_data[Elev] > 1500 && _data[Elev] < 2000)
    {
        fifteenhundredtotwothousand[0] += _data[pless3];
        fifteenhundredtotwothousand[1] += _data[pless5];
        fifteenhundredtotwothousand[2] += _data[pless10];
        fifteenhundredtotwothousand[3] += _data[pless25];
        fifteenhundredtotwothousand[4] += _data[pless50];
        fifteenhundredtotwothousand[5] += _data[pless100];
        fifteenhundredtotwothousand[6]++;
        ishit ? console.log(fifteenhundredtotwothousand) : null;
    } else if(_data[Elev] > 2000 && _data[Elev] < 2500)
    {
        twothousandtotwentyfivehundred[0] += _data[pless3];
        twothousandtotwentyfivehundred[1] += _data[pless5];
        twothousandtotwentyfivehundred[2] += _data[pless10];
        twothousandtotwentyfivehundred[3] += _data[pless25];
        twothousandtotwentyfivehundred[4] += _data[pless50];
        twothousandtotwentyfivehundred[5] += _data[pless100];
        twothousandtotwentyfivehundred[6]++;
        ishit ? console.log(twothousandtotwentyfivehundred) : null;
    } else if(_data[Elev] > 2500 && _data[Elev] < 3000)
    {
        twentyfivehundredtothreethousand[0] += _data[pless3];
        twentyfivehundredtothreethousand[1] += _data[pless5];
        twentyfivehundredtothreethousand[2] += _data[pless10];
        twentyfivehundredtothreethousand[3] += _data[pless25];
        twentyfivehundredtothreethousand[4] += _data[pless50];
        twentyfivehundredtothreethousand[5] += _data[pless100];
        twentyfivehundredtothreethousand[6]++;
        ishit ? console.log(twentyfivehundredtothreethousand) : null;
    } else if(_data[Elev] > 3000)
    {
        threethousandplus[0] += _data[pless3];
        threethousandplus[1] += _data[pless5];
        threethousandplus[2] += _data[pless10];
        threethousandplus[3] += _data[pless25];
        threethousandplus[4] += _data[pless50];
        threethousandplus[5] += _data[pless100];
        threethousandplus[6]++;
        ishit ? console.log(threethousandplus) : null;
    }
}

fs.appendFile("output.txt", 
"Altitude: less than 0 meters\n" +
"   pm >= .3µm: " + lessthanzero[0] / lessthanzero[6] + "\n" +
"   pm >= .5µm: " + lessthanzero[1] / lessthanzero[6] + "\n" +
"   pm >= 1µm: " + lessthanzero[2] / lessthanzero[6] + "\n" +
"   pm >= 2.5µm: " + lessthanzero[3] / lessthanzero[6] + "\n" +
"   pm >= 5µm: " + lessthanzero[4] / lessthanzero[6] + "\n" +
"   pm >= 10µm: " + lessthanzero[5] / lessthanzero[6] + "\n" +
"   amount found: " + lessthanzero[6] + "\n" +
"Altitude: 0 to 500m\n" +
"   pm >= .3µm: " + zerotofivehundred[0] / zerotofivehundred[6] + "\n" +
"   pm >= .5µm: " + zerotofivehundred[1] / zerotofivehundred[6] + "\n" +
"   pm >= 1µm: " + zerotofivehundred[2] / zerotofivehundred[6] + "\n" +
"   pm >= 2.5µm: " + zerotofivehundred[3] / zerotofivehundred[6] + "\n" +
"   pm >= 5µm: " + zerotofivehundred[4] / zerotofivehundred[6] + "\n" +
"   pm >= 10µm: " + zerotofivehundred[5] / zerotofivehundred[6] + "\n" +
"   amount found: " + zerotofivehundred[6] + "\n" +
"Altitude: 500 to 1000m\n" +
"   pm >= .3µm: " + fivehundredtoonethousand[0] / fivehundredtoonethousand[6] + "\n" +
"   pm >= .5µm: " + fivehundredtoonethousand[1] / fivehundredtoonethousand[6] + "\n" +
"   pm >= 1µm: " + fivehundredtoonethousand[2] / fivehundredtoonethousand[6] + "\n" +
"   pm >= 2.5µm: " + fivehundredtoonethousand[3] / fivehundredtoonethousand[6] + "\n" +
"   pm >= 5µm: " + fivehundredtoonethousand[4] / fivehundredtoonethousand[6] + "\n" +
"   pm >= 10µm: " + fivehundredtoonethousand[5] / fivehundredtoonethousand[6] + "\n" +
"   amount found: " + fifteenhundredtotwothousand[6] + "\n" +
"Altitude: 1000 to 1500m\n" +
"   pm >= .3µm: " + onethousandtofifteenhundred[0] / onethousandtofifteenhundred[6] + "\n" +
"   pm >= .5µm: " + onethousandtofifteenhundred[1] / onethousandtofifteenhundred[6] + "\n" +
"   pm >= 1µm: " + onethousandtofifteenhundred[2] / onethousandtofifteenhundred[6] + "\n" +
"   pm >= 2.5µm: " + onethousandtofifteenhundred[3] / onethousandtofifteenhundred[6] + "\n" +
"   pm >= 5µm: " + onethousandtofifteenhundred[4] / onethousandtofifteenhundred[6] + "\n" +
"   pm >= 10µm: " + onethousandtofifteenhundred[5] / onethousandtofifteenhundred[6] + "\n" +
"   amount found: " + onethousandtofifteenhundred[6] + "\n" +
"Altitude: 1500 to 2000m\n" +
"   pm >= .3µm: " + fifteenhundredtotwothousand[0] / fifteenhundredtotwothousand[6] + "\n" +
"   pm >= .5µm: " + fifteenhundredtotwothousand[1] / fifteenhundredtotwothousand[6] + "\n" +
"   pm >= 1µm: " + fifteenhundredtotwothousand[2] / fifteenhundredtotwothousand[6] + "\n" +
"   pm >= 2.5µm: " + fifteenhundredtotwothousand[3] / fifteenhundredtotwothousand[6] + "\n" +
"   pm >= 5µm: " + fifteenhundredtotwothousand[4] / fifteenhundredtotwothousand[6] + "\n" +
"   pm >= 10µm: " + fifteenhundredtotwothousand[5] / fifteenhundredtotwothousand[6] + "\n" +
"   amount found: " + fifteenhundredtotwothousand[6] + "\n" +
"Altitude: 2000 to 2500m\n" +
"   pm >= .3µm: " + twothousandtotwentyfivehundred[0] / twothousandtotwentyfivehundred[6] + "\n" +
"   pm >= .5µm: " + twothousandtotwentyfivehundred[1] / twothousandtotwentyfivehundred[6] + "\n" +
"   pm >= 1µm: " + twothousandtotwentyfivehundred[2] / twothousandtotwentyfivehundred[6] + "\n" +
"   pm >= 2.5µm: " + twothousandtotwentyfivehundred[3] / twothousandtotwentyfivehundred[6] + "\n" +
"   pm >= 5µm: " + twothousandtotwentyfivehundred[4] / twothousandtotwentyfivehundred[6] + "\n" +
"   pm >= 10µm: " + twothousandtotwentyfivehundred[5] / twothousandtotwentyfivehundred[6] + "\n" +
"   amount found: " + twothousandtotwentyfivehundred[6] + "\n" +
"Altitude: 2500 to 3000m\n" +
"   pm >= .3µm: " + twentyfivehundredtothreethousand[0] / twentyfivehundredtothreethousand[6] + "\n" +
"   pm >= .5µm: " + twentyfivehundredtothreethousand[1] / twentyfivehundredtothreethousand[6] + "\n" +
"   pm >= 1µm: " + twentyfivehundredtothreethousand[2] / twentyfivehundredtothreethousand[6] + "\n" +
"   pm >= 2.5µm: " + twentyfivehundredtothreethousand[3] / twentyfivehundredtothreethousand[6] + "\n" +
"   pm >= 5µm: " + twentyfivehundredtothreethousand[4] / twentyfivehundredtothreethousand[6] + "\n" +
"   pm >= 10µm: " + twentyfivehundredtothreethousand[5] / twentyfivehundredtothreethousand[6] + "\n" +
"   amount found: " + twentyfivehundredtothreethousand[6] + "\n" +
"Altitude: more than 3000m\n" +
"   pm >= .3µm: " + threethousandplus[0] / threethousandplus[6] + "\n" +
"   pm >= .5µm: " + threethousandplus[1] / threethousandplus[6] + "\n" +
"   pm >= 1µm: " + threethousandplus[2] / threethousandplus[6] + "\n" +
"   pm >= 2.5µm: " + threethousandplus[3] / threethousandplus[6] + "\n" +
"   pm >= 5µm: " + threethousandplus[4] / threethousandplus[6] + "\n" +
"   pm >= 10µm: " + threethousandplus[5] / threethousandplus[6] + "\n" + 
"   amount found: " + threethousandplus[6] + "\n", ()=>{});