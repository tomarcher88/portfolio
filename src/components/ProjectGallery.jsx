import ProjectTile from "./ProjectTile";
import projects from "../data/projects";

export default function ProjectGallery() {
  const projectTiles = projects.map(
    ({ title, codebase, description, url, image }) => {
      return(
      <ProjectTile
        title={title}
        codebase={codebase}
        description={description}
        url={url}
        image={image}
      />
      );
    }
  );
  return (
    <div className="grid">
      <h1>Projects</h1>
      {projectTiles}
    </div>
  );
}
