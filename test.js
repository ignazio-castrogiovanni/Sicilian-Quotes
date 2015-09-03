function Proverb(Sicilian, English) {
  this.Sicilian = Sicilian;
  this.English = English;
  this.getSicilian = function() {
    return this.Sicilian;
  };
  this.getEnglish = function() {
    return this.English;
  };
};


var proverbArr = [];

proverbArr.push(new Proverb("A paisi unni chi vai, comu vidi fari fai.", "When in Rome, do as the Romans do."));

proverbArr.push(new Proverb("A un povir'omu, ogni cani cci abbaja.", "Every dog barks at a poor man."));

proverbArr.push(new Proverb("Accatta caru e vinni mircatu.", "Buy good quality and sell at the market price."));

proverbArr.push(new Proverb("Accatta di quattru e vinni d'ottu.", "Buy at the cost of four and sell at the cost of eight."));

proverbArr.push(new Proverb("Ammuccia lu latinu 'gnuranza di parrinu.", "Latin hides the stupidity of the priest."));

proverbArr.push(new Proverb("Aprili fa li ciuri e le biddizzi, l'onuri l'havi lu misi di maju.", "April makes the flowers and the beauty, but May gets all the credit."));

proverbArr.push(new Proverb("Batti lu ferru mentri è càudu.", "Strike while the iron is hot."));

function getRandomProverb() {
  var randNum = Math.floor(Math.random() * proverbArr.length);
  return proverbArr[randNum];
}

function printQuote() {
 
 
var proverb =  getRandomProverb(); $("#sicilianQuote").text(proverb.getSicilian());


$("#englishQuote").text(proverb.getEnglish());
};

function tweetQuote(){
  var sicilianQ = $("#sicilianQuote").text();
  var englishQ = $("#englishQuote").text();
  var tweetLink = "https://twitter.com/intent/tweet?text=" + sicilianQ + " - " + englishQ;
  window.open(tweetLink);
}

$(document).ready(printQuote);
