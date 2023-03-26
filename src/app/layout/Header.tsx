import { Avatar } from '@/components/ui';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="w-full bg-white py-3">
      <div className="container flex items-center justify-between">
        <Link className="flex items-center space-x-2" to="/">
          <img alt="logo" className="h-10 w-10" src="/assets/icons/document.svg" />
          <h1 className="text-2xl">Google Forms Clone</h1>
        </Link>
        <Avatar name="Alfirman Ejha Pahlepi" />
      </div>
    </header>
  );
}
