const IdCard = ({lastName, firstName, gender, height, birth, picture}) => {
    return (
        <>
        <img src={picture} alt="picture" style={{height: "100px"}}/>
        <p><strong>First name</strong>: {firstName}</p>
        <p><strong>Last name</strong>: {lastName}</p>
        <p><strong>Gender</strong>: {gender}</p>
        <p><strong>Height</strong>: {height}</p>
        <p><strong>Birth</strong>: {birth.toISOString().substr(0, 10)}</p>
        </>
    );
}
 
export default IdCard;