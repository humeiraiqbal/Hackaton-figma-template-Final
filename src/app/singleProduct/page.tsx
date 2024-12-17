import Image from "next/image";
import Link from "next/link";


export default function ProductDetail(){
    return(
        <main>


  <nav className="flex gap-3.5 items-center px-20 py-8 mt-3.5 text-base bg-white text-neutral-400 max-md:px-5" aria-label="Breadcrumb">
    <Link href="#" className="self-stretch my-auto hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Home</Link>
    <Image 
  loading="lazy" 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/db13939cabd153a09de09c25864d1f622bda5d116dbe6552d6605aca283c27a4?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="" 
  width="300" 
  height="300" 
/>
    <Link href="#" className="self-stretch my-auto hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Shop</Link>
    <Image 
  loading="lazy" 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/db13939cabd153a09de09c25864d1f622bda5d116dbe6552d6605aca283c27a4?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="" 
  width="300" 
  height="300" 
/>
    <div className="shrink-0 self-start w-0.5 border-2 border-solid border-neutral-400 h-[37px]"></div>
    <div className="grow shrink self-stretch my-auto text-black w-[1014px] max-md:max-w-full">Asgaard sofa</div>
  </nav>

  <main className="flex z-10 flex-col pt-9 w-full bg-white max-md:max-w-full">
    <div className="self-center w-full max-w-[1241px] max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
        <Image 
  loading="lazy" 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/219fef56aee837c5804022740f4acce9430e35e81f9e83bbbb7ec919233c0777?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="Asgaard sofa main product image"
  width="500" 
  height="500" 
/>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start w-full max-md:mt-10 max-md:max-w-full">
            <h1 className="text-5xl text-black">Asgaard sofa</h1>
            <div className="text-2xl font-medium text-neutral-400">Rs. 250,000.00</div>
            <div className="flex gap-5 items-center mt-2.5 text-sm text-neutral-400">
            <Image 
  loading="lazy" 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b716153d96851be343bafc84fd9ddc859debe5a756855bb838c029e08b61309?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="5 star rating"
  width="100" 
  height="20" 
/>
              <div className="shrink-0 self-stretch w-px border border-solid border-neutral-400 h-[30px]"></div>
              <div className="self-stretch my-auto basis-auto">5 Customer Review</div>
            </div>
            <p className="mt-3.5 text-sm text-black">Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
            
            <div role="group" aria-labelledby="size-label">
              <div id="size-label" className="mt-8 text-sm text-neutral-400">Size</div>
              <div className="flex gap-4 mt-3 text-sm text-black whitespace-nowrap">
                <button className="px-3 bg-amber-100 rounded-md h-[30px] w-[30px] focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">L</button>
                <button className="px-2 bg-red-50 rounded-md h-[30px] w-[30px] focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">XL</button>
                <button className="px-2 bg-red-50 rounded-md h-[30px] w-[30px] focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">XS</button>
              </div>
            </div>

            <div role="group" aria-labelledby="color-label">
              <div id="color-label" className="mt-5 text-sm text-neutral-400">Color</div>
              <div className="flex gap-4 mt-3">
                <button className="flex shrink-0 bg-violet-500 h-[30px] rounded-[50px] w-[30px] focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" aria-label="Purple color option"></button>
                <button className="flex shrink-0 bg-black h-[30px] rounded-[50px] w-[30px] focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" aria-label="Black color option"></button>
                <button className="flex shrink-0 bg-orange-300 h-[30px] rounded-[50px] w-[30px] focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" aria-label="Orange color option"></button>
              </div>
            </div>

            <div className="flex gap-5 mt-8 text-black">
              <div className="flex gap-9 px-4 py-5 text-base whitespace-nowrap bg-white rounded-xl border border-solid border-neutral-400">
                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" aria-label="Decrease quantity">-</button>
                <div className="font-medium" aria-label="Current quantity">1</div>
                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" aria-label="Increase quantity">+</button>
              </div>
              <button className="px-12 py-4 text-xl rounded-2xl border border-black border-solid max-md:px-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Add To Cart</button>
            </div>

            <hr className="shrink-0 self-stretch mt-14 w-full h-px border border-solid border-zinc-300 max-md:mt-10"/>

            <dl className="mt-10 text-base text-neutral-400">
              <div className="flex gap-5 justify-between max-w-full whitespace-nowrap w-[151px]">
                <dt>SKU</dt>
                <dd className="flex gap-3">
                  <span className="font-medium">:</span>
                  <span>SS001</span>
                </dd>
              </div>
              <div className="flex gap-3 mt-3 whitespace-nowrap">
                <dt>Category</dt>
                <dd className="flex gap-3">
                  <span className="font-medium">:</span>
                  <span>Sofas</span>
                </dd>
              </div>
              <div className="flex gap-5 justify-between mt-3 max-w-full w-[297px]">
                <dt>Tags</dt>
                <dd className="flex gap-3">
                  <span className="font-medium">:</span>
                  <span>Sofa, Chair, Home, Shop</span>
                </dd>
              </div>
            </dl>

            <div className="flex gap-5 justify-between mt-2.5 max-w-full w-[404px]">
              <div className="flex gap-6 items-start self-start">
                <span className="self-stretch text-base text-neutral-400">Share</span>
                <div className="flex gap-3 text-base font-medium whitespace-nowrap text-neutral-400">
                  <span>:</span>
                  <Link href="#" aria-label="Share on Facebook">
                  <Image 
  loading="lazy" 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/629ecd29b6e1311788a917840a9db258106da010af82b53429c41a97f3d3eefe?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt=""
  width="100" 
  height="100"
/>
                  </Link>
                </div>
                <div className="flex gap-6">
                  <Link href="#" aria-label="Share on LinkedIn">
                  <Image 
  loading="lazy" 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd126b32a2490780bdbd7b6c47a37596813a2a663890cc8d3c1c852a5ce81336?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt=""
  width="100" 
  height="100"
/>
                  </Link>
                  <Link href="#" aria-label="Share on Twitter">
                  <Image 
  loading="lazy" 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac547bd4addefd8e4b2d50f2cd114a8157c1961189437cc9486cc350f82eadb2?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="" 
  width="100" 
  height="100"
/>
                  </Link>
                </div>
              </div>
              <Link href="#" aria-label="Share on Instagram">
              <Image 
  loading="lazy" 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/74103b59eddb809277f2f1c90b0f6fe6242321fb50015d603656eb0cb18ded6d?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="" 
  width="25" 
  height="20.25"  
/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr className="mt-14 w-full border border-solid border-zinc-300 min-h-[1px] max-md:mt-10 max-md:max-w-full"/>
  </main>

  <section className="flex flex-col items-center pt-12 w-full bg-white max-md:max-w-full">
    <nav className="flex flex-wrap gap-10 max-w-full text-2xl text-neutral-400 w-[649px]" aria-label="Product details navigation">
      <button className="text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Description</button>
      <button className="grow shrink w-[242px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Additional Information</button>
      <button className="grow shrink w-[111px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Reviews [5]</button>
    </nav>

    <div className="mt-9 text-base text-neutral-400 max-md:max-w-full">
      <p>Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
      <p className="mt-9">Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
    </div>

    <div className="mt-11 w-full max-w-[1239px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
      <Image 
  loading="lazy" 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/69cbd14de16cbcd9c46f124f640bc4f76db0b620544f981ecfd2a7b24c99a151?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="Product detail image 1" 
  width="400" 
  height="300" 
/>
<Image 
  loading="lazy" 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6bde0de39d7b7cfe4a083430a912eecded21f029872d011e19531d8d88c8871?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="Product detail image 2" 
  width="500" 
  height="375" 
/>
      </div>
    </div>
    <hr className="self-stretch mt-16 w-full border border-solid border-zinc-300 min-h-[1px] max-md:mt-10 max-md:max-w-full"/>
  </section>

  <section className="flex flex-col items-center px-20 pt-14 pb-24 w-full bg-white max-md:px-5 max-md:pb-24 max-md:max-w-full">
    <h2 className="text-4xl font-medium text-black">Related Products</h2>
    <div className="mt-7 w-full max-w-[1240px] max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <article className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
          <Link href="#" className="flex flex-col items-start text-black max-md:mt-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <Image 
  loading="lazy" 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a077f92fd46575a030faeed1a15e49321589598aaa57f7b9d014c3e0e8de828?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="Trenton modular sofa_3"
  width="600" 
  height="450" 
/>
            <h3 className="mt-3.5 text-base">Trenton modular sofa_3</h3>
            <p className="mt-3 text-2xl font-medium">Rs. 25,000.00</p>
          </Link>
        </article>
        <article className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <Link href="#" className="flex flex-col grow items-start text-black max-md:mt-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <Image 
  loading="lazy" 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/43f827a16b96cc493c71f16a8bed4d9b4e559c569296a38f33bb59d52de4f4f0?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="Granite dining table with dining chair"
  width="600"  
  height="450" 
/>
            <h3 className="mt-3.5 text-base">Granite dining table with dining chair</h3>
            <p className="mt-3 text-2xl font-medium">Rs. 25,000.00</p>
          </Link>
        </article>
        <article className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <Link href="#" className="flex flex-col grow items-start text-black max-md:mt-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <Image 
  loading="lazy" 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0daa4f02e085c7e050b601337521698dafe24a3690868f748f74a979daac7c1d?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="Outdoor bar table and stool"
  width="600"  
  height="400" 
/>
            <h3 className="mt-3.5 text-base">Outdoor bar table and stool</h3>
            <p className="mt-3 text-2xl font-medium">Rs. 25,000.00</p>
          </Link>
        </article>
        <article className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <Link href="#" className="flex flex-col grow items-start text-black max-md:mt-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <Image 
  loading="lazy" 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/98ba6cbfeda5cc022b59ca90b6963265f350d88d9b5c0875da2c405d6d7e843c?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="Plain console with teak mirror"
  width="600" 
  height="400" 
/>
            <h3 className="mt-3.5 text-base">Plain console with teak mirror</h3>
            <p className="mt-3 text-2xl font-medium">Rs. 25,000.00</p>
          </Link>
        </article>
      </div>
    </div>
    <button className="mt-24 text-xl font-medium text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 max-md:mt-10">View More</button>
    <div className="shrink-0 mt-4 mb-0 h-0.5 border-2 border-black border-solid w-[115px] max-md:mb-2.5"></div>
  </section>

  <footer className="flex flex-col items-start px-20 pt-24 pb-10 w-full bg-white max-md:px-5 max-md:max-w-full">
    <div className="flex flex-wrap gap-10 w-full max-w-[1131px] max-md:max-w-full">
      <address className="grow shrink my-auto text-base text-neutral-400 w-[271px] not-italic">
        400 University Drive Suite 200 Coral Gables,<br/>FL 33134 USA
      </address>
      <nav className="flex flex-col items-start text-base font-medium text-black whitespace-nowrap" aria-label="Footer links">
        <h3 className="text-neutral-400">Links</h3>
        <Link href="#" className="mt-14 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 max-md:mt-10">Home</Link>
        <Link href="#" className="mt-12 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 max-md:mt-10">Shop</Link>
        <Link href="#" className="mt-12 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 max-md:mt-10">About</Link>
        <Link href="#" className="self-stretch mt-11 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 max-md:mt-10">Contact</Link>
      </nav>
      <div className="flex-auto self-start max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <nav className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full" aria-label="Help links">
            <h3 className="text-neutral-400 text-base font-medium">Help</h3>
            <Link href="#" className="self-stretch mt-14 text-base font-medium text-black hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 max-md:mt-10">Payment Options</Link>
            <Link href="#" className="mt-12 text-base font-medium text-black hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 max-md:mt-10">Returns</Link>
            <Link href="#" className="mt-11 text-base font-medium text-black hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 max-md:mt-10">Privacy Policies</Link>
          </nav>
          <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full max-md:mt-10">
              <h3 className="self-start text-base font-medium text-neutral-400">Newsletter</h3>
              <form className="flex gap-3 mt-14 text-sm max-md:mt-10">
                <div className="flex flex-col text-neutral-400">
                  <label typeof="email" className="sr-only">Enter Your Email Address</label>
                  <input type="email" id="email" placeholder="Enter Your Email Address" className="border-b border-black focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                </div>
                <button type="submit" className="font-medium text-black hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">SUBSCRIBE</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr className="shrink-0 self-center mt-12 max-w-full h-px border border-solid border-zinc-300 w-[1240px] max-md:mt-10"/>
    <p className="mt-9 text-base text-black">&copy; 2022 Meubel House. All rights reserved</p>
  </footer>

        </main>
    );
}