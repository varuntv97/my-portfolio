import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-2 flex items-center justify-center bg-white dark:bg-zinc-900 rounded-full">
        <Avatar className="border size-12 m-auto bg-muted">
          <AvatarFallback className="bg-muted">
            <Icon className="h-5 w-5 text-foreground" />
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1">
        <h3 className="font-semibold leading-none">{title}</h3>
        <span className="prose dark:prose-invert text-sm text-muted-foreground">
          {description}
        </span>
      </div>
    </li>
  );
}
