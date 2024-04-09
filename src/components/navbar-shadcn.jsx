import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export default function NavbarShadcn() {
  return (
    <nav class="flex items-center bg-white shadow-md">
      <div class="basis-full p-3">
        <a href="#home">Waggles & Whiskers</a>
      </div>
      <div class="basis-full flex justify-center	">
        <img
          className="hidden m-1 p-1 h-20 md:block "
          src="/public/Waggles & Whiskers-no-text.png"
          alt="Waggles & Whiskers"
        />
      </div>
      <div class="basis-full flex justify-end p-3">
        <NavigationMenu>
          <NavigationMenuList className="flex flex-grow justify-evenly items-center gap-5">
            <NavigationMenuItem>
              <NavigationMenuLink
                className="NavigationMenuLink"
                href="#services"
              >
                Services & Prices
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="NavigationMenuLink"
                href="#testimonials"
              >
                Testimonials
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="NavigationMenuLink"
                href="#gallery"
              >
                Gallery
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
