import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-estadistica',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './estadistica.component.html',
  styleUrl: './estadistica.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EstadisticaComponent { }
