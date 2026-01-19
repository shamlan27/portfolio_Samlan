import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    id?: string;
    className?: string;
}

export const Section = ({ children, id, className, ...props }: SectionProps) => {
    return (
        <section
            id={id}
            className={cn("py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto", className)}
            {...props}
        >
            {children}
        </section>
    );
};
