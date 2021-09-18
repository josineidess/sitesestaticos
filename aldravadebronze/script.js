function trocar() {
  var casa = document.getElementById("casa").value;
  console.log(casa);
  var corpo = document.getElementById("corpo");
  switch (casa) {
    case "sly":
      corpo.style.backgroundColor = "rgb(17, 110, 17)";
      break;
    case "griff":
      corpo.style.backgroundColor = "rgb(155, 8, 8)";
      break;
    case "raven":
      corpo.style.backgroundColor = "rgb(13, 13, 117)";
      break;
    case "huff":
      corpo.style.backgroundColor = "rgb(195, 195, 8)";
      break;
    default:
      corpo.style.backgroundColor = "black";
  }
}
