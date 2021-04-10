// 取得工廠集合
// 呼叫api
	getFactories() {
		this.organizationService.getFactories().subscribe(res => {
			this.fromFactories = res.filter(p => p.typeFeaturePrefix = 4);
		});
	};

// html
  <mat-form-field>
                <mat-label>{{ '工廠' | translate }}</mat-label>
                <mat-select [(ngModel)]="param.fromFactory" [disabled]="!param.canUseFromFactory"
                    (selectionChange)="onFactorySelectionChange()">
                    <mat-option *ngFor="let fromFactory of fromFactories" [value]="fromFactory.factoryCode">
                        {{ fromFactory.factoryCode }}
                    </mat-option>
                </mat-select>
            </mat-form-field>