import React from 'react'
import styled from 'styled-components'

function FooterPage() {
  return (
    <FooterP><footer className="page-footer font-small  pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">

            <div className="col-md-6 mt-md-0 mt-4">
                <img src='https://upload.wikimedia.org/wikipedia/commons/a/a4/Yugoslavia_JAT_Logo.svg' width="100px"></img>
                <p></p>
                <h6 >Let’s stay connected</h6>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>


            <div className="col-md-2 mb-md-0 mb-2">
                <TextH5>Jat Corporate</TextH5>
                <ul className="list-unstyled">
                    <li><a href="#!">About Us</a></li>
                    <li><a href="#!">Our fleet</a></li>
                    <li><a href="#!">News</a></li>
                    <li><a href="#!">Careers</a></li>
                </ul>
            </div>
            <div className="col-md-2 mb-md-0 mb-2">
                <TextH5>CONTACT</TextH5>
                <ul className="list-unstyled">
                    <li><a href="#!">email: callcenter@airserbia.com</a></li>
                    <li><a href="#!">Link 2</a></li>
                    <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul>
                
            </div>
        </div>
    </div>
    
    <Copyright className="footer-copyright text-center py-3">© 2022 Copyright:
        <a href="https://jatserbia.com.com/"> www.jatserbia.com</a>
    </Copyright>

</footer>
</FooterP>
  )
}

const TextH5 = styled.div`

    color: #fff ;
    font-size: 20px ;

`

const Copyright = styled.div`



        margin: 70px ;
`

const FooterP = styled.div`
    
    width: 100%;
    height: 300px;
    background: linear-gradient( #02265c,#054c86);
    color: #fff;
`
export default FooterPage