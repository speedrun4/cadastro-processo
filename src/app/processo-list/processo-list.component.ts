import { Component, OnInit } from '@angular/core';
import { ProcessoService } from '../processo.service';
import { Processo } from '../processo.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-processo-list',
  templateUrl: './processo-list.component.html',
  styleUrls: ['./processo-list.component.css']
})
export class ProcessoListComponent implements OnInit {
  processos: Processo[] = [];

  constructor(private processoService: ProcessoService, private router: Router) { }

  ngOnInit(): void {
    this.processoService.getProcessos().subscribe(data => {
      this.processos = data;
    });
  }

  selectProcesso(processo: Processo): void {
    this.router.navigate(['/processos', processo.id]);
  }
}
