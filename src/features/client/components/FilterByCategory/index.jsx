import { Flex } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import './index.scss';
import ScrollButton from '../ScrollButton';
import { useState } from 'react';
import CategoryButton from '../CategoryButton';
import { merchantTypes } from '../../../../constants';
import MerchantTypeButton from '../../MerchantTypeButton';

function FilterByCategory({
  restaurantItems,
  groceryItems,
  bgColor,
  categoryId,
  setSelectedCategory,
}) {
  const [currentMerchantType, setCurrentMerchantCategory] =
    useState('restaurants');

  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [activeMerchantTypeIndex, setActiveMerchantTypeIndex] = useState(0);

  const [smallerScreen] = useMediaQuery('(max-width: 1100px)');

  const handleMerchantTypeClick = (value, index) => {
    setSelectedCategory('All');
    setCurrentMerchantCategory(value);
    setActiveCategoryIndex(index);
    setActiveMerchantTypeIndex(0);
  };

  const handleCategoryTypeClick = (item, index) => {
    setActiveMerchantTypeIndex(index);
    setSelectedCategory(item);
  };

  return (
    <>
      <Flex justifyContent="center">
        {merchantTypes.map((category, index) => (
          <CategoryButton
            key={index}
            category={category.category}
            onClick={() => handleMerchantTypeClick(category.value, index)}
            buttonColor={index === activeCategoryIndex ? 'blue' : 'white'}
          />
        ))}
      </Flex>
      <Flex justifyContent="center">
        {categoryId && smallerScreen && (
          <ScrollButton
            rightButton={false}
            variant="ghost"
            id={`#${categoryId}`}
          />
        )}
        <Flex backgroundColor={bgColor} className="category" id={categoryId}>
          {currentMerchantType === 'restaurants'
            ? restaurantItems.map((item, index) => (
                <MerchantTypeButton
                  item={item}
                  key={item.name}
                  index={index}
                  activeMerchantTypeIndex={activeMerchantTypeIndex}
                  handleCategoryTypeClick={handleCategoryTypeClick}
                />
              ))
            : groceryItems.map((item, index) => (
                <MerchantTypeButton
                  item={item}
                  key={item.name}
                  index={index}
                  activeMerchantTypeIndex={activeMerchantTypeIndex}
                  handleCategoryTypeClick={handleCategoryTypeClick}
                />
              ))}
        </Flex>
        {categoryId && smallerScreen && (
          <ScrollButton
            rightButton={true}
            variant="ghost"
            id={`#${categoryId}`}
          />
        )}
      </Flex>
    </>
  );
}

export default FilterByCategory;
