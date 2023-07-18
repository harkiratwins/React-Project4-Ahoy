import React from "react";
import "../App.css";
import Form from "react-bootstrap/Form";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineInventory2 } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";
import { AiOutlineBorderBottom } from "react-icons/ai";
import { MdPersonOutline } from "react-icons/md";
import { BsCartPlus } from "react-icons/bs";
import { GrAddCircle } from "react-icons/gr";
import { IoIosSettings } from "react-icons/io";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { useState } from "react";
const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Layout style={{ backgroundColor: "white" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <div
          className="sidebar"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "80px",
          }}
        >
          <img
            src="https://rehntitimage.blob.core.windows.net/rehntitimage/BusinessLogo_4d836a7a-2ec5-43bd-8050-a9e0fbcbe928"
            alt=""
            style={{ width: "60px", marginLeft: 10 }}
          />
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </div>
        <div
          className="item"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                label: "Dashboard",
                key: "1",
                icon: <LuLayoutDashboard />,
              },
              {
                label: "Inventory",
                key: "2",
                icon: <MdOutlineInventory2 />,
              },
              {
                label: "Calender",
                key: "3",
                icon: <AiOutlineCalendar />,
              },
              {
                label: "Order",
                key: "4",
                icon: <AiOutlineBorderBottom />,
              },
              {
                label: "Customer",
                key: "5",
                icon: <MdPersonOutline />,
              },
            ]}
          />
        </div>
      </Sider>
      <Layout>
        <Header
          style={{
            // padding:0,
            height: "80px",
            width: "100%",
            background: colorBgContainer,
            position: "sticky",
            top: "0",
            zIndex: "2",
          }}
        >
          <div
            className="header"
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginLeft: "20px",
            }}
          >
            <div className="topHeader" style={{ marginTop: "20px" }}>
              <Form.Select
                aria-label="Default select example"
                style={{ width: "150px", border: "0px" }}
              >
                <option>St. Pete Beach</option>
                <option value="1">Carlsbad Shop</option>
                <option value="2">Encinitas Shop</option>
                <option value="3">Test location</option>
                <option value="3">Test location 2</option>
                <option value="3">New location </option>
                <option value="3">Stripe</option>
                <option value="3">Stripe 2</option>
              </Form.Select>
            </div>
            <div style={{ marginTop: "10px" }}>
              <ul>
                <li style={{}}>
                  {" "}
                  <Form.Control
                    type="search"
                    style={{ borderRadius: "30px" }}
                  />
                </li>
                <li style={{ marginLeft: "20px" }}>
                  {" "}
                  <BsCartPlus style={{ fontSize: "20px" }} />
                </li>
                <li style={{ marginLeft: "20px" }}>
                  <GrAddCircle style={{ fontSize: "20px" }} />{" "}
                </li>
                <li style={{ marginLeft: "20px" }}>
                  <IoIosSettings style={{ fontSize: "20px" }} />{" "}
                </li>
              </ul>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <div
            className="card"
            style={{
              width: "100%",
              height: "200px",
              boxShadow: "5px 5px 5px 5px #F5F5F5",
              border: "0px",
              borderRadius: "10px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "end" }}>
              <Form.Select
                aria-label="Default select example"
                style={{
                  width: "200px",
                  marginTop: "15px",
                  marginRight: "10px",
                }}
              >
                <option>Today</option>
                <option value="1">Current Week</option>
                <option value="2">Current Year</option>
                <option value="3">Last Month</option>
                <option value="3">Last Week</option>
                <option value="3">Last Year </option>
                <option value="3">Tomorrow</option>
                <option value="3">Yesterday</option>
              </Form.Select>
            </div>
            <div className="cards" style={{ marginTop: 10, display: "flex" }}>
              <Card
                style={{
                  width: "14rem",
                  borderRadius: "15px",
                  border: "1px solid rgba(0,0,0,0.15)",
                  boxShadow: "5px 5px 5px 5px #F5F5F5",
                  marginLeft: "10px",
                }}
              >
                <Card.Body>
                  <Row>
                    <Col md={4}>
                      <div
                        style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "50%",
                          backgroundColor: "#660f56",
                        }}
                      >
                        <p
                          style={{
                            lineHeight: "60px",
                            textAlign: "center",
                            color: "white",
                          }}
                        >
                          0.00%
                        </p>
                      </div>
                    </Col>
                    <Col md={8}>
                      <h5 style={{ color: "#999" }}>Rentals</h5>
                      <h6 style={{ color: "#660f56" }}>$0.00</h6>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              <Card
                style={{
                  width: "14rem",
                  borderRadius: "15px",
                  border: "1px solid rgba(0,0,0,0.15)",
                  boxShadow: "5px 5px 5px 5px #F5F5F5",
                  marginLeft: "10px",
                }}
              >
                <Card.Body>
                  <Row>
                    <Col md={4}>
                      <div
                        style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "50%",
                          backgroundColor: "rgb(40, 6, 89)",
                        }}
                      >
                        <p
                          style={{
                            lineHeight: "60px",
                            textAlign: "center",
                            color: "white",
                          }}
                        >
                          0.00%
                        </p>
                      </div>
                    </Col>
                    <Col md={8}>
                      <h5 style={{ color: "#999" }}>Retail</h5>
                      <h6 style={{ color: "rgb(40, 6, 89)" }}>$0.00</h6>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              <Card
                style={{
                  width: "14rem",
                  borderRadius: "15px",
                  border: "1px solid rgba(0,0,0,0.15)",
                  boxShadow: "5px 5px 5px 5px #F5F5F5",
                  marginLeft: "10px",
                }}
              >
                <Card.Body>
                  <Row>
                    <Col md={4}>
                      <div
                        style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "50%",
                          backgroundColor: "rgb(174, 45, 104)",
                        }}
                      >
                        <p
                          style={{
                            lineHeight: "60px",
                            textAlign: "center",
                            color: "white",
                          }}
                        >
                          0.00%
                        </p>
                      </div>
                    </Col>
                    <Col md={8}>
                      <h5 style={{ color: "#999" }}>Activities</h5>
                      <h6 style={{ color: "rgb(174, 45, 104)" }}>$0.00</h6>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              <Card
                style={{
                  width: "14rem",
                  borderRadius: "15px",
                  border: "1px solid rgba(0,0,0,0.15)",
                  boxShadow: "5px 5px 5px 5px #F5F5F5",
                  marginLeft: "10px",
                }}
              >
                <Card.Body>
                  <Row>
                    <Col md={4}>
                      <div
                        style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "50%",
                          backgroundColor: "#660f56",
                        }}
                      >
                        <p
                          style={{
                            lineHeight: "60px",
                            textAlign: "center",
                            color: "white",
                          }}
                        >
                          0.00%
                        </p>
                      </div>
                    </Col>
                    <Col md={8}>
                      <h5 style={{ color: "#999" }}>Passes</h5>
                      <h6 style={{ color: "#660f56" }}>$0.00</h6>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              <Card
                style={{
                  width: "14rem",
                  borderRadius: "15px",
                  border: "1px solid rgba(0,0,0,0.15)",
                  boxShadow: "5px 5px 5px 5px #F5F5F5",
                  marginLeft: "10px",
                }}
              >
                <Card.Body>
                  <Row>
                    <Col md={4}>
                      <div
                        style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "50%",
                          backgroundColor: "rgb(245, 73, 82)",
                        }}
                      >
                        <p
                          style={{
                            lineHeight: "60px",
                            textAlign: "center",
                            color: "white",
                          }}
                        >
                          0.00%
                        </p>
                      </div>
                    </Col>
                    <Col md={8}>
                      <h5 style={{ color: "#999" }}>Orders Total</h5>
                      <h6 style={{ color: "rgb(245, 73, 82)" }}>$0.00</h6>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </div>
          </div>

          
          <div
            className="card"
            style={{
              width: "100%",
              height: "200px",
              boxShadow: "5px 5px 5px 5px #F5F5F5",
              border: "0px",
              borderRadius: "10px",
              marginTop: "30px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "end" }}>
              <Form.Select
                aria-label="Default select example"
                style={{
                  width: "200px",
                  marginTop: "15px",
                  marginRight: "10px",
                }}
              >
                <option>Today</option>
                <option value="1">Current Week</option>
                <option value="2">Current Year</option>
                <option value="3">Last Month</option>
                <option value="3">Last Week</option>
                <option value="3">Last Year </option>
                <option value="3">Tomorrow</option>
                <option value="3">Yesterday</option>
              </Form.Select>
            </div>
            <div className="cards" style={{ marginTop: 10, display: "flex" }}>
              <Card
                style={{
                  width: "12rem",
                  borderRadius: "15px",
                  border: "1px solid rgba(0,0,0,0.15)",
                  boxShadow: "5px 5px 5px 5px #F5F5F5",
                  marginLeft: "10px",
                  backgroundColor: "#341671",
                  color: "white",
                }}
              >
                <Card.Body>
                  <h5>ITEMS OUT</h5>
                  <h3>48</h3>
                </Card.Body>
              </Card>
              <Card
                style={{
                  width: "12rem",
                  borderRadius: "15px",
                  border: "1px solid rgba(0,0,0,0.15)",
                  boxShadow: "5px 5px 5px 5px #F5F5F5",
                  marginLeft: "10px",
                  backgroundColor: "#422680",
                  color: "white",
                }}
              >
                <Card.Body>
                  <h5>ACTIVITIES</h5>
                  <h3>0</h3>
                </Card.Body>
              </Card>
              <Card
                style={{
                  width: "12rem",
                  borderRadius: "15px",
                  border: "1px solid rgba(0,0,0,0.15)",
                  boxShadow: "5px 5px 5px 5px #F5F5F5",
                  marginLeft: "10px",
                  backgroundColor: "#660f56",
                  color: "white",
                }}
              >
                <Card.Body>
                  <h5>UNPAID ORDERS</h5>
                  <h3>0</h3>
                </Card.Body>
              </Card>
              <Card
                style={{
                  width: "12rem",
                  borderRadius: "15px",
                  border: "1px solid rgba(0,0,0,0.15)",
                  boxShadow: "5px 5px 5px 5px #F5F5F5",
                  marginLeft: "10px",
                  backgroundColor: "#280659",
                  color: "white",
                }}
              >
                <Card.Body>
                  <h5>ITEMS SOLD</h5>
                  <h3>0</h3>
                </Card.Body>
              </Card>
              <Card
                style={{
                  width: "12rem",
                  borderRadius: "15px",
                  border: "1px solid rgba(0,0,0,0.15)",
                  boxShadow: "5px 5px 5px 5px #F5F5F5",
                  marginLeft: "10px",
                  backgroundColor: "#f54952",
                  color: "white",
                }}
              >
                <Card.Body>
                  <h5>ORDERS</h5>
                  <h3>0</h3>
                </Card.Body>
              </Card>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "100%",
              height: "300px",
              boxShadow: "5px 5px 5px 5px #F5F5F5",
              border: "0px",
              borderRadius: "10px",
              marginTop: "30px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Form.Select
                aria-label="Default select example"
                style={{
                  width: "250px",
                  marginTop: "15px",
                  marginLeft: "10px",
                }}
              >
                <option>Top 10 Rented Items</option>
                <option value="1">Top 10 Items</option>
                <option value="2">Top 10 Items</option>
                <option value="3">Top 10 Rented Items</option>
                <option value="3">Top 10 Retail Items</option>
              </Form.Select>
              <div className="mt-3" style={{ fontSize: "17px" }}>
                <Form.Check
                  inline
                  label="Current Month"
                  name="group1"
                  type="radio"
                />
                <Form.Check
                  inline
                  label="Current Week"
                  name="group1"
                  type="radio"
                />
                <Form.Check
                  inline
                  label="Last Month"
                  name="group1"
                  type="radio"
                />
                <Form.Check
                  inline
                  label="Last Week"
                  name="group1"
                  type="radio"
                />
                <Form.Check inline label="Today" name="group1" type="radio" />
              </div>
            </div>
            <div className="cards" style={{ marginTop: 10 }}>
              <Carousel
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={1000}
                infinite={true}
              >
                <div style={{ textAlign: "center", marginTop: "30px" }}>
                  <img
                    src="https://rehntitimage.blob.core.windows.net/rehntitimage/ProductImages_3b9776b8-bcf0-4d65-b13a-80caa2bb97de"
                    style={{ height: "180px", width: "180px" }}
                    alt=""
                  />
                  <p style={{ color: "red" }}>0 OUT | 14 IN</p>
                </div>
                <div style={{ textAlign: "center" }}>
                  <img
                    src="https://rehntitimage.blob.core.windows.net/rehntitimage/ProductImages_7259baf3-fc02-49cd-bc9e-d3b5fc91d9f5"
                    style={{ height: "180px", width: "180px" }}
                    alt=""
                  />
                  <p style={{ color: "red" }}>0 OUT | 14 IN</p>
                </div>
                <div style={{ textAlign: "center" }}>
                  <img
                    src="https://rehntitimage.blob.core.windows.net/rehntitimage/ProductDefaultImages_c44056a2-e378-4a61-bc2d-de007244e945"
                    style={{ height: "180px", width: "180px" }}
                    alt=""
                  />
                  <p style={{ color: "red" }}>0 OUT | 14 IN</p>
                </div>
                <div style={{ textAlign: "center" }}>
                  <img
                    src="https://rehntitimage.blob.core.windows.net/rehntitimage/ProductDefaultImages_5a58c4a4-d7ba-4a7c-9d3a-9773f3d253f1"
                    style={{ height: "180px", width: "180px" }}
                    alt=""
                  />
                  <p style={{ color: "red" }}>0 OUT | 14 IN</p>
                </div>
                <div style={{ textAlign: "center" }}>
                  <img
                    src="https://rehntitimage.blob.core.windows.net/rehntitimage/ProductImages_3b9776b8-bcf0-4d65-b13a-80caa2bb97de"
                    style={{ height: "180px", width: "180px" }}
                    alt=""
                  />
                  <p style={{ color: "red" }}>0 OUT | 14 IN</p>
                </div>
                <div style={{ textAlign: "center" }}>
                  <img
                    src="https://rehntitimage.blob.core.windows.net/rehntitimage/ProductImages_7259baf3-fc02-49cd-bc9e-d3b5fc91d9f5"
                    style={{ height: "180px", width: "180px" }}
                    alt=""
                  />
                </div>
                <div style={{ textAlign: "center" }}>
                  <img
                    src="https://rehntitimage.blob.core.windows.net/rehntitimage/ProductDefaultImages_c44056a2-e378-4a61-bc2d-de007244e945"
                    style={{ height: "180px", width: "180px" }}
                    alt=""
                  />
                  <p style={{ color: "red" }}>0 OUT | 14 IN</p>
                </div>
                <div style={{ textAlign: "center" }}>
                  <img
                    src="https://rehntitimage.blob.core.windows.net/rehntitimage/ProductDefaultImages_5a58c4a4-d7ba-4a7c-9d3a-9773f3d253f1"
                    style={{ height: "180px", width: "180px" }}
                    alt=""
                  />
                  <p style={{ color: "red" }}>0 OUT | 14 IN</p>
                </div>
              </Carousel>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
