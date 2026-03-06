"use client"

import { useTheme } from "next-themes"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export default function ToggleTheme() {
    const { theme, setTheme } = useTheme()

    return (
        <ToggleGroup variant="outline" type="single" value={theme} onValueChange={(value) => {
            if (value) setTheme(value)
        }}>
            <ToggleGroupItem value="light">
                Light
            </ToggleGroupItem>
            <ToggleGroupItem value="dark">
                Dark
            </ToggleGroupItem>
        </ToggleGroup>
    )
}