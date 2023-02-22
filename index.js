/*
DESCRIPTION:
You job is to enable users to give a rating between 1 (bad) and 5 (great), 
and then display that rating in the form of an emoji. The users should give 
their ratings by pressing a key on their keyboards (the numbers 1 to 5). 
Here's the numbers' corresponding emojis:

5 = 😁
3 = 🙂
3 = 😐
2 = ☹️
1 = 🤬

event listeners, keyboard events, key codes, 
focus, focusout, DOM manipulation, tabindex

*/

const box = document.getElementById('box');
const text = document.getElementById('text');

box.addEventListener('focus', function () {
  text.textContent = 'Type a number between 1 and 5';
});

box.addEventListener('focusout', function () {
  text.textContent = 'Click here to give your rating';
});

document.addEventListener(
  'keydown',
  (e) => {
    let rating = parseInt(e.key);
    getEmoji(rating);
  },
  false
);

// Write your code here 👇
const getEmoji = (rating) => {
  switch (rating) {
    case 1:
      text.textContent = String.fromCodePoint(0x1f92c);
      break;
    case 2:
      text.textContent = String.fromCodePoint(0x2639);
      break;
    case 3:
      text.textContent = String.fromCodePoint(0x1f610);
      break;
    case 4:
      text.textContent = String.fromCodePoint(0x1f642);
      break;
    case 5:
      text.textContent = String.fromCodePoint(0x1f601);
      break;
    default:
      text.textContent = 'Please enter a valid rating between 1 and 5';
  }
};

/*
***Notes***
- Used https://emojipedia.org/ to get the codepoint
- String.fromCodePoint() is a string method that is used to create a string from a sequence of Unicode code points (that may not be representable in a single UTF-16 code unit)
*/
/*

DETAILED INSTRUCTIONS
1. Listen for keyboard events when the box has focus
2. Figure out which key the user pressed
3. If it's between 1 and 5, display an emoji in the box!

STRETCH GOALS:
- Animate the emoji onto the screen! Why not go crazy with multiple emojis? 
- Reset the entire app when box doesn't have focus anymore
- Can you improve the overall design?

*/
