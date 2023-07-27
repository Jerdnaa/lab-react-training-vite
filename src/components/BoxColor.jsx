const BoxColor = ({r, g, b}) => {
    return (
        <>
            <h1>Box Color</h1>
            <div style={{height: "50px", width: "100px", backgroundColor: `rgb(${r},${g},${b})`}}></div>
        </>
    );
}
 
export default BoxColor;