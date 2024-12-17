
import Link from "next/link";
export default function NavigationBar() {
  return(

    <div className="flex flex-col">
  <nav className="px-20 py-9 w-full bg-amber-100 max-md:px-5 max-md:max-w-full" aria-label="Main navigation">
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-[64%] max-md:ml-0 max-md:w-full">
        <div className="flex grow gap-5 justify-between self-stretch my-auto text-base font-medium text-black whitespace-nowrap max-md:mt-10 max-md:max-w-full" role="menubar">
          <Link href="/" className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500" role="menuitem">Home</Link>
          <Link href="/shop" className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500" role="menuitem">Shop</Link>
          <Link href="/about" className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500" role="menuitem">About</Link>
          <Link href="/contact" className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500" role="menuitem">Contact</Link>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fcffb35dbc9faa0bad78c86778598d525fab36eb1f3e61123c7105e0b5fd2f8?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e"
          alt="Company logo"
          className="object-contain grow shrink-0 max-w-full aspect-[8.85] w-[247px] max-md:mt-10"
        />
      </div>
    </div>
  </nav>
</div>
  
    
  );
}

 


