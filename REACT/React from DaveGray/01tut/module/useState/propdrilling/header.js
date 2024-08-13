 export const Header =({title})=>{ //we can use props instead of {title} but the curly braces help in destructing the prop
    const headerStyle={
            backgroundColor:'blue',
            color:'#fff'
        }
    return (
        <header  style={headerStyle} >
            <h1>
               {title}
            </h1>
        </header>
    )
}
