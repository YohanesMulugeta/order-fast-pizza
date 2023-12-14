import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';

function Menu() {
  const menu = useLoaderData();

  console.log(menu);

  return (
    <ul>
      {menu.map((piz) => (
        <MenuItem pizza={piz} key={piz.name} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();

  return menu;
}

export default Menu;
