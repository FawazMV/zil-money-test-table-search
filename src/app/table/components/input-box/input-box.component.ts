import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css'],
})
export class InputBoxComponent implements OnInit, OnDestroy {
  @Output() onInputChange = new EventEmitter<string>();

  subject = new Subject<string>();

  ngOnInit(): void {
    //to avoid sudden searching
    this.subject
      .pipe(debounceTime(100), distinctUntilChanged())
      .subscribe((value) => {
        this.onInputChange.emit(value);
      });
  }

  icon = true;
  inputChange(event: Event) {
    if (event.target instanceof HTMLInputElement)
      this.subject.next(event.target.value);
  }

  ngOnDestroy(): void {
    this.subject.unsubscribe();
  }
}
