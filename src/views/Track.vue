<template>
  <div class="wrapper"> 
    <div id="logo"><img src="../assets/logo.png" alt=""></div>
    <div id="info">
      <div id="cover"><img src="../assets/1-.png" alt=""></div>
      <div id="order">{{msg}}</div>
      <div id="title">Lorem ipsum dolor</div>
      <div id="description">
        Fa sa mbëgeel nek, sa cofeel fees fa dell, foofee, moy sa dëkkuway.<br> 
                Là où il y a de l'amour, là où il y a du plaisir, c'est là qu'est la patrie.<br> 
                Where love is, where there is delight, that is where the homeland is.<br>
      </div>
    </div>
    <div id="player">
      <button>Play</button><button>Stop</button>
    </div>
  </div>
</template>

<style scoped> 
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&display=swap');
 
#logo { 
  width: 100%;
  margin-top: 5vh;
} 

#logo img {
  width: 35%;
  display: block;
  margin: 0 auto;
}

#player button {
  color: white;
  padding-left: 1.25em;
  padding-right: 1.25em;
  padding-top: .45em;
  padding-bottom: .45em;
  font-family: Inconsolata;
  background-color: black;
  border: 1px solid white;
}

#description {
  font-family: Inconsolata;
  margin-top: 0.5em;
  margin-bottom: 0.5em; 
  width: 85%; 
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-size: 14px; 
}

#info {
  text-align: center;
  color: white;
  font-family: Stopwatch;
}


#title {
  font-size: 35px;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  text-transform: uppercase;
  width: 85%; 
  display: block;
  margin-left: auto;
  margin-right: auto;
}

#player {
  position: absolute;
  bottom: 5%;
  left: 0;
  display: flex;
  width: 100%; 
  justify-content: center;
}

#player button {
  margin-left: 1em;
  margin-right: 1em;
}

#cover img {
  width: 50%;
  margin-top: 1.5em; 
}

#order  { 
  margin-top: 1.5em; 
}
</style>

<script>
export default {
  name: 'Track',
  data(){
      return {
          msg: this.$route.params.track
      }
  } 
}
</script>