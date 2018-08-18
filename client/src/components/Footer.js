import React from 'react';
import { Row, Col } from 'react-bootstrap';

import '../styles/Footer.css';

const Footer = () => (
  <div className="footer">
    <p>Decorative Panel Nook! &copy; 2018 </p>

    <Row className="show-grid">
      <Col xs={6} md={4}>
      </Col>
      <Col xs={6} md={4}>

        <Col xs={6} md={4}>
          <a href="https://github.com/amalhassan007" target="blank">
            Amal
      </a>
        </Col>
        <Col xs={6} md={4}>
          <a href="https://github.com/mrhdigital" target="blank">
            Mirza
    </a>
        </Col>
        <Col xsHidden md={4}>
          <a href="https://github.com/pyang08" target="blank">
            Pamela
    </a>
        </Col>
      </Col>

      <Col xsHidden md={4}>

      </Col>
    </Row>

    <Row className="show-grid">
      <Col xs={6} md={4}>
      </Col>
      <Col xs={6} md={4}>

        <Col xs={6} md={4}>
          <a href="https://github.com/amalhassan007" target="blank">
            <img src="/img/github-circle.png" /></a>
        </Col>
        <Col xs={6} md={4}>
          <a href="https://github.com/mrhdigital" target="blank"><img src="/img/github-circle.png"></img></a>
        </Col>
        <Col xsHidden md={4}>
          <a href="https://github.com/pyang08" target="blank"><img src="/img/github-circle.png"></img></a>
        </Col>
      </Col>

      <Col xsHidden md={4}>
      </Col>
    </Row>
  </div>
);
//title = {<img src = '/img/logo2.png' alt="Logo"  style={{height: 64}}/>}

// const Footer = () => (
//   <div className="footer">
//     <div className="row">
//                 <div className="col-md-4">
//                     <span className="copyright">Copyright &copy; 2018 Decorative Panel Nook!</span>
//                 </div>
//                 <div className="col-md-4">
//                     <ul className="list-inline social-buttons">
//                         <li className="list-inline-item">
//                             <h6 className="text-center text-light">Amal</h6>
//                             <a href="https://github.com/amalhassan007" target="blank">
//                                 <i className="fab fa-github"></i>
//                             </a>
//                         </li>
//                         <li className="list-inline-item">
//                             <h6 className="text-center text-light">Mirza</h6>
//                             <a href="https://github.com/mrhdigital" target="blank">
//                                 <i className="fab fa-github"></i>
//                             </a>
//                         </li>
//                         <li className="list-inline-item">
//                             <h6 className="text-center text-light">Pam</h6>
//                             <a href="https://github.com/pyang08" target="blank">
//                                 <i className="fab fa-github"></i>
//                             </a>
//                         </li>
//                     </ul>
//                 </div>
//                 <div className="col-md-4">
//                     <ul className="list-inline quicklinks">
//                         <li className="list-inline-item">
//                             <a href="#">Privacy Policy</a>
//                         </li>
//                         <li className="list-inline-item">
//                             <a href="#">Terms of Use</a>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//   </div>
// );

export default Footer;
