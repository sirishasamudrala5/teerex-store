import { IFilterBy, IProduct } from "../constants/IProps";
import { priceMap} from "../constants/filters"

export const getProducts = async() => {
  const res = await fetch(`https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json`)
  .then((response) =>  response.json())
  .catch((err) => {
   console.log(err.message);
  });
  return res
}

export const filterProducts = (products: IProduct[], filters:IFilterBy) => {
  var conditions:any[] = []

  // Dynamically build the list of conditions
  if(filters.outOfStock === false) {
    conditions.push(function(item) {
      return item.quantity > 0;
  });
  };

  if(filters.type.length > 0) {
      conditions.push(function(item) {
          return filters.type.includes(item.type);
      });
  };

  if(filters.color.length > 0) {
    conditions.push(function(item) {
      return filters.color.includes(item.color);
    });
  };

  if(filters.gender.length > 0) {
    conditions.push(function(item) {
        return filters.gender.includes(item.gender);
    });
  };

  if(filters.price.length > 0) {
    let pricerange:any[] = []
    for (var i=0; i < filters.price.length; i++) {
      let range = priceMap[filters.price[i]]
      pricerange.push(range.start)
      pricerange.push(range.end)
    } 
    conditions.push(function(item) {
        return item.price <= Math.max(...pricerange) &&  item.price >= Math.min(...pricerange);
    });
  };
  if(filters.searchStr.length > 0) {
    conditions = []
    conditions.push(function(item) {
        return item.name === filters.searchStr;
    });
};

  const productsList = products.filter((ele) => conditions.every(c => c(ele)))

  return productsList;
}