import Image from "next/image";
import Link from "next/link";

export default function CheckOut(){
    return(
<div>
    <div className="flex flex-col text-black whitespace-nowrap">
  <div className="flex relative flex-col justify-center items-center px-20 py-28 w-full min-h-[316px] max-md:px-5 max-md:pt-24 max-md:max-w-full"
    role="banner"
    aria-label="Checkout section header"
  >
<Image
  loading="lazy"
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/994d2cee0a74a300e7e875a7aa49c05fe08e475e64b98c8cab43e2bf378568d3?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e"
  className="object-cover absolute inset-0 size-full"
  alt=""
  width="500" 
  height="300"
/>

    <div className="flex relative flex-col max-w-full w-[233px]">
      <h1 className="text-5xl font-medium max-md:text-4xl">Checkout</h1>
      <nav className="flex gap-1.5 self-end mr-5 text-base max-md:mr-2.5" aria-label="Breadcrumb">
        <Link href="/" className="grow font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Home</Link>
        <Image
  loading="lazy"
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/db13939cabd153a09de09c25864d1f622bda5d116dbe6552d6605aca283c27a4?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e"
  className="object-contain shrink-0 my-auto w-[100px] aspect-square"
  alt=""
  aria-hidden="true"
  width="100"
  height="100"
/>

        <span className="font-light" aria-current="page">Checkout</span>
      </nav>
    </div>
  </div>
</div>

<Image
  loading="lazy"
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a59fa660838cb0a777179646f27e9a177d77b43f59248e248b8ef0ca6af72dff?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e"
  alt="Checkout Banner"
  className="object-contain w-full aspect-[4.57] max-md:max-w-full"
  width="1000"
  height="219"
/>

  <main className="flex flex-col items-start px-20 pt-16 pb-32 w-full bg-white max-md:px-5 max-md:pb-24 max-md:max-w-full">
    <div className="self-end w-full max-w-[1168px] max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <form className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full" aria-labelledby="billing-details">
          <div className="flex flex-col mt-9 w-full max-md:mt-10 max-md:max-w-full">
            <h1 id="billing-details" className="self-start text-4xl font-semibold text-black">Billing details</h1>
            
            <div className="mt-9 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <label htmlFor="firstName" className="self-start text-base font-medium text-black">First Name</label>
                  <input type="text" id="firstName" required className="mt-6 h-[75px] w-[211px] bg-white rounded-xl border border-solid border-neutral-400 px-4 focus:outline-none focus:ring-2 focus:ring-black"/>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <label htmlFor="lastName" className="self-start text-base font-medium text-black">Last Name</label>
                  <input type="text" id="lastName" required className="mt-6 h-[75px] w-[211px] bg-white rounded-xl border border-solid border-neutral-400 px-4 focus:outline-none focus:ring-2 focus:ring-black"/>
                </div>
              </div>
            </div>

            <label htmlFor="companyName" className="self-start mt-9 text-base font-medium text-black">Company Name (Optional)</label>
            <input type="text" id="companyName" className="mt-6 h-[75px] w-[453px] max-w-full bg-white rounded-xl border border-solid border-neutral-400 px-4 focus:outline-none focus:ring-2 focus:ring-black"/>

            <label htmlFor="country" className="self-start mt-9 text-base font-medium text-black">Country / Region</label>
            <select id="country" required className="flex gap-5 justify-between px-7 py-7 mt-6 text-base bg-white rounded-xl border border-solid border-neutral-400 text-neutral-400 max-md:px-5 max-md:max-w-full focus:outline-none focus:ring-2 focus:ring-black">
              <option value="LK">Sri Lanka</option>
            </select>

            <label htmlFor="street" className="self-start mt-9 text-base font-medium text-black">Street address</label>
            <input type="text" id="street" required className="mt-6 h-[75px] w-[453px] max-w-full bg-white rounded-xl border border-solid border-neutral-400 px-4 focus:outline-none focus:ring-2 focus:ring-black"/>

            <label htmlFor="city" className="self-start mt-9 text-base font-medium text-black">Town / City</label>
            <input type="text" id="city" required className="mt-6 h-[75px] w-[453px] max-w-full bg-white rounded-xl border border-solid border-neutral-400 px-4 focus:outline-none focus:ring-2 focus:ring-black"/>

            <label htmlFor="province" className="self-start mt-9 text-base font-medium text-black">Province</label>
            <select id="province" required className="flex gap-5 justify-between px-7 py-7 mt-6 text-base bg-white rounded-xl border border-solid border-neutral-400 text-neutral-400 max-md:px-5 max-md:max-w-full focus:outline-none focus:ring-2 focus:ring-black">
              <option value="WP">Western Province</option>
            </select>

            <label htmlFor="zip" className="self-start mt-9 text-base font-medium text-black">ZIP code</label>
            <input type="text" id="zip" required pattern="[0-9]*" className="mt-6 h-[75px] w-[453px] max-w-full bg-white rounded-xl border border-solid border-neutral-400 px-4 focus:outline-none focus:ring-2 focus:ring-black"/>

            <label htmlFor="phone" className="self-start mt-9 text-base font-medium text-black">Phone</label>
            <input type="tel" id="phone" required className="mt-6 h-[75px] w-[453px] max-w-full bg-white rounded-xl border border-solid border-neutral-400 px-4 focus:outline-none focus:ring-2 focus:ring-black"/>

            <label htmlFor="email" className="self-start mt-9 text-base font-medium text-black">Email address</label>
            <input type="email" id="email" required className="mt-6 h-[75px] w-[453px] max-w-full bg-white rounded-xl border border-solid border-neutral-400 px-4 focus:outline-none focus:ring-2 focus:ring-black"/>

            <label htmlFor="additional" className="self-start mt-9 text-base font-medium text-black">Additional information</label>
            <textarea id="additional" className="px-7 py-7 mt-16 mb-0 max-w-full text-base bg-white rounded-xl border border-solid border-neutral-400 text-neutral-400 w-[453px] max-md:px-5 max-md:mt-10 max-md:mb-2.5 focus:outline-none focus:ring-2 focus:ring-black"></textarea>
          </div>
        </form>

        <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col px-10 py-20 mx-auto w-full bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col items-start w-full text-base font-medium text-black max-md:mt-10">
                    <h2 className="text-2xl">Product</h2>
                    <div className="flex gap-2.5 items-center self-stretch mt-3.5 text-xs">
                      <div className="grow self-stretch text-base text-neutral-400">Asgaard sofa</div>
                      <div className="self-stretch my-auto">X</div>
                      <div className="self-stretch my-auto">1</div>
                    </div>
                    <div className="mt-6">Subtotal</div>
                    <div className="mt-6">Total</div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow max-md:mt-10">
                    <div className="flex flex-col items-end pl-9 text-base font-light text-black max-md:pl-5">
                      <div className="text-2xl font-medium">Subtotal</div>
                      <div className="mt-3.5 max-md:mr-1">Rs. 250,000.00</div>
                      <div className="mt-6">Rs. 250,000.00</div>
                    </div>
                    <div className="mt-4 text-2xl font-bold text-yellow-600">Rs. 250,000.00</div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mt-8 border-zinc-300"/>
            
            <fieldset className="mt-6">
              <legend className="sr-only">Payment Method</legend>
              <div className="flex gap-4 items-center">
                <input type="radio" id="bank-transfer" name="payment" value="bank" checked className="w-3.5 h-3.5 bg-black rounded-full"/>
                <label htmlFor="bank-transfer" className="text-base text-black">Direct Bank Transfer</label>
              </div>
              <p className="mt-3 text-base font-light text-neutral-400">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
              
              <div className="flex gap-4 items-center mt-6">
                <input type="radio" id="card" name="payment" value="card" className="w-3.5 h-3.5 rounded-full border border-solid border-neutral-400"/>
                <label htmlFor="card" className="text-base font-medium text-neutral-400">Credit Card</label>
              </div>
              
              <div className="flex gap-4 items-center mt-3">
                <input type="radio" id="cod" name="payment" value="cod" className="w-3.5 h-3.5 rounded-full border border-solid border-neutral-400"/>
                <label htmlFor="cod" className="text-base font-medium text-neutral-400">Cash On Delivery</label>
              </div>
            </fieldset>

            <p className="mt-6 text-base font-light text-black">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="/privacy" className="font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">privacy policy</a>.</p>

            <button type="submit" className="self-center px-16 py-4 mt-10 max-w-full text-xl text-black rounded-2xl border border-black border-solid w-[318px] hover:bg-black hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">Place order</button>
          </div>
        </div>
      </div>
    </div>
  </main>

  <section className="px-20 py-24 w-full bg-red-50 max-md:px-5 max-md:max-w-full" aria-label="Features">
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
        <Link href="/" className="mt-14 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black max-md:mt-10">Home</Link>
        <Link href="/shop" className="mt-12 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black max-md:mt-10">Shop</Link>
        <Link href="/about" className="mt-12 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black max-md:mt-10">About</Link>
        <Link href="/contact" className="mt-11 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black max-md:mt-10">Contact</Link>
      </nav>

      <div className="flex-auto self-start max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <nav className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full" aria-label="Help Links">
            <h4 className="text-base font-medium text-neutral-400">Help</h4>
            <Link href="/payment" className="mt-14 text-base font-medium text-black hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black max-md:mt-10">Payment Options</Link>
            <Link href="/returns" className="mt-12 text-base font-medium text-black hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black max-md:mt-10">Returns</Link>
            <Link href="/privacy" className="mt-11 text-base font-medium text-black hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black max-md:mt-10">Privacy Policies</Link>
          </nav>

          <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
            <form className="flex flex-col w-full max-md:mt-10">
              <label htmlFor="newsletter-email" className="text-base font-medium text-neutral-400">Newsletter</label>
              <div className="flex gap-3 mt-14 text-sm max-md:mt-10">
                <div className="flex flex-col flex-grow">
                  <input type="email" id="newsletter-email" required placeholder="Enter Your Email Address" className="text-neutral-400 border-b border-black focus:outline-none focus:ring-2 focus:ring-black pb-1"/>
                </div>
                <button type="submit" className="font-medium text-black hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">SUBSCRIBE</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <hr className="self-center mt-12 max-w-full w-[1240px] border-zinc-300 max-md:mt-10"/>
    <p className="mt-9 text-base text-black">2022 Meubel House. All rights reverved</p>
  </footer>
</div>

);
}
