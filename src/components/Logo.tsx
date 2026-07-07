import Image from "next/image";
import { site } from "@/lib/site";

export function Logo({ className = "h-12 w-auto sm:h-14" }: { className?: string }) {
  return (
    <Image
      src="/brand/logo.png"
      alt={`${site.name} logo`}
      width={179}
      height={67}
      priority
      className={className}
    />
  );
}
