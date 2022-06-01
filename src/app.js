/* eslint-disable */

window.onload = function() {
  //write your code here
  let pronoun = ["these", "those", "that", "ours"];
  let adjective = ["amused", "cheerful", "calm", "disturbed"];
  let noun = ["people", "doors", "friends", "guys"];
  let com = [".com", ".us", ".net", ".io"];
  let show = [];
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adjective.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let h = 0; h < com.length; h++) {
          var third = noun[k];
          var first = pronoun[i];
          var second = adjective[j];
          var fourth = com[h];
          var result = show.push(first + second + third + fourth + "<br>");
          console.log(result);
        }
      }
    }
  }
  document.getElementById("excusegenerator").innerHTML = show;
  document.write(show.join(" "));
};
