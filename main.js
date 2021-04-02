var numofpianobutton = document.querySelectorAll(".btn").length;
for (var i = 0; i<numofpianobutton; i++) {
	document.querySelectorAll(".btn")[i].addEventListener("click", function(){
		
		var buttonInnerHTML = this.innerHTML;

		makeSound(buttonInnerHTML);

		buttonAnimation(buttonInnerHTML);	
	});
}
document.addEventListener("keypress", function(event) {
	makeSound(event.key);
	buttonAnimation(event.key);
})
function makeSound(key) {

	switch(key) {

		case "q":
			var kyo = new Audio("Sounds/203458.mp3");
			kyo.play();
			break;

		 case "a":
			 var aie = new Audio("Sounds/203459.mp3");
			 aie.play();
			 break;
				
		 case "z":
			 var zad = new Audio("Sounds/203460.mp3");
			 zad.play();
			 break;

		 case "w":
			 var dblu = new Audio("Sounds/203463.mp3");
			 dblu.play();
			 break;

		 case "s":
			 var ass = new Audio("Sounds/203464.mp3");
			 ass.play();
			 break;
							
		 case "x":
			 var axx = new Audio("Sounds/203465.mp3");
			 axx.play();
			 break;

		 case "e":
			 var aee = new Audio("Sounds/203466.mp3");
			 aee.play();
			 break;

        case "d":
			var dae = new Audio("Sounds/203468.mp3");
			dae.play();
			break;

			case "c":
				var cae = new Audio("Sounds/203470.mp3");
				cae.play();
				break;
	
			 case "r":
				 var aar = new Audio("Sounds/203472.mp3");
				 aar.play();
				 break;
					
			 case "f":
				 var aff = new Audio("Sounds/203473.mp3");
				 aff.play();
				 break;
	
			 case "v":
				 var vii = new Audio("Sounds/203476.mp3");
				 vii.play();
				 break;
	
			 case "t":
				 var tee = new Audio("Sounds/203478.mp3");
				 tee.play();
				 break;
								
			 case "g":
				 var gee = new Audio("Sounds/203479.mp3");
				 gee.play();
				 break;
	
			 case "b":
				 var bee = new Audio("Sounds/203480.mp3");
				 bee.play();
				 break;
			case "y":
				var vay = new Audio("Sounds/203481.mp3");
				vay.play();
				break;

				case "h":
			var ahs = new Audio("Sounds/203482.mp3");
			ahs.play();
			break;

		 case "n":
			 var ann = new Audio("Sounds/203483.mp3");
			 ann.play();
			 break;
				
		 case "u":
			 var yuu = new Audio("Sounds/203484.mp3");
			 yuu.play();
			 break;

		 case "j":
			 var jae = new Audio("Sounds/203485.mp3");
			 jae.play();
			 break;

		 case "m":
			 var amm = new Audio("Sounds/203486.mp3");
			 amm.play();
			 break;
							
		 case "i":
			 var aai = new Audio("Sounds/203487.mp3");
			 aai.play();
			 break;

		 case "k":
			 var kae = new Audio("Sounds/203488.mp3");
			 kae.play();
			 break;

        case "o":
			var oah = new Audio("Sounds/203489.mp3");
			oah.play();
			break;

			case "l":
			var all = new Audio("Sounds/203490.mp3");
			all.play();
			break;

		 case "p":
			 var pee = new Audio("Sounds/203491.mp3");
			 pee.play();
			 break;
				
		 case "9":
			 var nine = new Audio("Sounds/203492.mp3");
			 nine.play();
			 break;

		 case "8":
			 var eight = new Audio("Sounds/203493.mp3");
			 eight.play();
			 break;

		 case "7":
			 var seven = new Audio("Sounds/203495.mp3");
			 seven.play();
			 break;
							
		 case "0":
			 var jero = new Audio("Sounds/203499.mp3");
			 jero.play();
			 break;

		
		   default: console.log(buttonInnerHTML);	
	}

}
function buttonAnimation(currentkey) {
	var activebutton = document.querySelector("." + currentkey);
	activebutton.classList.add("pressed");

	setTimeout(function(){
		activebutton.classList.remove("pressed");
	}, 10);
}


