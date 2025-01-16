import Item from "./Item";
import { THE_BASIC, GET_INVOLVED, COMMUNIY, LEGAL } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Item Links={THE_BASIC} title="THE BASICS" />
      <Item Links={GET_INVOLVED} title="GET INVOLVED" />
      <Item Links={COMMUNIY} title="COMMUNIY" />
      <Item Links={LEGAL} title="LEGAL" />
    </div>
  );
};

export default ItemsContainer;