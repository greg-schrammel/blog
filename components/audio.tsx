import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import { FaPlay, FaPause } from 'react-icons/fa'

export const Audio = ({ src }) => (
  <>
    <AudioPlayer
      src={src}
      layout="horizontal-reverse"
      showJumpControls={false}
      customVolumeControls={[]}
      customAdditionalControls={[]}
      customProgressBarSection={[
        RHAP_UI.PROGRESS_BAR,
        RHAP_UI.CURRENT_TIME,
        <div>/</div>,
        RHAP_UI.DURATION,
      ]}
      customIcons={{
        play: <FaPlay color="black" size="1.25rem" />,
        pause: <FaPause color="black" size="1.25rem" />,
      }}
      style={{}}
    />
    <style jsx global>{`
      .rhap_container {
        background-color: #f3f3f3;
        border: none;
        border-radius: 0.8rem;
        box-shadow: none;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        padding-left: 1rem;
        padding-right: 1rem;
      }
      .rhap_horizontal-reverse {
        flex-direction: row-reverse;
      }
      .rhap_controls-section {
        flex: none;
      }
      .rhap_progress-indicator {
        background: white;
      }
      .rhap_progress-filled {
        background-color: #000000;
      }
    `}</style>
  </>
)
