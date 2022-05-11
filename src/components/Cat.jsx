export const Cat = ({ tagProp }) => {
    const url = `https://cataas.com/cat/${tagProp}?height=300`
    return (
        <>
        <img className="borderedpicture3" src={url} alt="Random Cat Pic"/>
        </>

    )
};