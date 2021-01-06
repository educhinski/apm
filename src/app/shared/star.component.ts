import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

@Component({
  selector: 'apm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnChanges {
  starWidth: number;
  @Input() rating: number;
  @Input() name: string;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.starWidth = (this.rating * 75) / 5;
  }

  onClick(): void {
    console.log(`The rating ${this.rating} for '${this.name}' was clicked!`);
    this.ratingClicked.emit(
      `${this.name} was clicked!`
    );
  }
}
