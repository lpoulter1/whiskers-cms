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
    <nav className="flex items-center bg-white border-b-2 text-neutral-900 ">
      <div className="basis-full p-3 ">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="transition ease-in-out hover:-translate-y-0.5 hover:scale-110 hover:text-orange-600">
              <NavigationMenuLink href="#home">
                Waggles & Whiskers
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="basis-full flex justify-center	">
        <img
          className="hidden m-1 p-1 h-20 md:block "
          src="/Waggles & Whiskers-no-text.png"
          alt="Waggles & Whiskers"
        />
      </div>
      <div className="basis-full flex justify-end p-3">
        <NavigationMenu>
          <NavigationMenuList className="flex flex-grow justify-evenly items-center gap-5 ">
            <NavigationMenuItem className="transition ease-in-out hover:-translate-y-0.5 hover:scale-110 hover:text-orange-600 ">
              <NavigationMenuLink
                className="NavigationMenuLink"
                href="#services"
              >
                Services & Prices
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="transition ease-in-out hover:-translate-y-0.5 hover:scale-110 hover:text-orange-600">
              <NavigationMenuLink
                className="NavigationMenuLink"
                href="#dog-gallery"
              >
                Gallery
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="transition ease-in-out hover:-translate-y-0.5 hover:scale-110 hover:text-orange-600">
              <NavigationMenuLink
                className="NavigationMenuLink"
                href="#testimonials"
              >
                Testimonials
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
