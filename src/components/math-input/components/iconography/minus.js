/**
 * An autogenerated component that renders the MINUS iconograpy in SVG.
 *
 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
 */
const React = require('react');

const Minus = React.createClass({
    propTypes: {
        color: React.PropTypes.string.isRequired,
    },

    render() {
        return <svg width="48" height="48" viewBox="0 0 48 48">
            <g fill="none" fillRule="evenodd">
                <path fill="none" d="M0 0h48v48H0z" />
                <path d="M19 24h10" stroke={this.props.color} strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round" />
            </g>
        </svg>;
    },
});

module.exports = Minus;
