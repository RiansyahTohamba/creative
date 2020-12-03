function generate(quesAns) {
	var mainCont = document.createDocumentFragment();		
	quesAns.forEach(function(obj) { 
		// console.log(obj.id); 
	   var penBubWra = document.createElement('div');
	   penBubWra.className = 'bubbleWrapper';
	   mainCont.appendChild(penBubWra);
	   
	   var penInline = document.createElement('div');
	   penInline.className = 'inlineContainer penanya';
	   penBubWra.appendChild(penInline);	   

	   var penBubble = document.createElement('div');
	   penBubble.className = 'penanyaBubble penanya';
	   penBubble.textContent = obj.question ;
	   penInline.appendChild(penBubble);	   

	   var penBubWra = document.createElement('div');
	   penBubWra.className = 'bubbleWrapper';
	   mainCont.appendChild(penBubWra);
	   
	   var penInline = document.createElement('div');
	   penInline.className = 'inlineContainer';
	   penBubWra.appendChild(penInline);	   

	   var penBubble = document.createElement('div');
	   penBubble.className = 'otherBubble other';
	   penBubble.textContent = obj.answer;
	   penInline.appendChild(penBubble);	   
	});
    document.body.appendChild(mainCont);
}