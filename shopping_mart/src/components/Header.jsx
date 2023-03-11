
import { FaShoppingCart } from "react-icons/fa";
// import { AiFillDelete } from "react-icons/ai";
import { Badge,  Container, FormControl, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { CartState } from "../context/Context";
import "./style.css";

const Header = () => {
  const {
    state: { cart },
    
    productDispatch,
  } = CartState();

  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">Shopping Cart</Link>
        </Navbar.Brand>
        {useLocation().pathname.split("/")[1] !== "cart" && (
          <Navbar.Text className="search">
            <FormControl
              style={{ width: 500 }}
              type="search"
              placeholder="Search a product..."
              className="m-auto"
              aria-label="Search"
              onChange={(e) => {
                productDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value,
                });
              }}
            />
          </Navbar.Text>
        )}
        <Nav>
          {useLocation().pathname.split("/")[1] !== "cart" && (
            <Link to="/cart" className="cart-button">
              <FaShoppingCart color="white" fontSize="25px" />
              {cart.length > 0 && (
                <Badge className="cart-length">{cart.length}</Badge>
              )}
            </Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
