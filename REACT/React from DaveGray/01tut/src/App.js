import Header from './header';
import SearchItem from './SearchItem';
import AddItem from './additem';
import Content from './content';
import Footer from './footer';
import { useEffect, useState } from 'react';
import apiRequest from './apiRequest'


function App() {
  const API_URL='http://localhost:3002/item'
  const [items, setItems] = useState([])
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')
  const [fetchError,setFetchError]=useState(null)
  const [isLoading,setIsLoading]=useState(true);
useEffect(()=>{
  const fetchItems= async ()=>{
 try{
  const response=await fetch(API_URL)
  if(!response.ok) throw Error('did not receive error')
  const listItems=await response.json()
  setItems(listItems)
 }catch(err){
  console.log(err)
 }finally{
  setIsLoading(false);
 }
  }
 setTimeout(()=>{
  (async()=>await fetchItems())()
   },2000)
},[])

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('shoppinglist', JSON.stringify(newItems));
  }

  const addItem = async(item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);

    const PostOptins={
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(myNewItem)
    }
    const result=await apiRequest(API_URL,PostOptins)
    if(result)setFetchError(result)
  }

  const handleCheck = async(id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setAndSaveItems(listItems);
    const myItem=listItems.filter((item)=>item.id===id)
    const UpdateOptions={
      method: 'PATCH',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringfy({checked:myItem[0].checked})
    
    }
const reqUrl=`${API_URL}/${id}`;
const result=await apiRequest(reqUrl,UpdateOptions)
if(result) setFetchError(result)
  }

  const handleDelete = async(id) => {
    const listItems = items.filter((item) => item.id !== id);
        const myItem=listItems.filter((item)=>item.id===id)
    setAndSaveItems(listItems);
     const DeleteOptions={
      method: 'DELETE',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringfy({checked:myItem[0].checked})
    
    }
const reqUrl=`${API_URL}/${id}`;
const result=await apiRequest(reqUrl,DeleteOptions)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  }

  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <main>
        {isLoading && <p>Loading Items</p>}
       
      <Content
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
     />
     </main>
      <Footer length={items.length} />
    </div>
  );
}

export default App;