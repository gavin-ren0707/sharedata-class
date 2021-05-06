## 把ag-grid做row data的變化
## function
setGridOption() {
		this.getGridOptions().getRowClass = params => {
			if (params.data && params.data.status === CustomerSeasonStatus.FROZENED) {
				return 'frozen-status';
			}
		};
		this.getGridOptions().context = {
      this.getGridOptions().getRowClass = params => {
            if (params.data && params.data.status === StockTypeStatus.DELETE) {
                return 'del-line';
            }
        };
			buttonFunc: this.getButtonFunc(),
		};
	}