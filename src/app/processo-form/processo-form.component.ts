import { Component, OnInit } from '@angular/core';
import { IbgeService } from '../ibge.service';
import { ProcessoService } from '../processo.service';
import { Processo } from '../processo.model';

@Component({
  selector: 'app-processo-form',
  templateUrl: './processo-form.component.html',
  styleUrls: ['./processo-form.component.css']
})
export class ProcessoFormComponent implements OnInit {
  processo: Processo = {
    id: 0,
    npu: '',
    dataCadastro: '',
    dataVisualizacao: '',
    municipio: '',
    uf: '',
    documento: ''
  };
  estados: any[] = [];
  municipios: any[] = [];
  selectedFile: File | null = null;

  constructor(private ibgeService: IbgeService, private processoService: ProcessoService) { }

  ngOnInit(): void {
    this.ibgeService.getEstados().subscribe(data => {
      this.estados = data;
    });
  }

  onUfChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const uf = selectElement.value;
    this.ibgeService.getMunicipios(uf).subscribe(data => {
      this.municipios = data;
    });
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  onSubmit(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      formData.append('processo', JSON.stringify(this.processo));
      this.processoService.createProcesso(formData).subscribe(response => {
        console.log('Processo cadastrado com sucesso!', response);
      });
    }
  }
}
