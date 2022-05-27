import { Link } from "react-router-dom";

const Table = () => {

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Student</th>
                        <th>address</th>
                        <th>Branch</th>
                        <th>Fees</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>shahzad Ali</td>
                        <td>shahzad@ngs.com</td>
                        <td>Ali</td>
                        <td>NGS School lahore</td>
                        <td>liberty</td>
                        <td>10000</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>zuhaib Ali</td>
                        <td>zuhaib@ngs.com</td>
                        <td>Hadi</td>
                        <td>NGS School lahore</td>
                        <td>liberty</td>
                        <td>10000</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>shahzad Ali</td>
                        <td>shahzad@ngs.com</td>
                        <td>Ali</td>
                        <td>NGS School lahore</td>
                        <td>liberty</td>
                        <td>10000</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>zuhaib Ali</td>
                        <td>zuhaib@ngs.com</td>
                        <td>Hadi</td>
                        <td>NGS School lahore</td>
                        <td>liberty</td>
                        <td>10000</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>shahzad Ali</td>
                        <td>shahzad@ngs.com</td>
                        <td>Ali</td>
                        <td>NGS School lahore</td>
                        <td>liberty</td>
                        <td>10000</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>zuhaib Ali</td>
                        <td>zuhaib@ngs.com</td>
                        <td>Hadi</td>
                        <td>NGS School lahore</td>
                        <td>liberty</td>
                        <td>10000</td>
                    </tr>
                </tbody>
            </table>
           

            <ul class="pagination">
                <li class="prev disabled"><Link to="/">Previous</Link></li>
                <li class="active"><Link to="/">1</Link></li>
                <li class=""><Link to="/">2</Link></li>
                <li class=""><Link to="/">3</Link></li>
                <li class=""><Link to="/">4</Link></li>
                <li class=""><Link to="/">5</Link></li>
                <li class=""><Link to="/">6</Link></li>
                <li class="next"><Link to="/">Next</Link></li>
            </ul>
        </>
    );
}
export default Table;

