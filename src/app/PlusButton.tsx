import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PlusButton() {
  const [isHover, setHover] = useState(false);
  return (
    <Link
      className="fixed bottom-8 right-8 inline-block h-16 w-16 rounded-full bg-white shadow-md"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      to="/forms"
    >
      <div className="absolute left-0 top-0 flex h-full w-full cursor-pointer items-center justify-center">
        <img
          alt="+"
          className={`${
            !isHover
              ? 'translate-y-0 rotate-0 opacity-100 delay-100'
              : 'invisible rotate-45 opacity-20'
          } h-10 w-10 transform duration-100`}
          src="/assets/icons/plus.svg"
        />
      </div>
      <div className="absolute left-0 top-0 flex h-full w-full cursor-pointer items-center justify-center">
        <img
          alt="✎"
          className={`${
            isHover
              ? 'translate-y-0 rotate-0 opacity-100 delay-100'
              : 'invisible -rotate-45 opacity-20'
          } h-7 w-7 transform duration-100`}
          src="/assets/icons/pencil.svg"
        />
      </div>
    </Link>
  );
}
