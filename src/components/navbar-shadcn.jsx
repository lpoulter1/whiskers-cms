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
    <nav className="flex items-center bg-white border-b-2 bg-teal-500 text-neutral-900 ">
    
      <div className="basis-full p-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-orange-600 ">
        <a href="#home">Waggles & Whiskers</a>
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
            <NavigationMenuItem class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-orange-600 ">
              <NavigationMenuLink
                className="NavigationMenuLink"
                href="#services"
              >
                Services & Prices
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-orange-600">
              <NavigationMenuLink
                className="NavigationMenuLink"
                href="#testimonials"
              >
                Testimonials
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-orange-600">
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
