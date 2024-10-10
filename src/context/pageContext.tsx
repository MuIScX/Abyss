import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useLayoutEffect,
  useRef,
  ReactNode,
  MutableRefObject,
} from 'react';
import Lenis from '@studio-freight/lenis';
import debounce from '@/util/debounce';
import { useRouter } from 'next/router';

interface PageContextProps {
  lenis: Lenis | null;
}

const PageContext = createContext<PageContextProps>({
  lenis: null,
});

interface PageProviderProps {
  children: ReactNode;
}

export const PageProvider: React.FC<PageProviderProps> = ({ children }) => {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const reqIdRef: MutableRefObject<number | undefined> = useRef();
  const router = useRouter();

  useEffect(() => {
    const animate = (time: number) => {
      lenis?.raf(time);
      reqIdRef.current = requestAnimationFrame(animate);
    };
    reqIdRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(reqIdRef.current as number);
  }, [lenis]);

  useLayoutEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });
    setLenis(lenisInstance);
    return () => lenisInstance.destroy();
  }, []);

  return (
    <PageContext.Provider value={{ lenis }}>{children}</PageContext.Provider>
  );
};

export const usePageContext = () => useContext(PageContext);
