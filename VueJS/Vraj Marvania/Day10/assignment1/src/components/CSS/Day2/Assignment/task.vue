
<template>
      <header id="header">
            header
        </header>
    
        <div id="leftbar">
            leftbar
        </div>
    
        <div id="sidebar">
            sidebar
        </div>
    
        <footer id="footer">
            footer
        </footer>  
</template>
<script>
export default {
    name:"task"
}
</script>

 <style scoped>
        
    BODY {
        MARGIN: 0PX;
    }
            *{text-align: center; TOP:50%}
            #sidebar {
                float: right;
                width: 70%;
                background-color: lightcyan;
    
                height: 200PX;
            }
    
            #leftbar {
                width: 30%;
                height: 200PX;
                background-color: rgb(255, 239, 10);
                float: left;
                width: 30%;
            }
    
            #footer {
    
                HEIGHT: 40PX;
                clear: left;
                
                background-color: rgba(255, 29, 236, 0.973);
            }
    
            #header {
                height: 40PX;
                width: 100%;
                background-color: rgb(252, 0, 0);
            }
    
          
        </style>

     