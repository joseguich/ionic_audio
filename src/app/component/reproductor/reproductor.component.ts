import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.scss'],
})
export class ReproductorComponent implements OnInit {
  audio = new Audio();
  reproduciendo: boolean = false;
  constructor() {
    this.audio.src =
      '../../../assets/audio/Y2meta.app - Anuel AA - Monstruo (Visualizer Oficial) | LLNM2 (128 kbps).mp3';
    this.audio.load();
  }

  play() {
    this.audio.play();
    this.reproduciendo = true;
  }

  pause() {
    this.audio.pause();
    this.audio.currentTime = 0; // Establece el tiempo de reproducción a 0
    this.reproduciendo = false;
  }

  ngOnInit() {}
}
