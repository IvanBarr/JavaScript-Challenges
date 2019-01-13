  function alphabetPosition(text) {
      var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
      var strChar;
      var posArray = [];
      for(var i = 0; i <= text.length; i++){
        strChar = text.charAt(i).toLowerCase();

        if(alphabet.indexOf(strChar) > -1){
           posArray.push(alphabet.indexOf(strChar) + 1);
        }
      }
      posArray = posArray.join(' ');
      console.log(posArray);
      return posArray;
      }
      alphabetPosition('Hello and Bye'); //Output = 8 5 12 12 15 1 14 4 2 25 5
