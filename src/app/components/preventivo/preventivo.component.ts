import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeWhile } from 'rxjs';
import { Risposta, SezionePreventivo } from 'src/app/models/preventivo.model';
import { PreventivoService } from 'src/app/services/preventivo.service';

@Component({
  selector: 'app-preventivo',
  templateUrl: './preventivo.component.html',
  styleUrls: ['./preventivo.component.scss']
})
export class PreventivoComponent implements OnInit, OnDestroy {
  private unsubscribe : boolean = true;
  currentIndex: number = 0;
  currentSezionePreventivo?: SezionePreventivo;
  sezioniPreventivo?: SezionePreventivo[];
  risposte: Risposta[] = []

  constructor(private readonly preventivoService: PreventivoService) { }
  
  ngOnDestroy(): void {
    this.unsubscribe = false;
  }

  ngOnInit(): void {
    this.preventivoService.getPreventivi()
      .pipe(
        takeWhile(()=>this.unsubscribe)
      )
      .subscribe((res: SezionePreventivo[]) => {
        this.sezioniPreventivo = res
        this.currentSezionePreventivo = res[0]
      })
  }

  gestisciRisposta(answer: string): void {
    this.risposte.push({
      index: this.currentIndex,
      risposta: answer
    })
    this.currentIndex++
    this.currentSezionePreventivo = this.sezioniPreventivo![this.currentIndex]
  }


}
