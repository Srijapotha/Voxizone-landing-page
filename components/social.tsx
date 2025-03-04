import { BsEnvelopeFill, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { Url } from "@/constants/urls";
import { cn } from "@/lib/utils";
const socials = [
  {
    title: "Whatsapp",
    href: Url.Whatsapp,
    icon: (
      <BsWhatsapp className="text-muted h-5 w-5 hover:text-black dark:text-neutral-500" />
    ),
  },
  {
    title: "Linkedin",
    href: Url.Linkedin,
    icon: (
      <BsLinkedin className="text-muted h-5 w-5 hover:text-black dark:text-neutral-500" />
    ),
  },
  {
    title: "Email",
    href: Url.Email,
    icon: (
      <BsEnvelopeFill className="text-muted h-5 w-5 hover:text-black dark:text-neutral-500" />
    ),
  },
];
export default function Social({ className }: { className?: string }) {
  return (
    <>
      <div
        className={cn(
          "flex items-center justify-center space-x-4 py-4",
          className,
        )}
      >
        {socials.map((social) => (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={social.href}
            key={social.title}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </>
  );
}
