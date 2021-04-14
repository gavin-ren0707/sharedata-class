## 匯出excel:
## function
onExportDataAsExcel() {
		const params = {
			allColumns: true,
			columnGroups: true
		};
		this.getGridOptions().api.exportDataAsExcel(params);
    };
generateColumns() {
        this.colunbDefs.push(
            {
                headerName: this.translateService.instant(''),
                field: '',
                width: 150,
                sortable: true,
                suppressSizeToFit: true,
            });
 setGridOption() {
		this.getGridOptions().onGridReady = () => {
			this.getGridOptions().api.setColumnDefs(this.generateColumns());
			this.reloadRows();
		};
	}