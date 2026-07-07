import Image from "next/image";
import { site } from "@/lib/site";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src="/brand/logo.png"
        alt={`${site.name} logo`}
        width={150}
        height={34}
        priority
        className="h-8 w-auto"
      />
    </span>
  );
}
