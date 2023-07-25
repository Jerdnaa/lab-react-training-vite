const Greetings = ({lang, children}) => {
    console.log(children)
    return (
        <>
            <p>{(lang === "de") ? (`Hallo ${children}`) : ((lang === "fr") ? (`Bonjour ${children}`) : null) }</p>
        </>
    );
}
 
export default Greetings;