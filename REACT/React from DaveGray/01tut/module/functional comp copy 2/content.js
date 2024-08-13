export const Content =()=>{
 const name="Harshit"
  const handleNameChange=()=>{
    const name=['bob','Kevin','Dave']
    const intt =Math.floor(Math.random()*3);
    return name[intt]}
    return (
        <div>
            <main>
                <p>
                    Hello{handleNameChange()}
                </p>
            </main>
        </div>
    )
}