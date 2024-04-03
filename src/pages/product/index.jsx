import DetailsCard from "../../components/product/DetailsCard";
import ProductCard from "../../components/product/ProductCard";
import ProductHeader from "../../components/product/ProductHeader";
import UserInfo from "../../components/common/UserInfo";
import VideoCard from "../../components/product/VideoCard";
import MapCard from "../../components/product/MapCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProduct } from "../../reducers/actions";

const Product = () => {
  const dispatch = useDispatch();
  const { hasUserSection } = useSelector(
    (state) => state.configuration.configuration
  );
  const product = useSelector((state) => state.product.product);
  const productError = useSelector((state) => state.product.error);
  const productStatus = useSelector((state) => state.product.status);

  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProduct());
    }
  }, [productStatus, dispatch]);
  return (
    <>
      {productStatus === "loading" ? (
        <div className="w-full h-screen flex items-center justify-center">
          Loading The Product...
        </div>
      ) : productStatus === "succeeded" ? (
        <div className="flex flex-col space-y-5 mb-5">
          <ProductHeader product={product} />

          <div className="grid grid-cols-1 lg:grid-cols-3 w-full border-[1px] border-[#E5E7EB] bg-white">
            <div className="col-span-2">
              <ProductCard
                name={product.name}
                img={product.picture}
                type={product.type.name}
                description={product.description}
              />
            </div>
            <div className="flex flex-col">
              {hasUserSection && (
                <UserInfo
                  company_name={product.company.name}
                  company_logo={product.company.logo}
                  user_name={`${product.user.firstName} ${product.user.lastName}`}
                  user_picture={product.user.profilePicture}
                />
              )}
              <MapCard
                lat={product.company.address.latitude}
                lng={product.company.address.longitude}
              />
            </div>
          </div>

          <VideoCard url={product.video} />

          <DetailsCard
            categories={product.categories}
            businessModels={product.businessModels}
            trl={product.trl.name}
            investmentEffort={product.investmentEffort}
          />
        </div>
      ) : (
        <div className="w-full h-screen flex items-center justify-center">
          {productError}
        </div>
      )}
    </>
  );
};

export default Product;
