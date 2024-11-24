import { useEffect } from "react";
import { useProducts, useUtils } from "../../Contexts";

export const Wishlist = () => {
  const { state } = useProducts();
  const { updateWishlist } = useUtils();

  useEffect(() => {
    updateWishlist();
  }, []);

  return (
    <>
      <h1 className="header-heading">
        Wishlist{" "}
        {state?.wishlist?.length ? `(${state?.wishlist?.length})` : null}
      </h1>
    </>
  );
};
