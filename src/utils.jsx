export const formatPrice = (number) => {
   return(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR' }).format(number/100));
}

export const getValues = (data, type) => {
   let temp= data.map((item)=>item[type]);
   return ['all', ...new Set(temp)];
}