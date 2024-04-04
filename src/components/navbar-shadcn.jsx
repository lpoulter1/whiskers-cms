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
    <section class="flex gap-3 justify-between  items-center m-2">
      <h1>Waggles & Whiskers</h1>
      <img
        class="hidden size-20 md:block"
        src="/logo.jpg"
        alt="Waggles & Whiskers"
      />

      <NavigationMenu>
        <NavigationMenuList className="flex gap-3 justify-between items-center">
          <NavigationMenuItem>
            <NavigationMenuLink className="NavigationMenuLink" href="#services">
              Services <br /> & Prices
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
            <NavigationMenuLink className="NavigationMenuLink" href="#gallery">
              Gallery
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </section>
  );
}
