export const Emoji = ({ label = '', emoji }) => (
  <span className="emoji" role="img" aria-label={label} aria-hidden={!label}>
    {emoji}
  </span>
)
