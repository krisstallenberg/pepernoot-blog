import React from "react"

const AnchorHeading = ({ children, level, id }) => {
    const copyAnchorLink = () => {
        const text = `#${id}`
        navigator.clipboard.writeText(text)
    }

    return (
        <h{level} id={id}>
            <a href={`#${id}`} onClick={copyAnchorLink}>
                {children}
            </a>
        </h{level}>
  )
}

export default AnchorHeading