import Highlight, { defaultProps } from 'prism-react-renderer'

export const Code = ({ codeString, language, ...props }) => {
  return (
    <Highlight {...defaultProps} code={codeString} language={'jsx'}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
