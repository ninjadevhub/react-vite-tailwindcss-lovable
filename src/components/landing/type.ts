import { LucideProps } from "lucide-react"

export type Feature = {
    title: string
    description: string
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
}