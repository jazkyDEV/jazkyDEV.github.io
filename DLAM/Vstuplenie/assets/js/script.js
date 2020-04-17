function instr() {
  var btn = document.getElementById("btn");
  var page = document.getElementById("page");
  var instruction = document.getElementById("instruction");
  if (instruction.style.display === "block") {
    instruction.style.display = "none";
    page.style.filter = "blur()";
  } else {
    instruction.style.display = "block";
    page.style.filter = "blur(10px)";
  }
}

