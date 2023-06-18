import "./../Assessts/Style.css";
import logo from '../Images/Logos/image4.png'
function Footer() {
    return (

        <div className="footer">
            <section>
                <hr />
                <h3>ABOUT</h3>
                <ul>
                    <li><a href="">OUR STORE</a></li>
                    <li><a href="">WHATS NEW</a></li>
                    <li><a href="">REVIEWS</a></li>
                    <li><a href="">PARTNERSHIPS</a></li>
                </ul>
            </section>


            <section>
                <hr />
                <h3>QUERIES</h3>
                <ul>
                    <li><a href="">PAYEMENT OPTION</a></li>
                    <li><a href="">TRACK ORDER</a></li>
                    <li><a href="">TERMS & CONDITIONS</a></li>
                    <li><a href="">RETURN & EXCHANGE POLICY</a></li>
                    <li><a href="">FAQS</a></li>
                </ul>
            </section>
            <section>
                <hr />
                <ul>
                    <li>
                        <label><b>Email:</b><a href="">customercare@i.com.pk</a></label>
                    </li>
                    <br />
                    <li><label><b>WhatsApp Chat:</b><a href=""></a>+92-35-172-000</label></li>
                    <br />
                    <li><label><b>Call: UAN </b><a href="">042-000-021</a></label></li>
                    <br />
                    <label><b>CUSTOMER SERVICE TIMING</b>
                    </label>
                </ul>
            </section>




        </div>


    )
}
export default Footer;