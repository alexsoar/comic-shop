import { ItemDescription } from '../components/ItemDescription/ItemDescription';
import { ItemProvider } from '../context/ItemContext';

function SingleProduct() {
  return (
    <div className="Container">
      <ItemProvider>
        <ItemDescription />
      </ItemProvider>
    </div>
  );
}

export { SingleProduct };
