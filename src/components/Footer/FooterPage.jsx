import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button';
import { BsFacebook , BsInstagram, BsPinterest, BsLinkedin} from "react-icons/bs";
import Form from 'react-bootstrap/Form';
function FooterPage() {
  return (
    <FooterP><footer className="page-footer  pt-4">
    <div className="container-fluid text-center ">
        <div className="row">
            <div className="col-md-5 mt-md-0 mt-4">
                <img src='https://upload.wikimedia.org/wikipedia/commons/a/a4/Yugoslavia_JAT_Logo.svg' width="100px"></img>
                <TextH4>Let’s stay connected</TextH4>
                <SocialIcon>
                    <Icon>   <BsFacebook/> </Icon>
                    <Icon>   <BsInstagram/> </Icon>
                    <Icon>   <BsPinterest/> </Icon>
                    <Icon>    <BsLinkedin/> </Icon>
                </SocialIcon>
            </div>
            <div className="col-md-2 mt-md-0 mt-0">
                <TextH4>Sign up for our newsletter</TextH4>
                    <Form>
                        <Form.Group>
                          <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Button variant="primary"  size="sm" type="submit">
                         Submit
                         </Button>
                     </Form>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-2 mb-md-0 mb-2">
                <TextH5>Jat Corporate</TextH5>
                <ul className="list-unstyled">
                    <li><a href="#!"><TextH>About Us</TextH></a></li>
                    <li><a href="#!"><TextH>Our fleet</TextH></a></li>
                    <li><a href="#!"><TextH>News</TextH></a></li>
                    <li><a href="#!"><TextH>Careers</TextH></a></li>
                </ul>
            </div>
            <div className="col-md-2 mb-md-0 mb-2">
                <TextH5>CONTACT</TextH5>
                <ul className="list-unstyled">
                <TextH>
                    <li><a href="#!"><TextH>email: callcenter@airserbia.com</TextH></a></li>
                    <li><a href="#!"><TextH>Link 2</TextH></a></li>
                    <li><a href="#!"><TextH>Link 3</TextH></a></li>
                    <li><a href="#!"><TextH>Link 4</TextH></a></li>
                </TextH>
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

const TextH = styled.div`
    color: #fff ;
`

const Icon = styled.div`
    width: 150px ;
    :hover
    {
        color: #235feb;
       
    }
`
const SocialIcon = styled.div`
    display: flex ;
    width: 150px ;
   
    margin:0 auto ;
`

const TextH4 = styled.div`
    padding: 10px ;
    color: #fff ;
    font-size: 15px ;
`
const TextH5 = styled.div`
    padding: 5px ;
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