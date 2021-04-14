## 把狀態轉成中文名
## model要多加一個statusName屬性去塞

## function
	setOptionName(params) {
		params.forEach(p => {
			const status = this.optionService
				.getCustomerSeasonStatus()
				.find(x => x.key === p.status);
			p.statusName = status === undefined ? '' : status.value;
		});
	}