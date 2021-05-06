# 查詢函數
getRows() {
        const loaderRef = this.loader.open(this.translateService.instant('資料查詢中，請稍後'));
        this.getGridOptions().api.setRowData([]);
        this.erpBasicService.getStockTypes()
            .subscribe(
                res => {
                    if (res === null || res === []) {
                        this.snackBarService.openWarning(this.translateService.instant('查無資料'));
                        return;
                    }
                    this.stockTypes = res;
                    this.setOptionName(this.stockTypes);
                    this.getGridOptions().api.setRowData(this.stockTypes);
                    this.getGridOptions().api.sizeColumnsToFit();
                },
                err => {
                    this.snackBarService.openDanger(this.translateService.instant('查詢失敗'));
                })
            .add(() => {
                loaderRef.close();
            });

    }

# 新增 修改 函數
setStockType() {
        const loaderRef = this.loader.open(this.translateService.instant('資料設定中,請稍後'));
        this.erpBasicService.setStockType(this.stockType)
            .subscribe(
                res => {
                    this.dialogRef.close(res);
                    this.snackBarService.openSuccess(this.translateService.instant('儲存完成'));
                },
                err => {
                    this.snackBarService.openDanger(this.translateService.instant('儲存失敗'));
                })
            .add(() => {
                loaderRef.close();
            });

    }

# 刪除 函數
deleteStockType(data) {
        const loaderRef = this.loader.open();
        this.erpBasicService.setStockType(data)
            .subscribe(
                res => {
                    if (res === null) {
                        this.snackBarService.openWarning(this.translateService.instant('刪除失敗'));
                        return;
                    }
                    this.snackBarService.openSuccess(this.translateService.instant('刪除完成'));
                    this.reloadRows();
                },
                err => {
                    this.snackBarService.openDanger(this.translateService.instant('刪除失敗'));
                })
            .add(() => {
                loaderRef.close();
            });

    }
            