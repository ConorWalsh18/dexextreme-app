import DataGridComponent from '@/components/DataGrid/DataGrid';
import { Button } from 'devextreme-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="centered-container">
      <h1>DevExtreme Next.js Demo</h1>

      <DataGridComponent />

      <Link href="/test-page" passHref>
        <Button
          text="Go to Test Page"
          type="default"
          stylingMode="contained"
          onClick={() => {}}
        />
      </Link>
    </div>
  );
}
