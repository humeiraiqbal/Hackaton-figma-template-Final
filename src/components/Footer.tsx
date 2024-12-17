import Link from "next/link";

export default function Footer(){

return(
    <div>
<footer className="flex z-10 flex-col items-start px-20 pt-24 pb-10 mt-0 w-full bg-white max-md:px-5 max-md:max-w-full">
    <div className="flex flex-wrap gap-10 w-full max-w-[1131px] max-md:max-w-full">
      <address className="grow shrink my-auto text-base text-neutral-400 w-[271px] not-italic">
        400 University Drive Suite 200 Coral Gables,<br/>FL 33134 USA
      </address>
      <nav className="flex flex-col items-start text-base font-medium text-black whitespace-nowrap" aria-label="Footer links">
        <h3 className="text-neutral-400">Links</h3>
        <Link href="/" className="mt-14 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black max-md:mt-10">Home</Link>
        <Link href="/shop" className="mt-12 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black max-md:mt-10">Shop</Link>
        <Link href="/about" className="mt-12 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black max-md:mt-10">About</Link>
        <Link href="/contact" className="self-stretch mt-11 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black max-md:mt-10">Contact</Link>
      </nav>
      <div className="flex-auto self-start max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <nav className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full" aria-label="Help links">
            <div className="flex flex-col grow items-start text-base font-medium text-black max-md:mt-10">
              <h3 className="text-neutral-400">Help</h3>
              <Link href="/payment" className="self-stretch mt-14 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black max-md:mt-10">Payment Options</Link>
              <Link href="/returns" className="mt-12 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black max-md:mt-10">Returns</Link>
              <Link href="/privacy" className="mt-11 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black max-md:mt-10">Privacy Policies</Link>
            </div>
          </nav>
          <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full max-md:mt-10">
              <h3 className="self-start text-base font-medium text-neutral-400">Newsletter</h3>
              <form className="flex gap-3 mt-14 text-sm max-md:mt-10">
                <div className="flex flex-col text-neutral-400">
                  <label typeof="email" className="sr-only">Enter Your Email Address</label>
                  <input type="email" id="email" placeholder="Enter Your Email Address" className="border-b border-black focus:outline-none focus:ring-2 focus:ring-black" required/>
                </div>
                <button type="submit" className="font-medium text-black hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">SUBSCRIBE</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="shrink-0 self-center mt-12 max-w-full h-px border border-solid border-zinc-300 w-[1240px] max-md:mt-10"></div>
    <p className="mt-9 text-base text-black">2022 Meubel House. All rights reverved</p>
  </footer>
 
</div>);
 }