import { NavBarMobile } from "../Components/navBarMobile";
import { NavBar } from "../Components/navBar";
import { Button } from "../Components/button";
import Footer from "../Components/footer";
import { Mail } from "lucide-react";

// 1. IMPORTE A IMAGEM NECESSÁRIA
import p1Image from "../assets/p1.avif"; 

export const Cart = () => {
  return (
    <body className="bg-priDark/95 min-h-screen 2xl:container">
      <header className="relative flex justify-center">
        <NavBarMobile />
        <NavBar />
      </header>
      <div className="item-start flex flex-col justify-start p-4">
        <h1 className="text-secondary text-3xl font-semibold lg:text-4xl">
          Order #13432
        </h1>
        <p className="text-secondary text-base font-medium">
          21st Mart 2021 at 10:34 PM
        </p>
      </div>

      <div className="jusitfy-center flex w-full flex-col items-stretch gap-15 p-4 md:gap-4 lg:gap-4 xl:flex-row">
        <div className="flex w-full flex-col items-start justify-start gap-15 md:gap-4 lg:gap-4">
          <div className="bg-priDark flex w-full flex-col items-start justify-start rounded-2xl p-4 md:p-8">
            <p className="text-secondary text-lg font-semibold md:text-xl">
              Seu carrinho
            </p>
            <div className="mt-4 flex w-full flex-col items-start justify-start gap-8 md:mt-6 md:flex-row md:items-center">
              <div className="w-full pb-4 md:w-40 md:pb-8">
                <img
                  className="hidden w-full rounded-2xl md:block"
                  // 2. Use a variável importada 'p1Image'
                  src={p1Image}
                  alt="dress"
                />
                <img
                  className="h-50 w-full rounded-2xl object-cover md:hidden"
                  // 2. Use a variável importada 'p1Image'
                  src={p1Image}
                  alt="dress"
                />
              </div>
              <div className="border-secondary flex w-full flex-col items-start justify-between border-b pb-8 md:flex-row md:space-y-0">
                <div className="flex w-full flex-col items-start justify-start space-y-8">
                  <h3 className="text-secondary text-xl font-semibold xl:text-2xl">
                    Premium Quaility Dress
                  </h3>
                  <div className="flex flex-col items-start justify-start space-y-2">
                    <p className="one text-secondary text-sm">
                      <span className="">Style: </span> Italic Minimal Design
                    </p>
                    <p className="one text-secondary text-sm">
                      <span className="">Size: </span> Small
                    </p>
                    <p className="one text-secondary text-sm">
                      <span className="">Color: </span> Light Blue
                    </p>
                  </div>
                </div>
                <div className="flex w-full items-start justify-between space-x-8">
                  <p className="text-secondary text-base xl:text-lg">
                    $36.00{" "}
                    <span className="text-tertiary line-through"> $45.00</span>
                  </p>
                  <p className="text-secondary text-base xl:text-lg">01</p>
                  <p className="text-secondary text-base font-semibold xl:text-lg">
                    $36.00
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex w-full flex-col items-start justify-start gap-8 md:flex-row md:items-center lg:mt-10">
              <div className="w-full md:w-40">
                <img
                  className="hidden w-full rounded-2xl md:block"
                  // 2. Use a variável importada 'p1Image'
                  src={p1Image}
                  alt="dress"
                />
                <img
                  className="h-50 w-full rounded-2xl object-cover md:hidden"
                  // 2. Use a variável importada 'p1Image'
                  src={p1Image}
                  alt="dress"
                />
              </div>
              <div className="flex w-full flex-col items-start justify-between md:flex-row md:space-y-0">
                <div className="flex w-full flex-col items-start justify-start space-y-8">
                  <h3 className="text-secondary text-xl font-semibold xl:text-2xl">
                    High Quaility Italic Dress
                  </h3>
                  <div className="flex flex-col items-start justify-start space-y-2">
                    <p className="one text-secondary text-sm">
                      <span className="">Style: </span> Italic Minimal Design
                    </p>
                    <p className="one text-secondary text-sm">
                      <span className="">Size: </span> Small
                    </p>
                    <p className="one text-secondary text-sm">
                      <span className="">Color: </span> Light Blue
                    </p>
                  </div>
                </div>
                <div className="flex w-full items-start justify-between space-x-8">
                  <p className="text-secondary text-base xl:text-lg">
                    $20.00{" "}
                    <span className="text-tertiary line-through"> $30.00</span>
                  </p>
                  <p className="text-secondary text-base xl:text-lg">01</p>
                  <p className="text-secondary text-base font-semibold xl:text-lg">
                    $20.00
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-stretch justify-center gap-4 md:flex-row">
            <div className="bg-priDark flex h-full w-full flex-col space-y-6 rounded-2xl p-4 md:p-8">
              <h3 className="text-secondary text-xl font-semibold">
                Summary
              </h3>
              <div className="border-secondary flex w-full flex-col items-center justify-center border-b pb-4">
                <div className="flex w-full justify-between">
                  <p className="text-secondary text-base">Subtotal</p>
                  <p className="text-secondary text-base">$56.00</p>
                </div>
                <div className="flex w-full items-center justify-between">
                  <p className="text-secondary text-base">
                    Discount{" "}
                    <span className="bg-tertiary text-xs font-medium p-1">
                      STUDENT
                    </span>
                  </p>
                  <p className="text-secondary text-base">-$28.00 (50%)</p>
                </div>
                <div className="flex w-full items-center justify-between">
                  <p className="text-secondary text-base">Shipping</p>
                  <p className="text-secondary text-base">$8.00</p>
                </div>
              </div>
              <div className="flex w-full items-center justify-between">
                <p className="text-secondary text-base font-semibold">
                  Total
                </p>
                <p className="text-secondary text-base font-semibold">
                  $36.00
                </p>
              </div>
            </div>
            <div className="bg-priDark flex w-full flex-col justify-center space-y-6 rounded-2xl p-4 md:p-8">
              <h3 className="text-secondary text-xl font-semibold">
                Shipping
              </h3>
              <div className="flex w-full items-start justify-between">
                <div className="flex items-center justify-center space-x-4">
                  <div className="h-8 w-8">
                    <img
                      className="h-full w-full"
                      alt="logo"
                      src="https://i.ibb.co/L8KSdNQ/image-3.png"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <p className="text-secondary text-lg font-semibold">
                      DPD Delivery
                      <br />
                      <span className="font-normal">
                        Delivery with 24 Hours
                      </span>
                    </p>
                  </div>
                </div>
                <p className="text-secondary text-lg font-semibold">
                  $8.00
                </p>
              </div>
              <div className="flex w-full items-center justify-center">
                <Button> View Carrier Details</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-priDark flex w-full flex-col items-center justify-between rounded-2xl md:items-start p-4 md:p-8 xl:w-96">
          <h3 className="text-secondary text-xl font-semibold">
            Customer
          </h3>
          <div className="flex h-full w-full flex-col items-stretch justify-start gap-8 md:flex-row xl:flex-col">
            <div className="flex shrink-0 flex-col items-start justify-start">
              <div className="border-secondary flex w-full items-center justify-center space-x-4 border-b py-8 md:justify-start">
                <img
                  src="https://i.ibb.co/5TSg7f6/Rectangle-18.png"
                  alt="avatar"
                />
                <div className="flex flex-col items-start justify-start space-y-2">
                  <p className="text-secondary text-left text-base font-semibold">
                    David Kent
                  </p>
                  <p className="text-secondary text-sm">
                    10 Previous Orders
                  </p>
                </div>
              </div>

              <div className="border-secondary text-secondary flex w-full items-center justify-center space-x-4 border-b py-4 md:justify-start">
                <Mail className="h-10 text-primary"/>
                <p className="cursor-pointer text-sm">david89@gmail.com</p>
              </div>
            </div>
            <div className="mt-6 flex w-full flex-col items-stretch justify-between gap-10 md:mt-0 xl:h-full">
              <div className="flex flex-col items-center justify-center md:flex-row md:items-start md:justify-start md:space-y-0 md:space-x-6 lg:space-x-8 xl:flex-col xl:space-y-12 xl:space-x-0">
                <div className="flex flex-col items-center justify-center md:items-start md:justify-start xl:mt-8">
                  <p className="text-secondary text-center text-base font-semibold md:text-left">
                    Shipping Address
                  </p>
                  <p className="text-secondary w-48 text-center text-sm md:text-left lg:w-full xl:w-48">
                    180 North King Street, Northhampton MA 1060
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
                  <p className="text-secondary text-center text-base font-semibold md:text-left">
                    Billing Address
                  </p>
                  <p className="text-secondary w-48 text-center text-sm md:text-left lg:w-full xl:w-48">
                    180 North King Street, Northhampton MA 1060
                  </p>
                </div>
              </div>
              <div className="flex w-full items-center justify-center md:items-start md:justify-start">
                <Button> Editar</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </body>
  );
};