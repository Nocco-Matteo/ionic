import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { catchError, of, takeWhile, tap } from 'rxjs';
import { Risposta, SezionePreventivo } from 'src/app/models/preventivo.model';
import { PreventivoService } from 'src/app/services/preventivo.service';

@Component({
  selector: 'app-preventivo',
  templateUrl: './preventivo.component.html',
  styleUrls: ['./preventivo.component.scss']
})
export class PreventivoComponent implements OnInit, OnDestroy {
  private unsubscribe: boolean = true;

  mockCurrentIndex: number = 0;
  mockCurrentSezionePreventivo?: SezionePreventivo;
  mockSezioniPreventivo?: SezionePreventivo[];
  mockRisposte: Risposta[] = []

  currentIndex: number = 0;
  currentSezionePreventivo?: SezionePreventivo;
  sezioniPreventivo?: SezionePreventivo[];
  risposte: Risposta[] = []

  stato : string= "fermo";
  constructor(private readonly preventivoService: PreventivoService) { }

  ngOnDestroy(): void {
    this.unsubscribe = false;
  }

  ngOnInit(): void {
    // http
    this.stato = "pending"
    this.preventivoService.getPreventivi()
      .pipe(
        takeWhile(() => this.unsubscribe),
        catchError((errore: HttpErrorResponse)=>{
          this.stato = `${errore.message}`;
          return of()
        }),
        tap(()=>{ this.stato = "finita"})
      )
      .subscribe((res: SezionePreventivo[]) => {
        this.stato = 'completato';
        this.sezioniPreventivo = res
        this.currentSezionePreventivo = res[0]
      })
    // mock
    this.preventivoService.getMockPreventivi()
      .pipe(
        takeWhile(() => this.unsubscribe)
      )
      .subscribe((res: SezionePreventivo[]) => {
        this.mockSezioniPreventivo = res
        this.mockCurrentSezionePreventivo = res[0]
      })
  }

  gestisciRisposta(answer: string, type: string): void {
    switch (type) {
      case 'mock':
        this.mockRisposte.push({
          index: this.mockCurrentIndex,
          risposta: answer
        })
        this.mockCurrentIndex++
        this.mockCurrentSezionePreventivo = this.mockSezioniPreventivo![this.mockCurrentIndex]
        break;
      case 'http':
        this.risposte.push({
          index: this.currentIndex,
          risposta: answer
        })
        this.currentIndex++
        this.currentSezionePreventivo = this.sezioniPreventivo![this.currentIndex]

        break;
    }
  }


}
