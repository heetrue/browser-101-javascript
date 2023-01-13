const getToday = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.toLocaleString('en-US', { month: 'short' }).toUpperCase();
  const date = today.getDate();

  return { year, month, date };
};

const { year, month, date } = getToday();

const shoppingList = document.querySelector('.shopping-list');
const ul = document.querySelector('ul');
const header = document.createElement('header');
shoppingList.insertBefore(header, ul);

header.innerHTML = `
    <span>${date}</span>
    <span>${month}</span>
    <span>${year}</span>
`;
