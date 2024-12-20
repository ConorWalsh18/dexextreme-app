import CalendarComponent from '@/components/Calendar/Calendar';
import { Button } from 'devextreme-react';
import Link from 'next/link';

export default function TestPage() {
  return (
    <div>
      <h1>This is a test page</h1>

      <CalendarComponent />

      <Link href="/" passHref>
        <Button
          text="Go to Home Page"
          type="default"
          stylingMode="contained"
          onClick={() => {}}
        />
      </Link>
    </div>
  );
}
