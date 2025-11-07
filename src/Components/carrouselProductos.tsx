import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Product } from "../Components/product";

export const CarrosselProdutos = () => {
  return (
    <Carousel
      className="h-full w-full rounded-2xl"
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 5,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 2,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 4,
        },
        quadHD: {
          breakpoint: {
            max: 3840,
            min: 1920,
          },
          items: 5,
        },
      }}
      autoPlay={true}
      autoPlaySpeed={2000}
      infinite={true}
    >
      <Product
        name="Nike One Swoosh"
        price="R$ 113,99 Pix"
        installment="ou R$ 119,99 sem juros"
      />
      <Product
        name="Nike One Swoosh"
        price="R$ 113,99 Pix"
        installment="ou R$ 119,99 sem juros"
      />
      <Product
        name="Nike One Swoosh"
        price="R$ 113,99 Pix"
        installment="ou R$ 119,99 sem juros"
      />
      <Product
        name="Nike One Swoosh"
        price="R$ 113,99 Pix"
        installment="ou R$ 119,99 sem juros"
      />
      <Product
        name="Nike One Swoosh"
        price="R$ 113,99 Pix"
        installment="ou R$ 119,99 sem juros"
      />
      <Product
        name="Nike One Swoosh"
        price="R$ 113,99 Pix"
        installment="ou R$ 119,99 sem juros"
      />

      <Product
        name="Nike One Swoosh"
        price="R$ 113,99 Pix"
        installment="ou R$ 119,99 sem juros"
      />

      <Product
        name="Nike One Swoosh"
        price="R$ 113,99 Pix"
        installment="ou R$ 119,99 sem juros"
      />

      <Product
        name="Nike One Swoosh"
        price="R$ 113,99 Pix"
        installment="ou R$ 119,99 sem juros"
      />

      <Product
        name="Nike One Swoosh"
        price="R$ 113,99 Pix"
        installment="ou R$ 119,99 sem juros"
      />
    </Carousel>
  );
};
