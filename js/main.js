// Javascript

const dropzones = document.querySelectorAll('.box'),
   instruments = document.querySelectorAll('.instrument')

   instruments.forEach((instrument, x) => {
      instrument.addEventListener('dragstart', dragStart)
   });

   instruments.forEach((instrument, x) => {
      instrument.addEventListener('click', remove)
   });

   dropzones.forEach((dropzone, x) => {
      dropzone.addEventListener('dragover', allowDrag)
   });

   dropzones.forEach((dropzone, x) => {
      dropzone.addEventListener('drop', allowDrop)
   });



   function dragStart(event) {

   		// capture the id of the element were dragging
   		// like an audio track, as an example
   		event.dataTransfer.setData("text/plain", this.id);
         console.log(this.id)
   	}

   	function allowDrag(event) {
   		event.preventDefault();
   	}

   	function allowDrop(event) {
   		if (!this.hasChildNodes()) {

   			event.preventDefault();
   			console.log('you dropped something onto me!')

   		   let song = event.dataTransfer.getData ("text/plain");
   		   	event.target.appendChild(document.querySelector(`#${song}`))

            let audioplayer = event.target.nextElementSibling;
            audioplayer.src = `includes/${song}.mp3`
            audioplayer.play()
         }
   	}

      function remove() {
         console.log(this)
         let audioplayer = this.parentElement.nextElementSibling;
         audioplayer.pause();

         document.querySelector(`.instruments-zone`).appendChild(this)

   	}
