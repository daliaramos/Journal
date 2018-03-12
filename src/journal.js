export function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.WordCount = function(str) {
  return str.split(' ').length;
};

Entry.prototype.LetterCount = function(str)
{
  var v = str.match(/[aeiou]/gi);
  var c = str.match(/[bcdfghjklmnpqrstvxzwy]/gi);

  var vowels = v === null ? 0 : v.length;
  var consonants = c === null ? 0 : c.length;

  return [vowels, consonants];
};

Entry.prototype.getTeaser = function(str) {
  var sentence = str.split('.');
  var wordSplit = sentence[0].split(' ');
  if (wordSplit.length <= 8) {
    return sentence[0];
  } else {
    return str.split(/\s+/).slice(0,8).join(" ");
  }

};
