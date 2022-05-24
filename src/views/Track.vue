<template>
  <div class="wrapper"> 
    <div id="logo"><img src="../assets/logo.png" alt=""></div>
    <div v-if="response" id="info">
      <div id="cover"><img :src="response.cover" alt=""></div>
      <div id="order">{{response.trackId}}</div>
      <div id="title">{{response.title}}</div>
      <div id="description">
        {{response.story}}
      </div>
    </div>
    <div id="player">
      <button ref="play">Play</button><button ref="stop">Stop</button>
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
import Track from '../Track.js'
//covers
import cover1 from '../assets/covers/1-.png'
import cover2 from '../assets/covers/2-.png'
import cover3 from '../assets/covers/3-.png'
import cover4 from '../assets/covers/4-.png'
import cover5 from '../assets/covers/5-.jpg'
import cover6 from '../assets/covers/6-.jpg'
import cover7 from '../assets/covers/7-.png'
import cover8 from '../assets/covers/8-.png'
import cover9 from '../assets/covers/9-.png' 
//mp3's
import track1 from '../assets/music/1.mp3'
import track2 from '../assets/music/2.mp3'
import track3 from '../assets/music/3.mp3'
import track4 from '../assets/music/4.mp3'
import track5 from '../assets/music/5.mp3'
import track6 from '../assets/music/6.mp3'
import track7 from '../assets/music/7.mp3'
import track8 from '../assets/music/8.mp3'
import track9 from '../assets/music/9.mp3'
 
export default {
  name: 'Track',
  data(){
      return {
          track: this.$route.params.track,
          response: null,
          info: [
                  {
                    trackId: 1,
                    title: "Mbott yi",
                    story: `
            Bu nawett jotee, mbot mu bayyi ngoox ngoox, ya rey sa bopp.<br>
            Pendant la saison des pluies, toute grenouille qui ne "coasserait" pas se tuerait.<br>
            During the rainy season, any frog that does not croak kills itself.`,
                    cover: cover1,
                    track: track1
                  },
                  {
                    trackId: 2,
                    title: "ndawrabine",
                    story: `Pecc wu nekk, am na aw melokaan buy dundël taalif wi ci nekk.<br>
                Toute danse détient une forme qui révèle sa poésie.<br>
                Every dance has a form that reveals its poetry.<br>`,
                    cover: cover2,
                    track: track2
                  },
                  {
                    trackId: 3,
                    title: "assiko",
                    story: `Way wo gis, amna cafka, amna taariq.<br>
Chaque musique éveille un caractère et suggère une histoire.<br>
Each music awakens a character and suggests a story.<br>`,
                    cover: cover3,
                    track: track3
                  },
                  {
                    trackId: 4,
                    title: "baye world",
                    story: `Fees dell ci xol yi, lammiñ yi seede ko.<br>
                Quand le cœur s'affirme à travers les mots.<br>
                When the heart asserts itself through words.<br> `,
                    cover: cover4,
                    track: track4
                  },
                  {
                    trackId: 5,
                    title: "duket",
                    story: `
                    Bu xol seddee, jem ji seede ko.<br>
                    Quand le cœur y est, le corps s'y prête.<br>
                    When the heart is in it, the body lends itself to it.<br>
                    `,
                    cover: cover5,
                    track: track5
                  },
                  {
                    trackId: 6,
                    title: "nawetaan",
                    story: `
                    Pass pas ak bëg bëg, na ñu feeñ du né ci lu nekk.<br>
                    La passion et l'amour transcendent les frontières et unissent les cœurs.<br>
                    Passion and love transcend borders and unite hearts.<br>
                    `,
                    cover: cover6,
                    track: track6
                  },
                  {
                    trackId: 7,
                    title: "aissatou",
                    story: `
                    Dëgg dëgg i taar fesul, dafa dëggu.<br>
                    La vraie beauté est invisible, elle est réelle.<br>
                    True beauty is invisible, it is real.<br>
                    `,
                    cover: cover7,
                    track: track7
                  },
                  {
                    trackId: 8,
                    title: "gainde",
                    story: `Fa sa mbëgeel nek, sa cofeel fees fa dell, foofee, moy sa dëkkuway.<br> 
                Là où il y a de l'amour, là où il y a du plaisir, c'est là qu'est la patrie.<br> 
                Where love is, where there is delight, that is where the homeland is.<br>`,
                    cover: cover8,
                    track: track8
                  },
                  {
                    trackId: 9,
                    title: "puulo",
                    story: `
                    Ngelow liy woy ci xol Yi tax, Ku weet xam sa bopp.<br>
                    La musique du vent dans les coeurs, la révélation de chacun.<br>
                    The music of the wind in our hearts, the revelation of each one.<br>
                    `,
                    cover: cover9,
                    track: track9
                  }, 
                ]
      }
  },
  mounted(){  
    this.info.forEach(i => {
      if (i.trackId == this.$route.params.track) {
        this.response = i
        console.log(i)
        let sound = new Track(i.track)
        this.$refs.play.addEventListener('click', ()=>{
          sound.play()
          console.log("Playing")
        })

        this.$refs.stop.addEventListener('click', ()=>{
          sound.stop()
          console.log("Stop")
        })
      }
    });


  } 
}
</script>