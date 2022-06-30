import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.css']
})
export class CountryInputComponent implements OnInit {

  // eventos sin formularios reactivos
  @Output() onEnter: EventEmitter<string> = new EventEmitter()
  @Output() onDebounce: EventEmitter<string> = new EventEmitter()
  @Input() placeholder: string = ''

  debounce: Subject<string> = new Subject()
  termino: string = ''

  constructor() { }

  // inicializa la subscripción al observador del termino por cada 300 mms 
  ngOnInit() {
    this.debounce
      .pipe(debounceTime(300))
      .subscribe(value => this.onDebounce.emit(value))
  }

  // emite el valor al presionar enter
  search() {
    this.onEnter.emit(this.termino)
  }

  // emite el valor cada 300 mms de dejar de escribir
  keystroke() {
    this.debounce.next(this.termino)
  }
}
