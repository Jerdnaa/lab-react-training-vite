const Random = ({min, max}) => {
    return (
        <>
            <h1>Random</h1>
            <p>{Math.floor(Math.random() * (max - min + 1) + 1)}</p>
        </>
    );
}
 
export default Random;