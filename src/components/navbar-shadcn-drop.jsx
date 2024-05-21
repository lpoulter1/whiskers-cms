import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";

export default function NavbarShadcnDrop() {
  return (
    <section className="flex gap-3 justify-between items-center bg-white p-2 ">
      <a href="#home">
      <img src="/logo_text.png" className="size-2/5" alt="waggles &whiskers" />  
      </a>
      <DropdownMenu>
        <DropdownMenuTrigger className="open:hidden">
          <HamburgerMenuIcon className="size-8 " />
        </DropdownMenuTrigger>
        <DropdownMenuContent className=" text-4xl">
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
