import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import UserInfo from '../../components/common/UserInfo';
import DetailsSection from '../../components/editproduct/DetailsSection';
import EditHeader from '../../components/editproduct/EditHeader';
import EditProductCard from '../../components/editproduct/EditProductCard';
import VideoSection from '../../components/editproduct/VideoSection';

const EditProduct = () => {
  const { hasUserSection } = useSelector((state) => state.configuration.configuration);
  const location = useLocation();
  const product = location.state.product;

  return (
    <div className="flex flex-col space-y-5 mb-5">
      <EditHeader />

      <div className="grid grid-cols-1 lg:grid-cols-3 w-full border-[1px] border-[#E5E7EB] bg-white">
        <div className="col-span-2">
          <EditProductCard
            name={product.name}
            img={product.picture}
            type={product.type.name}
            description={product.description}
          />
        </div>
        {hasUserSection && (
          <UserInfo
            company_name={product.company.name}
            company_logo={product.company.logo}
            user_name={`${product.user.firstName} ${product.user.lastName}`}
            user_picture={product.user.profilePicture}
            address={product.company.address}
          />
        )}
      </div>

      <VideoSection />

      <DetailsSection
        categories={product.categories}
        businessModels={product.businessModels}
        trl={product.trl.name}
        investmentEffort={product.investmentEffort}
      />
    </div>
  );
};

export default EditProduct;
