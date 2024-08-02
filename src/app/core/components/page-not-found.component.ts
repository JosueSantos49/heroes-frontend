import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <mat-card>
      <mat-card-title>404: Página não encontrada.</mat-card-title>

      <mat-card-content> Não conseguiu encontrar a página. </mat-card-content>

      <mat-card-actions>
        <button mat-raised-button color="primary" routerLink="['/']">
          Home
        </button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [
    `
      :host {
        text-align: center;
      }
    `,
  ],
})
export class PageNotFoundComponent {}
