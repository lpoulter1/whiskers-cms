import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
  import { HamburgerMenuIcon } from "@radix-ui/react-icons";

  
  
  
  export default function NavMenu() {
    return (
        <section className="flex gap-3 justify-between items-center bg-white p-2 border-b-2 ">
       
        

          <a href="#profile ">
          <img src="/logo_text.png" className="size-2/5 inline-block group-hover:hidden" width="300" height="300" alt="waggles &whiskers" />  </a>
          <NavigationMenu>
            <NavigationMenuList>
             <NavigationMenuItem>
             <NavigationMenuTrigger>
            <HamburgerMenuIcon className="size-8" />

         </NavigationMenuTrigger>

         <NavigationMenuContent className="flex flex-col gap-6 text-lg border-2 p-3"   >
        
        <NavigationMenuLink>  
             <a href="#services">Services & Prices</a></NavigationMenuLink>
        <NavigationMenuLink>
        <a href="#dog-gallery">Gallery</a>


        </NavigationMenuLink>
        <NavigationMenuLink>
        <a href="#testimonials">Testimonials</a>

        
        </NavigationMenuLink>
      </NavigationMenuContent>

    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>






</section>

    );


  };