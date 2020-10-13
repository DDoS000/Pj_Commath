import React from "react";
import { Card, CardBody, Row, Col } from "reactstrap";

class Basic_Computing extends React.Component {
    render() {
        return (
            <>
              <div className="content">
                <Row>
                  <Col md="12">
                    <Card>
                      {/* <CardHeader>Google Maps</CardHeader> */}
                      <CardBody>
                        <div
                          id="map"
                          className="map"
                          style={{ position: "relative", overflow: "hidden" }}
                        >
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </div>
            </>
          );
    }
}

export default Basic_Computing;