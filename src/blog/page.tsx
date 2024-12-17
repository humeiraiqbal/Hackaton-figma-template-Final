import Link from "next/link";
import Image from "next/image";

export default function blog(){
    return(
      <div>
  <div className="flex relative z-10 flex-col justify-center items-center px-20 py-20 -mt-1.5 w-full text-base text-black whitespace-nowrap min-h-[328px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
  <Image 
  loading="lazy" 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/994d2cee0a74a300e7e875a7aa49c05fe08e475e64b98c8cab43e2bf378568d3?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="Hero background image" 
  className="object-cover absolute inset-0 size-full" 
  width="1920"  
  height="1080" 
/>
    <div className="flex relative flex-col mb-0 max-w-full w-[115px] max-md:mb-2.5">
    <Image 
  loading="lazy" 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a25832707a00a1cfc0900c87060899e75d14639a394bddb695d7b30e8c11da86?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="Blog section icon" 
  className="object-contain w-full aspect-[0.8]" 
  width="800"  
  height="640" 
/>
      <nav aria-label="Breadcrumb">
        <div className="flex gap-1.5">
          <Link href="#" className="grow font-medium hover:underline">Home</Link>
          <Image 
  loading="lazy" 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/db13939cabd153a09de09c25864d1f622bda5d116dbe6552d6605aca283c27a4?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="" 
  className="object-contain shrink-0 my-auto w-5 aspect-square" 
  width="20"  
  height="20"
/>
          <span className="font-light">Blog</span>
        </div>
      </nav>
    </div>
  </div>

  <main className="flex z-10 flex-col items-start px-20 pt-28 -mt-1.5 w-full bg-white max-md:px-5 max-md:pt-24 max-md:max-w-full">
    <div className="w-full max-w-[1202px] max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <article className="flex flex-col w-[73%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full text-base text-neutral-400 max-md:mt-10 max-md:max-w-full">
          <Image 
  loading="lazy" 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4afabaa3dd6fda83227fb086cb291079c2a734262400f70b0fb72d5dfbbc124a?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="Featured blog post image" 
  className="object-contain w-full rounded-xl aspect-[1.63] max-md:max-w-full" 
  width="640"  
  height="392"  
/>
            <div className="flex gap-9 self-start mt-4">
              <div className="flex gap-2 whitespace-nowrap">
              <Image 
  loading="lazy" 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/550af8fe8d3569c905bc89f8da97869dc119a36d1c9871800dfcae0b077f8161?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="" 
  className="object-contain shrink-0 my-auto w-5 aspect-square" 
  width="20"  
  height="20"  
/>
                <span>Admin</span>
              </div>
              <div className="flex gap-3">
              <Image 
  loading="lazy" 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/604e35a3f9cceed299ce23b9efa6bcc148621f7926d5573a2002cbc47c39a836?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="" 
  className="object-contain shrink-0 self-start w-5 aspect-square" 
  width="20" 
  height="20" 
/>
                <time dateTime="2022-10-14">14 Oct 2022</time>
              </div>
              <div className="flex gap-2 whitespace-nowrap">
              <Image 
  loading="lazy" 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c73485e3d4cf3769373a247701e810410718cea2390fae219421065734938dcb?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="" 
  className="object-contain shrink-0 w-6 aspect-square" 
  width="24" 
  height="24" 
/>
                <span>Wood</span>
              </div>
            </div>
          </div>
        </article>

        <aside className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col max-md:mt-10">
            <form className="flex flex-col justify-center items-end px-16 py-4 bg-white rounded-xl border border-solid border-neutral-400 max-md:pl-5" role="search">
              <label typeof="search" className="sr-only">Search</label>
              <input type="search" id="search" className="w-full p-2 border-none focus:outline-none" placeholder="Search blog posts"/>
              <button type="submit" aria-label="Search">
              <Image 
  loading="lazy" 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/56fd1f640dda4ae9d14a4fe62dd99ad59f54c2ae151d9b74d5632d15b45ec621?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="" 
  className="object-contain w-6 aspect-square" 
  width="24" 
  height="24"
/>
              </button>
            </form>

            <nav className="flex flex-col px-9 mt-11 w-full text-base whitespace-nowrap text-neutral-400 max-md:px-5 max-md:mt-10" aria-label="Categories">
              <h2 className="self-start text-2xl font-medium text-black">Categories</h2>
              <ul>
                <li className="flex gap-5 justify-between mt-8">
                  <Link href="#" className="hover:underline">Crafts</Link>
                  <span>2</span>
                </li>
                <li className="flex gap-5 justify-between mt-10">
                  <Link href="#" className="hover:underline">Design</Link>
                  <span>8</span>
                </li>
                <li className="flex gap-5 justify-between mt-10">
                  <Link href="#" className="hover:underline">Handmade</Link>
                  <span>7</span>
                </li>
                <li className="flex gap-5 justify-between mt-10">
                  <a href="#" className="hover:underline">Interior</a>
                  <span>1</span>
                </li>
                <li className="flex gap-5 justify-between mt-10">
                  <Link href="#" className="hover:underline">Wood</Link>
                  <span>6</span>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      </div>
    </div>

    <section className="self-center mt-4 w-full max-w-[1240px] max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[68%] max-md:ml-0 max-md:w-full">
          <article className="flex flex-col grow items-start text-black max-md:mt-8 max-md:max-w-full">
            <h1 className="text-3xl font-medium max-md:max-w-full">Going all-in with millennial design</h1>
            <p className="self-stretch mt-3 text-base leading-6 text-neutral-400 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices.
            </p>
            <Link href="#" className="mt-8 text-base hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Read more</Link>
            <div className="shrink-0 mt-3 h-px border border-black border-solid w-[77px]"></div>
          </article>
        </div>

        <aside className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
          <section className="flex flex-col items-start px-20 py-4 mx-auto w-full bg-white max-md:px-5 max-md:mt-8">
            <h2 className="text-2xl font-medium text-black">Recent Posts</h2>
            <ul className="w-full">
              <li className="flex gap-3 mt-7">
              <Image 
  loading="lazy" 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/668611e17e140f17dac0dffb5d00b221c0c8ced4e84fb89fcc8a2b4e994b1c12?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="Blog post thumbnail" 
  className="object-contain shrink-0 w-20 rounded-xl aspect-square" 
  width="80"  
  height="80" 
/>
                <div className="flex flex-col my-auto">
                  <Link href="#" className="text-sm text-black hover:underline">Going all-in with millennial design</Link>
                  <time dateTime="2022-08-03" className="self-start mt-1.5 text-xs text-neutral-400">03 Aug 2022</time>
                </div>
              </li>
             
            </ul>
          </section>
        </aside>
      </div>
    </section>

    <nav className="flex gap-5 justify-between self-center mt-14 max-w-full text-xl text-black whitespace-nowrap w-[392px] max-md:mt-10" aria-label="Pagination">
      <button className="px-7 bg-amber-100 rounded-xl h-[60px] w-[60px] max-md:px-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" aria-current="page">1</button>
      <button className="px-6 bg-yellow-50 rounded-xl h-[60px] w-[60px] max-md:px-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">2</button>
      <button className="px-6 bg-yellow-50 rounded-xl h-[60px] w-[60px] max-md:px-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">3</button>
      <button className="px-7 py-4 font-light bg-yellow-50 rounded-xl max-md:px-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Next</button>
    </nav>
  </main>

  <footer className="mt-20">
    <section className="px-20 py-24 w-full bg-red-50 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow max-md:mt-10">
            <h3 className="self-start text-3xl font-medium text-black">Free Delivery</h3>
            <p className="text-xl text-neutral-400">For all oders over $50, consectetur adipim scing elit.</p>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow max-md:mt-10">
            <h3 className="self-start text-3xl font-medium text-black">90 Days Return</h3>
            <p className="text-xl text-neutral-400">If goods have problems, consectetur adipim scing elit.</p>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow max-md:mt-10">
            <h3 className="self-start text-3xl font-medium text-black">Secure Payment</h3>
            <p className="text-xl text-neutral-400">100% secure payment, consectetur adipim scing elit.</p>
          </div>
        </div>
      </div>
    </section>

    <div className="flex flex-col items-start px-20 pt-24 pb-10 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 w-full max-w-[1131px] max-md:max-w-full">
        <address className="grow shrink my-auto text-base text-neutral-400 w-[271px] not-italic">
          400 University Drive Suite 200 Coral Gables,<br/>FL 33134 USA
        </address>

        <nav className="flex flex-col items-start text-base font-medium text-black whitespace-nowrap" aria-label="Footer Links">
          <h4 className="text-neutral-400">Links</h4>
          <ul>
            <li><Link href="#" className="mt-14 block hover:underline max-md:mt-10">Home</Link></li>
            <li><Link href="#" className="mt-12 block hover:underline max-md:mt-10">Shop</Link></li>
            <li><Link href="#" className="mt-12 block hover:underline max-md:mt-10">About</Link></li>
            <li><Link href="#" className="mt-11 block hover:underline max-md:mt-10">Contact</Link></li>
          </ul>
        </nav>

        <div className="flex-auto self-start max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <nav className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full" aria-label="Help Links">
              <h4 className="text-neutral-400 text-base font-medium">Help</h4>
              <ul>
                <li><Link href="#" className="mt-14 block hover:underline max-md:mt-10">Payment Options</Link></li>
                <li><Link href="#" className="mt-12 block hover:underline max-md:mt-10">Returns</Link></li>
                <li><Link href="#" className="mt-11 block hover:underline max-md:mt-10">Privacy Policies</Link></li>
              </ul>
            </nav>

            <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
              <form className="flex flex-col w-full max-md:mt-10">
                <label typeof="newsletter-email" className="text-base font-medium text-neutral-400">Newsletter</label>
                <div className="flex gap-3 mt-14 text-sm max-md:mt-10">
                  <div className="flex flex-col text-neutral-400">
                    <input type="email" id="newsletter-email" placeholder="Enter Your Email Address" className="border-b border-black focus:outline-none"/>
                  </div>
                  <button type="submit" className="font-medium text-black whitespace-nowrap border-b border-black">SUBSCRIBE</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <hr className="shrink-0 self-center mt-12 max-w-full h-px border border-solid border-zinc-300 w-[1240px] max-md:mt-10"/>
      
      <p className="mt-9 text-base text-black">&copy; 2022 Meubel House. All rights reverved</p>
    </div>
  </footer>
</div>
    
    );
}