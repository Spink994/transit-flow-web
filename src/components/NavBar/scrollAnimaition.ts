import { useEffect, useState } from 'react';

export default function () {
  const [hide, setHide] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollHeight = window.scrollY;
      if (scrollHeight > 200) setHide(true);
      else setHide(false);
    });
  }, [hide]);

  return { hide };
}
