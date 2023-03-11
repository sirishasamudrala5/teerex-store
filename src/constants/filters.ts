import {maxQuantity} from "./common"

export const filters = [
    {
        id: 'type',
        name: 'Type',
        options: [
          { value: 'Basic', label: 'Basic', checked: false },
          { value: 'Polo', label: 'Polo', checked: false },
          { value: 'Hoodie', label: 'Hoodie', checked: false },
        ],
      },{
    id: 'color',
    name: 'Color',
    options: [
      { value: 'White', label: 'White', checked: false },
      { value: 'Beige', label: 'Beige', checked: false },
      { value: 'Blue', label: 'Blue', checked: false },
      { value: 'Brown', label: 'Brown', checked: false },
      { value: 'Green', label: 'Green', checked: false },
      { value: 'Purple', label: 'Purple', checked: false },
      { value: 'Black', label: 'Black', checked: false },
      { value: 'Red', label: 'Red', checked: false },
      { value: 'Grey', label: 'Grey', checked: false },
    ],
  },
  {
    id: 'gender',
    name: 'Gender',
    options: [
      { value: 'Men', label: 'Men', checked: false },
      { value: 'Women', label: 'Women', checked: false },
    ],
  },
  {
    id: 'price-range',
    name: 'Price Range',
    options: [
      { value: '<200', label: '<200', checked: false },
      { value: '201-450', label: '201-450', checked: false },
      { value: '>450', label: '>450', checked: false },
    ],
  },
  
] 

export const priceMap = {
  '<200' : {
    start : 0,
    end: 200
  },
  '201-450' : {
    start : 201,
    end: 450
  },
  '>450' : {
    start : 450,
    end: maxQuantity
  },
}

