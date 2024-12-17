import Image from "next/image";
import Link from "next/link";

export default function Cart(){
    return(
        <div>
            <div className="flex overflow-hidden flex-col bg-white">
  <nav className="px-20 py-9 w-full bg-white max-md:px-5 max-md:max-w-full" aria-label="Main navigation">
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-[64%] max-md:ml-0 max-md:w-full">
        <div className="flex grow gap-5 justify-between self-stretch my-auto text-base font-medium text-black whitespace-nowrap max-md:mt-10 max-md:max-w-full">
          <Link href="/" className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Home</Link>
          <Link href="/shop" className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Shop</Link>
          <Link href="/about" className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">About</Link>
          <Link href="/contact" className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Contact</Link>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full">
      <Image 
  loading="lazy" 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5f562c388e1fb067e9f85c97eedaa4647b4ab1969e48747407f0a9db8aad717?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="Company Logo" 
  className="object-contain grow shrink-0 max-w-full aspect-[8.85] w-[247px] max-md:mt-10"
  width="247" 
  height="278"
/>    </div>
    </div>
  </nav>

  <div className="flex relative z-10 flex-col justify-center items-center px-20 py-20 -mt-1.5 w-full text-base text-black whitespace-nowrap min-h-[328px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
  <Image 
  loading="lazy" 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/994d2cee0a74a300e7e875a7aa49c05fe08e475e64b98c8cab43e2bf378568d3?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt=""
  className="object-cover absolute inset-0 size-full"
  width="500" 
  height="300"
/>
    <div className="flex relative flex-col mb-0 max-w-full w-[115px] max-md:mb-2.5">
    <Image 
  loading="lazy" 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ad7e9b8d0c3b729601df28f20044341e4696757b3f73851774de93c17033938?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="Shopping cart icon" 
  className="object-contain w-full aspect-[0.8] max-md:mr-0.5"
  width="300" 
  height="240"
/>
      <nav aria-label="Breadcrumb">
        <div className="flex gap-1.5">
          <Link href="/" className="grow font-medium hover:underline">Home</Link>
          <Image 
  loading="lazy" 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/db13939cabd153a09de09c25864d1f622bda5d116dbe6552d6605aca283c27a4?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="" 
  className="object-contain shrink-0 my-auto w-5 aspect-square"
  width="20" 
  height="20"
/>
          <span className="font-light">Cart</span>
        </div>
      </nav>
    </div>
  </div>

  <main className="z-10 px-20 py-16 -mt-1.5 w-full bg-white max-md:px-5 max-md:max-w-full">
    <div className="flex gap-5 max-md:flex-col">
      <section className="flex flex-col w-[68%] max-md:ml-0 max-md:w-full" aria-label="Shopping Cart Items">
        <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col justify-center items-center px-16 py-4 w-full text-base font-medium text-black whitespace-nowrap bg-yellow-50 max-md:px-5 max-md:max-w-full">
            <div className="flex flex-wrap gap-5 justify-between max-w-full w-[529px]">
              <div>Product</div>
              <div>Price</div>
              <div className="flex gap-9">
                <div>Quantity</div>
                <div>Subtotal</div>
              </div>
            </div>
          </div>
          <div className="mt-14 mr-6 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[35%] max-md:ml-0 max-md:w-full">
                <div className="flex grow gap-9 text-base text-neutral-400 max-md:mt-10">
                <Image 
  loading="lazy" 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/55e4d11ff7c044d670622e89fe3db3c3176ef5511542223e88e16d621389a635?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="Asgaard sofa product image" 
  className="object-contain shrink-0 max-w-full rounded-none aspect-square w-[106px]"
  width="106" 
  height="106"
/>
                  <div className="grow shrink my-auto w-[87px]">Asgaard sofa</div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[65%] max-md:ml-0 max-md:w-full">
                <div className="flex gap-10 self-stretch my-auto text-base text-black max-md:mt-10 max-md:max-w-full">
                  <div className="my-auto basis-auto text-neutral-400">Rs. 250,000.00</div>
                  <div className="px-3.5 py-1 whitespace-nowrap rounded-md border border-solid border-neutral-400" role="spinbutton" aria-label="Quantity" >1</div>
                  <div className="my-auto basis-auto">Rs. 250,000.00</div>
                  <button aria-label="Remove item" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  <Image 
  loading="lazy" 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/96554a9f86bd3fd8c39408fbbd8fa8ea76b10f4a501e0797d8eeff82580216d1?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="" 
  className="object-contain shrink-0 self-start w-7 aspect-square"
  width="28" 
  height="28"
/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full" aria-label="Cart Summary">
        <div className="flex flex-col px-20 pt-4 pb-20 mx-auto w-full bg-yellow-50 max-md:px-5 max-md:mt-10">
          <h2 className="self-center text-3xl font-semibold text-black">Cart Totals</h2>
          <div className="flex gap-5 justify-between mt-16 max-md:mt-10">
            <div className="flex flex-col self-start text-base font-medium text-black whitespace-nowrap">
              <div>Subtotal</div>
              <div className="self-start mt-8">Total</div>
            </div>
            <div className="flex flex-col">
              <div className="self-end text-base text-neutral-400">Rs. 250,000.00</div>
              <div className="mt-8 text-xl font-medium text-yellow-600">Rs. 250,000.00</div>
            </div>
          </div>
          <button className="px-14 py-4 mt-11 mr-2.5 ml-3 text-xl text-black rounded-2xl border border-black border-solid max-md:px-5 max-md:mt-10 max-md:ml-2.5 hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
            Check Out
          </button>
        </div>
      </section>
    </div>
  </main>

  <section className="px-20 py-24 w-full bg-red-50 max-md:px-5 max-md:max-w-full" aria-label="Shopping Benefits">
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

  <footer className="flex flex-col items-start px-20 pt-24 pb-10 w-full bg-white max-md:px-5 max-md:max-w-full">
    <div className="flex flex-wrap gap-10 w-full max-w-[1131px] max-md:max-w-full">
      <address className="grow shrink my-auto text-base text-neutral-400 w-[271px] not-italic">
        400 University Drive Suite 200 Coral Gables,<br/>FL 33134 USA
      </address>
      <nav className="flex flex-col items-start text-base font-medium text-black whitespace-nowrap" aria-label="Footer Links">
        <h4 className="text-neutral-400">Links</h4>
        <Link href="/" className="mt-14 hover:underline max-md:mt-10">Home</Link>
        <Link href="/shop" className="mt-12 hover:underline max-md:mt-10">Shop</Link>
        <Link href="/about" className="mt-12 hover:underline max-md:mt-10">About</Link>
        <Link href="/contact" className="self-stretch mt-11 hover:underline max-md:mt-10">Contact</Link>
      </nav>
      <div className="flex-auto self-start max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <nav className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full" aria-label="Help Links">
            <div className="flex flex-col grow items-start text-base font-medium text-black max-md:mt-10">
              <h4 className="text-neutral-400">Help</h4>
              <Link href="/payment" className="self-stretch mt-14 hover:underline max-md:mt-10">Payment Options</Link>
              <Link href="/returns" className="mt-12 hover:underline max-md:mt-10">Returns</Link>
              <Link href="/privacy" className="mt-11 hover:underline max-md:mt-10">Privacy Policies</Link>
            </div>
          </nav>
          <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full max-md:mt-10">
              <h4 className="self-start text-base font-medium text-neutral-400">Newsletter</h4>
              <form className="flex gap-3 mt-14 text-sm max-md:mt-10">
                <div className="flex flex-col text-neutral-400">
                  <label htmlFor="email" className="sr-only">Enter Your Email Address</label>
                  <input type="email" id="email" placeholder="Enter Your Email Address" className="bg-transparent border-b border-black" required/>
                </div>
                <button type="submit" className="font-medium text-black whitespace-nowrap hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="shrink-0 self-center mt-12 max-w-full h-px border border-solid border-zinc-300 w-[1240px] max-md:mt-10"></div>
    <p className="mt-9 text-base text-black">2022 Meubel House. All rights reverved</p>
  </footer>
</div>
        </div>


    );
}