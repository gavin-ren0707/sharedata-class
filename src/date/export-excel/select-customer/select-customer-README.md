//選擇客戶(下拉式):
// 呼叫api
## function
 getCustomersByType() {
        const loaderRef = this.loader.open();
        var customerList = [];
		this.param.customerType = this.userInfo.department.typeFeaturePrefix * 10;
		this.erpBasicService.getCustomersByType(this.param.customerType)
			.subscribe(
				res => {
                    console.log('888',res);
                    this.customerNames = res.filter(p =>p.customerID);
                    console.log('999',this.customerNames);
					if (res.length === 0 || res === []) {
						customerList = [];
						return;
					}
                   customerList = res;
				})
			.add(() => {
				loaderRef.close();
			});
	}
// html  
<mat-form-field>
                <mat-label>{{ '客戶' | translate }}</mat-label>
                <mat-select [(ngModel)]="param.customerID">
                <mat-option [value]="0">{{'請選擇' | translate }}</mat-option>
                    <mat-option *ngFor="let customerName of customerNames" [value]="customerName.customerID">
                        {{ customerName.customerName }}
                    </mat-option>
                </mat-select>
            </mat-form-field>


// 選擇客戶(對話框)

## 清除客戶資料
## function
	clearCustomerInfo() {
		this.seasonInfo.customerID = 0;
		this.seasonInfo.customerInfo.customerCode = '';
		this.seasonInfo.customerInfo = new CustomerBasic();
		this.reloadRows();
	}

## 選擇客戶清單
## function
	openSelectCustomer() {
		const customerParm = new CustomerDialogParm();
		customerParm.customerType = this.userInfo.department.typeFeaturePrefix * 10;
		this.dialogService.openSmall(SelectCustomerComponent, customerParm)
			.afterClosed()
			.subscribe(
				result => {
					if (result === undefined || result === '') {
						return;
					}
					this.seasonInfo.customerInfo = result.data;
					this.seasonInfo.customerID = result.data.customerID;
					this.changeDetectorRefs.detectChanges();
					this.reloadRows();
				});
	}

  ## html
  <mat-form-field *ngIf="seasonInfo.customerID >0">
                    <input matInput id="custmerName" name="custmerName" #custmerName
                        placeholder="{{ '客戶名稱' | translate }}" [(ngModel)]="seasonInfo.customerInfo.customerName"
                        disabled>
                    <button mat-button matSuffix mat-icon-button aria-label="Clear" (click)="clearCustomerInfo()"
                        *ngIf="seasonInfo.customerID >0" class="btn-delete">
                        <mat-icon>close</mat-icon>
                    </button>
                </mat-form-field>
                <button mat-raised-button class="btn-secondary" (click)="openSelectCustomer()"
                    *ngIf="seasonInfo.customerID === 0">{{ '選擇客戶' | translate }}</button>  	    