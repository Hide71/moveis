var bunners =["Do lixo ao luxo!", "Reaproveitar é aproveitar!"];
var bunnerAtual = 0;

function trocarBunner(){
	bunnerAtual = (bunnerAtual + 1) % 2;
	document.querySelector("h2#mensagem").textContent = 
	bunners[bunnerAtual];
}
setInterval(trocarBunner, 1000);