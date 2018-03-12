import { Entry } from './journal';
import './styles.css';

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var new_entry = new Entry(title, body);
    $('#solution').append("<li> Word count: " + new_entry.WordCount(new_entry.body) + "</li>");
    $('#solution').append("<li> Vowel count: " + new_entry.LetterCount(new_entry.body)[0] + "</li>");
    $('#solution').append("<li> Consonant count: " + new_entry.LetterCount(new_entry.body)[1] + "</li>");
    $('#solution').append("<li> Teaser: " + new_entry.getTeaser(new_entry.body) + "</li>");
  });
});
