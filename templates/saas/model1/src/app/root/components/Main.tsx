import { useTheme } from '@rasenganjs/theme';

interface MainProps {
  children: React.ReactNode;
}

export default function Main({ children }: MainProps) {
  const { isDark } = useTheme();

  return (
    <main
      className={`w-full max-w-[1500px] mx-auto px-5 md:px-10 lg:px-40 py-2 min-h-[800px]`}
    >
      {children}
    </main>
  );
}
