## checkbox 使用

## 在ag-grid 加(html) 
cellRenderer="checkboxCellRenderer"
cellClass="isCheckbox-disable" 

## 在dialog加(html)
<mat-checkbox name="isToWareHouse" [(ngModel)]="stockType.isToWarehouse">
{{ '必填入庫' | translate }}
</mat-checkbox>