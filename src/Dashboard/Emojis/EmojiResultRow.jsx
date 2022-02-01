import React, { PureComponent } from 'react';

export default class EmojiResultRow extends PureComponent {
    render() {
        const { title, symbol } = this.props
        return (
            <div className='emoji-holder copy-it' data-clipboard-text={symbol}>
                <span className="symbol">{symbol}</span>
                <span className="title">{title}</span>
                <span className="copy">Click to copy</span>
            </div>
        );
    }
}
