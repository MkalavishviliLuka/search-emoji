import { PureComponent } from 'react';
import "./SearchBar.css"

export default class Searchbar extends PureComponent {
    inputText = (e) => {
        this.props.inputChange(e)
    }

    render() {
        return (
            <div className='search-input'>
                <input type="text" className="inputText" placeholder='Search Emoji' onChange={this.inputText} />
            </div>);
    }
}


