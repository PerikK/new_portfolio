'use client'
// import React from "react"
import { ThemeProvider, useTheme } from "next-themes"

export default function Providers({ children }: { children: React.ReactNode }) { 
    return (
        <ThemeProvider
            enableSystem={true}
            attribute="class"
            defaultTheme="system"
            disableTransitionOnChange
        >           
            {children}
        </ThemeProvider>
    )
}