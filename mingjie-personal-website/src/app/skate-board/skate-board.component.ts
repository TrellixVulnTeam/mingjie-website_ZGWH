import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-skate-board',
  templateUrl: './skate-board.component.html',
  styleUrls: ['./skate-board.component.scss']
})
export class SkateBoardComponent implements OnInit {

  private lines: gsap.core.Tween;
  private action: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.skateBoarding();
  }

  // adding the animation of user skateboarding
  skateBoarding(): void {
    document.querySelectorAll('.loading').forEach(loading => {
      this.lines = gsap.to(loading, {
        keyframes: [{
          '--line-top-x': '-100%',
          '--line-bottom-x': '-200%',
          onComplete() {
            gsap.set(loading, {
              '--line-top-x': '200%',
              '--line-bottom-x': '100%',
            })
          }
        }, {
          '--line-top-x': '0%',
          '--line-bottom-x': '0%'
        }],
        duration: 1,
        repeat: -1,
      })
    });
  }

  @HostListener('window:keyup', ['$event'])
  reset(): void {
    
    if (this.action) {
      setTimeout(() => {
        this.reset();
      }, 10);
      return;
    };

    document.querySelectorAll('.loading').forEach(loading => {
      gsap.to(loading, {
        '--skate-x': '0px',
        duration: .3,
      })
      gsap.to(loading, {
        duration: .2,
        '--arm-front': '24deg',
        '--arm-front-end': '-48deg',
        '--arm-back': '164deg',
        '--arm-back-end': '-50deg',
        '--leg-front': '40deg',
        '--leg-front-end': '30deg',
        '--leg-back': '120deg',
        '--leg-back-end': '-36deg',
        '--board-r': '0deg',
        '--board-x': '0px',
        '--body-r': '12deg',
        '--body-y': '-65%',
        '--body-x': '-85%',
        onComplete: () => {
          this.lines.play()
          this.lines.timeScale(1)
        }
      })
    });
  }

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.repeat) return;
    if (event.key === "r" && this.action) {
      this.action = false;
      this.reset();
      return;
    }
    if (this.action) return;
    this.action = true;
    switch (event.key) {
      case "ArrowLeft":
        this.slow();
        this.action = false;
        break;
      case "ArrowRight":
        this.fast();
        this.action = false;
        break;
      case "ArrowUp":
        this.jump();
        break;
      case "ArrowDown":
        this.down();
        break;
      case "c":
        this.fail();
        break;
      default:
        break;
    }
  }

  // slow function (triggers when user press left)
  slow(): void {
    this.lines.timeScale(.5);
    document.querySelectorAll('.loading').forEach(loading => {
      gsap.to(loading, {
        '--skate-x': '-12px',
        duration: .3
      });
      gsap.to(loading, {
        duration: .2,
        '--arm-front': '32deg',
        '--arm-front-end': '20deg',
        '--arm-back': '156deg',
        '--arm-back-end': '-22deg',
        '--leg-front': '19deg',
        '--leg-front-end': '74deg',
        '--leg-back': '134deg',
        '--leg-back-end': '-29deg',
        '--board-r': '-15deg',
        '--body-r': '-8deg',
        '--body-y': '-65%',
        '--body-x': '-110%',
      });
    });
  }

  fast(): void {
    this.lines.timeScale(2);
    document.querySelectorAll('.loading').forEach(loading => {
      gsap.to(loading, {
        '--skate-x': '12px',
        duration: .3
      });
      gsap.to(loading, {
        duration: .2,
        '--arm-front': '24deg',
        '--arm-front-end': '-48deg',
        '--arm-back': '164deg',
        '--arm-back-end': '-36deg',
        '--leg-front': '5deg',
        '--leg-front-end': '66deg',
        '--leg-back': '130deg',
        '--leg-back-end': '-36deg',
        '--board-r': '10deg',
        '--body-r': '34deg',
        '--body-y': '-30%',
        '--body-x': '15%',
      });
    });
  }

  jump(): void {
    this.lines.timeScale(2);
    document.querySelectorAll('.loading').forEach(loading => {
      gsap.to(loading, {
        keyframes: [{
          '--skate-x': '-12px',
          duration: .3
        }, {
          '--skate-x': '12px',
          duration: .5
        }, {
          '--skate-x': '0px',
          duration: .5
        }]
      })
      gsap.to(loading, {
        keyframes: [{
          '--skate-y': '-32px',
          duration: .4,
          delay: .2
        }, {
          '--skate-y': '0px',
          duration: .2
        }]
      })
      gsap.to(loading, {
        keyframes: [{
          duration: .2,
          delay: .2,
          '--arm-front': '40deg',
          '--arm-front-end': '-12deg',
          '--arm-back': '172deg',
          '--arm-back-end': '38deg',
          '--leg-front': '-8deg',
          '--leg-front-end': '102deg',
          '--leg-back': '103deg',
          '--leg-back-end': '-16deg',
          '--board-r': '-40deg',
          '--body-r': '7deg',
          '--body-y': '-90%',
          '--body-x': '-160%',
        }, {
          duration: .2,
          '--arm-front': '24deg',
          '--arm-front-end': '-48deg',
          '--arm-back': '172deg',
          '--arm-back-end': '15deg',
          '--leg-front': '22deg',
          '--leg-front-end': '55deg',
          '--leg-back': '142deg',
          '--leg-back-end': '-58deg',
          '--board-r': '3deg',
          '--body-r': '12deg',
          '--body-y': '-56%',
          '--body-x': '-60%',
        }, {
          duration: .2,
          '--arm-front': '24deg',
          '--arm-front-end': '-48deg',
          '--arm-back': '164deg',
          '--arm-back-end': '-36deg',
          '--leg-front': '-4deg',
          '--leg-front-end': '66deg',
          '--leg-back': '111deg',
          '--leg-back-end': '-36deg',
          '--board-r': '0deg',
          '--body-r': '34deg',
          '--body-y': '-53%',
          '--body-x': '-28%',
        }, {
          '--arm-front': '24deg',
          '--arm-front-end': '-48deg',
          '--arm-back': '164deg',
          '--arm-back-end': '-50deg',
          '--leg-front': '40deg',
          '--leg-front-end': '30deg',
          '--leg-back': '120deg',
          '--leg-back-end': '-36deg',
          '--board-r': '0deg',
          '--body-r': '12deg',
          '--body-y': '-65%',
          '--body-x': '-85%',
          duration: .4,
          onComplete: () => {
            this.lines.timeScale(1);
            this.action = false;
          }
        }]
      })
    });
  }

  down(): void {
    this.lines.timeScale(.75);
    document.querySelectorAll('.loading').forEach(loading => {
      gsap.to(loading, {
        '--arm-front': '-26deg',
        '--arm-front-end': '-58deg',
        '--arm-back': '204deg',
        '--arm-back-end': '60deg',
        '--leg-front': '40deg',
        '--leg-front-end': '80deg',
        '--leg-back': '150deg',
        '--leg-back-end': '-96deg',
        '--body-r': '180deg',
        '--body-y': '-100%',
        duration: .2,
        onComplete: () => {
          this.lines.timeScale(1);
          this.action = false;
        }
      });
    });
  }

  fail(): void {
    this.lines.pause();
    document.querySelectorAll('.loading').forEach(loading => {
      gsap.to(loading, {
        duration: .5,
        '--board-x': '60px'
      });
      gsap.to(loading, {
        keyframes: [{
          '--board-r': '-40deg',
          duration: .15
        }, {
          '--board-r': '0deg',
          duration: .3
        }]
      })
      gsap.to(loading, {
        keyframes: [{
          '--line-top-x': '-100%',
          '--line-bottom-x': '-200%',
          '--body-r': '-8deg',
          '--leg-back-end': '24deg',
          '--leg-back': '60deg',
          '--leg-front-end': '30deg',
          '--leg-front': '10deg',
          '--arm-back-end': '-40deg',
          '--arm-back': '54deg',
          '--arm-front-end': '-28deg',
          '--arm-front': '24deg',
          duration: .2
        }, {
          '--body-x': '-85%',
          '--body-y': '36%',
          '--body-r': '-26deg',
          '--leg-back-end': '24deg',
          '--leg-back': '20deg',
          '--leg-front-end': '30deg',
          '--leg-front': '-10deg',
          '--arm-back-end': '-40deg',
          '--arm-back': '164deg',
          '--arm-front-end': '-28deg',
          '--arm-front': '24deg',
          duration: .2,
        }]
      })
    });
  }

}
