import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

  
    export default function NavbarShadcnDrop() {
        return (
            <section class="flex gap-3 justify-between items-center m-2 bg-white p-2">
            <a href="#home">Waggles & Whiskers</a>
            <img
                class="hidden size-20 md:block"
                src="/logo.jpg"
                alt="Waggles & Whiskers"
            />
    
            <DropdownMenu>
                <DropdownMenuTrigger>
                <button class="btn btn-primary">Menu</button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                <DropdownMenuItem>
                    <a href="#services">Services & Prices</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <a href="#testimonials">Testimonials</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <a href="#gallery">Gallery</a>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <a href="#contact">Contact</a>
                </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            </section>
        );
        }