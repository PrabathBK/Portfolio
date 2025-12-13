'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Clear any old theme preference on mount to ensure system theme is used
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('theme');
    }
  }, []);

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
