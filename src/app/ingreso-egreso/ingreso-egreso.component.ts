import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-ingreso-egreso',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './ingreso-egreso.component.html',
  styleUrl: './ingreso-egreso.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IngresoEgresoComponent { }
