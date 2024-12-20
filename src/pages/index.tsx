import CalendarComponent from '@/components/Calendar/Calendar';
import DataGridComponent from '@/components/DataGrid/DataGrid';

export default function Home() {
  return (
    <div>
      <h1>DevExtreme Next.js Demo</h1>

      <DataGridComponent />

      <CalendarComponent />
    </div>
  );
}
