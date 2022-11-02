import React from "react"
import { ExpandArrowIconInterface } from "../types/CardInfoTypes"
import styled from "@emotion/styled"

const ExpandArrow = styled.svg<{ expanded: boolean }>(props => ({
    transform: `${props.expanded ? "rotate(180deg)" : "rotate(0deg)"}`,
    transition: "transform 0.5s",
    width: 21,
    height: 21,
    viewBox: "0 0 21 21",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}))

export const ExpandArrowIcon: React.FC<ExpandArrowIconInterface> = ({ expanded }) => (
        <ExpandArrow expanded={expanded}>
            <path d="M10.5 0C16.2855 0 21 4.704 21 10.5C21 16.2855 16.2855 21 10.5 21C4.704 21 0 16.2855 0 10.5C0 4.704 4.704 0 10.5 0ZM7.413 8.4315C7.1085 8.1165 6.6045 8.1165 6.3 8.421C5.985 8.736 5.985 9.2295 6.3 9.534L9.9435 13.1985C10.0905 13.3455 10.29 13.4295 10.5 13.4295C10.71 13.4295 10.9095 13.3455 11.0565 13.1985L14.7 9.534C14.8575 9.387 14.931 9.1875 14.931 8.988C14.931 8.778 14.8575 8.5785 14.7 8.421C14.385 8.1165 13.8915 8.1165 13.587 8.4315L10.5 11.529L7.413 8.4315Z" fill="#F4F4F4"/>
        </ExpandArrow>
)