import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function NavbarShadcnDrop() {
  return (
    <section className="flex gap-3 justify-between items-center bg-white p-2 border-b-2 ">
      <a href="#home"><img src="/logo_text.png" className="size-2/5 inline-block group-hover:hidden" width="300" height="300" alt="waggles &whiskers" />  </a>
      <img
        className="hidden size-20 md:block"
        src="/logo.jpg"
        alt="Waggles & Whiskers"
      />

      <DropdownMenu>
        <DropdownMenuTrigger className="open:hidden">
          <HamburgerMenuIcon className="size-8" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <a href="#services">Services & Prices</a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <a href="#dog-gallery">Gallery</a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <a href="#testimonials">Testimonials</a>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>
    </section>
  );
}
