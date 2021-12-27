<template>
     
        
      <div class="">
         <h2>video</h2>

         <!-- controls -->
         <h4>controls</h4>
         <video width="400" controls>
           <source src="assets/mov_bbb.mp4" type="video/mp4">
           Your browser does not support HTML video.
         </video>
       
       
         <!-- autoplay loop muted preload -->
         <h4>autoplay loop muted preload</h4>
         <video controls width="400" autoplay loop muted preload="auto">
           <source src="assets/mov_bbb.mp4" type="video/mp4">
           <source src="assets/mov_bbb.mp4" type="video/webm">
         </video>
       
         <!-- poster -->
         <h4>poster</h4>
         <video controls width="400" poster="assets/img.png">
           <source src="assets/mov_bbb.mp4" type="video/mp4">
           <source src="assets/mov_bbb.mp4" type="video/webm">
         </video>
       
       
         <hr />
         <BR/>
         <h2>audio</h2>
       
         <!-- loop -->
         <h4>loop</h4>
         <audio controls loop>
           <source src="assets/horse.ogV" type="audio/ogg">
           Your browser does not support the audio element.
         </audio>
       
         <!-- muted -->
         <h3>muted</h3>
         <audio controls muted>
           <source src="assets/horse.ogV" type="audio/ogg">
           Your browser does not support the audio element.
         </audio>
       
         <!-- Author thinks that the sound should NOT be loaded when the page loads: -->
         <h4> preload="none (Author thinks that the sound should NOT be loaded when the page loads:)"</h4>
         <audio controls preload="none">
           <source src="assets/horse.ogV" type="audio/ogg">
           Your browser does not support the audio element.
         </audio>
       
         <!-- autoplay -->
         <h4>autoplay</h4>
         <audio controls autoplay muted>
           <source src="assets/horse.ogV" type="audio/ogg">
           Your browser does not support the audio element.
         </audio>
             </div>
 
</template>
 
<script>
export default {
   name:"Practice"
}
</script>