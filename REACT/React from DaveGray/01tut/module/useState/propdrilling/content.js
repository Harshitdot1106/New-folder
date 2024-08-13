import { ItemList } from './itemlist';
export const Content =({items,handleCheck,handleDelete})=>{

    return ( 
    <main>
          {items.length > 0 ? (
     <ItemList 
     items={items}
    handleCheck={handleCheck}
    handleDelete={handleDelete}
          />
          ) : (
          <li>No items found</li>
        )}
            </main>
  );
};
