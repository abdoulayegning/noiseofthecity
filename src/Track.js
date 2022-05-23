import { Howl, Howler } from "howler";
export default class Track {
    constructor(file){
        this.sound = new Howl({
            src: [file]
        });
    }
    play(){
        this.sound.play()
    }
    stop(){
        this.sound.stop()
    }
}