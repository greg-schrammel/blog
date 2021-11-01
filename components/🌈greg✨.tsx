import Image from 'next/image'
import Link from 'next/link'

export const Greg = ({ size = 16, className = '' }) => {
  return (
    <Link href="/" passHref>
      <a className={`flex items-center ${className}`}>
        <Image src="/assets/Rainbow.png" width={size} height={size} />
        <h1 className="greg-text font-semibold text-accent1 mx-1">greg</h1>
        <Image src="/assets/Sparkles.png" width={size} height={size} />
        <style jsx>{`
          .greg-text {
            font-size: ${size}px;
            color: 'black';
          }
        `}</style>
      </a>
    </Link>
  )
}
