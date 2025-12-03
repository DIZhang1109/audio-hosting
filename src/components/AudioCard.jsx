import { FaPlay } from "react-icons/fa";

export default function AudioCard({ index, title, description, src }) {
  return (
    <div className="card mb-5">
      <div className="card-content">
        <div className="media">
          <div className="media-left"></div>

          <div className="media-content">
            <p className="title is-4">
              #{index + 1} {title}
            </p>
            <p className="subtitle is-6">{description}</p>
          </div>
        </div>

        <div style={{ marginTop: 10 }}>
          <audio controls src={src} style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
}
