## AgGrid 按鈕相關 宣告 事件
	getButtonFunc() {
		return [
			{
				canUse: true,
				className: 'btn-edit',
				colorName: '',
				iconName: 'edit',
				funcName: data => {
					this.openHealthInsurance(data);
				},
			},
			{
				canUse: true,
				className: 'btn-delete',
				colorName: '',
				iconName: 'delete',
				funcName: data => {
					this.onRowDelete(data);
				},
			},

		];
	}

  ## 打開對話框
  // 編輯按鈕
	openHealthInsurance(params) {
		const dialogRef = this.dialog.open(HealthInsuranceEditComponent, {
			width: '400px',
			data: params
		});
			dialogRef.afterClosed()
			.subscribe(
				result => {
					if (result === undefined || result === '') {
						return;
					}
					this.reloadRows();
				});
	}