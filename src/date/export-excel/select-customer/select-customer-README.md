選擇客戶(下拉式):
// 呼叫api
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
	    