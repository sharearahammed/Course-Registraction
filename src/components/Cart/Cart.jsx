import PropTypes from 'prop-types';

const Cart = ({cart}) => {
    const {Name} = cart;
    return (
        <div>
            <div className="">
            <ul className="mb-4">
                <li className="list-decimal">{Name}</li>            
            </ul>
        </div>
        
        </div>
        
        
    );
};
Cart.propTypes = {
    cart: PropTypes.object.isRequired
}


export default Cart;