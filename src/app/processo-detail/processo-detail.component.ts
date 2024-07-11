import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProcessoService } from '../processo.service';
import { Processo } from '../processo.model';

@Component({
  selector: 'app-processo-detail',
  templateUrl: './processo-detail.component.html',
  styleUrls: ['./processo-detail.component.css']
})
export class ProcessoDetailComponent implements OnInit {
  processo: Processo | undefined;

  constructor(
    private route: ActivatedRoute,
    private processoService: ProcessoService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.processoService.getProcessoById(+id).subscribe(data => {
        this.processo = data;
      });
    }
  }
}
