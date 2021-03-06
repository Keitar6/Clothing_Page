import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
// import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import {
	LogoContainer,
	NavigationContainer,
	NavLink,
	NavLinks,
} from "./navigation.styles.js";

import { UserContext } from "../../contexts/user.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartDropdownContext } from "../../contexts/cart-dropdown.context";

const Navigation = () => {
	const { currentUser, setCartDropdownIfActive } = useContext(UserContext);
	// console.log(currentUser);

	const { cartDropdownIfActive } = useContext(CartDropdownContext);

	const signOutHandler = async () => {
		await signOutUser();
		setCartDropdownIfActive(null);
	};

	return (
		<Fragment>
			<NavigationContainer>
				<LogoContainer to='/'>
					<CrownLogo />
				</LogoContainer>
				<NavLinks>
					<NavLink to='/shop'>SHOP</NavLink>

					{currentUser ? (
						<NavLink as='span' onClick={signOutHandler}>
							SIGN OUT
						</NavLink>
					) : (
						<NavLink to='/authentication'>SIGN IN</NavLink>
					)}
					<CartIcon />
				</NavLinks>
				{cartDropdownIfActive && <CartDropdown />}
			</NavigationContainer>
			<Outlet />
		</Fragment>
	);
};
export default Navigation;
