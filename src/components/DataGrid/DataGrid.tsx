import { DataGrid } from 'devextreme-react/data-grid';
import styles from './DataGrid.module.css';

const employees = [
  { ID: 1, FirstName: 'John', LastName: 'Doe', Position: 'Developer' },
  { ID: 2, FirstName: 'Jane', LastName: 'Smith', Position: 'Designer' },
];

const DataGridComponent = () => {
  return (
    <div className={styles.dataGridContainer}>
      <DataGrid
        dataSource={employees}
        showBorders={true}
        keyExpr="ID"
      ></DataGrid>
    </div>
  );
};

export default DataGridComponent;
