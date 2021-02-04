import React from 'react';
import PropTypes from 'prop-types';
import {
    getButtonColor,
    getVariant,
    getSize,
    mouseOut,
    mouseOver,
} from './cssUtils';

const propTypes = {
    variant: PropTypes.oneOf(["outline", "text", ""]),
    disabled: PropTypes.bool,
    disableShadow: PropTypes.bool,
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    color: PropTypes.oneOf(["default", "primary", "secondary", "danger", ""]),
    value: PropTypes.string.isRequired,
};

const defaultProps = {
    variant: "",
    disabled: false,
    disableShadow: false,
    startIcon: "",
    endIcon: "",
    size: "md",
    color: "",
};

const Button = ({
    variant,
    disabled,
    disableShadow,
    size,
    color,
    value,
}) => {

    const aggregatedCss = { ...getVariant(variant), ...getButtonColor(color), ...getSize(size) };
    if (disabled) {
        if (variant !== "text") {
            aggregatedCss.background = "#E0E0E0";
        }
        aggregatedCss.color = "#9E9E9E";
    }

    if (disableShadow) {
        aggregatedCss.boxShadow = "none";
    }

    return (
        <button
            id="my-button"
            disabled={disabled}
            style={{ ...aggregatedCss }}
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
        >
            {value}
        </button>
    );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;