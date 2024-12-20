import DataGridComponent from '@/components/DataGrid/DataGrid';
import { Calendar } from 'devextreme-react';

export default function Home() {
  return (
    <div>
      <h1>DevExtreme Next.js Demo</h1>

      <DataGridComponent />

      <Calendar />
    </div>
  );
}
