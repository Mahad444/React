
const Institute = (props) => {
    return (  
        <table>
            <tr>
            <td>{props.id}</td>
            <td>{props.firstname}</td>
            <td>{props.lastname}</td>
            <td>{props.email}</td>
            <td>{props.course}</td>
            </tr>
        </table>
    );
}
 
export default Institute;