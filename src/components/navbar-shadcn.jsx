import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Image } from "astro:assets";

export default function NavbarShadcn() {
  return (
    <nav className="flex items-center bg-white border-b-2 border-green-700 border-opacity-35 text-neutral-900">
      <div className="basis-full p-3 ">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="transition ease-in-out hover:-translate-y-0.5 hover:scale-110 hover:text-orange-600">
              <NavigationMenuLink href="#top">
                <img
                  src="/logo_text.png"
                  className="size-2/5 inline-block group-hover:hidden"
                  width="300"
                  height="300"
                  alt="waggles &whiskers"
                />
                <img
                  src="/logo_text_orange.png"
                  className="size-2/5 hidden group-hover:inline-block"
                  width="300"
                  height="300"
                  alt="waggles &whiskers"
                />
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="basis-full flex justify-center	">
        <img
          className="hidden m-1 pb-2 b-2 h-20 md:block size-2/6"
          src="/Waggles&Whiskers-no-text.png"
          alt="Waggles & Whiskers"
          width="150"
          height="150"
        />
      </div>
      <div className="basis-full flex justify-end p-3 font-cursive text-3xl font-bold tracking-wide">
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
