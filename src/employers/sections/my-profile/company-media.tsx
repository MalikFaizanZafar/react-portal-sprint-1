import React, { FunctionComponent, useState, useRef } from 'react';
import { Form, Button, FormGroup, FormText, Container, Row, Col, InputGroup, InputGroupText, InputGroupAddon, Input, Label } from 'reactstrap';
import '../../employers.styles.css'

type CompanyMediaProp = {

}
const CompanyMedia: FunctionComponent<CompanyMediaProp> = ({ children }) => {

    const inputRef = useRef<HTMLInputElement>(null);
    const _handleClick = () => {
        if (inputRef && inputRef.current) {
            inputRef.current.click();
        }

    }
    return (
        <Container className="p-0">
            {children}
            <Row className="p-2 mt-3">
                <Col md={{ size: 4, offset: 2 }} sm={{ size: 11, offset: 1 }} >
                    <Label className="text-left">Logo</Label>
                    <Row>
                        <input style={{ display: 'none' }} ref={inputRef} type="file" name="image1" accept=".jpg,.jpeg,.png" id="img1" />
                        <Col className="text-center upload-div" >
                            <div className="upload" id="test" onClick={() => _handleClick()}>
                                <Row>
                                    <Col className="text-center">
                                        <i className="fa fa-upload upload-icon"></i>
                                    </Col>
                                </Row>
                        
                                Choose File
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <span className="image-des">
                        You can upload .jpeg,.jpg or .png file
                        (Max.size-180x190 pixels).
                        </span>
                  
                    </Row>
                </Col>
                <Col md={{ size: 4, offset: 1 }} sm={{ size: 11, offset: 1 }} >
                    <Label className="text-left">Picture</Label>
                    <Row>
                        <input style={{ display: 'none' }} ref={inputRef} type="file" name="image1" accept=".jpg,.jpeg,.png" id="img1" />
                        <Col className="text-center upload-div" >
                            <div className="upload" id="test" onClick={() => _handleClick()}>
                                <Row>
                                    <Col className="text-center">
                                        <i className="fa fa-upload upload-icon"></i>
                                    </Col>
                                </Row>
                                <span style={{background:'#f0f0f0',color:'black'}} >Choose File </span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <span className="image-des">
                        You can upload .jpeg,.jpg or .png file
                        (Max.size-180x190 pixels).
                        </span>
                  
                    </Row>
                </Col>

            </Row>
        </Container>
    )
}
export default CompanyMedia;