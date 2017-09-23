/**
 * An autogenerated component that renders the TIMES iconograpy in SVG.
 *
 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
 */
const React = require('react');

const Times = React.createClass({
    propTypes: {
        color: React.PropTypes.string.isRequired,
    },

    render() {
        return <svg width="48" height="48" viewBox="0 0 48 48">
            <g fill="none" fillRule="evenodd">
                <path fill="none" d="M0 0h48v48H0z" />
                <path fill="none" d="M12 12h24v24H12z" />
                <path d="M20 20l8 8M28 20l-8 8" stroke={this.props.color} strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round" />
            </g>
        </svg>;
    },
});

module.exports = Times;
