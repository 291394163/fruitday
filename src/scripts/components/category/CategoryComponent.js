

import CategoryListComponent from "./CategoryListComponent.js";
import FooterComponent from "../common/FooterComponent.js";


class CategoryComponent extends React.Component{ 
    constructor(props, context){ 
        super(props, context);
    }
    render(){
        return (
            <div className="category-box">
                <CategoryListComponent />
            </div>
        )
    }
}
CategoryComponent.defaultProps = {}

export default CategoryComponent