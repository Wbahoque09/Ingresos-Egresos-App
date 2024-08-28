import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-sidebard',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './sidebard.component.html',
  styleUrl: './sidebard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebardComponent { }
