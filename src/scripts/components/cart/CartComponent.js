
import FooterComponent from "../common/FooterComponent.js";

class CartComponent extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state = {}
    }
    render(){
        return (
            <div className="cart-box">
                <header>
                    <a href="#/index"><img src="http://s17.mogucdn.com/p1/160922/idid_ie3wmnbvgftginzsmizdambqgayde_35x52.png"/></a>
                    <span>购物车</span>
                    <a href="#/index">首页</a>
                </header>
                <section className="empty-cart">
                    <div className="empty-info">
                        <p>您的购物车还空着呢，</p>
                        <p>美物这么多，快去看看吧~~</p>
                    </div>
                    <p><a href="#/index">去逛逛</a></p>
                </section>
            </div>
            
        )
    }
}

CartComponent.defaultProps = {}
export default CartComponent; 