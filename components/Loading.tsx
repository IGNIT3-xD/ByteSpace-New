import { cn } from "@/lib/utils";
import { LoaderIcon } from "lucide-react";

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
    return (
        <LoaderIcon
            role="status"
            aria-label="Loading"
            className={cn("size-8 animate-spin text-gray-800", className)}
            {...props}
        />
    );
}

export default function Loading() {
    return (
        <div className="flex min-h-[calc(100vh-4rem)] w-full items-center justify-center p-4">
            <div className="flex flex-col items-center gap-3">
                <Spinner />
                <p className="text-sm font-medium text-gray-700 animate-pulse">
                    Loading, please wait...
                </p>
            </div>
        </div>
    );
}