
function domainName() {
let pronoun = ["these", "those", "that", "ours"];
let adjective = ["amused", "cheerful", "calm", "disturbed"];
let noun = ["people", "doors", "friends", "guys"];
let com = [".com", ".us", ".net", ".io"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adjective.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let h = 0; h < com.length; h++) {
        var third = noun[k];
        var first = pronoun[i];
        var second = adjective[j];
        var fourth = com[h];
        var result = first + second + third + fourth;
        console.log(result);
      }
    }
  }
}
}
document.getElementById("excusegenerator").innerHTML = domainName();