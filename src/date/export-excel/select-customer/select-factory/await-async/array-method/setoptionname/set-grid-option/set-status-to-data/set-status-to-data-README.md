## 假設狀態是使用中,凍結,復原,要怎麼把資料轉成對應的狀態
## model(依狀態去加)
export enum CustomerSeasonStatus {
	'NEW' = 0,
	'USING' = 60,
	'FROZENED' = 70,
}

## function
// 用狀態去判斷凍結/復原
	changeStatusData(model) {
		this.customerSeason.status = this.setStatusToData(model);
		this.setCustomerSeason();
	}

setStatusToData(model) {
		switch (model) {
			case 'New':
				return CustomerSeasonStatus.USING;
			case 'Using':
				return CustomerSeasonStatus.USING;
			case 'Frozen':
				return CustomerSeasonStatus.FROZENED;
			default:
				return CustomerSeasonStatus.USING;
		}
	}

  checkStatusToShow(model) {
		const newStatus = this.customerSeason.status === CustomerSeasonStatus.NEW
		switch (model) {
			case 'New':
				return !this.customerSeason.isView &&
					(this.customerSeason.status <= CustomerSeasonStatus.USING || newStatus) ?
					true : false;
			case 'Using':
				return !this.customerSeason.isView &&
					(this.customerSeason.status >= CustomerSeasonStatus.FROZENED) ?
					true : false;
			case 'Frozen':
				return !this.customerSeason.isView &&
					(this.customerSeason.status === CustomerSeasonStatus.USING) ?
					true : false;
			default:
				return false;
		}
	}

  ## html
  <div fxFlexAlign="start center">
            <button mat-button class="btn-danger" *ngIf="checkStatusToShow('Frozen')"
                (click)="changeStatusData('Frozen')">
                {{ '凍結' | translate }}
            </button>
            <button mat-button class="btn-secondary" *ngIf="checkStatusToShow('Using')"
                (click)="changeStatusData('Using')">
                {{ '復原' | translate }}
            </button>
            <button mat-button class="btn-primary" *ngIf="checkStatusToShow('New')" (click)="changeStatusData('Using')"
                [disabled]="!orderForm.form.valid">
                {{ '確定' | translate }}
            </button>
        </div>
